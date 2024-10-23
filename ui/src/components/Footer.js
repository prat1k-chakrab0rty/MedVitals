import { Box, Typography } from '@mui/material';
import React from 'react';
import BrandLogo from '../assets/images/Logo1.png';
import BrandName from '../assets/images/BrandTitle.png';
import Logo from './Logo';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

function Footer() {
    return (
        <Box sx={{ backgroundColor: '#004a6a', color: '#ffffff', px: 15 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', py: 8 }}>
                <Box sx={{ my: 'auto' }}>
                    <Logo logo={BrandLogo} title={BrandName} brightVal={"150"} />
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
                    <Typography variant='h5' sx={{ mb: 1 }}>Services</Typography>
                    <Typography>Privacy Policy</Typography>
                    <Typography>Our Policies</Typography>
                    <Typography>Contact Us</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
                    <Typography variant='h5' sx={{ mb: 1 }}>About Us</Typography>
                    <Typography>Our Story</Typography>
                    <Typography>FAQ's</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
                    <Typography variant='h5' sx={{ mb: 1 }}>Follow us</Typography>
                    <Box sx={{display:'flex',gap:1}}>
                    <FacebookOutlinedIcon/>
                    <FacebookOutlinedIcon/>
                    <FacebookOutlinedIcon/>
                    <FacebookOutlinedIcon/>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'center', pb: 2 }}>
                <Typography variant='h6' sx={{ fontWeight: '400' }}>Copyright ©️ 2024 MedVitals.All rights reserved.</Typography>
            </Box>
        </Box>
    )
}

export default Footer