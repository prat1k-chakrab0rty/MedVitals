import { Box, Grid2 as Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';

function Layout() {
    const location = useLocation();
    const [moduleNameVisibility, setmoduleNameVisibility] = useState(true);
    const [moduleName, setmoduleName] = useState("");

    useEffect(() => {
        const paths = location.pathname.split("/");
        const currentPage = paths[2];
        console.log(currentPage);
        setmoduleName(currentPage);
    }, [[location.pathname]])


    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Grid xs={12} sx={{ flexShrink: 0 }}>
                <AppNavbar moduleNameVisibility={moduleNameVisibility} setmoduleNameVisibility={setmoduleNameVisibility} />
            </Grid>
            <Grid container sx={{ flexGrow: 1, overflow: 'auto' }}>
                <Grid xs={1.5} sx={{ height: '100%', overflowY: 'hidden', flexShrink: 0 }}>
                    <Sidebar moduleNameVisibility={moduleNameVisibility} />
                </Grid>
                <Grid xs={10.5} sx={{ height: '100%', flexGrow: 1, overflowY: 'auto', padding: moduleName === "messages" ? 3 : 2, backgroundColor: moduleName === "messages" ? '#e7f0f5' : '#f5f5f9' }}>
                    <Outlet sx={{ width: "100%" }} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout