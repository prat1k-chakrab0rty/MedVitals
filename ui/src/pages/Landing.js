import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import SpecialityServices from '../components/SpecialityServices';
import Blogs from '../components/Blogs';
import Testimonials from '../components/Testimonials';

function Landing() {
    return (
        <>
            <Navbar />
            <Banner />
            <HowItWorks />
            <WhyChooseUs />
            <SpecialityServices />
            <Blogs />
            <Testimonials />
            <Footer />
        </>

    );
}

export default Landing;