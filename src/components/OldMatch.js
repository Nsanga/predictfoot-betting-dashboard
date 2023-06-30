import React, { useState } from 'react'
import { Box, IconButton, Modal, Stack } from '@mui/material'
import { useMediaQuery, useTheme } from '@material-ui/core';
import { FaPen } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
// import '../styles/globals.css'
import moment from 'moment';
import MatchDeleteModal from './MatchDeleteModal';

moment.locale('fr');
const OldMatch = ({ size, sizeCoast, width, height, predicts }) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const handleDelete = (id) => {
        setDeleteItemId(id);
        setOpenDeleteModal(true);
    };

    const handleCloseModal = () => {
        setDeleteItemId(null);
        setOpenDeleteModal(false);
    };

    return (
        <>
            {isMatch ? (
                <Stack direction='column' marginLeft='-1rem' marginRight='-1rem'>
                    {predicts?.map((match, index) => (
                        <Stack key={index} direction='column' spacing={4} className='stack-head-resp'>

                            <Stack direction='row' spacing={2} alignItems='center' justifyContent='space-between'>
                                <Box className='box-champ' fontSize={size}>
                                    <img
                                        src={match.country.flag}
                                        alt='flag'
                                        width={15}
                                        height={15}
                                        style={{ objectFit: 'contain', margin: '0rem 1rem 0rem 1rem' }}
                                        priority />
                                    <Box fontSize={size}>
                                        {match.country.name}, {match.championship.name}
                                        <Box>{moment(match.date).format('L')}</Box>
                                    </Box></Box>

                                <Stack direction='row' >
                                    <IconButton><FaPen color='#fff' fontSize={size} /></IconButton>
                                    <IconButton onClick={() => handleDelete(match._id)}><MdDelete color='#fff' fontSize={size} /></IconButton>
                                </Stack>
                            </Stack>

                            <Stack direction='row' spacing={4} className='stack-time-resp'>


                                <Stack direction='row' spacing={2} className='stack-team'>

                                    <Box className='box-team-resp'>
                                        <Box style={{ width: { width }, height: { height } }}>
                                            <img
                                                src={match.fixture.homeTeam.logo}
                                                alt="logo"
                                                width={width}
                                                height={height}
                                                style={{ objectFit: 'contain', margin: '1rem' }}
                                                priority />
                                        </Box>
                                        <Box textAlign='center' fontSize={size}>{match.fixture.homeTeam.team_name}</Box>
                                    </Box>
                                    <Box fontSize='1rem' fontWeight='bold'>-</Box>
                                    <Box className='box-team-resp'>
                                        <Box style={{ width: { width }, height: { height } }}>
                                            <img
                                                src={match.fixture.awayTeam.logo}
                                                alt="logo"
                                                width={width}
                                                height={height}
                                                style={{ objectFit: 'contain', margin: '1rem' }}
                                                priority />
                                        </Box>
                                        <Box textAlign='center' fontSize={size}>{match.fixture.awayTeam.team_name}</Box>
                                    </Box>
                                </Stack>
                                <Box fontSize={sizeCoast}>{match.coast}</Box>

                            </Stack>
                        </Stack>
                    ))}
                    <Modal open={openDeleteModal} onClose={handleCloseModal}>
                        <MatchDeleteModal
                            open={openDeleteModal}
                            onClose={handleCloseModal}
                            itemId={deleteItemId}
                        />
                    </Modal>

                </Stack>
            ) : (
                <>
                    {predicts?.map((match, index) => (
                        <Stack key={index} direction='column' justifyContent='center'>

                            <Box className='box-champ' fontSize={size}>
                                <img
                                    src={match.country.flag}
                                    alt='flag'
                                    width={20}
                                    height={20}
                                    style={{ objectFit: 'contain', margin: '0rem 1rem 0rem 1rem' }}
                                    priority />
                                {match.country.name}, {match.championship.name}</Box>

                            <Stack direction='column' className='stack-time'>

                                <Box className='box-time' fontSize={size}>
                                    <Box>{moment(match.date).format('L')}</Box>
                                    <Box>
                                        <IconButton><FaPen color='#fff' fontSize={size} /></IconButton>
                                        <IconButton onClick={() => handleDelete(match._id)}><MdDelete color='#fff' fontSize={size} /></IconButton>
                                    </Box>
                                </Box>
                                <Stack direction='row' spacing={2} className='stack-team'>

                                    <Stack direction='row' spacing={4} alignItems='center'>
                                        <Box className='box-team'>
                                            <img
                                                src={match.fixture.homeTeam.logo}
                                                alt="logo"
                                                width={width}
                                                height={height}
                                                style={{ objectFit: 'contain', margin: '1rem' }}
                                                priority />
                                            <Box fontSize={size}>{match.fixture.homeTeam.team_name}</Box>
                                        </Box>
                                        <Box fontSize='1rem' fontWeight='bold'>-</Box>
                                        <Box className='box-team'>
                                            <img
                                                src={match.fixture.awayTeam.logo}
                                                alt="logo"
                                                width={width}
                                                height={height}
                                                style={{ objectFit: 'contain', margin: '1rem' }}
                                                priority />
                                            <Box fontSize={size}>{match.fixture.awayTeam.team_name}</Box>
                                        </Box>
                                    </Stack>
                                    <Box fontSize={sizeCoast}>
                                        {match.coast}
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>
                    ))}
                    <Modal open={openDeleteModal} onClose={handleCloseModal}>
                        <MatchDeleteModal
                            open={openDeleteModal}
                            onClose={handleCloseModal}
                            itemId={deleteItemId}
                        />
                    </Modal>
                </>
            )}
        </>

    )
}

export default OldMatch
