import { Avatar, Box, Chip, Input, InputAdornment, Pagination, PaginationItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AppTable from '../components/AppTable';

const tableHeaders = [
  {
    name: 'Id',
    hasSortingFeature: true,
    width: 8,
  },
  {
    name: 'Patient',
    hasSortingFeature: true,
  },
  {
    name: 'Gender',
    hasSortingFeature: true,
    width: 12,
  },
  {
    name: 'Age',
    hasSortingFeature: true,
    width: 6,
  },
  {
    name: 'Date',
    hasSortingFeature: true,
    width: 12,
  },
  {
    name: 'Time',
    hasSortingFeature: true,
    width: 10,
  },
  {
    name: 'Duration',
    hasSortingFeature: true,
    width: 7,
  },
  {
    name: 'Status',
    hasSortingFeature: true,
    isChip: {
      "Upcoming": {
        color: "#0b5473",
        bgColor: "#aee8ff"
      },
      "Tomorrow": {
        color: "#d25f00",
        bgColor: "#ffd4ba"
      },
    },
    onlyOne: true,
    width: 14,
  },
  {
    name: 'Mode',
    hasSortingFeature: false,
    width: 12,
  }
];

function createData(id, patient, gender, age, date, time, duration, status, mode) {
  return { id, patient, gender, age, date, time, duration, status, mode };
}
const rows = [
  createData(458768, { name: "Pooja", img: "NA" }, "Female", 28, "31.10.2024", "10:00 a.m", "1h", "Upcoming", "video"),
  createData(458771, { name: "Ashish", img: "NA" }, "Male", 22, "31.10.2024", "10:00 a.m", "1h", "Upcoming", "text"),
  createData(458774, { name: "Anup", img: "NA" }, "Male", 25, "31.10.2024", "10:00 a.m", "1h", "Upcoming", "audio"),
  createData(459768, { name: "Riyaz", img: "NA" }, "Male", 26, "31.10.2024", "10:00 a.m", "1h", "Tomorrow", "text"),
  createData(459812, { name: "Rachel", img: "NA" }, "Female", 24, "31.10.2024", "10:00 a.m", "1h", "Tomorrow", "audio"),
  createData(459801, { name: "Suraj", img: "NA" }, "Male", 24, "31.10.2024", "10:00 a.m", "1h", "Tomorrow", "audio"),
  createData(459987, { name: "Sahista", img: "NA" }, "Female", 32, "31.10.2024", "10:00 a.m", "1h", "Tomorrow", "video"),
  createData(459989, { name: "Prabhjot", img: "NA" }, "Male", 23, "31.10.2024", "10:00 a.m", "1h", "Tomorrow", "audio"),
  createData(459995, { name: "Tina", img: "NA" }, "Female", 24, "31.10.2024", "10:00 a.m", "1h", "Tomorrow", "audio"),
];

function Appointments() {
  return (
    <Box>
      <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>Appointments</Typography>
      <Input
        disableUnderline
        sx={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: 0.5, width: '350px' }}
        id="search-appointments"
        variant="outlined"
        placeholder='Search'
        endAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <AppTable data={rows} headers={tableHeaders} onRowClickPatientDetails={true}/>
    </Box>
  )
}

export default Appointments