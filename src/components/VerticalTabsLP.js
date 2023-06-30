import * as React from 'react';
import { Box, Stack, Button, Grid, Tabs, Tab, Typography } from '@mui/material';
import Table from './Table';
import ModalForm from './Modal';
import { useMediaQuery, useTheme } from '@material-ui/core';
// import '../styles/globals.css'
import StatForm from './StatForm';
import HeadBandForm from './HeadBandForm';
import AdvertisementForm from './AdvertisementForm';
import AboutUsForm from './AboutUsForm';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [value, setValue] = React.useState(0);
    const [title, setTitle] = React.useState('');
    const [percentage, setPercentage] = React.useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handlePercentageChange = (event) => {
        setPercentage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Title: ${title}, Percentage: ${percentage}`);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    const notifications = [
        {
            id: 1,
            titre: 'Nouvelle mise à jour disponible',
            description: 'Téléchargez la dernière version de l\'application pour profiter de nouvelles fonctionnalités.'
        },
        {
            id: 2,
            titre: 'Maintenance prévue',
            description: 'L\'application sera indisponible le 10 mai de 2h à 5h pour une maintenance planifiée.'
        },
        {
            id: 3,
            titre: 'Promotion exclusive',
            description: 'Profitez de -50% sur tous les produits en utilisant le code "PROMO50" jusqu\'au 15 mai.'
        }
    ];

    const columns = ["titre", "description"];

    const chaines = [
        {
            id: 1,
            titre: 'Nouvelle mise à jour disponible',
        },
        {
            id: 2,
            titre: 'Maintenance prévue',
        },
        {
            id: 3,
            titre: 'Promotion exclusive',
        }
    ];

    const columnsChaine = ["titre"];

    const forfaits = [
        { id: '1', duree: "1 mois", prix: 9.99 },
        { id: '2', duree: "3 mois", prix: 24.99 },
        { id: '3', duree: "6 mois", prix: 44.99 }
    ];

    const columnsForfaits = ["duree", "prix"];

    return (
        <>
            {isMatch ? (
                <Box>
                    <Tabs
                        orientation="horizontal"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        // aria-label="Vertical tabs example"
                        sx={{
                            borderRight: 1, borderColor: 'divider', marginTop: '1rem', marginBottom: '1rem'
                        }}
                    >
                        <Tab label="Bandeau" {...a11yProps(0)} sx={{ color: 'white', textTransform: 'none', fontSize: '12px' }} />
                        <Tab label="Service" {...a11yProps(1)} sx={{ color: 'white', textTransform: 'none', fontSize: '12px' }} />
                        <Tab label="Statistiques" {...a11yProps(2)} sx={{ color: 'white', textTransform: 'none', fontSize: '12px' }} />
                        <Tab label="Forfaits" {...a11yProps(3)} sx={{ color: 'white', textTransform: 'none', fontSize: '12px' }} />
                        <Tab label="Client" {...a11yProps(4)} sx={{ color: 'white', textTransform: 'none', fontSize: '12px' }} />
                        <Tab label="Publicité" {...a11yProps(5)} sx={{ color: 'white', textTransform: 'none', fontSize: '12px' }} />
                        <Tab label="A propos de nous" {...a11yProps(6)} sx={{ color: 'white', textTransform: 'none', fontSize: '12px' }} />
                        <Tab label="Prise en main" {...a11yProps(7)} sx={{ color: 'white', textTransform: 'none', fontSize: '12px' }} />

                    </Tabs>
                    <TabPanel value={value} index={0}>
                                <HeadBandForm />
                            </TabPanel>
                            <TabPanel value={value} index={1}>

                                <Stack direction='row' spacing={2} justifyContent="flex-start">
                                    <ModalForm
                                        titleModal='Ajouter un service'
                                        numero='numero'
                                        titre='titre'
                                        description='description'
                                    />
                                </Stack>

                                <Box className='table-user'>
                                    <Table data={chaines} columns={columnsChaine} action={true} />
                                </Box>

                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <StatForm />
                            </TabPanel>
                            <TabPanel value={value} index={3}>

                                <Box className='table-user'>
                                    <Table data={forfaits} columns={columnsForfaits} />
                                </Box>

                            </TabPanel>
                            <TabPanel value={value} index={4}>

                                <Stack direction='row' spacing={2} justifyContent="flex-start">
                                    <ModalForm
                                        titleModal="Ajouter un avis d'un client"
                                        description='description'
                                        avatar='avatar'
                                        nom='nom' />
                                </Stack>

                                <Box className='table-user'>
                                    <Table data={chaines} columns={columnsChaine} action={true} />
                                </Box>

                            </TabPanel>
                            <TabPanel value={value} index={5}>

                                <AdvertisementForm />

                            </TabPanel>
                            <TabPanel value={value} index={6}>

                                <AboutUsForm />

                            </TabPanel>
                            <TabPanel value={value} index={7}>

                                <Stack direction='row' spacing={2} justifyContent="flex-start">
                                    <ModalForm
                                        titleModal='Ajouter une prise en main'
                                        titreRegister='titre'
                                        sousTitre='sousTitre'
                                        image='image'
                                        numero='numero'
                                        titre='titre'
                                        description='description' />
                                </Stack>

                                <Box className='table-user'>
                                    <Table data={chaines} columns={columnsChaine} />
                                </Box>

                            </TabPanel>
                </Box>
            ) : (
                <Box
                    sx={{ flexGrow: 1, display: 'flex', color: 'white', margin: '1rem' }}
                >

                    <Grid container spacing={1}>
                        <Grid item xs={3} sx={{ bgcolor: '#02090F', borderRadius: '8px' }}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                // aria-label="Vertical tabs example"
                                sx={{
                                    borderRight: 1, borderColor: 'divider', marginTop: '1rem', marginBottom: '1rem'
                                }}
                            >
                                <Tab label="Bandeau" {...a11yProps(0)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
                                <Tab label="Service" {...a11yProps(1)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
                                <Tab label="Statistiques" {...a11yProps(2)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
                                <Tab label="Forfaits" {...a11yProps(3)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
                                <Tab label="Client" {...a11yProps(4)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
                                <Tab label="Publicité" {...a11yProps(5)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
                                <Tab label="A propos de nous" {...a11yProps(6)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
                                <Tab label="Prise en main" {...a11yProps(7)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />

                            </Tabs>
                        </Grid>

                        <Grid item xs={9} >
                            <TabPanel value={value} index={0}>
                                <HeadBandForm />
                            </TabPanel>
                            <TabPanel value={value} index={1}>

                                <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                    <ModalForm
                                        titleModal='Ajouter un service'
                                        numero='numero'
                                        titre='titre'
                                        description='description'
                                    />
                                </Stack>

                                <Box className='table-user'>
                                    <Table data={chaines} columns={columnsChaine} action={true} />
                                </Box>

                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <StatForm />
                            </TabPanel>
                            <TabPanel value={value} index={3}>

                                <Box className='table-user'>
                                    <Table data={forfaits} columns={columnsForfaits} />
                                </Box>

                            </TabPanel>
                            <TabPanel value={value} index={4}>

                                <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                    <ModalForm
                                        titleModal= "Ajouter un avis d'un client"
                                        description='description'
                                        avatar='avatar'
                                        nom='nom' />
                                </Stack>

                                <Box className='table-user'>
                                    <Table data={chaines} columns={columnsChaine} action={true} />
                                </Box>

                            </TabPanel>
                            <TabPanel value={value} index={5}>

                                <AdvertisementForm />

                            </TabPanel>
                            <TabPanel value={value} index={6}>

                                <AboutUsForm />

                            </TabPanel>
                            <TabPanel value={value} index={7}>

                                <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                    <ModalForm
                                        titleModal='Ajouter une prise en main'
                                        titreRegister='titre'
                                        sousTitre='sousTitre'
                                        image='image'
                                        numero='numero'
                                        titre='titre'
                                        description='description' />
                                </Stack>

                                <Box className='table-user'>
                                    <Table data={chaines} columns={columnsChaine} />
                                </Box>

                            </TabPanel>

                        </Grid>
                    </Grid>

                </Box>
            )}
        </>
    );
}