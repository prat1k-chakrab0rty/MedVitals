import { Box, Button, FormControl, FormHelperText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

function ContactUs() {
    const [commentCharCount, setcommentCharCount] = useState(0);
    return (
        <Box sx={{ padding: 5, position: 'relative', display: 'flex' }}>
            <Box sx={{ position: 'absolute', backgroundColor: '#d81b60', borderRadius: "10px", py: 20, px: 18, top: "112px", left: "320px", boxShadow: '0 5px 10px 1px lightgrey' }}>
                <Typography sx={{ textAlign: 'center', color: '#ffffff', fontWeight: 500, mb: 3 }} variant='h5'>Contact Us</Typography>
                <Box sx={{ position: 'relative', left: "-35px" }}>
                    <Typography sx={{ verticalAlign: 'middle', color: '#ffffff', fontWeight: 500, mb: 2 }} variant='h6'>Email Address</Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 6, color: '#ffffff' }}>
                        <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                        <Typography sx={{ textAlign: 'center', fontWeight: 300, fontSize: 18 }} variant='h6'>contact@medvitals.com</Typography>
                    </Box>
                    <Typography sx={{ color: '#ffffff', fontWeight: 500, mb: 2 }} variant='h6'>Call Us</Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', color: '#ffffff' }}>
                        <CallOutlinedIcon sx={{ fontSize: 20 }} />
                        <Typography sx={{ color: '#ffffff', fontWeight: 300 }} variant='h6'>+91 8543885534</Typography>
                    </Box>
                    <Typography sx={{ color: '#ffffff', fontWeight: 300, ml: 3,fontSize: 18 }} variant='h6'>(Mon-Fri: 10 AM - 7 PM)</Typography>
                </Box>
            </Box>
            <Box sx={{ borderRadius: "5px", margin: 5, marginLeft: 60, boxShadow: '0 5px 10px 1px lightgrey', padding: 10, paddingLeft: 70 }}>
                <Typography sx={{ textAlign: 'center', color: '#005071', fontWeight: 500, mb: 10 }} variant='h3'>Get In Touch</Typography>
                <form noValidate autoComplete="off" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        <TextField fullWidth id="outlined-basic" label="Full Name" size='small' variant="outlined" />
                        <TextField fullWidth id="outlined-basic" label="Last Name" size='small' variant="outlined" />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField id="outlined-basic" label="Email" size='small' variant="outlined" />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField id="outlined-basic" label="Phone" size='small' variant="outlined" />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField id="outlined-basic" onKeyDownCapture={() => setcommentCharCount(commentCharCount + 1)} multiline rows={4} label="Add a comment" size='small' variant="outlined" />
                        <FormHelperText sx={{ textAlign: 'right', marginTop: 1 }}>{commentCharCount}/1000</FormHelperText>
                    </FormControl>
                    <Box>
                        <Button type='submit' sx={{ mt: 1, backgroundColor: '#004a6a', py: "5px", fontSize: 16, fontWeight: 400, px: 12, textTransform: 'none', color: '#ffffff' }}>Submit</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default ContactUs