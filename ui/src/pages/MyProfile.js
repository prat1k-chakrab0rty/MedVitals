import { Alert, Avatar, Box, Button, Chip, FormHelperText, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PdfLogo from '../assets/images/PdfLogo.png';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DoctorProfilePicture from '../assets/images/DoctorProfilePictureLg.png';




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
function a11ySubProps(index) {
    return {
        id: `simple-sub-tab-${index}`,
        'aria-controls': `simple-sub-tabpanel-${index}`,
    };
}

function MyProfile() {
    const [value, setValue] = useState(0);
    const [subValue, setSubValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSubValue(0);
    }
    const handleSubTabChange = (event, newValue) => {
        setSubValue(newValue);
    }
    return (
        <Box>
            <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5 }} fontSize={24} fontWeight={600}>My Profile</Typography>
            <Box sx={{ border: '1px solid lightgrey', backgroundColor: 'white', padding: 1, borderRadius: "8px", height: 40 }}>
                <Tabs value={value} onChange={handleChange} aria-label="patient-history-tabs" TabIndicatorProps={{ style: { display: 'none' } }} sx={{ '.css-1wxkzlj-MuiTabs-flexContainer': { gap: 2 } }}>
                    <Tab sx={{ '&.MuiButtonBase-root': { color: value === 0 ? 'white' : '#004a6a', backgroundColor: value === 0 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", paddingX: 5, textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Personal & Contact Details" {...a11yProps(0)} />
                    <Tab sx={{ '&.MuiButtonBase-root': { color: value === 1 ? '#f5f5f9' : '#004a6a', backgroundColor: value === 1 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Education & Specialization" {...a11yProps(1)} />
                    <Tab sx={{ '&.MuiButtonBase-root': { color: value === 2 ? 'white' : '#004a6a', backgroundColor: value === 2 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", paddingX: 2, textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Registration & Document" {...a11yProps(2)} />
                    <Tab sx={{ '&.MuiButtonBase-root': { color: value === 3 ? 'white' : '#004a6a', backgroundColor: value === 3 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", paddingX: 2, textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Account Details" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box sx={{ border: '1px solid lightgrey', backgroundColor: 'white', padding: 1, borderRadius: "8px 0", height: 40, mt: 2 }}>
                    <Tabs value={subValue} onChange={handleSubTabChange} aria-label="patient-history-tabs" TabIndicatorProps={{ style: { display: 'none' } }} sx={{ '.css-1wxkzlj-MuiTabs-flexContainer': { gap: 2 } }}>
                        <Tab sx={{ '&.MuiButtonBase-root': { color: subValue === 0 ? 'white' : '#004a6a', backgroundColor: subValue === 0 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", paddingX: 5, textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Personal Details" {...a11ySubProps(0)} />
                        <Tab sx={{ '&.MuiButtonBase-root': { color: subValue === 1 ? '#f5f5f9' : '#004a6a', backgroundColor: subValue === 1 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Contact Details" {...a11ySubProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={subValue} index={0}>
                    {/* Personal details */}
                    <Box sx={{ border: '1px solid lightgrey', borderRadius: "0 8px", backgroundColor: '#ffffff', py: 1.5 }}>
                        <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5, mx: 2 }} fontSize={20} fontWeight={500}>Upload Profile Photo</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, px: 2 }}>
                            <Avatar sx={{ height: 100, width: 100, borderRadius: 2 }} src={DoctorProfilePicture} variant="square">
                                <Box sx={{ position: 'relative', height: "100%", width: "100%" }}>
                                    <Box sx={{ position: 'absolute', right: 4, top: 4, color: '#ffffff', borderRadius: '50%', p: 0.5, backgroundColor: '#00b7b4', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                        <CameraAltOutlinedIcon sx={{ fontSize: 18 }} />
                                    </Box>
                                </Box>
                            </Avatar>
                            <Box >
                                <Typography sx={{ fontSize: 13, mb: 1, color: '#727373' }}>Max File Size: 100MB</Typography>
                                <Typography sx={{ fontSize: 13, mb: 1, color: '#727373' }}>Supported File Type: JPG or PNG</Typography>
                                <Button variant="outline" sx={{ backgroundColor: 'inherit', p: 0, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}><FileUploadOutlinedIcon /> Upload</Button>
                            </Box>
                        </Box>
                        <hr style={{ width: "100%", borderColor: '#ebebeb', opacity: "20%" }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2 }}>
                            <TextField fullWidth autoComplete='off' id="outlined-name" label="Name" variant="outlined" />
                            <TextField fullWidth autoComplete='off' id="outlined-dob" label="Date of Birth" variant="outlined" />
                            <TextField fullWidth autoComplete='off' id="outlined-gender" label="Gender" variant="outlined" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, my: 2 }}>
                            <TextField fullWidth autoComplete='off' id="outlined-city" label="City" variant="outlined" />
                            <TextField fullWidth autoComplete='off' id="outlined-yoe" label="Years of Experience" variant="outlined" />
                            <TextField sx={{ visibility: 'hidden' }} fullWidth autoComplete='off' id="outlined-yoe" label="Years of Experience" variant="outlined" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, my: 2 }}>
                            <TextField helperText="0/1000" fullWidth autoComplete='off' multiline rows={6} id="outlined-am" label="About Me" variant="outlined" />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                        <Button variant="outline" sx={{ backgroundColor: '#ffffff', border: '1px solid #00b7b4', width: 150, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}>Cancel</Button>
                        <Button variant="outline" sx={{ backgroundColor: '#00b7b4', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={subValue} index={1}>
                    {/* Contact Details */}
                    <Box sx={{ border: '1px solid lightgrey', borderRadius: "0 8px", backgroundColor: '#ffffff', py: 1.5 }}>
                        <Alert icon={false} variant="filled" sx={{ backgroundColor: '#f6d9c3', color: '#000000', fontWeight: 400 }}>
                            This is not for booking appointment. It will be kept private from everyone. Only MedVitals will use this to update you on important things.
                        </Alert>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, px: 2, my: 2 }}>
                            <TextField sx={{ flex: 1 }} fullWidth autoComplete='off' id="outlined-city" label="Mobile Number" variant="outlined" />
                            <TextField sx={{ flex: 2 }} fullWidth autoComplete='off' id="outlined-yoe" label="Mail ID" variant="outlined" />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                        <Button variant="outline" sx={{ backgroundColor: '#ffffff', border: '1px solid #00b7b4', width: 150, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}>Cancel</Button>
                        <Button variant="outline" sx={{ backgroundColor: '#00b7b4', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
                    </Box>
                </CustomTabPanel>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box sx={{ border: '1px solid lightgrey', backgroundColor: 'white', padding: 1, borderRadius: "8px 0", height: 40, mt: 2 }}>
                    <Tabs value={subValue} onChange={handleSubTabChange} aria-label="patient-history-tabs" TabIndicatorProps={{ style: { display: 'none' } }} sx={{ '.css-1wxkzlj-MuiTabs-flexContainer': { gap: 2 } }}>
                        <Tab sx={{ '&.MuiButtonBase-root': { color: subValue === 0 ? 'white' : '#004a6a', backgroundColor: subValue === 0 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", paddingX: 5, textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Professional Details" {...a11ySubProps(0)} />
                        <Tab sx={{ '&.MuiButtonBase-root': { color: subValue === 1 ? '#f5f5f9' : '#004a6a', backgroundColor: subValue === 1 ? '#004a6a' : '#f5f5f9', borderRadius: "8px", textTransform: 'none', fontWeight: 400, paddingY: 0, fontSize: 15, minHeight: 40 } }} label="Specialization Details" {...a11ySubProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={subValue} index={0}>
                    {/* Professional details */}
                    <Box sx={{ border: '1px solid lightgrey', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: "0 8px", backgroundColor: '#ffffff', py: 1.5, px: 2 }}>
                        <TextField fullWidth autoComplete='off' id="outlined-name" label="License Number" variant="outlined" />
                        <TextField fullWidth autoComplete='off' id="outlined-dob" label="Year of completion" variant="outlined" />
                        <TextField fullWidth autoComplete='off' id="outlined-gender" label="Institute Name" variant="outlined" />
                        <Typography sx={{ fontSize: 15, textAlign: 'end', mr: 2 }}>Mail us for any changes</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                        <Button variant="outline" sx={{ backgroundColor: '#ffffff', border: '1px solid #00b7b4', width: 150, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}>Cancel</Button>
                        <Button variant="outline" sx={{ backgroundColor: '#00b7b4', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={subValue} index={1}>
                    {/* Specialization Details */}
                    <Box sx={{ border: '1px solid lightgrey', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: "0 8px", backgroundColor: '#ffffff', py: 1.5, px: 2 }}>
                        <TextField fullWidth autoComplete='off' id="outlined-name" label="Specialization" variant="outlined" />
                        <TextField fullWidth autoComplete='off' id="outlined-dob" label="Languages" variant="outlined" />
                        <TextField fullWidth autoComplete='off' id="outlined-gender" label="Domain" variant="outlined" />
                        <Typography sx={{ fontSize: 15, textAlign: 'end', mr: 2 }}>Mail us for any changes</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                        <Button variant="outline" sx={{ backgroundColor: '#ffffff', border: '1px solid #00b7b4', width: 150, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}>Cancel</Button>
                        <Button variant="outline" sx={{ backgroundColor: '#00b7b4', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
                    </Box>
                </CustomTabPanel>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Box sx={{ border: '1px solid lightgrey', backgroundColor: 'white', padding: 1, borderRadius: "8px", height: 400, mt: 2 }}>
                    <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5, mx: 2 }} fontSize={24} fontWeight={500}>Uploaded Documents</Typography>
                    <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1, mx: 2 }} fontSize={20} fontWeight={500}>Degree Certificate</Typography>
                    <Chip sx={{ mx: 2, height: 60, width: "30%", borderRadius: "4px", cursor: 'pointer', backgroundColor: '#e7f0f5', color: 'text.secondary', '.MuiChip-label': { width: "100%" } }} label={
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Box>
                                    <img src={PdfLogo} alt="pdf-logo" />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.1 }}>
                                    <Typography variant='h5' sx={{ fontSize: 15 }}>DegreeCertificate.pdf</Typography>
                                    <span style={{ fontWeight: 300, fontSize: 12 }}>1.5 MB</span>
                                </Box>
                            </Box>
                            <CloseIcon />
                        </Box>
                    } />
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Box sx={{ border: '1px solid lightgrey', backgroundColor: 'white', padding: 2, borderRadius: "8px", height: 400, mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField sx={{ width: '30%' }} autoComplete='off' id="outlined-name" label="Account Name" variant="outlined" />
                    <TextField sx={{ width: '30%' }} autoComplete='off' id="outlined-accoun-number" label="Bank Account Number" variant="outlined" />
                    <TextField sx={{ width: '30%' }} autoComplete='off' id="outlined-ifsc" label="IFSC Code" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                    <Button variant="outline" sx={{ backgroundColor: '#ffffff', border: '1px solid #00b7b4', width: 150, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}>Cancel</Button>
                    <Button variant="outline" sx={{ backgroundColor: '#00b7b4', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
                </Box>
            </CustomTabPanel>
        </Box >
    )
}

export default MyProfile