import { Box, Grid2 as Grid } from '@mui/material';
import React from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';

function Layout() {
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Grid xs={12} sx={{ flexShrink: 0 }}>
            <AppNavbar />
        </Grid>
        <Grid container sx={{ flexGrow: 1, overflow: 'auto' }}>
            <Grid xs={1.5} sx={{ height: '100%', overflowY: 'hidden' }}>
                <Sidebar />
            </Grid>
            <Grid xs={10.5} sx={{ height: '100%', overflowY: 'auto' }}>
                <Outlet />
            </Grid>
        </Grid>
    </Box>
    )
}

export default Layout