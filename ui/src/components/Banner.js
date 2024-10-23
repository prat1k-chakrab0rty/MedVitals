import { Box, Button } from '@mui/material';
import React from 'react'
import Gradient from '../assets/images/Gradient.png';
import Doctor_With_Laptop from '../assets/images/Doctor_With_Laptop.png';

function Banner() {
  return (
    <Box sx={{ position: 'relative'}}>
      <img src={Gradient} style={{ width: "100%" }}  alt='gradient' />
      <img
        src={Doctor_With_Laptop}
        style={{
          position: 'absolute',
          top: '290px', // Adjust this value as needed
          right: '360px', // Adjust this value as needed
          width: '150px', // Set width to control size
          height: 'auto', // Maintain aspect ratio
          transform: 'scale(5.8)' // Optional scale for effect
        }}
        alt='doctor_with_laptop'
      />
      <Box sx={{
        position: 'absolute',
        top: '300px', // Adjust this value as needed
        left: '400px', // Adjust this value as needed
        height: 'auto', // Maintain aspect ratio
        transform: 'scale(2.25)', // Optional scale for effect
        color: '#005071',
        gap: 0
      }}>
        <h1 style={{ margin: 0 }}>Book Your Doctor<br />Appointment<br />Online</h1>
        <Button sx={{ my: 0, backgroundColor: '#d81b60',py:"3px",fontSize:8,fontWeight:400,px:2.5, textTransform: 'none', color: '#ffffff' }}>Book Appointment Now</Button>
      </Box>
    </Box>
  )
}

export default Banner;