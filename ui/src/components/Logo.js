import { Box } from '@mui/material';
import React from 'react';

function Logo({ logo, title, brightVal, gapVal }) {
  return (
    <Box sx={{
      my: 2,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: gapVal ? gapVal : 1
    }}>
      <img style={{ objectFit: 'contain', filter: `brightness(${brightVal}%)` }} src={logo} alt="logo" />
      <img style={{ objectFit: 'contain' }} src={title} alt="brand-name" />
    </Box>
  )
}

export default Logo