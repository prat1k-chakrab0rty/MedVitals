import { Box, Grid2 as Grid } from '@mui/material';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';

function Layout() {
    const [moduleNameVisibility, setmoduleNameVisibility] = useState(true);
    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Grid xs={12} sx={{ flexShrink: 0 }}>
                <AppNavbar moduleNameVisibility={moduleNameVisibility} setmoduleNameVisibility={setmoduleNameVisibility}/>
            </Grid>
            <Grid container sx={{ flexGrow: 1, overflow: 'auto' }}>
                <Grid xs={1.5} sx={{ height: '100%', overflowY: 'hidden', flexShrink: 0 }}>
                    <Sidebar moduleNameVisibility={moduleNameVisibility}/>
                </Grid>
                <Grid xs={10.5} sx={{ height: '100%', flexGrow: 1, overflowY: 'auto', padding: 2, backgroundColor: '#f5f5f9' }}>
                    <Outlet />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout