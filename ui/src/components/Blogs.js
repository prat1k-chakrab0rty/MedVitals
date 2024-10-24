import { Box, Typography } from '@mui/material';
import React from 'react';
import BlogImage1 from '../assets/images/BlogImage1.png';
import BlogImage2 from '../assets/images/BlogImage2.png';
import BlogImage3 from '../assets/images/BlogImage3.png';
import BlogImage4 from '../assets/images/BlogImage4.png';

const blogs = [
    {
        image: BlogImage1,
        rotation: -24,
        translate: -56,
        date: "22nd April, 2024",
        title: "Chronic Headache? End It with a Headache Cycle-breaker",
        doctorName: 'Dr. Mala'
    },
    {
        image: BlogImage2,
        rotation: 24.5,
        translate: 56,
        date: "22nd April, 2024",
        title: "Dietician on Call. Making Healthy Eating Easier than Ever",
        doctorName: 'Dr. Mala'
    },
    {
        image: BlogImage3,
        rotation: -30,
        translate: -56,
        date: "22nd April, 2024",
        title: "How Online Counselling makes Mental Healthcare more Accessable",
        doctorName: 'Dr. Mala'
    },
    {
        image: BlogImage4,
        rotation: 25,
        translate: 0,
        date: "22nd April, 2024",
        title: "What is Depression? How to overcome it?",
        doctorName: 'Dr. Mala'
    }
];


const MiniCard = ({ blog }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', width: '200px', transform: `rotate(${-blog.rotation}deg) translate(10px,${blog.translate}px)`, scale: 1.5 }}>
            <img style={{ transform: `rotate(${blog.rotation}deg)`, width: '234px', objectFit: 'contain', position: 'relative', left: "-17px" }} src={blog.image} alt='blog-img-1' />
            <Box sx={{ px: 2, fontSize: 12, position: 'relative', top: '-35px', backgroundColor: 'white', borderRadius: '0 0 6px 6px', pb: 4, boxShadow: '0 3px 3px grey' }}>
                <Typography component="div" py={1} variant='p'>{blog.date}</Typography>
                <Typography component="div" pb={1} variant='p' fontWeight={600} lineHeight={1.5}>{blog.title}</Typography>
                <Typography color='textSecondary' variant='p'>~ {blog.doctorName}</Typography>
            </Box>
        </Box>
    );
}

function Blogs() {
    return (
        <Box sx={{ pt: 8, pb: 5, backgroundColor: '#f8f6f8', mb: 2 }}>
            <Typography sx={{ textAlign: 'center', color: '#005071', fontWeight: 500 }} variant='h3'>Blogs</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 20, mx: 45 }}>
                {blogs.map(blog => (
                    <MiniCard key={blog.title} blog={blog} />
                ))}
            </Box>
        </Box>
    )
}

export default Blogs