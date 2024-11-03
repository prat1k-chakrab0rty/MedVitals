import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { useNavigate } from 'react-router-dom';

function AddBlog() {
    const navigate = useNavigate();
    return (
        <Box>
            <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5, fontWeight: 400 }}>Add a blog</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, ml: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Avatar sx={{ height: 100, width: 100, borderRadius: 2 }} variant="square">
                        <Box sx={{ position: 'relative', height: "100%", width: "100%" }}>
                            <Box sx={{ position: 'absolute', right: 4, top: 4, color: '#ffffff', borderRadius: '50%', p: 0.5, backgroundColor: '#00b7b4', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                <CameraAltOutlinedIcon sx={{ fontSize: 18 }} />
                            </Box>
                        </Box>
                    </Avatar>
                    <Box >
                        <Typography sx={{ fontSize: 13, mb: 0.5, color: '#727373' }}>Max File Size: 100MB</Typography>
                        <Typography sx={{ fontSize: 13, mb: 0.5, color: '#727373' }}>Supported File Type: JPG or PNG</Typography>
                        <Button variant="outline" sx={{ backgroundColor: 'inherit', p: 0, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}><FileUploadOutlinedIcon /> Upload</Button>
                    </Box>
                </Box>
                <Box>
                    <TextField sx={{ backgroundColor: '#ffffff', width: 600 }} id="outlined-basic" label="Blog Title" variant="outlined" />
                </Box>
                <Box>
                    <TextField rows={20} multiline sx={{ backgroundColor: '#ffffff', width: "100%",outline:"none" }} id="outlined-basic" label="Blog Description" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
                    <Button onClick={() => navigate("/app/blogs")} variant="outline" sx={{ backgroundColor: '#ffffff', border: '1px solid #00b7b4', width: 150, fontSize: 13, textTransform: 'none', color: '#00b7b4' }}>Cancel</Button>
                    <Button onClick={() => navigate("/app/blogs")} variant="outline" sx={{ backgroundColor: '#00b7b4', fontSize: 13, textTransform: 'none', width: 150, color: '#ffffff' }}>Save</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AddBlog