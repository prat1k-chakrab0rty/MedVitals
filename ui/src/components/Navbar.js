import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BrandLogo from '../assets/images/Logo.png';
import BrandName from '../assets/images/BrandName.png';
import Logo from './Logo';

const pages = ['Home', 'About Us', 'Contact Us'];

function Navbar() {
  const [activePage, setactivePage] = useState("Home");

  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#ffffff', color: '#a49f9c' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100', marginX: 25 }}>
          <Logo logo={BrandLogo} title={BrandName} brightVal={"100%"}/>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            {pages.map((page) => (
              <Typography noWrap component="a" key={page} sx={{ textAlign: 'center', cursor: 'pointer', fontWeight: 600, color: activePage === page ? '#004a6a' : '#a49f9c' }}>{page}</Typography>
            ))}
          </Box>
          <Box>
            <Button sx={{ backgroundColor: '#00b7b4', marginY: 2, fontSize: 13, textTransform: 'none', color: '#ffffff' }}>Sign up/Sign in</Button>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
export default Navbar;
