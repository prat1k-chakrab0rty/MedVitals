import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import BlogCardImage from '../assets/images/BlogCardImage.png';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const BlogCard = () => {
  const navigate = useNavigate();
  const [userRole, setuserRole] = useState(localStorage.getItem("userRole"));

  return (
    <Box sx={{ scale: userRole == "patient" ? '0.85' : '1', width: '286px', backgroundColor: '#ffffff', height: '400px', borderRadius: '8px' }}>
      <img src={BlogCardImage} alt='card-image' />
      <Box sx={{ px: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#00b7b4', mt: 1 }}>
          <Typography variant='p'>22nd April, 2024</Typography>
          {userRole === 'patient' || <Box sx={{ display: 'flex', gap: 1 }}>
            <EditIcon sx={{ cursor: 'pointer' }} />
            <DeleteIcon sx={{ cursor: 'pointer' }} />
          </Box>}
        </Box>
        <Typography sx={{ color: '#004a6a', mt: 2 }} variant='h6'>Supplements for vegeterians</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => navigate('/app/blog')} sx={{ borderRadius: '16px', px: 6, py: 1, backgroundColor: '#004a6a', fontWeight: 400, mt: 5 }} variant='contained'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ fontSize: 15, textTransform: 'none' }}>Read more</Typography>
              <KeyboardArrowRightIcon />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

function Blogs({ cardCount }) {
  const navigate = useNavigate();
  const [userRole, setuserRole] = useState(localStorage.getItem("userRole"));

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: userRole == "patient" ? 0 : 2 }}>
        <Typography variant='h6' component="div" sx={{ color: '#3d3c3c', verticalAlign: 'middle' }}>{userRole == 'doctor' ? 'Your blogs' : 'Blogs'}</Typography>
        {userRole === 'doctor'
          ? <Button onClick={() => navigate("/app/addBlog")} sx={{ backgroundColor: '#f6d9c3', fontSize: 13, textTransform: 'none', color: '#d25f00' }}><AddIcon sx={{ fontSize: 12, mr: 1 }} />New Blog</Button>
          : <Button sx={{ textTransform: 'none', color: '#d92466' }}>View All</Button>
        }
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        {cardCount == 4 || <BlogCard />}
      </Box>
    </Box>
  )
}

export default Blogs