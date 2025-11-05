import { Box, Paper } from '@mui/material';
import React from 'react'

function Layout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1200,
          height: 128,
          textAlign: 'center'
        },
      }}
    >
      
      <Paper elevation={3} >React Material UI Email Application</Paper>
    </Box>
  );
}

export default Layout