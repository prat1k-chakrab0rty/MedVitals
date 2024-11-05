import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo({ pointer, logo, title, brightVal, gapVal }) {
  const navigate = useNavigate();
  return (
    <Box sx={{
      my: 2,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: gapVal ? gapVal : 1
    }}>
      <img onClick={pointer ? () => navigate("/app/") : undefined} style={{ objectFit: 'contain', filter: `brightness(${brightVal}%)`, cursor: pointer ? 'pointer' : 'default' }} src={logo} alt="logo" />
      <img onClick={pointer ? () => navigate("/app/") : undefined} style={{ objectFit: 'contain', cursor: pointer ? 'pointer' : 'default' }} src={title} alt="brand-name" />
    </Box>
  )
}

export default Logo