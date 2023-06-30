import Title from '../../components/Title'
import React, { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/material';
import Tab from '@mui/material/Tab';
import MatchPreview from '../../components/MatchPreview';
import OldTips from '../../components/OldTips';
import { Button } from '@mui/material';
import ModalPronostics from '../../components/ModalPronostics';
import { useMediaQuery, useTheme } from '@material-ui/core';
import DateFilter from '../../components/DateFilter';
import moment from 'moment';
import 'moment/locale/fr';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { connect, useDispatch } from "react-redux";
import { fetchPredictRequest } from '../../redux/predict/actions';
import Pagination from '@material-ui/lab/Pagination';

moment.locale('fr');

const Pronostics = (
    {
        predicts,
        totalPages,
        page,
        message,
        setPageTitle
    }
) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    useEffect(() => {
        setPageTitle('Pronostics', null);
    }, [setPageTitle]);

    const dispatch = useDispatch();
    useEffect(() => {
        const dateFrom = new Date().toISOString().split('T')[0];
        const type = '';
        const search = '';
        const page = 1;
        const limit = 10;
        dispatch(fetchPredictRequest({ dateFrom, type, search, page, limit }));
        console.log('Dispatched fetchPredictRequest');
    }, [dispatch]);

    const handlePageChange = (event, page) => {
        const limit = 3;
        dispatch(fetchPredictRequest({ page, limit }));
    };

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const currentDate = moment().format('ddd D MMM YYYY');

    return (
        <Box>
            {isMatch ? (
                <></>
            ) : (
                <Title titre='Pronostics' />
            )}
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Week Tips" value="1" style={{ textTransform: 'none', fontSize: '16px', fontFamily: 'Raleway' }} />
                            <Tab label="VIP Tips" value="2" style={{ textTransform: 'none', fontSize: '16px', fontFamily: 'Raleway' }} />
                            <Tab label="Old Tips" value="3" style={{ textTransform: 'none', fontSize: '16px', fontFamily: 'Raleway' }} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <Stack direction='row' spacing={2} justifyContent="space-between" margin='1rem'>
                            <DateFilter predicts={predicts} />
                            <Stack direction='row' spacing={2} justifyContent="flex-end" margin='1rem'>
                                <Button variant="contained" style={{ textTransform: 'none' }}>Exporter</Button>
                                <ModalPronostics
                                    titleModal='Ajouter un Week tip'
                                    predictionType='Week Tips' />
                            </Stack>
                        </Stack>
                        <Box className='date-match'>{currentDate}</Box>

                        <Box className='div-match'>

                            <MatchPreview
                                size='14px'
                                width={40}
                                height={55}
                                type="Week Tips"
                                predicts={predicts} />

                            <Pagination
                                count={totalPages}
                                page={page}
                                onChange={handlePageChange}
                            />

                        </Box>
                    </TabPanel>
                    <TabPanel value="2">
                        <Stack direction='row' spacing={2} justifyContent="space-between" margin='1rem'>
                            <DateFilter predicts={predicts} />
                            <Stack direction='row' spacing={2} justifyContent="flex-end" margin='1rem'>
                                <Button variant="contained" sx={{ textTransform: 'none' }}>Exporter</Button>
                                <ModalPronostics
                                    titleModal='Ajouter un VIP tip'
                                    predictionType='VIP Tips' />
                            </Stack>
                        </Stack>

                        <Box className='date-match'>{currentDate}</Box>

                        <Box className='div-match'>

                            <MatchPreview
                                size='14px'
                                width={40}
                                height={55}
                                type="VIP Tips"
                                predicts={predicts} />

                            <Pagination
                                count={totalPages}
                                page={page}
                                onChange={handlePageChange}
                            />
                        </Box>
                    </TabPanel>
                    <TabPanel value="3">
                        <OldTips />
                    </TabPanel>
                </TabContext>
            </Box>
        </Box>
    )
}
const mapStateToProps = ({ PredictReducer }) => ({
    predicts: PredictReducer.predicts,
    totalPages: PredictReducer.totalPages,
    page: PredictReducer.page,
    error: PredictReducer.error,
    message: PredictReducer.message,
});

export default connect(mapStateToProps)(Pronostics);