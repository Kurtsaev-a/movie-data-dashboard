import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
    return (
        <Box sx={{ height: 400, margin: 'auto', display: 'flex', justifyContent: 'center', padding: '25px' }}>
        <CircularProgress sx={{ marginTop: '180px', color: 'white' }}/>
      </Box>
    );
  }