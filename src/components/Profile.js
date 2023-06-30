import React from 'react'
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@material-ui/core';
// import '../styles/globals.css'


const Profile = () => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isMatch ? (
            <div style={{display:'flex', alignItems:'center', margin:'1rem'}}>
                <Avatar /> 
                <div style={{margin:'1rem', fontSize:'14px', fontWeight:'700'}}>
                    Username
                </div>
            </div>
            ):(
            <div>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Paramètre du compte">
                        <IconButton
                            onClick={handleClick}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 50, height: 50 }} />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Username
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <Link href='/settings'>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                                <Box style={{ marginLeft: '4px' }}>
                                    Paramètre
                                </Box>
                            </ListItemIcon>

                        </Link>
                    </MenuItem>

                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Button style={{ textTransform: 'none' }}><Logout fontSize="small" />Déconnexion</Button>
                    </Box>
                </Menu>
            </div>
            )}
        </>

    )
}

export default Profile
