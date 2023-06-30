import React from 'react'
import { Stack, Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {MdDelete} from 'react-icons/md';
// import '../styles/globals.css'

const DetailsUsersBlog = () => {
    return (
        <Stack direction="column" spacing={6} justifyContent="space-between" className='card-details'>
            <Box className='avatar-detail'>
                <Avatar src="/broken-image.jpg" sx={{ width: 60, height: 60 }} />
            </Box>
            <Box>
                <Box className='box-details-user'>
                    <Box className='box-details-params'>Auteur</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Date</Box>
                    <Box className='box-details-value'>xx/xx/xxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Titre</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Image</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>

                <Box className='box-details-user'>
                    <Box className='box-details-params'>Preambule</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
                </Box>
                <Box className='box-details-user'>
                    <Box className='box-details-params'>Description</Box>
                    <Box className='box-details-value'>xxxxxxxxxxxxx</Box>
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

export default DetailsUsersBlog
