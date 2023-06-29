import React, { useEffect } from 'react'
import { Dialog, DialogTitle, Typography } from '@material-ui/core';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { MdClose } from 'react-icons/md'
import { useMediaQuery, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import '../styles/globals.css'
import { connect, useDispatch } from "react-redux";
import { fetchPredictRequest, addPredictRequest } from '../redux/predict/actions';
import Select from 'react-select';
import moment from 'moment';
import 'moment/locale/fr';

const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        padding: "16px",
        position: 'absolute',
        // top: theme.spacing(0),
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        backgroundColor: '#02090F',
        borderRadius: '8px',
        boxShadow: '0 0 12px 0 rgb(255, 254, 254)',
        overflowY: 'auto',
        scrollBehavior: 'smooth'
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

const ModalPronostics = (
    {
        titleModal,
        predictionType,
        predicts
    }
) => {

    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [date, setDate] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [championship, setChampionship] = React.useState('');
    const [match, setMatch] = React.useState('');
    const [prediction, setPrediction] = React.useState('');
    const [odds, setOdds] = React.useState('');
    const [predictType, setPredictType] = React.useState('');


    const dispatch = useDispatch();
    useEffect(() => {
        const dateFrom= moment().format('YYYY-MM-DD');
        dispatch(fetchPredictRequest({dateFrom}));
        console.log('Dispatched fetchPredictRequest');
    }, [dispatch]);

    const teamOptionLabel = (game) => (
        <>
            <div className='team-fixture'>
                <div className='team'>
                    <img src={game.fixture.homeTeam.logo} alt={game.fixture.homeTeam.team_name} className='logo-team'/> 
                    <span className='team-name'>{game.fixture.homeTeam.team_name}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='team-vs'> vs </span>
                    <span className='team-info'>{moment(game.fixture.event_date).format('L')}</span>
                    <span className='team-info'>{game.fixture.venue}</span>
                </div>

                <div className='team'>
                    <img src={game.fixture.awayTeam.logo} alt={game.fixture.awayTeam.team_name} className='logo-team'/>
                    <span className='team-name'>{game.fixture.awayTeam.team_name}</span>
                </div>
            </div>
        </>
    );

    const dateOptionLabel = (date) => (
        <div className='team'>
            <span className='team-name'>{moment(date).format('L')}</span>
        </div>
    );

    const countryOptionLabel = (country) => (
        <div className='team-align'>
            <img src={country.flag} alt={country.name} height={20} width={20} style={{ marginRight: '12px' }} />
            <span className='team-name'>{country.name}</span>
        </div>

    );

    const championshipOptionLabel = (country) => (
        <div className='team-align'>
            <img src={country.logo} alt={country.name} height={20} width={20} style={{ marginRight: '12px' }} />
            <span className='team-name'>{country.name}</span>
        </div>

    );

    const predictionOptionLabel = (prediction) => (
        <div className='team'>
            <span className='team-name'>{prediction}</span>
        </div>
    );


    const handleSubmit = (e) => {
        e.preventDefault();
      
        dispatch(addPredictRequest());
      };

    const uniqueDates = [];
    if (predicts && predicts.length > 0) {
    predicts.forEach((game) => {
        if (!uniqueDates.includes(game.date)) {
            uniqueDates.push(game.date);
        }
    });
}

    const uniqueCountry = [];
    if (predicts && predicts.length > 0) {
    predicts.forEach((game) => {
        const { name, flag } = game.country;
        if (!uniqueCountry.some((country) => country.name === name)) {
            uniqueCountry.push({ name, flag });
        }
    });
}

    const uniqueChampionat = [];
    if (predicts && predicts.length > 0) {
    predicts.forEach((game) => {
        const { name, logo } = game.championship;
        if (!uniqueChampionat.some((championship) => championship.name === name)) {
            uniqueChampionat.push({ name, logo });
        }
    });
}
    const uniquePrediction = [];
    if (predicts && predicts.length > 0) {
    predicts.forEach((game) => {
        if (!uniquePrediction.includes(game.prediction)) {
            uniquePrediction.push(game.prediction);
        }
    });
}
    const classes = useStyles();

    return (
        <div>
            {isMatch ? (
                <Button onClick={handleOpen} variant="contained" color='secondary' sx={{ textTransform: 'none', fontSize: '10px' }}>Ajouter</Button>
            ) : (
                <Button onClick={handleOpen} variant="contained" color='secondary' sx={{ textTransform: 'none' }}>Ajouter</Button>
            )}

            <Dialog open={open} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
                <DialogTitle className={classes.dialogTitle}>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" style={{ flexGrow: 1, color: '#fff' }}>
                            {titleModal}
                        </Typography>
                        <Box className='close-modal'>
                            <Button onClick={handleClose} className='close-button'><MdClose /></Button>
                        </Box>

                    </div>
                </DialogTitle>
                <Box style={{ overflowY: 'auto' }}>

                    <form onSubmit={handleSubmit}>
                        <div className='prono-line-one'>
                            <div className='rencontre'>
                                <label htmlFor="date" className='rencontre-title'>Date</label>
                                <Select
                                    id="date"
                                    value={date}
                                    onChange={(selectedOption) => setDate(selectedOption)}
                                    options={uniqueDates.map((date) => ({
                                        value: date,
                                        label: dateOptionLabel(date)
                                    }))}

                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            textAlign: 'center',
                                            background: 'transparent',  
                                            border: '1px solid #2d80c8',     
                                        }),
                                        menu: (provided) => ({
                                            ...provided,
                                            maxHeight: '200px',  
                                            overflowY: 'auto'  
                                        })
                                    }}
                                    className="custom-select__placeholder "
                                    placeholder="-- Sélectionnez une date --"
                                />
                            </div>

                            <div className='rencontre'>
                                <label htmlFor="country" className='rencontre-title'>Pays</label>
                                <Select
                                    id="country"
                                    value={country}
                                    onChange={(selectedOption) => setCountry(selectedOption)}
                                    options={uniqueCountry.sort().map((country) => ({
                                        value: country,
                                        label: countryOptionLabel(country)
                                    }))}

                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            textAlign: 'center',
                                            background: 'transparent',  
                                            border: '1px solid #2d80c8',     
                                        }),
                                        menu: (provided) => ({
                                            ...provided,
                                            maxHeight: '200px',  
                                            overflowY: 'auto' 
                                        })
                                    }}
                                    className="custom-select__placeholder "
                                    placeholder="-- Sélectionnez un pays --"
                                />
                            </div>

                            <div className='rencontre'>
                                <label htmlFor="championship" className='rencontre-title'>Championnat</label>
                                <Select
                                    id="championship"
                                    value={championship}
                                    onChange={(selectedOption) => setChampionship(selectedOption)}
                                    options={uniqueChampionat.sort().map((championship) => ({
                                        value: championship,
                                        label: championshipOptionLabel(championship)
                                    }))}

                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            textAlign: 'center',
                                            background: 'transparent',  
                                            border: '1px solid #2d80c8',     
                                        }),
                                        menu: (provided) => ({
                                            ...provided,
                                            maxHeight: '200px',  
                                            overflowY: 'auto'  
                                        })
                                    }}
                                    className="custom-select__placeholder "
                                    placeholder="-- Sélectionnez un championat --"
                                />
                            </div>
                        </div>

                        <div className='rencontre'>
                            <label htmlFor="match" className='rencontre-title'>Rencontre</label>
                            <Select
                                id="fixture"
                                value={match}
                                onChange={(selectedOption) => setMatch(selectedOption)}
                                options={
                                    predicts && predicts.length > 0 ? predicts.map((game) => ({
                                      value: game.fixture,
                                      label: teamOptionLabel(game)
                                    })) : []
                                  }

                                styles={{
                                    control: (provided) => ({
                                        ...provided,
                                        textAlign: 'center',
                                        background: 'transparent',  
                                        border: '1px solid #2d80c8',     
                                    }),
                                    menu: (provided) => ({
                                        ...provided,
                                        maxHeight: '200px',  
                                        overflowY: 'auto'  
                                    })
                                }}
                                className="custom-select__placeholder "
                                placeholder="-- Sélectionnez une rencontre --"
                            />
                        </div>

                        <div className='prono-line-one'>
                            <div className='rencontre'>
                                <label htmlFor="prediction" className='rencontre-title'>Prédiction</label>
                                <Select
                                    id="prediction"
                                    value= {prediction} 
                                    onChange={(selectedOption) => setPrediction(selectedOption)}
                                    options={uniquePrediction.sort().map((prediction) => ({
                                        value: prediction,
                                        label: predictionOptionLabel(prediction)
                                    }))}
                                    styles={{
                                        control: (provided) => ({
                                            ...provided,
                                            textAlign: 'center',
                                            background: 'transparent',  
                                            border: '1px solid #2d80c8',     
                                        }),
                                        menu: (provided) => ({
                                            ...provided,
                                            maxHeight: '200px',  
                                            overflowY: 'auto'  
                                        })
                                    }}
                                    placeholder="-- Sélectionnez une prédiction --"
                                    className="custom-select__placeholder "

                                />
                            </div>

                            <div className='statistiques'>
                                <label htmlFor="odds" >Cote</label>
                                <input 
                                className='input-text custom-select__placeholder' 
                                type="text" id="odds" 
                                value={odds} 
                                onChange={(e) => setOdds(e.target.value)} 
                                placeholder="-- Entrer une cote --"/>
                            </div>
                            <div className='statistiques'>
                                <label htmlFor="predictionType">Type de pronostic</label>
                                <input
                                    className='input-text'
                                    type="text"
                                    id="predictionType"
                                    value={predictionType}
                                    onChange={(e) => setPredictType(e.target.value)}

                                />

                            </div>
                        </div>

                        <div className='div-button-add-modal'>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ textTransform: 'none' }}>
                                Ajouter
                            </Button>
                        </div>
                    </form>
                </Box>
            </Dialog>
        </div>
    )
}
const mapStateToProps = ({ PredictReducer }) => ({
    predicts: PredictReducer.predicts
});

export default connect(mapStateToProps)(ModalPronostics);