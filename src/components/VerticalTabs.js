import * as React from 'react';
import { Box, Stack, Button, Tabs, Tab, Typography, Grid } from '@mui/material';
import Table from './Table';
import AppBar from '@mui/material/AppBar';
import ModalForm from './Modal';
import { useMediaQuery, useTheme } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
// import '../styles/globals.css'

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
        <Box>
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

  return (
    <>
      {isMatch ? (
        <Box style={{ marginRight: '1rem' }}>
          <AppBar position="static" style={{ background: 'transparent' }} elevation={0}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
            >
              <Tab label="Type de campagne" {...a11yProps(0)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start', fontSize: '12px' }} />
              <Tab label="Chaine de communication" {...a11yProps(1)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start', fontSize: '12px' }} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>

              <Stack direction='row' spacing={2} justifyContent="flex-start" marginTop='1rem'>
                <ModalForm
                  titleModal='Ajouter un type de campagne'
                  titre='titre'
                  description='description'
                  avatar='avatar' />
              </Stack>

              <Box marginLeft='-1rem'>
                <Table data={notifications} columns={columns} action={true}/>
              </Box>

            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>

              <Stack direction='row' spacing={2} justifyContent="flex-start" marginTop='1rem'>
                <ModalForm
                  titleModal='Ajouter une chaine de communication'
                  titre='titre'
                  avatar='avatar' />
              </Stack>

              <Box marginLeft='-1rem'>
                <Table data={chaines} columns={columnsChaine} action={true}/>
              </Box>

            </TabPanel>

          </SwipeableViews>
        </Box>
      ) : (
        <Box
          sx={{ flexGrow: 1, display: 'flex', color: 'white', margin: '1rem 1rem 1rem -1.5rem' }}
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
                  borderRight: 1, borderColor: 'divider', marginTop: '1rem'
                }}
              >
                <Tab label="Type de campagne" {...a11yProps(0)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
                <Tab label="Chaine de communication" {...a11yProps(1)} sx={{ color: 'white', textTransform: 'none', textAlign: 'start' }} />
              </Tabs>
            </Grid>

            <Grid item xs={9} >
              <TabPanel value={value} index={0}>

                <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                  <ModalForm
                    titleModal='Ajouter un type de campagne'
                    titre='titre'
                    description='description'
                    avatar='avatar' />
                </Stack>

                <Box className='table-user'>
                  <Table data={notifications} columns={columns} action={true}/>
                </Box>

              </TabPanel>
              <TabPanel value={value} index={1}>

                <Stack direction='row' spacing={2} justifyContent="flex-start" margin='1rem'>
                  <ModalForm
                    titleModal='Ajouter une chaine de communication'
                    titre='titre'
                    avatar='avatar' />
                </Stack>

                <Box className='table-user'>
                  <Table data={chaines} columns={columnsChaine} action={true}/>
                </Box>

              </TabPanel>

            </Grid>
          </Grid>

        </Box>
      )}
    </>
  );
}