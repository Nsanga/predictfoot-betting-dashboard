import Title from '../../components/Title'
import React, { useEffect } from 'react'
import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Table from '../../components/Table';
import { FaUsers } from 'react-icons/fa'
import DetailsUsers from '../../components/DetailsUsers';
import { useMediaQuery, useTheme } from '@material-ui/core';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Users = ({ setPageTitle }) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [value, setValue] = React.useState(1);

    useEffect(() => {
        setPageTitle('Users');
    }, [setPageTitle]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const users = [
        {
            username: 'Alice',
            email: 'alice@example.com',
            telephone: '+1-555-123-4567'
        },
        {
            username: 'Bob',
            email: 'bob@example.com',
            telephone: '+1-555-987-6543'
        },
        {
            username: 'Charlie',
            email: 'charlie@example.com',
            telephone: '+1-555-246-8013'
        }
    ];

    const columns = ["username", "email", "telephone"];

    return (
        <>
            {isMatch ? (
                <>
                    <Stack direction='column' padding='8px'>

                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="inherit">
                                        <Tab label="Users" value="1" style={{ textTransform: 'none', fontSize: '12px' }} />
                                        <Tab label="VIP" value="2" style={{ textTransform: 'none', fontSize: '12px' }} />
                                    </TabList>
                                </Box>
                                <TabPanel value="1">
                                    <Stack direction='row' spacing={2} justifyContent="flex-end" margin='1rem' alignItems="center">
                                        <FaUsers /> <Box fontSize="small">200</Box>
                                    </Stack>
                                    <Box marginLeft='-1rem'>
                                        <Table data={users} columns={columns} action={true} />
                                    </Box>
                                </TabPanel>
                                <TabPanel value="2">
                                    <Stack direction='row' spacing={2} justifyContent="flex-end" margin='1rem' alignItems="center">
                                        <FaUsers /> <Box fontSize="small">200</Box>
                                    </Stack>

                                    <Box marginLeft='-1rem'>
                                        <Table data={users} columns={columns} action={true} />
                                    </Box>
                                </TabPanel>
                            </TabContext>
                        </Box>
                    </Stack>
                </>
            ) : (
                <>
                    <Title titre='Users' />

                    <Box sx={{ flexGrow: 1 }} className='box-custom-old'>
                        <Grid container spacing={2}>
                            <Grid item xs={8} >

                                <Box sx={{ width: '100%', typography: 'body1' }}>
                                    <TabContext value={value}>
                                        <Box>
                                            <TabList onChange={handleChange}>
                                                <Tab
                                                    label="Users"
                                                    value={1}
                                                    style={{
                                                        textTransform: 'none',
                                                        fontSize: value !== 1 ? '16px' : '16px',
                                                        fontFamily: 'Raleway',
                                                        fontWeight: value !== 1 ? '' : 'bold',
                                                        color: value !== 1 ? 'white' : '',
                                                    }}
                                                />
                                                <Tab
                                                    label="VIP"
                                                    value={2}
                                                    style={{
                                                        textTransform: 'none',
                                                        fontSize: value !== 2 ? '16px' : '16px',
                                                        fontFamily: 'Raleway',
                                                        fontWeight: value !== 2 ? '' : 'bold',
                                                        color: value !== 2 ? 'white' : '',
                                                    }}
                                                />
                                            </TabList>
                                        </Box>
                                        <TabPanel value={1}>
                                            <Stack direction='row' spacing={2} justifyContent="flex-end" margin='1rem' alignItems="center">
                                                <FaUsers fontSize="x-large" style={{ color: '#fff' }} />
                                                <Box style={{ color: '#fff', fontFamily: 'Raleway' }}>200</Box>
                                            </Stack>

                                            <Box margin='0rem -1rem 0rem -1.5rem'>
                                                <Table data={users} columns={columns} action={true} />
                                            </Box>
                                        </TabPanel>
                                        <TabPanel value={2}>
                                            <Stack direction='row' spacing={2} justifyContent="flex-end" margin='1rem' alignItems="center">
                                                <FaUsers fontSize="x-large" style={{ color: '#fff' }} />
                                                <Box style={{ color: '#fff', fontFamily: 'Raleway' }}>200</Box>
                                            </Stack>

                                            <Box margin='0rem -1rem 0rem -1.5rem'>
                                                <Table data={users} columns={columns} action={true} />
                                            </Box>
                                        </TabPanel>
                                    </TabContext>
                                </Box>


                            </Grid>
                            <Grid item xs={4} >
                                <DetailsUsers />
                            </Grid>
                        </Grid>
                    </Box>

                </>

            )
            }
        </>
    )
}

export default Users
