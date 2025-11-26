import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Grid,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Companyview2() {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    smtpServer: '',
    smtpPort: '',
    smtpUsername: '',
    smtpPassword: '',
    companyLogoUrl: '',
    maxResponsesPerDay: ''
  });

  const handleOpenDialog = () => setOpenDialog(true);
  
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      companyName: '',
      smtpServer: '',
      smtpPort: '',
      smtpUsername: '',
      smtpPassword: '',
      companyLogoUrl: '',
      maxResponsesPerDay: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    handleCloseDialog();
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'white', p: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          onClick={handleOpenDialog}
          sx={{
            bgcolor: '#1976d2',
            '&:hover': {
              bgcolor: '#1565c0'
            }
          }}
        >
          New Company
        </Button>
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle
          sx={{
            bgcolor: '#26a69a',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          New Company
          <IconButton onClick={handleCloseDialog} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="SMTP Server"
                name="smtpServer"
                value={formData.smtpServer}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="SMTP Port"
                name="smtpPort"
                value={formData.smtpPort}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="SMTP Username"
                name="smtpUsername"
                value={formData.smtpUsername}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="SMTP Password"
                name="smtpPassword"
                type="password"
                value={formData.smtpPassword}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Company Logo URL"
                name="companyLogoUrl"
                value={formData.companyLogoUrl}
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Max Responses Per Day"
                name="maxResponsesPerDay"
                value={formData.maxResponsesPerDay}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 2 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                bgcolor: '#26a69a',
                px: 6,
                '&:hover': {
                  bgcolor: '#229a8e'
                }
              }}
            >
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}