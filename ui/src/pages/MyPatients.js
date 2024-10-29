import { Box, Input, InputAdornment, Typography } from '@mui/material';
import React from 'react';
import AppTable from '../components/AppTable';
import SearchIcon from '@mui/icons-material/Search';

const tableHeaders = [
  {
    name: 'Id',
    hasSortingFeature: true,
    width: 12,
  },
  {
    name: 'Patient',
    hasSortingFeature: true,
  },
  {
    name: 'Gender',
    hasSortingFeature: true,
    width: 15,
  },
  {
    name: 'Age',
    hasSortingFeature: true,
    width: 12,
  },
  {
    name: 'Treatment History',
    hasSortingFeature: true,
    isChip: {
      "view": {
        color: "#004a6a",
        bgColor: "#e7f0f5"
      },
    },
    onlyOne: true,
    width: 18,
  },
  {
    name: 'Last Consulted',
    hasSortingFeature: true,
    width: 15,
  }
];

function createData(id, patient, gender, age, treatementHistory, lastConsulted) {
  return { id, patient, gender, age, treatementHistory, lastConsulted };
}
const rows = [
  createData(458768, { name: "Pooja", img: "NA" }, "Female", 28, "view", "Jun 30"),
  createData(458771, { name: "Ashish", img: "NA" }, "Male", 22, "view", "Jun 30"),
  createData(458774, { name: "Anup", img: "NA" }, "Male", 25, "view", "Jun 30"),
  createData(459768, { name: "Riyaz", img: "NA" }, "Male", 26, "view", "Jun 30"),
  createData(459812, { name: "Rachel", img: "NA" }, "Female", 24, "view", "Jun 30"),
  createData(459801, { name: "Suraj", img: "NA" }, "Male", 24, "view", "Jun 30"),
  createData(459987, { name: "Sahista", img: "NA" }, "Female", 32, "view", "Jun 30"),
  createData(459989, { name: "Prabhjot", img: "NA" }, "Male", 23, "view", "Jun 30"),
  createData(459995, { name: "Tina", img: "NA" }, "Female", 24, "view", "Jun 30"),
];

function MyPatients() {
  return (
    <Box>
      <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>My Patients</Typography>
      <Input
        disableUnderline
        sx={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: 0.5, width: '350px' }}
        id="search-patients"
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

export default MyPatients