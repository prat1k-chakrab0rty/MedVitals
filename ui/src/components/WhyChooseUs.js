import { Box, Typography } from '@mui/material'
import React from 'react'

const cards = [
    {
        title: "7 +",
        titleColor: "#d62323",
        desc: "Years Experience",
    },
    {
        title: "24/7",
        titleColor: "#77c823",
        desc: "Consultation",
    },
    {
        title: "50+",
        titleColor: "#00b7b4",
        desc: "Doctors",
    },
    {
        title: "20,000",
        titleColor: "#d81b60",
        desc: "Active Patients",
    },
    {
        title: "95%",
        titleColor: "#d7db16",
        desc: "Satisfaction Rating",
    },
];

const MiniCard = ({ card }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', border: '2px solid #e4e0e0', borderRadius: '12px', width:'200px',py:3 }}>
            <Typography color={card.titleColor} textAlign={'center'} component="div" variant='h3'>{card.title}</Typography>
            <Typography color='textSecondary' textAlign={'center'} variant='h6'>{card.desc}</Typography>
        </Box>
    );
}

function WhyChooseUs() {
    return (
        <Box sx={{pt:8,pb:5,backgroundColor:'#f8f6f8',mb:6}}>
            <Typography sx={{ textAlign: 'center', color: '#005071', fontWeight: 500 }} variant='h3'>Why Choose Us ?</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 5 ,mx:30 }}>
                {cards.map(card => (
                    <MiniCard key={card.title} card={card} />
                ))}
            </Box>
        </Box>
    )
}

export default WhyChooseUs