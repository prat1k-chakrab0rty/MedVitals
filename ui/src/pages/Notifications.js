import React from 'react';
import { Box, Chip, Switch, Typography } from '@mui/material';

const notifications = [
    {
        title: 'Next Appointment in 15 mins',
        time: '1h ago'
    },
    {
        title: 'Dr. Vansh sent a message',
        time: '1h ago'
    },
    {
        title: 'Pravin cancelled appointment',
        time: '1h ago'
    },
    {
        title: 'Roshni cancelled appointment',
        time: '1h ago'
    },
    {
        title: 'Roshni cancelled appointment',
        time: '1h ago'
    },
    {
        title: 'Next Appointment in 15 mins',
        time: '1h ago'
    },
    {
        title: 'Next Appointment in 15 mins',
        time: '1h ago'
    },
    {
        title: 'Dr. Hardeep sent a message',
        time: '1h ago'
    },
];

function Notifications() {
    return (
        <Box>
            <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>Notifications</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {
                    notifications.map(n => (
                        <Chip sx={{
                            "& .MuiChip-label": {
                                width: '100%', color: 'text.secondary'
                            },
                            backgroundColor: '#ffffff',
                            py: 5
                        }} key={n}
                            prop
                            label={
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                        <Typography>{n.title}</Typography>
                                        <Typography sx={{ fontSize: 15 }}>Description</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: 15 }}>{n.time}</Typography>
                                </Box>
                            }

                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default Notifications