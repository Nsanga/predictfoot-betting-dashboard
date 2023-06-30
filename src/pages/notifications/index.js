import Title from '../../components/Title'
import React, { useEffect } from 'react'
import { Box, Stack, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Table from '../../components/Table';
import PhoneNotification from '../../assets/Phone_Notification.png'
import ModalForm from '../../components/Modal';
import { useMediaQuery, useTheme } from '@material-ui/core';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const Notifications = ({setPageTitle}) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [value, setValue] = React.useState('1');

    useEffect(() => {
        setPageTitle('Notifications', null);
    }, [setPageTitle]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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


    return (
        <div>
            {isMatch ? (
                <>
                    <Title titre='Notifications' />
                    <Box padding='8px'>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="inherit">
                                        <Tab label="Manuelles" value="1" style={{ textTransform: 'none', fontSize: '12px' }} />
                                        <Tab label="Automatiques" value="2" style={{ textTransform: 'none', fontSize: '12px' }} />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <ModalForm
                                        titleModal='Ajouter une notification manuelle'
                                        titre='titre'
                                        description='description' />
                                    <Box >
                                        <Table data={notifications} columns={columns} action={true} />
                                    </Box>
                                </TabPanel>
                                <TabPanel value="2">
                                    <ModalForm
                                        titleModal='Ajouter une notification automatique'
                                        titre='titre'
                                        description='description' />

                                    <Box>
                                        <Table data={notifications} columns={columns} action={true} />
                                    </Box>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Box>
                </>

            ) : (
                <>
                    {/* <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3} className='nav'>
                                <Layout />
                            </Grid>
                            <Grid item xs={9}>
                                                            </Grid>
                        </Grid>
                    </Box> */}
                    <Title titre='Notifications' />

                    <Box sx={{ flexGrow: 1 }} className='box-custom-old'>
                        <Grid container spacing={2}>
                            <Grid item xs={8} >

                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="inherit">
                                                <Tab label="Manuelles" value="1" style={{ textTransform: 'none', fontSize: '16px' }} />
                                                <Tab label="Automatiques" value="2" style={{ textTransform: 'none', fontSize: '16px' }} />
                                            </TabList>
                                        </Box>
                                        <TabPanel value="1">
                                            <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                                <ModalForm
                                                    titleModal='Ajouter une notification manuelle'
                                                    titre='titre'
                                                    description='description' />
                                            </Stack>

                                            <Box className='table-user'>
                                                <Table data={notifications} columns={columns} action={true} />
                                            </Box>
                                        </TabPanel>
                                        <TabPanel value="2">
                                            <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                                                <ModalForm
                                                    titleModal='Ajouter une notification automatique'
                                                    titre='titre'
                                                    description='description' />
                                            </Stack>

                                            <Box className='table-user'>
                                                <Table data={notifications} columns={columns} action={true} />
                                            </Box>
                                        </TabPanel>
                                    </TabContext>
                                </Box>

                            </Grid>
                            <Grid item xs={4} >
                                <img
                                    src={PhoneNotification}
                                    alt="notification"
                                    width={370}
                                    priority
                                />
                            </Grid>
                        </Grid>
                    </Box>

                </>

            )
            }
        </div >
    )
}

export default Notifications
