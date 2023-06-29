import React from 'react'
import { Stack, Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { MdDelete } from 'react-icons/md';
import '../styles/globals.css'

const DetailsUsers = () => {
    return (
        <Stack direction="column" spacing={6} justifyContent="space-between" className='card-details'>
            <Box className='avatar-detail'>
                <Avatar src="/broken-image.jpg" sx={{ width: 60, height: 60 }} />
            </Box>
            <Box>
                <Box className='box-details-user'>
                    <Box className='box-details-params'>Username</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Email</Box>
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
                    <Box className='box-details-params'>Statut</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>
                <Box className='box-details-user'>
                    <Box className='box-details-params'>Type pronostic</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Forfait</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Montant</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Mode de paiement</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Date de souscription</Box>
                    <Box className='box-details-value'>xx/xx/xxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Derniere connexion</Box>
                    <Box className='box-details-value'>xx/xx/xxxx</Box>
                </Box>

            </Box>
            <Box className='delete'>
                <IconButton size="large" sx={{color: '#fff'}}>
                    <MdDelete />
                </IconButton>
            </Box>

        </Stack>
    )
}

export default DetailsUsers
