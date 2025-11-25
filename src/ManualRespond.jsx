// DetailedEmailContent.jsx
import React from 'react';
import { Box, Typography, Divider, Container, Avatar, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import draft from './assets/bxs_message-edit.png'



function ManualRespond() { 
  return (
    <Box >
      <Paper sx={{ mx: 2, p: 2, minHeight: '120vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',mb:5 }} >
          <Box >
            <Container sx={{ display: 'flex', gap:2,alignItems: 'center', justifyContent: 'space-between' }} >
              <Avatar />
              <Box>
                <Typography variant='h6'> Tarik Abaza</Typography>
                <Typography variant='caption' >From: <b>tarik_abazza@hotmail.com</b> <FiberManualRecordIcon sx={{ height: 6, }} /> To: <b>Me</b></Typography>
              </Box>
            </Container>
          </Box>
          <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
            <b>2024, September 16, 08:00 am </b>   <CloseIcon fontSize ='small' />
          </Box>
        </Box>

        

          <Box sx={{mb:5}}> 
            <Typography sx={{ display: 'flex' , alignItems: 'center', gap: '10px', py: '12px',}}> <img src={draft} alt="draft-image" /><Typography color='#FF9D00' fontWeight={'bold'} fontSize={'15px'} >MANUALLY RESPONDED</Typography>  </Typography>
            <Typography variant='caption' >By: <b>Tarik Abaza</b> <FiberManualRecordIcon sx={{ height: 6 }} />Date:<b>07/08/2024</b></Typography>
            <Typography fontSize={'35px'}>Your Contract Is Stated</Typography>
                  
          </Box>

          <Box sx={{ whiteSpace: 'pre-wrap' }}>
        <Typography variant="h6" sx={{ mb: 5 }}>Dear Sales Team,</Typography>
        <Typography as="p" variant="h6" sx={{ mb: 2 }}>
          I've noticed a discrepancy in the latest invoice you sent us. It appears that we were charged twice for the same service. Can you please look into this as soon as possible?
        </Typography>
        <Typography variant="h6">Thank you,</Typography>
        <Typography variant="h6" fontWeight={500}>John Doe</Typography>
        <Typography variant="h6" >Customer Support Lead</Typography>
        <Typography variant="h6" >Customer Inc.</Typography>
      </Box>
      <Typography variant='h6' sx={{mb:7}}></Typography>


       <Typography variant="h6"mb={3} fontWeight={600}>Response</Typography>
       <Box sx={{whiteSpace:'pre-wrap'}}>
        <Typography  sx={{mb:6}}>Dear Sales Team,</Typography>
        <Typography>I've noticed a discrepancy in the latest invoice you sent us.It appearsthat we were charged twice for the same service. Can you please look into this as soon as possible? </Typography>
        <Typography variant="h6">Thank you,</Typography>
        <Typography variant="h6" fontWeight={300}>John Doe</Typography>
        <Typography variant="h6" >Customer Support Lead</Typography>
        <Typography variant="h6" >Customer Inc.</Typography>
      </Box>
       



      </Paper>
    </Box>
  )
}

export default ManualRespond;