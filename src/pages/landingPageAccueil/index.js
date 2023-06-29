import Title from '../../components/Title'
import VerticalTabs from '../../components/VerticalTabsLP'
import React from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Box, Grid } from '@mui/material';
import Layout from '../../components/Layout'


const LandigPageAccueil = () => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <>
      {isMatch ? (

        <>
          <Title titre='Landing Page' subtitle='Accueil' />
          <Box padding='8px'>
            <VerticalTabs />
          </Box>
        </>

      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3} className='nav'>
              <Layout />
            </Grid>
            <Grid item xs={9}>
              <div>
                <Title titre='Landing Page' subtitle='Accueil' />

                <VerticalTabs />
              </div>
            </Grid>
          </Grid>
        </Box>
      )}

    </>
  )
}

export default LandigPageAccueil
