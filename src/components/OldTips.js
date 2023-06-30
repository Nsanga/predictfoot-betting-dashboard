import React, { useEffect, useState } from 'react'
import { Box, Button, Stack } from '@mui/material'
import { useMediaQuery, useTheme } from '@material-ui/core';
import DateFilter from './DateFilter';
import moment from 'moment';
import 'moment/locale/fr';
// import '../styles/globals.css'
import OldMatch from './OldMatch';
import { connect, useDispatch } from "react-redux";
import Pagination from '@material-ui/lab/Pagination';
import { fetchPredictRequest } from '../redux/predict/actions';


moment.locale('fr');

const OldTips = (
    {
        predicts,
        totalPages,
        page,
        message
    }
) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
          const dateFrom = moment().subtract(5, 'days').format('YYYY-MM-DD');
          const dateTo = moment().subtract(1, 'days').format('YYYY-MM-DD');
          const search = '';
          const page = 1;
          const limit = 10;
      
          await dispatch(fetchPredictRequest({ dateFrom, dateTo, search, page, limit }));
        };
      
        fetchData();
      }, []);
      

    const handlePageChange = (event, page) => {
        const limit = 3;
        dispatch(fetchPredictRequest(page, limit));
    };

    const currentDate = moment().format('ddd D MMM YYYY');

    return (
        <>
            {isMatch ? (
                <Box className='div-old-tips'>
                    <Box className='box-details-old-tips'>
                        <Stack direction='column' spacing={2}>
                            <Box fontSize='10px'>{currentDate}</Box>
                            <Box fontSize='10px'>Details de la journée</Box>
                        </Stack>
                        <Box fontSize='16px'>5.30</Box>
                    </Box>
                    <Box className='box-old-tip'>
                        <Box className='old-tips-head'>
                            <Box>
                                <DateFilter onDateChange={handleDateChange} />
                            </Box>
                            <Box>
                                <Button variant="contained" style={{ textTransform: 'none', fontSize: '10px' }}>Exporter</Button>
                            </Box>
                        </Box>

                    </Box>
                    <Box className='div-match-resp'>
                        <OldMatch
                            size='10px'
                            sizeCoast='16px'
                            width={25}
                            height={35}
                            predicts={predicts} />

                        {/* <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                        /> */}
                    </Box>
                </Box>
            ) : (
                <Box className='div-old-tips'>
                    <Box className='box-old-tip'>
                        <Box>Old tips</Box>
                        <Button variant="contained" style={{ textTransform: 'none' }}>Exporter</Button>
                    </Box>
                    <Stack direction='row' margin='1rem'>
                        <DateFilter onDateChange={handleDateChange} />
                    </Stack>
                    <Box className='box-details-old-tips' margin='2px'>
                        <Stack direction='column' spacing={2}>
                            <Box>{currentDate}</Box>
                            <Box fontSize='12px'>Details de la journée</Box>
                        </Stack>
                        <Box>5.30</Box>
                    </Box>
                    <Box className='div-match'>
                        <OldMatch
                            size='11px'
                            sizeCoast='12px'
                            width={25}
                            height={40}
                            predicts={predicts} />

                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                        />

                    </Box>
                </Box>
            )}
        </>

    )
}
const mapStateToProps = ({ PredictReducer }) => ({
    predicts: PredictReducer.predicts,
    totalPages: PredictReducer.totalPages,
    page: PredictReducer.page,
    error: PredictReducer.error,
    message: PredictReducer.message,
});

export default connect(mapStateToProps)(OldTips);
