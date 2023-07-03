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
        <div>
          <Title titre='Landing Page' subtitle='Accueil' />

          <VerticalTabs />
        </div>
      )}

    </>
  )
}

export default LandigPageAccueil
