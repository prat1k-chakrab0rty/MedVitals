import { Avatar, Box, Button, Drawer, FormControl, FormHelperText, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import BrandLogo from '../assets/images/Logo2.png';
import BrandName from '../assets/images/BrandName1.png';
import CancelIcon from '@mui/icons-material/Cancel';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../config/firebase';


const roles = ["Doctor", "Patient"];

const loginWithGoogle = function () {
    const user = signInWithGoogle();
};

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});


//Custom File Picker
const FilePicker = () => (
    <Button
        sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'gray', alignItems: 'center', padding: 0, textTransform: 'none' }}
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
    >
        <Box sx={{ flex: 1, color: "#585959", ml: 4, fontSize: 20 }}>
            Browse
        </Box>
        <VisuallyHiddenInput
            type="file"
            onChange={(event) => console.log(event.target.files)}
            multiple
        />
        <TextField disabled sx={{ flex: 4, backgroundColor: "#ffffff", m: "0px", borderRadius: "5px" }} id="name" label="Click browse to upload files" size='small' variant="outlined" />
    </Button>
);


// Drawer Screens
const LoginScreen = ({ setscreenFlow }) => (
    <Box px={2}>
        <Typography variant='h6' mt={8} mb={2} ml={2}>Sign in/Sign up</Typography>
        <form>
            <FormControl fullWidth>
                <TextField id="outlined-basic" label="Mobile Number" size='small' variant="outlined" />
            </FormControl>
            <FormControl sx={{ mt: 3 }} fullWidth>
                <TextField id="outlined-basic" label="Enter OTP" size='small' variant="outlined" />
            </FormControl>
            <Box>
                <Button onClick={() => setscreenFlow(1)} sx={{ mt: 3, backgroundColor: '#00b7b4', py: "5px", fontSize: 18, fontWeight: 600, width: '100%', textTransform: 'none', color: '#ffffff' }}>Send OTP</Button>
            </Box>
        </form>
        <Box mt={4}>
            <Typography textAlign="center" color='text.secondary' fontWeight={500} component="div" variant='p'>OR</Typography>
            <Button onClick={loginWithGoogle} sx={{ mt: 3, border: "1px solid grey", backgroundColor: '#ffffff', py: "6px", fontSize: 16, fontWeight: 400, width: '100%', textTransform: 'none', color: '#000000' }}>Continue with Google</Button>
            <Typography mt={4} textAlign="center" component="div" fontWeight={300} fontSize={15} variant='p'>By signing in you agree to our terms and conditions</Typography>
        </Box>
    </Box>
);


const RoleSelectionScreen = ({ activeRole, setactiveRole, setscreenFlow }) => {
    const navigate = useNavigate();
    console.log(activeRole);

    return (
        <Box px={2}>
            <Box mt={8} sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {roles.map(role => (
                    <Box key={role} onClick={() => setactiveRole(role)} sx={{ border: "2px solid lightgrey", borderRadius: "8px", px: 2, py: 2, boxShadow: activeRole == role && '0 2px 5px 2px lightgrey', cursor: 'pointer' }}>
                        <Typography lineHeight={1.5}> <span style={{ fontSize: "30px", fontWeight: '300' }}>I'm a</span> <br /><span style={{ fontSize: "50px", fontWeight: '400' }}>{role}</span></Typography>
                    </Box>
                ))}
            </Box>
            <Button onClick={() => !activeRole || (activeRole == "Doctor" ? setscreenFlow(2) : navigate("/app/patientInfo"))} sx={{ mt: 3, backgroundColor: '#00b7b4', py: "5px", fontSize: 18, fontWeight: 600, width: '100%', textTransform: 'none', color: '#ffffff', cursor: activeRole === "" ? 'not-allowed' : 'pointer' }}>Continue</Button>
        </Box>
    );
};


const DoctorDetails1Screen = ({ setscreenFlow }) => (
    <Box sx={{ width: '584px !important' }}>
        <Typography variant='h6' mt={8} mb={10} textAlign={"center"}>Give more details</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 8, cursor: 'pointer', position: 'relative' }}>
            <AddAPhotoRoundedIcon sx={{ zIndex: 1800, position: 'absolute', top: "-27px", left: "312px", color: '#445363' }} />
            <Avatar variant="rounded" sx={{ backgroundColor: '#e7f0f5', scale: 2.5 }}>
                <PersonOutlineIcon />
            </Avatar>
        </Box>
        <form style={{ padding: "0 15px" }}>
            <FormControl fullWidth>
                <TextField id="name" label="Name" size='small' variant="outlined" />
            </FormControl>
            <FormControl sx={{ mt: 3 }} fullWidth>
                <TextField id="mail-id" label="Mail Id" size='small' variant="outlined" />
            </FormControl>
            <FormControl sx={{ mt: 3 }} fullWidth>
                <TextField id="gender" label="Gender" size='small' variant="outlined" />
            </FormControl>
            <FormControl sx={{ mt: 3 }} fullWidth>
                {/* <TextField id="date-of-birth" label="Date of Birth" size='small' variant="outlined" /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker label="Date of Birth" />
                </LocalizationProvider>
            </FormControl>
            <Box>
                <Button onClick={() => (setscreenFlow(3))} sx={{ mt: 3, backgroundColor: '#00b7b4', py: "5px", fontSize: 18, fontWeight: 600, width: '100%', textTransform: 'none', color: '#ffffff' }}>Continue</Button>
            </Box>
        </form>
    </Box>
);


const DoctorDetails2Screen = ({ setscreenFlow }) => (
    <Box sx={{ width: '584px' }}>
        <Typography variant='h6' mt={8} mb={6} textAlign={"center"} sx={{ fontWeight: 500 }}>Upload Documents</Typography>
        <form style={{ padding: "0 15px" }}>
            <FormControl fullWidth>
                <FormHelperText sx={{ fontSize: 16, color: "#000000", fontWeight: "500" }}>Degree Certificate</FormHelperText>
                <FilePicker />
            </FormControl>
            <FormControl sx={{ mt: 2 }} fullWidth>
                <FormHelperText sx={{ fontSize: 16, color: "#000000", fontWeight: "500" }}>Medical License</FormHelperText>
                <FilePicker />
            </FormControl>
            <FormControl sx={{ mt: 3 }} fullWidth>
                <TextField id="medical-license-number" label="Medical License Number" size='small' variant="outlined" />
            </FormControl>
            <FormControl sx={{ mt: 3 }} fullWidth>
                <TextField select id="select-specialization" label="Select Specialization" size='small' variant="outlined" >
                    <MenuItem>Neurologist</MenuItem>
                    <MenuItem>Dermatologist</MenuItem>
                    <MenuItem>Nutritionist</MenuItem>
                    <MenuItem>Gynecologist</MenuItem>
                    <MenuItem>Cardiologist</MenuItem>
                    <MenuItem>Physiologist</MenuItem>
                </TextField>
            </FormControl>
            <FormControl sx={{ mt: 3 }} fullWidth>
                <TextField id="area-of-interest" label="Area Of Interest" size='small' variant="outlined" />
            </FormControl>
            <Box>
                <Button onClick={() => (setscreenFlow(4))} sx={{ mt: 3, backgroundColor: '#00b7b4', py: "5px", fontSize: 18, fontWeight: 600, width: '100%', textTransform: 'none', color: '#ffffff' }}>Continue</Button>
            </Box>
        </form>
    </Box>
);


const DoctorDocumentsValidationScreen = () => (
    <Box sx={{ width: '584px' }}>
        <Typography variant='h6' sx={{ mt: 8, px: 3, textAlign: 'center' }}>
            Please wait for us to validate your medical license, once it is verified you will be notified with an email.
        </Typography>
    </Box>
);




function SignInDrawer({ setdrawerOpen, drawerOpen }) {
    const [screenFlow, setscreenFlow] = useState(0);
    const [activeRole, setactiveRole] = useState("");
    return (
        <Drawer open={drawerOpen} anchor="right">
            <CancelIcon onClick={() => { setscreenFlow(0); setdrawerOpen(false); setactiveRole(""); }} sx={{ position: 'absolute', color: '#d3d3d3', fontSize: 36, top: "11px", left: "5px", cursor: 'pointer' }} />
            {screenFlow != 2 && screenFlow != 3 && <Box sx={{ display: 'flex', flexDirection: 'column', px: 25, mt: 7 }}>
                <img src={BrandLogo} alt='logo' />
                <img src={BrandName} alt='logo' />
            </Box>}
            {(() => {
                switch (screenFlow) {
                    case 0:
                        return <LoginScreen setscreenFlow={setscreenFlow} />;
                    case 1:
                        return <RoleSelectionScreen activeRole={activeRole} setactiveRole={setactiveRole} setscreenFlow={setscreenFlow} />;
                    case 2:
                        return <DoctorDetails1Screen setscreenFlow={setscreenFlow} />;
                    case 3:
                        return <DoctorDetails2Screen setscreenFlow={setscreenFlow} />;
                    case 4:
                        return <DoctorDocumentsValidationScreen />;
                    default:
                        return <LoginScreen />;
                }
            })()}
        </Drawer>
    )
}

export default SignInDrawer