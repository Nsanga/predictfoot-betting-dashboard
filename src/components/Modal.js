import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { MdClose } from 'react-icons/md'
import { useMediaQuery, useTheme } from '@material-ui/core';
// import '../styles/globals.css'

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        // top: theme.spacing(0),
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        backgroundColor: '#02090F',
        borderRadius: '8px',
        boxShadow: '0 0 12px 0 rgb(255, 254, 254)',
        overflow: 'hidden',
        scrollBehavior: 'smooth'
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup({
    titleModal,
    numero,
    titre,
    description,
    image,
    lienApp,
    lienGoogle,
    pourcentage,
    avatar,
    sousTitre,
    nom,
    titreRegister,
    type,
    duree,
    prix,
    auteur,
    date,
    preambule }) {

    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [title, setTitle] = React.useState('');
    const [percentage, setPercentage] = React.useState('');
    const [numeros, setNumero] = React.useState('');
    const [descriptions, setDescription] = React.useState('');
    const [images, setImage] = React.useState('');
    const [lienApps, setLienApp] = React.useState('');
    const [lienGoogles, setLienGoogle] = React.useState('');
    const [profile, setProfile] = React.useState('');
    const [name, setName] = React.useState('');
    const [subtitle, setSubtitle] = React.useState('');
    const [titleRegister, setTitleRegister] = React.useState('');
    const [types, setTypes] = React.useState('');
    const [time, setTime] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [autor, setAutor] = React.useState('');
    const [day, setDay] = React.useState('');
    const [resume, setResume] = React.useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handlePercentageChange = (event) => {
        setPercentage(event.target.value);
    };

    const handleNumeroChange = (event) => {
        setNumero(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImage(url);
        }
    };

    const handleLienAppChange = (event) => {
        setLienApp(event.target.value);
    };

    const handleLienGoogleChange = (event) => {
        setLienGoogle(event.target.value);
    };

    const handleProfileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setProfile(url);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubtitleChange = (event) => {
        setSubtitle(event.target.value);
    };

    const handleTitleRegisterChange = (event) => {
        setTitleRegister(event.target.value);
    };

    const handleTypesChange = (event) => {
        setTypes(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleAutorChange = (event) => {
        setAutor(event.target.value);
    };

    const handleDayChange = (event) => {
        setDay(event.target.value);
    };

    const handleResumeChange = (event) => {
        setResume(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Title: ${title}, Percentage: ${percentage}`);
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

                    <form onSubmit={handleSubmit} >

                        <div className='div-modal'>

                            {titreRegister &&
                                <div className='statistiques'>
                                    <label>Titre Prise en main</label>
                                    <input
                                        type="text"
                                        value={titleRegister}
                                        onChange={handleTitleRegisterChange}
                                        className='input-text'
                                    />
                                </div>
                            }

                            {sousTitre &&
                                <div className='statistiques'>
                                    <label>Sous-titre</label>
                                    <input
                                        type="text"
                                        value={subtitle}
                                        onChange={handleSubtitleChange}
                                        className='input-text'
                                    />
                                </div>
                            }

                            {numero &&
                                <div className='statistiques'>
                                    <label>Numéro</label>
                                    <input
                                        type="text"
                                        value={numeros}
                                        onChange={handleNumeroChange}
                                        className='input-text'
                                    />
                                </div>
                            }
                        </div>

                        <div className='div-modal'>

                            {auteur &&
                                <div className='statistiques'>
                                    <label>Auteur</label>
                                    <input
                                        type="text"
                                        value={autor}
                                        onChange={handleAutorChange}
                                        className='input-text'
                                    />
                                </div>
                            }

                            {date &&
                                <div className='statistiques'>
                                    <label>Date de publication</label>
                                    <input
                                        type="date"
                                        value={day}
                                        onChange={handleDayChange}
                                        className='input-text'
                                    />
                                </div>
                            }

                            {titre &&
                                <div className='statistiques'>
                                    <label>Titre</label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={handleTitleChange}
                                        className='input-text'
                                    />
                                </div>
                            }

                        </div>



                        {preambule &&
                            <div className='statistiques'>
                                <label>Préambule</label>
                                <textarea
                                    value={resume}
                                    onChange={handleResumeChange}
                                    className='input-texterea'
                                />
                            </div>
                        }

                        {description &&
                            <div className='statistiques'>
                                <label>Description</label>
                                <textarea
                                    value={descriptions}
                                    onChange={handleDescriptionChange}
                                    className='input-texterea'
                                />
                            </div>
                        }

                        {nom &&
                            <div className='statistiques'>
                                <label>Nom</label>
                                <input
                                    value={name}
                                    onChange={handleNameChange}
                                    className='input-text'
                                />
                            </div>
                        }

                        <div className='div-modal'>

                            {avatar &&
                                <div className='statistiques'>
                                    <label>Photo de profile/Logo</label>
                                    <input
                                        type="file"
                                        onChange={handleProfileChange}
                                        className='input-image'
                                    />
                                </div>
                            }

                            {image &&
                                <div className='statistiques'>
                                    <label>Image</label>
                                    <input
                                        onChange={handleImageChange}
                                        type="file"
                                        className='input-image'
                                    />
                                </div>
                            }

                        </div>

                        <div className='div-modal'>
                            {lienApp &&
                                <div className='statistiques'>
                                    <label>Lien App Store</label>
                                    <input
                                        type="text"
                                        value={lienApps}
                                        onChange={handleLienAppChange}
                                        className='input-text'
                                    />
                                </div>
                            }
                            {lienGoogle &&
                                <div className='statistiques'>
                                    <label>Lien Play Store</label>
                                    <input
                                        type="text"
                                        value={lienGoogles}
                                        onChange={handleLienGoogleChange}
                                        className='input-text'
                                    />
                                </div>
                            }
                        </div>

                        {pourcentage &&
                            <div className='statistiques'>
                                <label>Pourcentage</label>
                                <input
                                    type="text"
                                    value={percentage}
                                    onChange={handlePercentageChange}
                                    className='input-text'
                                />
                            </div>
                        }

                        {type &&
                            <div className='statistiques'>
                                <label>Type de forfait</label>
                                <input
                                    type="text"
                                    value={types}
                                    onChange={handleTypesChange}
                                    className='input-text'
                                />
                            </div>
                        }

                        {duree &&
                            <div className='statistiques'>
                                <label>Durée en jours</label>
                                <input
                                    type="text"
                                    value={time}
                                    onChange={handleTimeChange}
                                    className='input-text'
                                />
                            </div>
                        }

                        {prix &&
                            <div className='statistiques'>
                                <label>Cout</label>
                                <input
                                    type="text"
                                    value={price}
                                    onChange={handlePriceChange}
                                    className='input-text'
                                />
                            </div>
                        }

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