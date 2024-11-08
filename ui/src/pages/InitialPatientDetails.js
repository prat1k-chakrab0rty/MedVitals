import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import AddIcon from '@mui/icons-material/Add';
import Day from '../assets/images/Day.png';
import Evening from '../assets/images/Evening.png';
import Night from '../assets/images/Night.png';
import { useNavigate } from 'react-router-dom';



function InitialPatientDetails() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const navigate = useNavigate();

    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const HoverableImage = styled('img')({
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            filter: 'brightness(0.8) sepia(1) hue-rotate(-25deg) saturate(300%)'
        },
    });
    return (
        <Box sx={{ mx: 12 }}>
            <Box sx={{ backgroundColor: '#ffffff', p: 2, borderRadius: 2, boxShadow: '0px 2px 2px 2px lightgrey' }}>
                <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5, fontWeight: 600 }}>Please fill the below details to book appointment</Typography>
                <hr style={{ width: "100%", borderColor: '#ebebeb', opacity: "20%" }} />
                <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5, mx: 2 }} fontSize={20} fontWeight={500}>Upload Profile Photo</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, px: 2 }}>
                    <Avatar sx={{ height: 100, width: 100, borderRadius: 2 }} variant="square">
                        <Box sx={{ position: 'relative', height: "100%", width: "100%" }}>
                            <Box sx={{ position: 'absolute', right: 4, top: 4, color: '#ffffff', borderRadius: '50%', p: 0.5, backgroundColor: '#d73b74', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <CameraAltOutlinedIcon sx={{ fontSize: 18 }} />
                            </Box>
                        </Box>
                    </Avatar>
                    <Box >
                        <Typography sx={{ fontSize: 13, mb: 1, color: '#727373' }}>Max File Size: 100MB</Typography>
                        <Typography sx={{ fontSize: 13, mb: 1, color: '#727373' }}>Supported File Type: JPG or PNG</Typography>
                        <Button variant="outline" sx={{ backgroundColor: 'inherit', p: 0, fontSize: 13, textTransform: 'none', color: '#d73b74' }}><FileUploadOutlinedIcon /> Upload</Button>
                    </Box>
                </Box>
                <hr style={{ width: "100%", borderColor: '#ebebeb', opacity: "20%" }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {/* row 1 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-name" label="Name" variant="outlined" />
                        <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-email" label="Email" variant="outlined" />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker sx={{ flex: 1 }} label="Date of Birth" />
                        </LocalizationProvider>
                    </Box>
                    {/* row 2 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-gender" label="Gender" variant="outlined" />
                        <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-ms" label="Martial Status" variant="outlined" />
                        <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-city" label="City" variant="outlined" />
                    </Box>
                    {/* row 3 */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-blood" label="Blood Group" variant="outlined" />
                        <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-height" label="Height in cm" variant="outlined" />
                        <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-weight" label="Weight in kgs" variant="outlined" />
                    </Box>
                    <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-weight" label="Conditions" variant="outlined" />
                    <TextField sx={{ flex: 1 }} autoComplete='off' id="outlined-weight" label="Allergies" variant="outlined" />
                    <Typography fontWeight={600} variant='h6'>Medications</Typography>
                    <Button onClick={handleDialogClickOpen} variant="outline" sx={{ backgroundColor: '#ffdef2', py: 2, width: "100%", fontSize: 13, textTransform: 'none', color: 'text.secondary' }}><AddIcon sx={{ fontSize: 15 }} /> Add New</Button>
                    {/* Dialog */}
                    <Dialog
                        open={dialogOpen}
                        onClose={handleDialogClose}
                        PaperProps={{
                            component: 'form',
                            onSubmit: (event) => {
                                event.preventDefault();
                                const formData = new FormData(event.currentTarget);
                                const formJson = Object.fromEntries(formData.entries());
                                const email = formJson.email;
                                console.log(email);
                                handleDialogClose();
                            },
                        }}
                    >
                        <Box sx={{ my: 4 }}>
                            <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: 400, }}>
                                <TextField
                                    id="medicine-name"
                                    label="Medicine name"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                <TextField
                                    id="note"
                                    label="Note"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                <TextField
                                    id="duration"
                                    label="Duration"
                                    type="text"
                                    fullWidth
                                    variant="outlined"
                                />
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                    <HoverableImage src={Day} alt='day-logo' />
                                    <HoverableImage src={Evening} alt='evening-logo' />
                                    <HoverableImage src={Night} alt='night-logo' />
                                </Box>
                            </DialogContent>
                            <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                                <Button onClick={handleDialogClose} variant="outline" sx={{ backgroundColor: 'inherit', border: '1px solid #d81b60', fontSize: 13, textTransform: 'none', width: 150, color: '#d81b60' }}>Cancel</Button>
                                <Button onClick={handleDialogClose} variant="outline" sx={{ backgroundColor: '#d81b60', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
                            </DialogActions>
                        </Box>
                    </Dialog>
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                    <Button onClick={() => { localStorage.setItem("userRole", "patient"); navigate("/app/"); }} variant="outline" sx={{ backgroundColor: '#d81b60', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default InitialPatientDetails