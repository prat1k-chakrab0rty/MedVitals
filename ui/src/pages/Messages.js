import { Avatar, Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import React from 'react';
import DoctorProfilePicture from '../assets/images/DoctorProfilePicture.png';
import DoctorProfilePictureLg from '../assets/images/DoctorProfilePictureLg.png';
import ChatHeaderProfilePicture from '../assets/images/ChatHeaderProfilePicture.png';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicIcon from '@mui/icons-material/Mic';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import SearchIcon from '@mui/icons-material/Search';


function Messages() {

  const contacts = [
    {
      name: 'Dr. Charita',
      lastText: 'Got it. Thank you!',
      profilePic: DoctorProfilePicture
    },
    {
      name: 'Dr. Virat',
      lastText: 'Got it. Thank you!',
      profilePic: DoctorProfilePicture
    },
    {
      name: 'Dr. Prem',
      lastText: 'Got it. Thank you!',
      profilePic: DoctorProfilePicture
    },
    {
      name: 'Dr. Tushar',
      lastText: 'Got it. Thank you!',
      profilePic: DoctorProfilePicture
    },
    {
      name: 'Dr. Radha',
      lastText: 'Got it. Thank you!',
      profilePic: DoctorProfilePicture
    },
    {
      name: 'Dr. Sumit',
      lastText: 'Got it. Thank you!',
      profilePic: DoctorProfilePicture
    },
    {
      name: 'Dr. Mala',
      lastText: 'Got it. Thank you!',
      profilePic: DoctorProfilePicture
    },
    {
      name: 'Dr. Rohit',
      lastText: 'Got it. Thank you!',
      profilePic: DoctorProfilePicture
    }
  ];

  const messages = [
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    },
    {
      text: "Thank you for the call",
      fromMe: false
    },
    {
      text: "Welcome don't forget to take the pills before sleep",
      fromMe: true
    }
  ];

  return (
    <Box sx={{ backgroundColor: "#ffffff", display: 'flex', height: '100%', boxShadow: "2px 2px 5px lightgrey" }}>
      {/* chats */}
      <Box sx={{ flex: 2 }}>
        <List sx={{ padding: 0 }}>
          <ListItem divider>
            <TextField sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
              fullWidth variant='outlined' placeholder='Search' autoComplete="off" />
            <SearchIcon />
          </ListItem>
          {contacts.map(c => (
            <ListItem secondaryAction={
              <Typography color='text.secondary' sx={{ fontSize: 12 }} variant='p'>14.23 PM</Typography>
            }
              key={c.name} divider disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={c.profilePic} alt={`profile-pic-${c.name}`} />
                </ListItemIcon>
                <ListItemText primary={c.name} secondary={c.lastText} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* chatbox */}
      <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#e7f0f5', flex: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', px: 1, py: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ borderRadius: 2, width: 30, height: 30 }} src={ChatHeaderProfilePicture}>
            </Avatar>
            <Box>
              <Typography sx={{ fontSize: 14 }}>Shaurya Parvin</Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary">Online</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, color: '#1987a6' }}>
            <CallIcon />
            <VideocamIcon />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', px: 3, overflowY: 'scroll' }} >
          {
            messages.map((message, i) => (
              <Box key={i} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: message.fromMe ? "flex-start" : "flex-end" }}>
                <Typography sx={{ backgroundColor: '#ffffff', p: 1, borderRadius: "10px 10px 10px 0" }}>{message.text}.</Typography>
                <Typography sx={{ fontSize: 12, color: 'gray', mt: 0.5 }}>14:20 PM</Typography>
              </Box>
            ))
          }
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#ffffff', px: 2, border: '1px solid #ebebeb' }}>
          <AttachFileIcon />
          <TextField autoComplete='off' sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
            fullWidth variant='outlined' placeholder='Write a message' />
          <SentimentSatisfiedAltIcon sx={{ mr: 1 }} />
          <MicIcon />
        </Box>
      </Box>
      {/* chat profile */}
      <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', py: 3 }}>
        <img src={DoctorProfilePictureLg} alt={`profile-pic}`} />
        <Typography color='text.secondary' variant='h5' mt={3}>Dr. Charita</Typography>
        <Typography color='text.secondary' fontSize={15} variant='p'>Online</Typography>
        <Typography color='text.secondary' mt={4} fontSize={18} variant='p'>General Physician</Typography>
        <Typography color='text.secondary' fontSize={11} mt={1} mb={2} variant='p'>5 years of experience</Typography>
        <hr style={{ width: "100%", borderColor: '#ebebeb', opacity: "20%" }} />
        <Button sx={{ color: 'text.secondary', width: "100%", px: 0, textTransform: 'none', mt: 3 }}><PermMediaIcon sx={{ mr: 1, fontSize: 15 }} /> Shared Media</Button>
        <Button sx={{ color: 'text.secondary', width: "100%", px: 0, textTransform: 'none', mt: 3 }}><InsertLinkIcon sx={{ mr: 1, fontSize: 18 }} /> Shared Files</Button>
      </Box>
    </Box >
  )
}

export default Messages