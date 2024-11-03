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

function Sidebar({ moduleNameVisibility }) {
  const location = useLocation();
  const [activePage, setactivePage] = useState("");

  const moduleMap = [
    {
      name: "Dashboard",
      url: "dashboard",
      icon: <DashboardIcon sx={{ height: 32, fontSize: 25 }} />
    },
    {
      name: "Appointments",
      url: "appointments",
      icon: <CalendarMonthIcon sx={{ height: 32, fontSize: 25 }} />
    },
    {
      name: "My Patients",
      url: "my-patients",//make this url an array as my-patients and patientHistory endpoint in sidebar blogs should be active
      icon: <Person2Icon sx={{ height: 32, fontSize: 25 }} />
    },
    {
      name: "Requests",
      url: "requests",
      icon: <PersonAddAltIcon sx={{ height: 32, fontSize: 25 }} />
    },
    {
      name: "Messages",
      url: "messages",
      icon: <ForumIcon sx={{ height: 32, fontSize: 25 }} />
    },
    {
      name: "Blogs",
      url: "blogs",//make this url an array as blogs and blog endpoint in sidebar blogs should be active
      icon: <ViewQuiltIcon sx={{ height: 32, fontSize: 25 }} />
    },
    {
      name: "Payments",
      url: "payments",
      icon: <PaymentIcon sx={{ height: 32, fontSize: 25 }} />
    },
  ];


  useEffect(() => {
    const paths = location.pathname.split("/");

    if (paths.length == 2 || paths[2] == '')
      setactivePage("dashboard");
    else {
      const currentPage = paths[2];
      console.log(currentPage);
      if (currentPage != "patientHistory" && currentPage != "blog" && currentPage != "addBlog")
        setactivePage(moduleMap.find(m => currentPage === m.url).url);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ backgroundColor: '#004a6a', color: 'white', display: 'flex', flexDirection: 'column', gap: 1, height: '100%', py: 2 }}>
      {moduleMap.map(m => (
        <Link key={m.url} to={`/app/${m.url}`} style={{ textDecoration: 'none', color: 'inherit', margin: "0 15px", borderRadius: "4px", backgroundColor: activePage === m.url ? "#227d9f" : "inherit" }}>
          <Box sx={{ display: 'flex', cursor: 'pointer', alignItems: 'center', gap: 2, mx: 2, py: 2 }}>
            {m.icon}
            {moduleNameVisibility && <Typography fontWeight={400} variant='h6'>{m.name}</Typography>}
          </Box>
        </Link>
      ))}
    </Box>
  )
}

export default Sidebar