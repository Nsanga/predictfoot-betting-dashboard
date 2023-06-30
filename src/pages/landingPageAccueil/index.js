import Title from '../../components/Title'
import VerticalTabs from '../../components/VerticalTabsLP'
import React, { useEffect } from 'react'
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Box, Grid } from '@mui/material';


const LandigPageAccueil = ({ setPageTitle, setSubTitle }) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  useEffect(() => {
    setPageTitle('Landing Page');
    setSubTitle('Accueil');
  }, [setPageTitle, setSubTitle]);

  return (
    <>
      {isMatch ? (

        <>
          <Box padding='8px'>
            <VerticalTabs />
          </Box>
        </>

      ) : (
        // <Box sx={{ flexGrow: 1 }}>
        //   <Grid container spacing={2}>
        //     <Grid item xs={3} className='nav'>
        //       <Layout />
        //     </Grid>
        //     <Grid item xs={9}>

        //     </Grid>
        //   </Grid>
        // </Box>
        <div>
          <Title titre='Landing Page' subtitle='Accueil' />

          <VerticalTabs />
        </div>
      )}

    </>
  )
}

export default LandigPageAccueil
