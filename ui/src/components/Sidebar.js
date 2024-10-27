import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person2Icon from '@mui/icons-material/Person2';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ForumIcon from '@mui/icons-material/Forum';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const [activePage, setactivePage] = useState("");

  const moduleMap = [
    {
      name: "Dashboard",
      url: "dashboard",
      icon: <DashboardIcon />
    },
    {
      name: "Appointments",
      url: "appointments",
      icon: <CalendarMonthIcon />
    },
    {
      name: "My Patients",
      url: "my-patients",
      icon: <Person2Icon />
    },
    {
      name: "Requests",
      url: "requests",
      icon: <PersonAddAltIcon />
    },
    {
      name: "Messages",
      url: "messages",
      icon: <ForumIcon />
    },
    {
      name: "Blogs",
      url: "blogs",
      icon: <ViewQuiltIcon />
    },
    {
      name: "Payments",
      url: "payments",
      icon: <PaymentIcon />
    },
  ];


  useEffect(() => {
    const currentPage = location.pathname.split("/")[2];
    setactivePage(moduleMap.find(m => currentPage === m.url).url);
  }, [location.pathname]);

  return (
    <Box sx={{ backgroundColor: '#004a6a', color: 'white', display: 'flex', flexDirection: 'column', gap: 1, height: '100%', py: 2 }}>
      {moduleMap.map(m => (
        <Link key={m.url} to={`/app/${m.url}`} style={{ textDecoration: 'none', color: 'inherit', margin: "0 15px", borderRadius: "4px", backgroundColor: activePage === m.url ? "#227d9f" : "inherit" }}>
          <Box sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center', gap: 2, mx: 2, py: 2 }}>
            {m.icon}
            <Typography fontWeight={400} variant='h6'>{m.name}</Typography>
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default Sidebar