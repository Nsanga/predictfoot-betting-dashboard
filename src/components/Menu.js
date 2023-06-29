import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Box,
    Button
} from "@mui/material";
import { Link } from 'react-router-dom';
import { AiOutlinePieChart, AiOutlineUnorderedList } from 'react-icons/ai'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { AiOutlineTransaction } from 'react-icons/ai'
import { IoSettingsOutline } from 'react-icons/io5'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { SlScreenDesktop } from 'react-icons/sl'
import { GiPlainCircle } from 'react-icons/gi'
import MenuIcon from "@mui/icons-material/Menu";
import Logout from '@mui/icons-material/Logout';
import Profile from './Profile';
import '../styles/globals.css'

const Menu = () => {

    const [showSubNav, setShowSubNav] = useState(false);
    const [showSubNavLandingPage, setShowSubNavLandingPage] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const theme = useTheme();

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1, 0, 15),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const toggleSubNav = () => {
        setShowSubNav(!showSubNav);
        setShowSubNavLandingPage(false);
    };

    const toggleSubNavLandingPage = () => {
        setShowSubNav(false);
        setShowSubNavLandingPage(!showSubNavLandingPage);
    };

    return (
        <React.Fragment>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                disableScrollLock={true}
            >
                <DrawerHeader>
                    <Stack marginLeft="3rem">
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <CloseIcon /> : <ChevronRightIcon />}
                        </IconButton></Stack>
                </DrawerHeader>
                <Box marginTop="-2rem">
                    <Profile />
                </Box>

                <List>
                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Link to='/' style={{ color: '#000000', fontSize: '12px' }}>
                                    <AiOutlinePieChart className='icon' />
                                    Dashboard
                                </Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Link to='/pronostics' style={{ color: '#000000', fontSize: '12px' }}>
                                    <AiOutlineUnorderedList className='icon' />
                                    Pronostics
                                </Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Link to='/users' style={{ color: '#000000', fontSize: '12px' }}>
                                    <HiOutlineUserGroup className='icon' />
                                    Users
                                </Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                <Box onClick={toggleSubNav} style={{ color: '#000000', fontSize: '12px' }}>
                                    <AiOutlineTransaction className='icon' />
                                    Transactions
                                </Box>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    {showSubNav && (
                        <Stack direction='column'>

                            <ListItemButton onClick={() => setOpenDrawer(false)} sx={{ marginTop: '-.5rem' }}>
                                <ListItemIcon>
                                    <ListItemText>
                                        <Link
                                            to='/transactions-users'
                                            onClick={() => setOpenDrawer(false)}
                                            style={{ fontSize: '10px', marginLeft: '2rem' }}>
                                            <GiPlainCircle className='icon-sub-navbar' /> Users
                                        </Link>
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                            <ListItemButton onClick={() => setOpenDrawer(false)} sx={{ marginTop: '-.5rem', marginBottom: '-.5rem' }}>
                                <ListItemIcon>
                                    <ListItemText>
                                        <Link
                                            to='/transactions-admin'
                                            onClick={() => setOpenDrawer(false)}
                                            style={{ fontSize: '10px', marginLeft: '2rem' }}>
                                            <GiPlainCircle className='icon-sub-navbar' /> Admin
                                        </Link>
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                        </Stack>
                    )}

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Link to='/notifications' style={{ color: '#000000', fontSize: '12px' }}>
                                    <IoIosNotificationsOutline className='icon' />
                                    Notifications
                                </Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                <Box onClick={toggleSubNavLandingPage} style={{ color: '#000000', fontSize: '12px' }}>
                                    <SlScreenDesktop className='icon' />
                                    Landing page
                                </Box>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                    {showSubNavLandingPage && (
                        <Stack direction='column'>

                            <ListItemButton onClick={() => setOpenDrawer(false)} sx={{ marginTop: '-.5rem' }}>
                                <ListItemIcon>
                                    <ListItemText>
                                        <Link
                                            to='/landing-page-accueil'
                                            onClick={() => setOpenDrawer(false)}
                                            style={{ fontSize: '10px', marginLeft: '2rem' }}>

                                            <GiPlainCircle className='icon-sub-navbar' /> Accueil
                                        </Link>
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                            <ListItemButton onClick={() => setOpenDrawer(false)} sx={{ marginTop: '-.5rem', marginBottom: '-.5rem' }}>
                                <ListItemIcon>
                                    <ListItemText>
                                        <Link
                                            to='/landing-page-blog'
                                            onClick={() => setOpenDrawer(false)}
                                            style={{ fontSize: '10px', marginLeft: '2rem' }}>

                                            <GiPlainCircle className='icon-sub-navbar' /> Blog
                                        </Link>
                                    </ListItemText>
                                </ListItemIcon>
                            </ListItemButton>

                        </Stack>
                    )}

                    <ListItemButton onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>
                                <Link to='/settings' style={{ color: '#000000', fontSize: '12px' }}>
                                    <IoSettingsOutline className='icon' />
                                    Settings
                                </Link>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>

                </List>

                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '12px' }}>
                    <Button style={{ textTransform: 'none' }}><Logout fontSize="small" />Déconnexion</Button>
                </Box>

            </Drawer>
            <IconButton
                sx={{ color: "#fff", marginLeft: "auto" }}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>
        </React.Fragment>
    )
}

export default Menu
