import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BrandLogo from '../assets/images/Logo.png';
import BrandName from '../assets/images/BrandName.png';
import Logo from './Logo';
import { Avatar, Badge, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';


function AppNavbar() {

  const [anchorElementForNotificationMenu, setAnchorElementForNotificationMenu] = useState(null);
  const [anchorElementForProfileMenu, setAnchorElementForProfileMenu] = useState(null);
  const openNotificationMenu = Boolean(anchorElementForNotificationMenu);
  const openProfileMenu = Boolean(anchorElementForProfileMenu);

  const handleNotificationClick = (event) => {
    setAnchorElementForNotificationMenu(event.currentTarget);
  };

  const handleProfileClick = (event) => {
    setAnchorElementForProfileMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElementForNotificationMenu(null);
    setAnchorElementForProfileMenu(null);
  };

  return (
    <Box sx={{ height: "72px" }}>
      <AppBar sx={{ backgroundColor: '#ffffff', color: "#000000" }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100', marginX: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Logo logo={BrandLogo} title={BrandName} brightVal={"100%"} gapVal={4} />
            <MenuIcon sx={{ cursor: 'pointer' }} />
          </Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Badge id="notification-button" aria-controls={openNotificationMenu ? 'notification-menu' : undefined} aria-haspopup="true" aria-expanded={openNotificationMenu ? 'true' : undefined} onClick={handleNotificationClick} sx={{ cursor: 'pointer' }} overlap="circular" color="error" variant="dot">
                <NotificationsIcon sx={{ color: '#445363' }} />
              </Badge>
              {/* Notification Menu */}
              <Menu
                sx={{
                  '.MuiList-root': {
                    padding: 0,
                  }
                }}
                transformOrigin={{
                  horizontal: 'right',
                  vertical: 'top',
                }}
                anchorOrigin={{
                  horizontal: 'right',
                  vertical: 'bottom',
                }}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 3
                    }
                  }
                }}
                id="notification-menu"
                anchorEl={anchorElementForNotificationMenu}
                open={openNotificationMenu}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'notification-button',
                }}
              >
                <MenuItem divider autoFocus sx={{ py: 1, backgroundColor: '#f1fbff !important', display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center', cursor: 'default' }} onClick={handleClose}>
                  <Typography variant='p'>Notifications</Typography> <DraftsIcon />
                </MenuItem>
                <MenuItem sx={{ '.MuiBox-root': { width: "100%" }, py: 2, width: "380px" }} divider onClick={handleClose}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
                    <Typography variant='p'>Payment recieved from Dhaka.</Typography>
                    <Typography fontSize={12} color='text.secondary' variant='p'>1h ago</Typography>
                  </Box>
                </MenuItem>
                <MenuItem sx={{ '.MuiBox-root': { width: "100%" }, py: 2, width: "380px" }} divider onClick={handleClose}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
                    <Typography variant='p'>Payment recieved from Mumbai.</Typography>
                    <Typography fontSize={12} color='text.secondary' variant='p'>1h ago</Typography>
                  </Box>
                </MenuItem>
                <MenuItem sx={{ '.MuiBox-root': { width: "100%" }, py: 2, width: "380px" }} divider onClick={handleClose}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
                    <Typography variant='p'>Payment recieved from Moscow.</Typography>
                    <Typography fontSize={12} color='text.secondary' variant='p'>1h ago</Typography>
                  </Box>
                </MenuItem>
                <MenuItem sx={{ '.MuiBox-root': { width: "100%" }, py: 2, width: "380px" }} divider onClick={handleClose}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
                    <Typography variant='p'>Payment recieved from San Fransisco.</Typography>
                    <Typography fontSize={12} color='text.secondary' variant='p'>1h ago</Typography>
                  </Box>
                </MenuItem>
                <MenuItem divider sx={{ py: 1.5, display: 'flex', justifyContent: 'center' }} onClick={handleClose}>
                  <Typography fontSize={12} fontWeight={500} color='primary' textAlign="center" component="div" variant='p'>View All</Typography>
                </MenuItem>
              </Menu>
              {/* Notification Menu ends here */}
              <Typography sx={{ fontSize: 40, fontWeight: 200, color: '#e5f8f7', mx: 1 }} variant='h6'>|</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', ml: 2 }}>
                <Typography pb={0.3} variant='p' component="div">Dr. Parth</Typography>
                <Typography sx={{ color: '#ababab', fontSize: 12 }} variant='p' component="div">Doctor</Typography>
              </Box>
              <Avatar sx={{ cursor: 'pointer' }}>P</Avatar>
              <ArrowDropDownIcon id="profile-button" aria-controls={openProfileMenu ? 'profile-menu' : undefined} aria-haspopup="true" aria-expanded={openProfileMenu ? 'true' : undefined} onClick={handleProfileClick} sx={{ color: '#445363', cursor: 'pointer' }} />
              {/* Profile Menu */}
              <Menu
                sx={{
                  '.MuiList-root': {
                    padding: 0,
                  },
                  width: "400px"
                }}
                transformOrigin={{
                  horizontal: 'right',
                  vertical: 'top',
                }}
                anchorOrigin={{
                  horizontal: 'right',
                  vertical: 'bottom',
                }}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 3
                    }
                  }
                }}
                id="profile-menu"
                anchorEl={anchorElementForProfileMenu}
                open={openProfileMenu}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'profile-button',
                }}
              >
                <MenuItem sx={{ py: 1, display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'space-between' }} divider>
                  <Typography variant='p' sx={{ fontSize: 15 }}>My Profile</Typography>
                  <AccountCircleIcon sx={{ color: '#445363' }} />
                </MenuItem>
                <MenuItem sx={{ py: 1, display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'space-between' }} divider>
                  <Typography variant='p' sx={{ fontSize: 15 }}>Notification Settings</Typography>
                  <SettingsIcon sx={{ color: '#445363' }} />
                </MenuItem>
                <MenuItem autoFocus divider sx={{ py: 1, display: 'flex', justifyContent: 'center', backgroundColor: '#ffffff !important' }} onClick={handleClose}>
                  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography fontSize={15} fontWeight={500} color='primary' textAlign="center" component="div" variant='p'>Logout</Typography>
                  </Link>
                </MenuItem>
              </Menu>
              {/* Profile Menu Ends Here */}
            </Box>
          </Box>
        </Box>
      </AppBar >
    </Box >
  );
}
export default AppNavbar;
