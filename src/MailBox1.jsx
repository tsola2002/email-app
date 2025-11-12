import { Avatar, Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import draft from './assets/ri_draft-fill.png'
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from 'react';
import MailPreview from './mail-features/MailPreview';
import MailEditor from './mail-features/MailEditor';
import MailToolBar from './mail-features/MailToolBar';
function MailBox1() {
  const [content, setContent] = useState("")
  return (
    <Box >
      <Paper sx={{ mx: 2, p: 2, minHeight: '86vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
          <Box >
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
              <Avatar />
              <Box>
                <Typography variant='h6' ml={3} > Tarik Abaza</Typography>
                <Typography variant='caption' color='#9e9c9cff' ml={3}>From: tarik_abazza@hotmail.com <FiberManualRecordIcon sx={{ height: 6 }} /> To: Me</Typography>
              </Box>
            </Container>
          </Box>
          <Box color='#9e9c9cff' sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            2024, September 16, 08:00 am  <CloseIcon fontSize='small' />
          </Box>
        </Box>

        <Box  >
          <Container sx={{ display: 'flex', alignItems: 'center', gap: '10px', py: '5px', ml: '5px' }}> <img src={draft} alt="draft-image" /><Typography color='#0022FF' fontWeight={'bold'} fontSize={'20px'}>DRAFT</Typography> </Container>
        </Box>

        <Box ml={1}>
          <MailPreview content={content} />
        </Box>

        <MailToolBar />
        <MailEditor content={content} setContent={setContent} />
      </Paper>
    </Box>
  )
}

export default MailBox1
