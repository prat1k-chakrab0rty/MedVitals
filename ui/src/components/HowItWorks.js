import { Box, Typography } from '@mui/material';
import React from 'react';
import Card from './Card';
import CardIcon1 from '../assets/images/CardIcon1.png';
import CardIcon2 from '../assets/images/CardIcon2.png';
import CardIcon3 from '../assets/images/CardIcon3.png';

const cards = [
    {
        title: 'Sign Up and Profile Creation Register',
        description: `Doctors and patients can sign up by providing their relevant information.
                    Both doctors and patients will create their profiles. Doctors will list their
                    specialties, experience, and availability, while patients will fill out their
                    medical history and any current medications.`,
        bubbleColor: '#c8f4ff',
        backGroundColor: '#e4faff',
        cardIcon:CardIcon1
    },
    {
        title: 'Book and Schedule Appointments',
        description: `Doctors will set their available time slots, and patients can search for doctors
         by specialty, location, or rating. Patients will select a convenient time slot from the available
          options and confirm their appointment. `,
        bubbleColor: '#f9c5dc',
        backGroundColor: '#ffd9ea',
        cardIcon:CardIcon2
    },
    {
        title: 'Consultation and Follow-Up',
        description: `Join Consultation at the scheduled time, both doctors and patients will join the video
         call through our secure platform.During the consultation, doctors will provide medical advice, e-prescriptions, 
         and follow-up care instructions. Patients will receive professional guidance and necessary treatments.`,
        bubbleColor: '#fcdeb7',
        backGroundColor: '#ffebd1',
        cardIcon:CardIcon3
    }

];

function HowItWorks() {
    return (
        <Box sx={{ py: 5, mt: 5 }}>
            <Typography sx={{ textAlign: 'center', color: '#005071', fontWeight: 500 }} variant='h3'>How it works!</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 14,my:5 }}>
                {cards.map(card => (
                    <Card key={card.title} title={card.title} description={card.description} bubbleColor={card.bubbleColor} backGroundColor={card.backGroundColor} cardIcon={card.cardIcon} />
                ))}
            </Box>
        </Box>
    )
}

export default HowItWorks