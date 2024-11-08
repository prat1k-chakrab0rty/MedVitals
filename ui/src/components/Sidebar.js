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

const moduleMap = [
  {
    name: "Dashboard",
    url: "dashboard",
    icon: <DashboardIcon sx={{ height: 32, fontSize: 25 }} />,
    forRoles: ["doctor", "patient"]
  },
  {
    name: "Appointments",
    url: "appointments",
    icon: <CalendarMonthIcon sx={{ height: 32, fontSize: 25 }} />,
    forRoles: ["doctor", "patient"]
  },
  {
    name: "Doctors",
    url: "fellowDoctors",
    icon: <Person2Icon sx={{ height: 32, fontSize: 25 }} />,
    forRoles: ["patient"]
  },

  {
    name: "My Patients",
    url: "my-patients",//make this url an array as my-patients and patientHistory endpoint in sidebar blogs should be active
    icon: <Person2Icon sx={{ height: 32, fontSize: 25 }} />,
    forRoles: ["doctor"]
  },
  {
    name: "Requests",
    url: "requests",
    icon: <PersonAddAltIcon sx={{ height: 32, fontSize: 25 }} />,
    forRoles: ["doctor"]
  },
  {
    name: "Messages",
    url: "messages",
    icon: <ForumIcon sx={{ height: 32, fontSize: 25 }} />,
    forRoles: ["doctor", "patient"]
  },
  {
    name: "Blogs",
    url: "blogs",//make this url an array as blogs and blog endpoint in sidebar blogs should be active
    icon: <ViewQuiltIcon sx={{ height: 32, fontSize: 25 }} />,
    forRoles: ["doctor", "patient"]
  },
  {
    name: "Payments",
    url: "payments",
    icon: <PaymentIcon sx={{ height: 32, fontSize: 25 }} />,
    forRoles: ["doctor", "patient"]
  },
];

function Sidebar({ moduleNameVisibility }) {
  const location = useLocation();
  const [activePage, setactivePage] = useState("");
  const [userRole, setuserRole] = useState(localStorage.getItem("userRole"));



  useEffect(() => {
    const paths = location.pathname.split("/");

    if (paths.length === 2 || paths[2] === '')
      setactivePage("dashboard");
    else {
      const currentPage = paths[2];
      console.log(currentPage);
      if (currentPage !== "patientHistory" && currentPage !== "blog" && currentPage !== "addBlog" && currentPage !== "doctor" && currentPage !== "consultationSummary" && currentPage !== "myProfile" && currentPage !== "notificationSettings" && currentPage !== "notifications" && currentPage !== "patientInfo")
        setactivePage(moduleMap.find(m => currentPage === m.url).url);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ backgroundColor: userRole == "doctor" ? '#004a6a' : '#d81b60', color: 'white', display: 'flex', flexDirection: 'column', gap: 1, height: '100%', py: 2 }}>
      {moduleMap.filter(m => m.forRoles.includes(userRole)).map(m => (
        <Link key={m.url} to={`/app/${m.url}`} style={{ textDecoration: 'none', color: 'inherit', margin: "0 15px", borderRadius: "4px", backgroundColor: userRole == "doctor" ? (activePage === m.url ? "#227d9f" : "inherit") : (activePage === m.url ? "#f45d95" : "inherit") }}>
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