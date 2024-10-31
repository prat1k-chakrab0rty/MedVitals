import { Box, Chip, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Patient from '../assets/images/Patient.png';
import MeditationIcon from '../assets/images/Meditation.png';
import PdfLogo from '../assets/images/PdfLogo.png';
import NeedleIcon from '../assets/images/Needle.png';
import PillIcon from '../assets/images/Pill.png';
import VideocamIcon from '@mui/icons-material/Videocam';
import ForumIcon from '@mui/icons-material/Forum';
import CallIcon from '@mui/icons-material/Call';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function PatientHistory() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Box>
            <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }} fontSize={24} fontWeight={600}>Shivangi</Typography>
            <Box sx={{ border: '1px solid lightgrey', backgroundColor: 'white', padding: 1, borderRadius: "8px", height: 40 }}>
                <Tabs value={value} onChange={handleChange} aria-label="patient-history-tabs" TabIndicatorProps={{ style: { display: 'none' } }} sx={{ '.css-1wxkzlj-MuiTabs-flexContainer': { gap: 2 } }}>
                    <Tab sx={{ '&.MuiButtonBase-root': { color: value === 0 ? 'white' : '#004a6a', backgroundColor: value == 0 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", paddingX: 5, textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Overview" {...a11yProps(0)} />
                    <Tab sx={{ '&.MuiButtonBase-root': { color: value === 1 ? '#f5f5f9' : '#004a6a', backgroundColor: value === 1 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Consultation Summary Reports" {...a11yProps(1)} />
                    <Tab sx={{ '&.MuiButtonBase-root': { color: value === 2 ? 'white' : '#004a6a', backgroundColor: value === 2 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", paddingX: 2, textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Other Reports" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box sx={{ display: 'flex', mt: 3, gap: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', borderRadius: 2, boxShadow: "0px 2px 2px lightgrey", p: 2, width: 400 }}>
                    <img height={300} style={{ objectFit: 'contain' }} src={Patient} alt='patient-img' />
                    <Typography textAlign={'center'} component="p" fontSize={20} fontWeight={400}>Shivangi</Typography>
                    <Box sx={{ display: 'flex', gap: 2, color: '#1987a6', justifyContent: 'center' }}>
                        <ForumIcon sx={{ fontSize: 24, cursor: 'pointer' }} />
                        <CallIcon sx={{ fontSize: 24, cursor: 'pointer' }} />
                        <VideocamIcon sx={{ fontSize: 24, cursor: 'pointer' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, ml: 3 }}>
                        <Typography><b>Gender</b>: Female</Typography>
                        <Typography><b>Blood Type</b>: AB+ (Positive)</Typography>
                        <Typography><b>Allergies</b>: Milk,Penicillin</Typography>
                        <Typography><b>Diseases</b>: Diabetes, Obesity</Typography>
                        <Typography><b>Height</b>: 1.72m</Typography>
                        <Typography><b>Weight</b>: 80Kg</Typography>
                        <Typography><b>Age</b>: 26(01/04/1998)</Typography>
                    </Box>
                </Box>
                <CustomTabPanel value={value} index={0} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: 0, gap: 3,height:'662px' }}>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2, boxShadow: "0px 2px 2px lightgrey", width: 556.5 }}>
                                <Typography variant='h6' component="div" sx={{ color: 'text.secondary', mb: 1.5 }} fontSize={18}>Appointment Details</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Chip sx={{ height: 60, width: 600, backgroundColor: '#f5f5f9', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                                            <span>Appointment Day</span>
                                            <span style={{ fontWeight: 600 }}>Oct 18, 2024</span>
                                        </Box>
                                    } />
                                    <Chip sx={{ height: 60, width: 600, backgroundColor: '#f5f5f9', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                                            <span>Appointment Time</span>
                                            <span style={{ fontWeight: 600 }}>2:30 p.m.</span>
                                        </Box>
                                    } />
                                    <Chip sx={{ height: 60, width: 600, backgroundColor: '#f5f5f9', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                                            <span>Appointment Type</span>
                                            <span style={{ fontWeight: 600 }}>New Patient</span>
                                        </Box>
                                    } />
                                </Box>
                            </Box>
                            <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2, boxShadow: "0px 2px 2px lightgrey", width: 556.5 }}>
                                <Typography variant='h6' component="div" sx={{ color: 'text.secondary', mb: 1.5 }} fontSize={18}>Medications</Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Chip sx={{ height: 60, width: 600, backgroundColor: '#f5f5f9', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                            <Box>
                                                <img src={PillIcon} alt="pill-img" />
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                                <Typography variant='h5' sx={{ fontSize: 18 }}>Metformin</Typography>
                                                <span style={{ fontWeight: 300, fontSize: 12 }}>Twice a day</span>
                                            </Box>
                                        </Box>
                                    } />
                                    <Chip sx={{ height: 60, width: 600, backgroundColor: '#f5f5f9', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                            <Box>
                                                <img src={MeditationIcon} alt="meditation-img" />
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                                <Typography variant='h5' sx={{ fontSize: 18 }}>Meditate</Typography>
                                                <span style={{ fontWeight: 300, fontSize: 12 }}>20 mins daily</span>
                                            </Box>
                                        </Box>
                                    } />
                                    <Chip sx={{ height: 60, width: 600, backgroundColor: '#f5f5f9', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                                        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                            <Box>
                                                <img src={NeedleIcon} alt="needle-img" />
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                                <Typography variant='h5' sx={{ fontSize: 18 }}>Insulin</Typography>
                                                <span style={{ fontWeight: 300, fontSize: 12 }}>Once A Day before meal</span>
                                            </Box>
                                        </Box>
                                    } />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Box sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: "0px 2px 2px lightgrey", width: 588.5 }}>
                                <Typography variant='h6' component="div" sx={{ color: 'text.secondary', p: 2 }} fontSize={18}>Medical History</Typography>
                                <List sx={{ padding: 0 }}>
                                    <ListItem divider disablePadding>
                                        <ListItemButton >
                                            <ListItemText primary="General Consultant" secondary="Dr. Tushar" />
                                            <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CalendarMonthIcon sx={{ color: '#04b8b5' }} />
                                                <Typography sx={{ fontSize: 14, ml: 1, p: 0 }} variant='p'>20 Oct 2024</Typography>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem divider disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="General Consultant" secondary="Dr. Tushar" />
                                            <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CalendarMonthIcon sx={{ color: '#04b8b5' }} />
                                                <Typography sx={{ fontSize: 14, ml: 1, p: 0 }} variant='p'>20 Oct 2024</Typography>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem divider disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="General Consultant" secondary="Dr. Tushar" />
                                            <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CalendarMonthIcon sx={{ color: '#04b8b5' }} />
                                                <Typography sx={{ fontSize: 14, ml: 1, p: 0 }} variant='p'>20 Oct 2024</Typography>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="General Consultant" secondary="Dr. Tushar" />
                                            <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
                                                <CalendarMonthIcon sx={{ color: '#04b8b5' }} />
                                                <Typography sx={{ fontSize: 14, ml: 1, p: 0 }} variant='p'>20 Oct 2024</Typography>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                    {/* <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="General Consultant" secondary="Dr. Tushar" />
                                            <ListItemIcon sx={{display:'flex',alignItems:'center'}}>
                                                <CalendarMonthIcon sx={{color:'#04b8b5'}}/>
                                                <Typography sx={{fontSize:14,ml:1,p:0}} variant='p'>20 Oct 2024</Typography>
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem> */}
                                </List>
                            </Box>
                            <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2, boxShadow: "0px 2px 2px lightgrey", width: 556.5 }}>
                                <Typography variant='h6' component="div" sx={{ color: 'text.secondary', mb: 1.5 }} fontSize={18}>Notes</Typography>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab maxime ut. Accusamus inventore omnis reprehenderit! Ratione quos eaque iste sint ea necessitatibus deleniti eum sapiente consequuntur veniam, ipsum reprehenderit.e
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2, boxShadow: "0px 2px 2px lightgrey", display: 'flex', flexDirection: 'column', gap: 1,height:'630px',width:'60.9vw' }}>
                        <Typography variant='h6' component="div" sx={{ color: 'text.secondary', py: 1 }} fontSize={18}>Consultation Summary Report</Typography>
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>General Checkup by Dr. Tushar</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>General Checkup by Dr. Tushar</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>General Checkup by Dr. Tushar</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>General Checkup by Dr. Tushar</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />

                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                <Box sx={{ backgroundColor: 'white', p: 2, borderRadius: 2, boxShadow: "0px 2px 2px lightgrey", display: 'flex', flexDirection: 'column', gap: 1,height:'630px',width:'60.9vw' }}>
                        <Typography variant='h6' component="div" sx={{ color: 'text.secondary', py: 1 }} fontSize={18}>Reports</Typography>
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>Blood Report</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>Urine Report</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>Thyroid Report</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>Scan Report</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>Blood Report</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />
                        <Chip sx={{ height: 60, width: "100%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                    <Box>
                                        <img src={PdfLogo} alt="pdf-logo" />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                        <Typography variant='h5' sx={{ fontSize: 15 }}>Fevicol Report</Typography>
                                        <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                    </Box>
                                </Box>
                                <CloseIcon />
                            </Box>
                        } />

                    </Box>
                </CustomTabPanel>
            </Box >
        </Box >
    )
}

export default PatientHistory