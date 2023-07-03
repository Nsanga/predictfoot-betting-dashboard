import styles from '../../styles/Home.module.css'
import Title from '../../components/Title'
import Card from '../../components/Card'
import { FaUsers } from 'react-icons/fa'
import { AiOutlineUnorderedList, AiOutlineTransaction } from 'react-icons/ai'
import { Stack, Box } from '@mui/material'
import Table from '../../components/Table'
import GraphicsPerformance from '../../components/GraphicsPerformance'
import Grid from '@mui/material/Grid';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { useEffect, useState } from 'react';
import DateFilter from '../../components/DateFilter'

export default function Home({ setPageTitle }) {

  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    setPageTitle('Dashboard', null);
  }, [setPageTitle]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const performance = [
    { date: '01/01/2022', value: 400 },
    { date: '01/01/2022', value: 300 },
    { date: '02/01/2022', value: 200 },
    { date: '04/01/2022', value: 278 },
    { date: '05/01/2022', value: 189 },
    { date: '01/02/2022', value: 239 },
    { date: '02/02/2022', value: 349 },
    { date: '03/02/2022', value: 239 },
    { date: '01/03/2022', value: 349 },
    { date: '02/03/2022', value: 200 },
    { date: '03/03/2022', value: 278 },
    { date: '04/03/2022', value: 189 },
  ];

  const finances = [
    { date: '01/01/2022', value: 1000 },
    { date: '02/01/2022', value: 500 },
    { date: '03/01/2022', value: 1500 },
    { date: '04/01/2022', value: 2000 },
    { date: '05/01/2022', value: 1800 },
    { date: '06/01/2022', value: 1200 },
    { date: '07/01/2022', value: 1600 },
  ];

  const transactions = [
    {
      date: '01/01/2022',
      value: 18000,
    },
    {
      date: '02/01/2022',
      value: 19000,
    },
    {
      date: '03/01/2022',
      value: 22000,
    },
    {
      date: '04/01/2022',
      value: 24000,
    },
  ];

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
    },
    {
      id: 4,
      name: "Bob",
      username: "42",
      date: "30-04-2023",
      montant: 5000,
      statut: "en attente"
    },
    {
      id: 5,
      name: "Bob",
      username: "42",
      date: "30-04-2023",
      montant: 5000,
      statut: "en attente"
    },
    {
      id: 6,
      name: "Bob",
      username: "42",
      date: "30-04-2023",
      montant: 5000,
      statut: "en attente"
    },
    {
      id: 7,
      name: "Bob",
      username: "42",
      date: "30-04-2023",
      montant: 5000,
      statut: "en attente"
    },
    {
      id: 8,
      name: "Bob",
      username: "42",
      date: "30-04-2023",
      montant: 5000,
      statut: "en attente"
    },
    {
      id: 9,
      name: "Bob",
      username: "42",
      date: "30-04-2023",
      montant: 5000,
      statut: "en attente"
    },
    {
      id: 10,
      name: "Bob",
      username: "42",
      date: "30-04-2023",
      montant: 5000,
      statut: "en attente"
    },
  ];

  const columns = ["name", "username", "date", "montant", "statut"];

  return (
    <>
      {isMatch ? (
        <Stack spacing={6}>

          <Stack spacing={4} padding='8px'>

            <GraphicsPerformance
              titre='Performances'
              xAxisDataKey='date'
              dataPerformances={performance}
              stroke='#2d80c8'
              height={400} />

          </Stack>

          <Stack spacing={4} padding='0px 8px 8px 8px'>
            <Box className='{styles.performanceTitle}'>Performances de la journée</Box>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <Card
                  titre='Utilisateurs'
                  icone={FaUsers}
                />
                <Card
                  titre='Transactions'
                  icone={AiOutlineTransaction}
                />
              </Stack>
              <Stack direction="row" spacing={2}>
                <Card
                  titre='Visites'
                  icone={FaUsers}
                />
                <Card
                  titre='Pronostics'
                  icone={AiOutlineUnorderedList}
                />
              </Stack>


            </Stack>
          </Stack>

          <Stack spacing={4} className={styles.stacktable}>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
              <Box className='{styles.transactionsTitle}'>Transactions récentes</Box>
              <DateFilter onDateChange={handleDateChange} />
            </Stack>
            <Table data={data} columns={columns} action={true} />
          </Stack>
        </Stack>
      ) : (
        <>
          <Stack spacing={6}>
            <Title titre='Dashboard' />

            <Stack spacing={4}>

              <GraphicsPerformance
                titre='Performances'
                xAxisDataKey='date'
                dataPerformances={performance}
                stroke='#2d80c8'
                height={400} />

              <Box sx={{ width: '98%' }}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item xs={6}>

                    <GraphicsPerformance
                      titre='Performances Financières'
                      xAxisDataKey='date'
                      dataPerformances={finances}
                      stroke='#2dc830'
                      height={250} />

                  </Grid>

                  <Grid item xs={6}>

                    <GraphicsPerformance
                      titre='Performances des transactions'
                      xAxisDataKey='date'
                      dataPerformances={transactions}
                      stroke='#e020c6'
                      height={250} />

                  </Grid>
                </Grid>
              </Box>

            </Stack>

            <Stack spacing={3} className={styles.performance}>
              <Box className='{styles.performanceTitle}'>Performances de la journée</Box>
              <Stack direction="row" spacing={2}>
                <Card
                  titre='Utilisateurs'
                  icone={FaUsers}
                />
                <Card
                  titre='Transactions'
                  icone={AiOutlineTransaction}
                />
                <Card
                  titre='Visites'
                  icone={FaUsers}
                />
                <Card
                  titre='Pronostics'
                  icone={AiOutlineUnorderedList}
                />
              </Stack>
            </Stack>

            <Stack spacing={4} className={styles.stacktable}>
              <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Box className={styles.transactionsTitle}>Transactions récentes</Box>
                <DateFilter onDateChange={handleDateChange} />
              </Stack>
              <Box style={{margin:'1rem 3rem 1rem 0rem'}}>
                <Table data={data} columns={columns} />
              </Box>
            </Stack>
          </Stack>
        </>

      )}
    </>
  )
}
