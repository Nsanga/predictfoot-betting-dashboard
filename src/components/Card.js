import { Box, Stack } from '@mui/material'
import React from 'react';
// import '../styles/globals.css'

const Card = ({ titre, icone }) => {
    return (
        <Stack spacing={2} className='card'>
            <Box>{titre}</Box>
            <Box className='card-icons'>{React.createElement(icone)}</Box>
        </Stack>
    )
}

export default Card
