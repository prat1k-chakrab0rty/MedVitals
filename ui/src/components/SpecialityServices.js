import { Box, Typography } from '@mui/material';
import React from 'react';
import SmilingDoctor from '../assets/images/SmilingDoctor.png';
import PhysiologistLogo from '../assets/images/PhysiologistLogo.png';
import DermatologistLogo from '../assets/images/DermatologistLogo.png';
import NutritionistLogo from '../assets/images/NutritionistLogo.png';
import CardiologistLogo from '../assets/images/CardiologistLogo.png';
import GynecologistLogo from '../assets/images/GynecologistLogo.png';
import NeurologistLogo from '../assets/images/NeurologistLogo.png';


const cardsLeft = [
    {
        title: 'Physiologist',
        logo: PhysiologistLogo,
        desc: `Our physiologists specialize in studying how the body works 
        under various conditions, offering tailored advice and guidance
         remotely through secure and convenient telemedicine consultations.`
    },
    {
        title: 'Dermatologist',
        logo: DermatologistLogo,
        desc: `Our dermatologists specialize in diagnosing and treating skin, 
        hair, and nail conditions, providing expert care and treatment plans 
        conveniently through secure telemedicine consultations.`
    },
    {
        title: 'Nutritionist',
        logo: NutritionistLogo,
        desc: `Our nutritionists offer personalized dietary advice and nutrition 
        plans to help you achieve your health goals, all through convenient and 
        secure telemedicine consultations.`
    },
];

const cardsRight = [
    {
        title: 'Cardiologist',
        logo: CardiologistLogo,
        desc: `Our cardiologists specialize in diagnosing and treating heart and 
        cardiovascular conditions, providing expert care and management through 
        convenient and secure consultations.`
    },
    {
        title: 'Gynecologist',
        logo: GynecologistLogo,
        desc: `Our gynecologists provide compassionate care and expertise in women's 
        reproductive health, offering confidential and convenient telemedicine 
        consultations for your comfort and convenience.`
    },
    {
        title: 'Neurologist',
        logo: NeurologistLogo,
        desc: `Our neurologists specialize in diagnosing and treating disorders of 
        the nervous system, providing expert care and management through secure and 
        convenient telemedicine consultations.`
    },
];

const MiniCard = ({ card }) => {
    return (
        <Box sx={{ width: '420px' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
                <img src={card.logo} alt='logo' />
                <Typography color='#1d918f' fontWeight={600} textAlign={'center'} component="div" variant='p'>{card.title}</Typography>
            </Box>
            <Typography color='textSecondary' fontWeight={400} textAlign={'center'} variant='p'>
                {card.desc}
            </Typography>
            <hr style={{ margin: '18px 0', height: '3px', color: '#f1f1f1', backgroundColor: '#f1f1f1', border: 'none' }} />
        </Box>
    )
};

function SpecialityServices() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mx: 30,mb: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {cardsLeft.map(card => (
                    <MiniCard key={card.title} card={card} />
                ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '600px', width: '600px' }}>
                <img style={{ position: 'absolute', margin: 'auto', zIndex: 1, top: '100px' }} src={SmilingDoctor} alt="doctor-with-a-smile" />
                <Box sx={{ position: 'absolute', width: '360px', height: '360px', border: '1px solid #9fe4e3', borderRadius: '180px' }}></Box>
                <Box sx={{ position: 'absolute', width: '410px', height: '410px', border: '1px solid #9fe4e3', borderRadius: '205px' }}></Box>
                <Box sx={{ position: 'absolute', width: '460px', height: '460px', border: '1px solid #9fe4e3', borderRadius: '230px' }}></Box>
            </Box>
            <Box>
                {cardsRight.map(card => (
                    <MiniCard key={card.title} card={card} />
                ))}
            </Box>
        </Box>
    )
}

export default SpecialityServices