import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deletePredictRequest } from '../redux/predict/actions';
import '../styles/globals.css'
import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  backgroundColor: '#02090F',
  borderRadius: '8px',
  boxShadow: '0 0 12px 0 rgb(255, 254, 254)',
  p: 2,
};

export default function MatchDeleteModal({ open, onClose, itemId }) {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    dispatch(deletePredictRequest(itemId));
    onClose();
  };

  const handleCancelDelete = () => {
    onClose();
  };

  return (
    <div>

      <Box className='delete-alert'>
        <Box className='modal-title'>
          Confirmation de suppression
        </Box>
        <Box className='modal-description'>
          Voulez-vous vraiment supprimer cette prediction?
        </Box>
        <Stack direction='row' spacing={4} sx={{ marginTop: '1rem', padding: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          {isMatch ? (
            <>
              <Button variant="contained" onClick={handleCancelDelete} color='error' style={{ textTransform: 'none', fontSize: '12px' }}>
                Annuler
              </Button>
              <Button variant="contained" color='success' style={{ textTransform: 'none', fontSize: '12px' }} onClick={handleConfirmDelete}>
                Supprimer
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" onClick={handleCancelDelete} color='error' style={{ textTransform: 'none', fontSize: '16px' }}>
                Annuler
              </Button>
              <Button variant="contained" color='success' style={{ textTransform: 'none', fontSize: '16px' }} onClick={handleConfirmDelete}>
                Supprimer
              </Button>
            </>
          )}

        </Stack>
      </Box>

    </div>
  );
}