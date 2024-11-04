import { Box, Button, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React from 'react';
import Day from '../assets/images/Day.png';
import Evening from '../assets/images/Evening.png';
import Night from '../assets/images/Night.png';
import { useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const HoverableImage = styled('img')({
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        filter: 'brightness(0.8) sepia(1) hue-rotate(-25deg) saturate(300%)'
    },
});

const rows = [
    {}
];

function ConsultationSummary() {
    const navigate = useNavigate();

    return (
        <Box>
            <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }}>Consultation Summary</Typography>
            <Box sx={{ backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', gap: 2,p:2,borderRadius:2,border:'1px solid lightgray' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker sx={{flex:1}} label="Date of Consultation" />
                    </LocalizationProvider>
                    {/* <TextField autoComplete={"off"} fullWidth id="outlined-date" label="Date of Consulation" variant="outlined" /> */}
                    <TextField autoComplete={"off"} sx={{flex:1}} id="outlined-name" label="Patient Name" variant="outlined" />
                    <TextField autoComplete={"off"} sx={{flex:1}} id="outlined-age" label="Age" variant="outlined" />
                </Box>
                <hr style={{ borderColor: 'lightgray', width: '100%', opacity: '10%' }} />
                <TextField autoComplete={"off"} fullWidth multiline rows={6} label="Summary" id='outline-summary' />
                {/* <hr style={{ borderColor: 'lightgray', width: '100%', opacity: '10%' }} /> */}

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" width={"10%"}>Sl. No.</TableCell>
                                <TableCell align="center">Medicine Name</TableCell>
                                <TableCell align="center">Dose</TableCell>
                                <TableCell width={"25%"} align="center">Duration</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                [1, 2, 3].map(r => (
                                    <TableRow key={r}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='center' component="th" scope="row">
                                            {r}
                                        </TableCell>
                                        <TableCell align="center">
                                            <TextField autoComplete={"off"} fullWidth id={`outlined-medicine-${r}`} variant="outlined" />
                                        </TableCell>
                                        <TableCell align="center">
                                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                                <HoverableImage src={Day} alt='day-logo' />
                                                <HoverableImage src={Evening} alt='evening-logo' />
                                                <HoverableImage src={Night} alt='night-logo' />
                                            </Box>
                                        </TableCell>
                                        <TableCell align="center">
                                            <TextField autoComplete={"off"} fullWidth id={`outlined-duration-${r}`} value={"2 months"} variant="outlined" />
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>


            </Box>
            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
                <Button onClick={() => navigate("/app/appointments")} variant="outline" sx={{ backgroundColor: '#ffffff', border: '1px solid #00b7b4', width: 150, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}>Cancel</Button>
                <Button onClick={() => navigate("/app/appointments")} variant="outline" sx={{ backgroundColor: '#00b7b4', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
            </Box>
        </Box>
    )
}

export default ConsultationSummary