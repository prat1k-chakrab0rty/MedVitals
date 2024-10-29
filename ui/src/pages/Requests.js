import React from 'react'
import AppTable from '../components/AppTable';
import { Box, Typography } from '@mui/material';

const tableHeaders = [
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
    name: 'Reason',
    hasSortingFeature: true,
    width: 12,
  },
  {
    name: 'Appointment',
    hasSortingFeature: true,
    width: 15,
  },
  {
    name: 'Actions',
    hasSortingFeature: false,
    isChip: {
      "Cancel": {
        color: "#d25f00",
        bgColor: "#f6d9c3"
      },
      "Confirm": {
        color: "#1d5f7b",
        bgColor: "#e7f0f5"
      },
    },
    onlyOne: false,
    width: 18,
  },
];

function createData(patient, gender, age, reason, appointment, actions) {
  return { patient, gender, age, reason, appointment, actions };
}
const rows = [
  createData({ name: "Pooja", img: "NA" }, "Female", 28, "FLU", { mode: 'video', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
  createData({ name: "Ashish", img: "NA" }, "Male", 22, "Headache", { mode: 'video', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
  createData({ name: "Anup", img: "NA" }, "Male", 25, "Obesity", { mode: 'text', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
  createData({ name: "Riyaz", img: "NA" }, "Male", 26, "Back Pain", { mode: 'audio', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
  createData({ name: "Rachel", img: "NA" }, "Female", 24, "Depression", { mode: 'audio', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
  createData({ name: "Suraj", img: "NA" }, "Male", 24, "Headache", { mode: 'video', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
  createData({ name: "Sahista", img: "NA" }, "Female", 32, "Cyst", { mode: 'text', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
  createData({ name: "Prabhjot", img: "NA" }, "Male", 23, "Headache", { mode: 'video', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
  createData({ name: "Tina", img: "NA" }, "Female", 24, "Amnesia", { mode: 'audio', date: "21 Jul", time: "10:30 a.m" }, ["Cancel", "Confirm"]),
];

function Requests() {
  return (
    <Box>
      <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>Incoming Requests</Typography>
      <AppTable data={rows} headers={tableHeaders}/>
    </Box>
  )
}

export default Requests