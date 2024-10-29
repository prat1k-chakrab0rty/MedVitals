import { Box, Typography } from '@mui/material';
import React from 'react';
import AppTable from '../components/AppTable';

const tableHeaders = [
  {
    name: 'Patient',
    hasSortingFeature: true,
  },
  {
    name: 'Appointment Date',
    hasSortingFeature: true,
    width: 15,
  },
  {
    name: 'Amount',
    hasSortingFeature: true,
    width: 10,
  },
  {
    name: 'Payment Status',
    hasSortingFeature: true,
    width: 15,
  },
  {
    name: 'Payment Method',
    hasSortingFeature: true,
    width: 20,
  },
  {
    name: 'Payment Date',
    hasSortingFeature: true,
    width: 12,
  },
];

function createData(patient, appointmentDate, amount, paymentStatus, paymentMethod, paymentDate) {
  return { patient, appointmentDate, amount, paymentStatus, paymentMethod, paymentDate };
}
const rows = [
  createData({ name: "Pooja", img: "NA" }, "25.09.2024", 50, "Paid", ["GooglePay", "9787767614@oksbi"], "15.10.2024"),
  createData({ name: "Ashish", img: "NA" }, "03.10.2024", 50, "Pending", ["Paytm", "8787767614@ybl"], "15.10.2024"),
  createData({ name: "Anup", img: "NA" }, "03.10.2024", 50, "Failed", ["PhonePe", "8787767614@ybl"], "15.10.2024"),
  createData({ name: "Riyaz", img: "NA" }, "03.10.2024", 50, "Cancelled", ["Paytm", "8787767614@ybl"], "15.10.2024"),
  createData({ name: "Rachel", img: "NA" }, "25.09.2024", 50, "Paid", ["PhonePe", "8787767614@ybl"], "15.10.2024"),
  createData({ name: "Suraj", img: "NA" }, "03.10.2024", 50, "Paid", ["GooglePay", "8787767614@axl"], "15.10.2024"),
  createData({ name: "Sahista", img: "NA" }, "25.09.2024", 50, "Pending", ["GooglePay", "8787767614@ybl"], "15.10.2024"),
  createData({ name: "Prabhjot", img: "NA" }, "03.10.2024", 50, "Paid", ["GooglePay", "8787767614@ybl"], "15.10.2024"),
  createData({ name: "Tina", img: "NA" }, "25.09.2024", 50, "Paid", ["PhonePe", "8787767614@ybl"], "15.10.2024"),
];

function Payments() {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>Payment History</Typography>
        <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', fontWeight: 400, mb: 1.5 }}>Payable Amount&nbsp;&nbsp;:&nbsp;&nbsp;<b>Rs 13000</b></Typography>
      </Box>
      <AppTable data={rows} headers={tableHeaders} />
    </Box>
  )
}

export default Payments