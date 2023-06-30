import React from 'react'
import { Box, Stack, Button } from '@mui/material';
import { IoSearch } from 'react-icons/io5'
import Profile from './Profile';
import MenuBar from './Menu';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Menu from './Menu';
// import '../styles/globals.css'

const Title = ({ titre, subtitle, pageTitle, subTitle }) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <>
            {isMatch ? (
                <>
                    <Box className='box-custom' >
                        <Menu />

                        <Box className="stack-custom">
                            <Box className="title-layout">{pageTitle}</Box>

                            {subTitle && <Box className="subtitle-layout">| {subTitle}</Box>}
                        </Box>


                        <div className="container-responsive">
                            <input type="text" name="search" placeholder="Search..." className="input" />

                            <a href="#" className="btn">
                                <i className="fas fa-search"><IoSearch /></i>
                            </a>
                        </div>



                    </Box >
                </>
            ) : (
                <Box className='box-custom'>
                    <Stack direction='row' spacing={.5}>
                        <Box className='title-layout'>{titre}</Box>

                        {subtitle && <Box className='subtitle-layout'>| {subtitle}</Box>}
                    </Stack>

                    <div className='box-profile'>
                        <div className="container">
                            <input type="text" name="search" placeholder="Search..." className="input" />

                            <a href="#" className="btn">
                                <i className="fas fa-search"><IoSearch /></i>
                            </a>
                        </div>

                        <Profile />

                    </div>
                </Box >
            )}
        </>

    )
}

export default Title
