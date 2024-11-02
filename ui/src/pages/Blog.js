import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import BlogCardImage from '../assets/images/BlogCardImage.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

function Blog() {
    const navigate = useNavigate();

    return (
        <Box>
            <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', mb: 1.5, fontWeight: 400 }}><span onClick={() => navigate("/app/blogs")} style={{ cursor: 'pointer', fontWeight: 500 }}>Blogs</span> / Supplements for vegeterians</Typography>
            <Box sx={{ borderRadius: '50%' }}>
                <img style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px 0' }} src={BlogCardImage} alt='card-image' />
                <Box sx={{ px: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ color: '#004a6a', mt: 2 }} variant='h4'>Supplements for vegeterians</Typography>
                        <Box sx={{ display: 'flex', gap: 10, alignItems: 'center', color: '#00b7b4', mt: 1 }}>
                            <Typography variant='p'>22nd April, 2024</Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <EditIcon sx={{ cursor: 'pointer' }} />
                                <DeleteIcon sx={{ cursor: 'pointer' }} />
                            </Box>
                        </Box>
                    </Box>
                    <Typography sx={{ width: 1600, mt: 5 }}>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit.</Typography>
                    <Typography sx={{ width: 1600, mt: 2 }}>Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut corporis qui, corrupti illo
                        adipisicing elit. Perspiciatis soluta, minus quae quasi fugit aut animi ut
                        corporis qui, corrupti illo</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Blog