import { Box, Typography } from '@mui/material';
import React from 'react';
import DoctorProfilePictureLg from '../assets/images/DoctorProfilePictureLg.png';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from 'react-router-dom';

function DoctorCard() {
    const navigate = useNavigate();
    return (
        <Box sx={{ backgroundColor: '#ffffff', width: 200, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, p: 2 }}>
            <img onClick={() => navigate("/app/doctor")} style={{ cursor: 'pointer' }} src={DoctorProfilePictureLg} alt='doctor-img' />
            <Typography variant='h6' color='text.secondary'>Dr. Charita</Typography>
            <Typography color='text.secondary' fontSize={15} mt={-1}>Diabetics</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {[1, 2, 3, 4, 5].map(s => (<StarIcon key={s} sx={{ color: '#d7db16', fontSize: 15 }} />))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <CallIcon sx={{ color: '#1987a6', cursor: 'pointer' }} />
                <VideocamIcon sx={{ color: '#1987a6', cursor: 'pointer' }} />
                <MessageIcon sx={{ color: '#1987a6', cursor: 'pointer' }} />
            </Box>
        </Box>
    )
}


function FellowDoctors() {
    return (
        <Box>
            <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>Doctors List</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', width: '100%', gap: 6.205 }}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(d => (
                    <DoctorCard key={d} />
                ))}
            </Box>
        </Box>
    )
}

export default FellowDoctors