import { Box, Chip, Switch, Typography } from '@mui/material';
import React from 'react';

const notifications = [
    "Appointment Reminders", "Appointment Request Reminders", "Payment Reminders", "Message Reminders", "New Blog Reminders"
];

const switchLabel = { inputProps: { 'aria-label': 'Switch demo' } };

function NotificationSettings() {
    return (
        <Box>
            <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>Notification Settings</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {
                    notifications.map(n => (
                        <Chip sx={{
                            "& .MuiChip-label": {
                                width: '100%', color: 'text.secondary'
                            },
                            backgroundColor: '#ffffff',
                            py: 3
                        }} key={n}
                            prop
                            label={
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                                    <Typography>{n}</Typography>
                                    <Switch {...switchLabel} />
                                </Box>
                            }

                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default NotificationSettings