import { Avatar, Box, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Person2Icon from '@mui/icons-material/Person2';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Link } from 'react-router-dom';
import VideocamIcon from '@mui/icons-material/Videocam';
import ForumIcon from '@mui/icons-material/Forum';
import CallIcon from '@mui/icons-material/Call';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const cards = [
  {
    title: 'Total Appointments',
    icon: <CalendarMonthIcon />,
    val: 205
  },
  {
    title: 'Total Patients',
    icon: <Person2Icon />,
    val: 13
  },
  {
    title: 'Appointment Requests',
    icon: <PersonAddAltIcon />,
    val: 10
  },
];

const fellowDoctors = [
  {
    name: 'Deepak Ugra'
  },
  {
    name: 'Shaurya Raj'
  },
  {
    name: 'Preeti'
  },
  {
    name: 'Sandhya'
  },
];

function createData(id, patient, gender, age, date, time, mode) {
  return { id, patient, gender, age, date, time, mode };
}
const date = new Intl.DateTimeFormat('en-GB', { weekday: 'short', month: "short", day: "2-digit" }).format(new Date()).split(" ")
const rows = [
  createData(458768, { name: "Pooja", img: "NA" }, "Female", 28, "31.10.2024", "10:00 a.m", "video"),
  createData(458771, { name: "Ashish", img: "NA" }, "Male", 22, "31.10.2024", "10:00 a.m", "text"),
  createData(458774, { name: "Anup", img: "NA" }, "Male", 25, "31.10.2024", "10:00 a.m", "audio"),
  createData(459768, { name: "Riyaz", img: "NA" }, "Male", 26, "31.10.2024", "10:00 a.m", "text"),
  createData(459812, { name: "Rachel", img: "NA" }, "Female", 24, "31.10.2024", "10:00 a.m", "audio"),
  createData(459801, { name: "Suraj", img: "NA" }, "Male", 24, "31.10.2024", "10:00 a.m", "audio"),
  createData(459987, { name: "Sahista", img: "NA" }, "Female", 32, "31.10.2024", "10:00 a.m", "video"),
];

function Dashboard() {
  return (
    <Box>
      <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>Dashboard</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* left grid */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {cards.map(card => (
              <Card key={card.title} sx={{ cursor: 'pointer', boxShadow: "2px 2px 2px lightgrey", border: 'none' }} variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '360px' }}>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 20, fontWeight: 500 }}>
                      {card.title}
                    </Typography>
                    <Box sx={{ color: '#00b7b4' }}>
                      {card.icon}
                    </Box>
                  </Box>
                  <Typography sx={{ fontWeight: 500, mb: 1.5, fontSize: 30 }}>{card.val}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
            <Typography variant='p' component="div" sx={{ color: '#585959', fontWeight: 500, fontSize: 18, ml: 2 }}>Today's Appointments</Typography>
            <Typography variant='p' component="div" sx={{ color: '#3c8caa' }}>
              <Link to="/app/appointments" style={{ color: 'inherit' }}>View All</Link>
            </Typography>
          </Box>

          {/* Table */}
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: '#f1fbff' }}>
                <TableRow>
                  <TableCell sx={{ color: '#5d6e81' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Id
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <ExpandLessIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-3px', cursor: 'pointer' }} />
                        <ExpandMoreIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-17px', cursor: 'pointer' }} />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#5d6e81' }} align="left"><Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    Patient
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                      <ExpandLessIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-3px', cursor: 'pointer' }} />
                      <ExpandMoreIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-17px', cursor: 'pointer' }} />
                    </Box>
                  </Box></TableCell>
                  <TableCell sx={{ color: '#5d6e81' }} align="left">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Gender
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <ExpandLessIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-3px', cursor: 'pointer' }} />
                        <ExpandMoreIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-17px', cursor: 'pointer' }} />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#5d6e81' }} align="left">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Age
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <ExpandLessIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-3px', cursor: 'pointer' }} />
                        <ExpandMoreIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-17px', cursor: 'pointer' }} />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#5d6e81' }} align="left">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Date
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <ExpandLessIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-3px', cursor: 'pointer' }} />
                        <ExpandMoreIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-17px', cursor: 'pointer' }} />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#5d6e81' }} align="left">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      Time
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <ExpandLessIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-3px', cursor: 'pointer' }} />
                        <ExpandMoreIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-17px', cursor: 'pointer' }} />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#5d6e81' }} align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                  >
                    <TableCell sx={{ color: '#40a2a0' }} component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell sx={{ color: '#8996a3' }} align="left">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'flex-start' }}>
                        <Avatar sx={{ bgcolor: 'gray', borderRadius: '4px', width: 35, height: 35 }} variant="square">
                          {row.patient.name[0]}
                        </Avatar>
                        {row.patient.name}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: '#8996a3' }} align="left">
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'flex-start', width: '40px' }}>
                        {row.gender === "Male" ? <MaleIcon sx={{ color: '#1987a6' }} /> : <FemaleIcon sx={{ color: '#d81b60' }} />}
                        {row.gender}
                      </Box>
                    </TableCell>
                    <TableCell sx={{ color: '#8996a3' }} align="left">{row.age}</TableCell>
                    <TableCell sx={{ color: '#8996a3' }} align="left">{row.date}</TableCell>
                    <TableCell sx={{ color: '#8996a3' }} align="left">{row.time}</TableCell>
                    <TableCell align="center" sx={{ color: '#c1c6cb' }}>{row.mode == 'video' ? <VideocamIcon /> : row.mode == 'text' ? <ForumIcon /> : <CallIcon />}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* Fellow Doctor Card */}
          <Box sx={{ backgroundColor: '#ffffff', padding: 2, pb: 1, borderRadius: '8px', boxShadow: "2px 2px 2px lightgrey", mb: 2.2 }}>
            <Typography variant='h6' sx={{ color: 'text.secondary', fontWeight: 500, mb: 2 }}>
              Fellow Doctors
            </Typography>
            {/* right grid */}
            <Box>
              {/* fellow doctor's card starts here */}
              {
                fellowDoctors.map((doctor, i) => (
                  <Box key={i} sx={{ cursor: 'pointer' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, ml: 2, my: 1.5, mb: 0.5 }}>
                      <Avatar sx={{ bgcolor: 'gray' }}>
                        {doctor.name[0]}
                      </Avatar>
                      <Typography sx={{ color: 'text.secondary', fontSize: 14, fontWeight: 400 }}>
                        Dr. {doctor.name}
                      </Typography>
                      <ForumIcon sx={{ color: '#1987a6' }} />
                      <CallIcon sx={{ color: '#1987a6' }} />
                      <VideocamIcon sx={{ color: '#1987a6' }} />
                    </Box>
                    {i + 1 !== fellowDoctors.length && < hr />}
                  </Box>
                ))
              }
              {/* fellow doctor's card ends here */}
            </Box>
          </Box>
          {/* Calendar box */}
          <Box sx={{ borderRadius: '8px', backgroundColor: '#ffffff', boxShadow: "2px 2px 2px lightgrey", width: '100%' }}>
            <Box sx={{ px: 2, pt: 2, pb: 1, backgroundColor: '#00b7b4', color: '#ffffff', borderRadius: '8px 8px 0px 0px' }}>
              <Typography variant='h4'>{`${date[0]} ${date[1]} ${date[2]}`}</Typography>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default Dashboard