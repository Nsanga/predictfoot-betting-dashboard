import React from 'react'
import { Stack, Box, Button, IconButton } from '@mui/material'
import { MdOutlineClose } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'
import '../styles/globals.css'

const DetailUserTransaction = () => {
    return (
        <Stack direction="column" spacing={4} justifyContent="space-between" className='card-details'>
            <Box className='detail-transaction'>
                <Box>Détails de la transaction</Box>
                <Button sx={{color:'#fff'}}><MdOutlineClose /></Button>
            </Box>

            <Box>
                <Box className='amount-transaction'><span>0000</span> XAF</Box>
                <Stack direction="row" spacing={2} alignItems='center' justifyContent='space-between'>
                    <Box className='box-details-user'>
                        <Box className='box-details-params' marginRight='.2rem'>
                            Id :
                        </Box>
                        <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                    </Box>
                    <Button variant="contained" startIcon={<HiDownload />} style={{ textTransform: 'none' }}>
                        Télécharger
                    </Button>
                </Stack>
            </Box>
            <Box>
                <Box className='box-details-user'>
                    <Box className='box-details-params'>Username</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Telephone</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Pays</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Heure</Box>
                    <Box className='box-details-value'>xx : xx </Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Statut</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>


                <Box className='box-details-user'>
                    <Box className='box-details-params'>Operateur</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

            </Box>
        </Stack>
    )
}

export default DetailUserTransaction
