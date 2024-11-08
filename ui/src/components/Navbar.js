import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BrandLogo from '../assets/images/Logo.png';
import BrandName from '../assets/images/BrandName.png';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';
import SignInDrawer from './SignInDrawer';

const pages = ['Home', 'About Us', 'Contact Us'];
const links = ['/', '/app/dashboard', '/contact-us'];

function Navbar() {
  const location = useLocation();
  const [activePage, setactivePage] = useState("");
  const [drawerOpen, setdrawerOpen] = useState(false);

  // Update active page based on the current path
  useEffect(() => {
    const currentPath = location.pathname;
    const currentPage = pages[links.indexOf(currentPath)] || "Home";
    setactivePage(currentPage);
  }, [location.pathname]);

  return (
    <Box sx={{ height: "72px" }}>
      <AppBar sx={{ backgroundColor: '#ffffff', color: '#a49f9c' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100', marginX: 25 }}>
          <Logo logo={BrandLogo} title={BrandName} brightVal={"100%"} />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
            {pages.map((page, i) => (
              <Link key={page} onClick={() => { page === "About Us" && localStorage.setItem("userRole", "doctor"); setactivePage(page); }} to={links[i]} style={{ textDecoration: 'none' }}>
                <Typography noWrap sx={{ textAlign: 'center', cursor: 'pointer', fontWeight: 600, color: activePage === page ? '#004a6a' : '#a49f9c' }}>{page}</Typography>
              </Link>
            ))}
          </Box>
          <Box>
            <Button onClick={() => setdrawerOpen(true)} sx={{ backgroundColor: '#00b7b4', marginY: 2, fontSize: 13, textTransform: 'none', color: '#ffffff' }}>Sign up/Sign in</Button>
            <SignInDrawer setdrawerOpen={setdrawerOpen} drawerOpen={drawerOpen} />
          </Box>
        </Box>
      </AppBar >
    </Box >
  );
}
export default Navbar;
