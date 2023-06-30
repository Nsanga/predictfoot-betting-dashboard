import { Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
import styles from '../styles/Home.module.css';
import { useMediaQuery, useTheme } from '@material-ui/core';
// import '../styles/globals.css'

const GraphicsPerformance = ({ titre, dataPerformances, xAxisDataKey, xAxisTickFormatter, stroke, height }) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    const [displayedData, setDisplayedData] = useState(dataPerformances);

    const handleButtonClick = (filter) => {
        let newData;

        switch (filter) {
            case 'jour':
                newData = dataPerformances.slice(0, 1);
                break;
            case 'semaine':
                newData = dataPerformances.slice(0, 7);
                break;
            case 'mois':
            default:
                newData = dataPerformances;
                break;
        }

        setDisplayedData(newData);
    };

    return (
        <div style={{ width: '95%', height: height, marginTop: '.1rem' }} className="performance-chart">
            <Box className={styles.transactionsTitle} style={{ paddingLeft: '2rem', paddingBottom: '2rem' }}>
                {titre}
            </Box>

            <Stack direction="row" justifyContent="flex-end">
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button style={{ textTransform: 'none', fontSize: '10px' }} onClick={() => handleButtonClick('jour')}>
                        Jour
                    </Button>
                    <Button style={{ textTransform: 'none', fontSize: '10px' }} onClick={() => handleButtonClick('semaine')}>
                        Semaine
                    </Button>
                    <Button style={{ textTransform: 'none', fontSize: '10px' }} onClick={() => handleButtonClick('mois')}>
                        Mois
                    </Button>
                </ButtonGroup>
            </Stack>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={displayedData}
                    margin={{
                        top: 10,
                        right: 35,
                        bottom: 90,
                    }}
                >
                    <CartesianGrid stroke="#ccc" vertical={false} horizontal={false} />
                    <XAxis dataKey={xAxisDataKey} tickFormatter={xAxisTickFormatter} />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke={stroke} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
};

export default GraphicsPerformance;
