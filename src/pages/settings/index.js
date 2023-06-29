import Title from '../../components/Title'
import React from 'react'
import { Box, Stack, Button, Grid } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Table from '../../components/Table';
import VerticalTabs from '../../components/VerticalTabs';
import ModalForm from '../../components/Modal';
import { useMediaQuery } from '@material-ui/core';
import Layout from '../../components/Layout';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Settings = () => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const matchPredictions = [
        {
            id: '1',
            titre: "Victoire de l'équipe à domicile",
            description: "L'équipe à domicile est favorite pour remporter le match"
        },
        {
            id: '2',
            titre: "Match nul",
            description: "Les deux équipes sont très proches et un match nul est probable"
        },
        {
            id: '3',
            titre: "Victoire de l'équipe à l'extérieur",
            description: "L'équipe à l'extérieur a de bonnes chances de remporter le match"
        }
    ];

    const paiements = [
        {
            id: '1',
            titre: "Paiement par carte",
            description: "Paiement par carte bancaire avec sécurisation 3D-Secure"
        },
        {
            id: '2',
            titre: "Paiement par virement",
            description: "Paiement par virement bancaire avec RIB fourni"
        },
        {
            id: '3',
            titre: "Paiement en espèces",
            description: "Paiement en espèces à la livraison de la commande"
        }
    ];

    const forfaits = [
        { id: '1', duree: "1 mois", prix: 9.99 },
        { id: '2', duree: "3 mois", prix: 24.99 },
        { id: '3', duree: "6 mois", prix: 44.99 }
    ];

    const columns = ["titre", "description"];
    const columnsForfaits = ["duree", "prix"];

    return (
        <>
            {isMatch ? (
                <>
                    <Title titre='Settings' />
                    <Box style={{ padding: '8px' }}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="inherit">
                                        <Tab label="Pronostics" value='1' style={{ textTransform: 'none', fontSize: '12px' }} />
                                        <Tab label="Paiements" value='2' style={{ textTransform: 'none', fontSize: '12px' }} />
                                        <Tab label="Forfaits" value='3' style={{ textTransform: 'none', fontSize: '12px' }} />
                                        <Tab label="Notifications automatiques" value='4' style={{ textTransform: 'none', fontSize: '12px' }} />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <ModalForm
                                        titleModal='Ajouter un type de pronostic'
                                        titre='titre'
                                        description='description' />

                                    <Box>
                                        <Table data={matchPredictions} columns={columns} action={true} />
                                    </Box>

                                </TabPanel>
                                <TabPanel value="2">
                                    <ModalForm
                                        titleModal='Ajouter un mode de paiement'
                                        titre='titre'
                                        description='description'
                                        avatar='avatar' />

                                    <Box>
                                        <Table data={paiements} columns={columns} action={true} />
                                    </Box>
                                </TabPanel>
                                <TabPanel value="3">
                                    <ModalForm
                                        titleModal='Ajouter un forfait'
                                        type='type'
                                        duree='duree'
                                        prix='prix' />

                                    <Box >
                                        <Table data={forfaits} columns={columnsForfaits} action={true} />
                                    </Box>
                                </TabPanel>
                                <TabPanel value="4">
                                    <VerticalTabs />
                                </TabPanel>
                            </TabContext>
                        </Box>

                    </Box>
                </>

            ) : (
                <>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} className='nav'>
                                <Layout />
                            </Grid>
                            <Grid item xs={9}>
                                <Title titre='Settings' />
                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="inherit">
                                                <Tab label="Pronostics" value='1' style={{ textTransform: 'none', fontSize: '16px' }} />
                                                <Tab label="Paiements" value='2' style={{ textTransform: 'none', fontSize: '16px' }} />
                                                <Tab label="Forfaits" value='3' style={{ textTransform: 'none', fontSize: '16px' }} />
                                                <Tab label="Notifications automatiques" value='4' style={{ textTransform: 'none', fontSize: '16px' }} />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                                <ModalForm
                                                    titleModal='Ajouter un type de pronostic'
                                                    titre='titre'
                                                    description='description' />
                                            </Stack>

                                            <Box className='table-user'>
                                                <Table data={matchPredictions} columns={columns} action={true} />
                                            </Box>

                                        </TabPanel>
                                        <TabPanel value="2">
                                            <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                                <ModalForm
                                                    titleModal='Ajouter un mode de paiement'
                                                    titre='titre'
                                                    description='description'
                                                    avatar='avatar' />
                                            </Stack>

                                            <Box className='table-user'>
                                                <Table data={paiements} columns={columns} action={true} />
                                            </Box>
                                        </TabPanel>
                                        <TabPanel value="3">
                                            <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                                <ModalForm
                                                    titleModal='Ajouter un forfait'
                                                    type='type'
                                                    duree='duree'
                                                    prix='prix' />
                                            </Stack>

                                            <Box className='table-user'>
                                                <Table data={forfaits} columns={columnsForfaits} action={true} />
                                            </Box>
                                        </TabPanel>
                                        <TabPanel value="4">
                                            <VerticalTabs />
                                        </TabPanel>
                                    </TabContext>
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>
                </>

            )}
        </>
    )
}

export default Settings
