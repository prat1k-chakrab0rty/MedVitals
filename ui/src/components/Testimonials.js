import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import Logo from '../assets/images/Logo.png';


const Card = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',width:"400px",height:"200px", backgroundColor: '#f5f5f9', p: 3, borderRadius: '4px', boxShadow: '-5px 5px 5px -3px lightgrey,5px 5px 5px -3px lightgrey' }}>
            <Typography fontWeight={500} variant='p'>My appointment experience was incredibly convenient. I didn't have to leave my house, which saved me time and made the whole process much easier. 
            The doctor was very attentive and addressed all my concerns thoroughly. 
            I felt just as cared for as I would in an in-person visit.</Typography>
            <Avatar sx={{ mt: 2 }} alt="Remy Sharp" src={Logo} />
            <Typography sx={{ mt: 1 }} variant='p'>Sinchu</Typography>
        </Box>
    );
}

function Testimonials() {
    return (
        <Box sx={{ pt: 8, pb: 5, mb: 2 }}>
            <Typography sx={{ textAlign: 'center', color: '#005071', fontWeight: 500 }} variant='h3'>Testimonials</Typography>
            <Box sx={{ my: 10,overflowX: 'hidden' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10,width:"150vw",mb:3 }}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Box>
            </Box>
        </Box>

    )
}

export default Testimonials