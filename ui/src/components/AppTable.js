import React from 'react';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import VideocamIcon from '@mui/icons-material/Videocam';
import ForumIcon from '@mui/icons-material/Forum';
import CallIcon from '@mui/icons-material/Call';
import CircleIcon from '@mui/icons-material/Circle';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PaytmIcon from '../assets/images/PaytmIcon.png';
import PhonePeIcon from '../assets/images/PhonePeIcon.png';
import GooglePayIcon from '../assets/images/GooglePayIcon.png';
import { Avatar, Box, Chip, Input, InputAdornment, Pagination, PaginationItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const forbiddenColumnNames = ['Mode', 'Actions'];

const iconsMap = [
    { name: 'text', icon: <ForumIcon sx={{ color: "#1987a6" }} /> },
    { name: 'video', icon: <VideocamIcon sx={{ color: "#1987a6" }} /> },
    { name: 'audio', icon: <CallIcon sx={{ color: "#1987a6" }} /> },
];

const upiMap = {
    "PhonePe": PhonePeIcon,
    "GooglePay": GooglePayIcon,
    "Paytm": PaytmIcon,
}

function AppTable({ data, headers, onRowClickPatientDetails }) {
    const navigate = useNavigate();
    
    return (
        <TableContainer sx={{ mt: 2 }} component={Paper}>
            <Table aria-label="table">
                <TableHead sx={{ backgroundColor: '#f1fbff' }}>
                    <TableRow>
                        {headers.map((h, i) => (<TableCell key={i} sx={{ color: '#5d6e81', ...(h.width && { width: `${h.width}%` }) }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                {!forbiddenColumnNames.some(f => h.name === f) && h.name}
                                {h.hasSortingFeature && <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                                    <ArrowDropUpIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-3px', cursor: 'pointer' }} />
                                    <ArrowDropDownIcon sx={{ fontSize: 24, fontWeight: 800, position: 'absolute', bottom: '-17px', cursor: 'pointer' }} />
                                </Box>}
                            </Box>
                        </TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, i) => (
                        <TableRow
                            onClick={() => onRowClickPatientDetails && navigate("/app/patientHistory")}
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                        >
                            {Object.keys(row).map((c, i) => (<TableCell key={i} sx={{ color: headers[i].name === 'Id' ? '#40a2a0' : '#7b8999' }} component="th" scope="row">
                                {headers[i].name === 'Patient' ? <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'flex-start' }}>
                                    <Avatar sx={{ bgcolor: 'gray', borderRadius: '4px', width: 32, height: 32 }} variant="square">
                                        {row.patient.name[0]}
                                    </Avatar>
                                    {row.patient.name}
                                </Box> : headers[i].name === 'Appointment' ?
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        {iconsMap.find(m => m.name == row.appointment.mode).icon}
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <Typography style={{ fontSize: 12 }} variant='p'>{row.appointment.date}</Typography>
                                            <Typography style={{ fontSize: 12 }} variant='p' sx={{ fontWeight: 500 }}>{row.appointment.time}</Typography>
                                        </Box>
                                    </Box>
                                    :
                                    c === "mode" ?
                                        <Box sx={{ mx: 6, color: '#1987a6', display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
                                            <ForumIcon />{row.mode == 'video' ? <VideocamIcon /> : row.mode != 'text' && <CallIcon />}
                                        </Box>
                                        : headers[i].isChip ? (headers[i].onlyOne ?
                                            < Chip sx={{ backgroundColor: headers[i].isChip[row[c]].bgColor, color: headers[i].isChip[row[c]].color, px: 4 }} label={row[c]} />
                                            : <Box sx={{ display: 'flex', gap: 2 }}>
                                                {row[c].map((r, j) => (
                                                    < Chip key={j} sx={{ backgroundColor: headers[i].isChip[r].bgColor, color: headers[i].isChip[r].color, px: 4 }} label={r} />
                                                ))}
                                            </Box>)
                                            :
                                            headers[i].name === 'Payment Method' ?
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <img src={upiMap[row[c][0]]} />
                                                    <Typography>{row[c][1]}</Typography>
                                                </Box>
                                                :
                                                headers[i].name === 'Payment Status' ?
                                                    <Box sx={{
                                                        display: 'flex', alignItems: 'center', gap: 1, color:
                                                            row[c] === "Paid" ? "#2e7d32" : row[c] === "Pending" ? "#d25f00" : row[c] === "Failed" ? "#d62323" : "#585959"
                                                    }}>
                                                        <CircleIcon sx={{ fontSize: 12 }} />
                                                        <Typography sx={{ fontSize: 14 }}>{row[c]}</Typography>
                                                    </Box>
                                                    :
                                                    row[c]}
                            </TableCell>))}
                            {/* <TableCell sx={{ color: '#8996a3' }} align="left">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'flex-start' }}>
                                    <Avatar sx={{ bgcolor: 'gray', borderRadius: '4px', width: 32, height: 32 }} variant="square">
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
                            <TableCell sx={{ color: '#8996a3' }} align="left">{row.duration}</TableCell>
                            <TableCell sx={{ color: '#8996a3' }} align="left"><Chip sx={{ backgroundColor: row.status === "Upcoming" ? '#aee8ff' : '#ffd4ba', px: 4 }} label={row.status} /></TableCell>
                            <TableCell align="center" sx={{ color: '#1987a6' }}>
                                <Box sx={{ mx: 6, display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
                                    <ForumIcon />{row.mode == 'video' ? <VideocamIcon /> : row.mode != 'text' && <CallIcon />}
                                </Box>
                            </TableCell> */}
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell sx={{ paddingX: '16px', paddingY: '8px' }} align='left' colSpan={2}>
                            <Typography variant='p'>Showing 10 to 18 of 100 entries</Typography>
                        </TableCell>
                        <TableCell colSpan={7} sx={{ paddingX: '16px', paddingY: '8px', textAlign: '-webkit-right' }}>
                            <Pagination sx={{ color: '#004a6a', width: '390px' }} count={10} shape="rounded" renderItem={(item) => (
                                <PaginationItem
                                    slots={{
                                        previous: () => <span>Previous</span>,
                                        next: () => <span>Next</span>,
                                    }}
                                    {...item}
                                />
                            )}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AppTable