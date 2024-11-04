import { Box, Typography } from '@mui/material';
import React from 'react';
import DoctorProfilePictureXL from '../assets/images/DoctorProfilePictureXL.png';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import MessageIcon from '@mui/icons-material/Message';

function DoctorProfile() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff',height:"100%",px:8,gap:2 }}>
            <img src={DoctorProfilePictureXL} alt='doctor-img' />
            <Typography variant='h4'>Dr. Charita</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <MessageIcon sx={{ color: '#1987a6', cursor: 'pointer' }} />
                <CallIcon sx={{ color: '#1987a6', cursor: 'pointer' }} />
                <VideocamIcon sx={{ color: '#1987a6', cursor: 'pointer' }} />
            </Box>
            <Typography variant='h4'>Diabetic Specialist</Typography>
            <Typography color='text.secondary' variant='h6'>8 Years Experience</Typography>
            <Typography textAlign={'center'} color='text.secondary' variant='h6'>I'm Dr. Charita, your dedicated diabetes specialist here to support you through telemedicine. With personalized care and empowering guidance, I'm committed to helping you manage your condition effectively and live a healthier, fuller life."</Typography>
        </Box>
    )
}

export default DoctorProfile