import Navbar from "./components/Navbar"
import Dashboard from "./pages/dashboard"
import LandingPageAccueil from "./pages/landingPageAccueil"
import LandingPageBlog from "./pages/landingPageBlog"
import Notifications from "./pages/notifications"
import Pronostics from "./pages/pronostics"
import Settings from "./pages/settings"
import TransactionsAdmin from "./pages/transactionsAdmin"
import TransactionsUsers from "./pages/transactionsUsers"
import Users from "./pages/users"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/globals.css'
import { Box, Grid } from "@mui/material"
import { useMediaQuery, useTheme } from '@material-ui/core';
import Title from "./components/Title"
import { useState } from "react"


function App() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [pageTitle, setPageTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          {isMatch ? (
            <div className='nav'>
              <Title pageTitle={pageTitle} subTitle={subTitle} />
            </div>
          ) : (
            <Grid item xs={3} className='nav'>
              <Navbar />
            </Grid>
          )}

          <Grid item xs={9}>
            <Routes>
              <Route
                path="/"
                element={<Dashboard setPageTitle={setPageTitle} />}
              />
              <Route
                path="/dashboard"
                element={<Dashboard setPageTitle={setPageTitle} />}
              />
              <Route
                path="/landing-page-accueil"
                element={<LandingPageAccueil setPageTitle={setPageTitle} setSubTitle={setSubTitle} />}
              />
              <Route
                path="/landing-page-blog"
                element={<LandingPageBlog setPageTitle={setPageTitle} setSubTitle={setSubTitle}/>}
              />
              <Route
                path="/notifications"
                element={<Notifications setPageTitle={setPageTitle} />}
              />
              <Route
                path="/pronostics"
                element={<Pronostics setPageTitle={setPageTitle} />}
              />
              <Route
                path="/settings"
                element={<Settings setPageTitle={setPageTitle} />}
              />
              <Route
                path="/transactions-admin"
                element={<TransactionsAdmin setPageTitle={setPageTitle} setSubTitle={setSubTitle}/>}
              />
              <Route
                path="/transactions-users"
                element={<TransactionsUsers setPageTitle={setPageTitle} setSubTitle={setSubTitle}/>}
              />
              <Route
                path="/users"
                element={<Users setPageTitle={setPageTitle} />}
              />
            </Routes>
          </Grid>
        </Grid>
      </Box>

    </BrowserRouter>
  );
}

export default App;