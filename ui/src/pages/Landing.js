import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid2';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';

function Landing() {
    return (
        <>
            <Navbar />
            <Banner />
            <HowItWorks />
            <Footer />
        </>

    );
}

export default Landing;