import { Box } from '@mui/material';
import React from 'react';
import LogoImg from '../assets/images/Logo.png';
import BrandName from '../assets/images/BrandName.png';

function Logo({logo,title,brightVal}) {
  return (
    <Box sx={{
        my: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img style={{ objectFit: 'contain',filter: `brightness(${brightVal}%)` }} src={logo} alt="logo" />
        <img style={{ objectFit: 'contain' }} src={title} alt="brand-name" />
      </Box>
  )
}

export default Logo