import Card from '../../components/Card'
import Table from '../../components/Table'
import Title from '../../components/Title'
import { Box, Grid, Stack, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GiMoneyStack } from 'react-icons/gi'
// import styles from '../../styles/TransactionsUsers.module.css'
import DetailUserTransaction from '../../components/DetailUserTransaction'
import { useMediaQuery, useTheme } from '@material-ui/core';
import DateFilter from '../../components/DateFilter';
import Export from '../../components/Button/Export'

const TransactionsAdmin = ({ setPageTitle, setSubTitle }) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    useEffect(() => {
        setPageTitle('Transactions');
        setSubTitle('Admins');
    }, [setPageTitle, setSubTitle]);

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const data = [
        {
            id: 1,
            name: "John",
            username: "28",
            date: "30-04-2023",
            montant: 5000,
            statut: "en attente"
        },
        {
            id: 2,
            name: "Jane",
            username: "35",
            date: "30-04-2023",
            montant: 5000,
            statut: "en attente"
        },
        {
            id: 3,
            name: "Bob",
            username: "42",
            date: "30-04-2023",
            montant: 5000,
            statut: "en attente"
        }
    ];

    const columns = ["name", "username", "date", "montant", "statut"];

    return (
        <>
            {isMatch ? (
                <>
                    <Stack direction='column' spacing={2} padding='8px'>
                        <Card
                            titre='Fond de caisse'
                            icone={GiMoneyStack}
                        />
                        <Card
                            titre='Montant total des retraits'
                            icone={GiMoneyStack}
                        />
                        <Card
                            titre='Montant total restant'
                            icone={GiMoneyStack}
                        />
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} marginTop='2rem'>

                        <Stack spacing={4} padding='8px'>
                            <Box className='{styles.transactionsTitle}'>Toutes les transactions</Box>

                            <Stack direction='row' spacing={2} justifyContent="space-between" alignItems='center' >
                                <Box marginLeft='1rem'>
                                    <DateFilter onDateChange={handleDateChange} />
                                </Box>
                                <Box>
                                    <Export />
                                </Box>
                            </Stack>

                            <Table data={data} columns={columns} />
                        </Stack>

                    </Box>
                </>
            ) : (
                <>
                    <Title titre='Transactions' subtitle='Admin' />

                    <Stack direction='row' spacing={2} style={{color:'#fff'}}>
                        <Card
                            titre='Fond de caisse'
                            icone={GiMoneyStack}
                        />
                        <Card
                            titre='Montant total des retraits'
                            icone={GiMoneyStack}
                        />
                        <Card
                            titre='Montant total restant'
                            icone={GiMoneyStack}
                        />
                    </Stack>
                    <Box sx={{ flexGrow: 1 }} className='box-custom-old' marginTop='2rem'>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>

                                <Stack spacing={4}>
                                    <Box className='{styles.transactionsTitle}'>Toutes les transactions</Box>

                                    <Stack direction='row' spacing={2} justifyContent="space-between" paddingRight='2rem'>
                                        <DateFilter onDateChange={handleDateChange} />
                                        <Export />
                                    </Stack>

                                    <Table data={data} columns={columns} />
                                </Stack>

                            </Grid>
                            <Grid item xs={4}>

                                <DetailUserTransaction />

                            </Grid>
                        </Grid>

                    </Box>
                </>
            )}

        </>
    )
}

export default TransactionsAdmin
