import { Autocomplete, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Modal, Paper, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import React, { useState } from 'react'

function Mailboxes() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <div>
            <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2 }}><Button variant="contained" onClick={handleOpen} sx={{ backgroundColor: '#2DC4A8', width: 150, py: 1.5, borderRadius: 2 }}>New Mailbox</Button></Box>
            <Dialog open={open} onClose={handleClose} fullWidth={20} PaperProps={{ sx: { borderRadius: "16px" } }} >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 1, pr: 3, backgroundColor: '#2DC4A8', color: 'white' }}>
                    <DialogTitle> New MailBox</DialogTitle>
                    <CloseIcon onClick={handleClose} />
                </Box>
                <DialogContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Box>
                            <TextField label="Email" sx={{ width: 260, mb: 2 }} />
                            <TextField label="IMAP PORT" sx={{ width: 260, mb: 2 }} />
                            <TextField label="IMAP PASSWORD" sx={{ width: 260, mb: 2 }} />
                            <FormControlLabel control={<Checkbox />} label="autoCheck" />
                            <TextField label="Current Prompt" sx={{ width: 260, mb: 2 }} />
                            <TextField label="Auto-Reply Threshold" sx={{ width: 260, mb: 2 }} />
                        </Box>
                        <Box>
                            <TextField label="IMAP Server" sx={{ width: 260, mb: 2 }} />
                            <TextField label="IMAP Username" sx={{ width: 260, mb: 2 }} />
                            <FormControlLabel control={<Checkbox />} label="DemoMode" />
                            <TextField label="Responsible Contact Email" sx={{ width: 260, mb: 2 }} />
                            <TextField label="Current Template" sx={{ width: 260, mb: 2 }} />
                            <FormControlLabel control={<Checkbox />} label="ForwardOverThreshold" />
                        </Box>
                    </Box>
                    <TextField label="Forward Over Threshold Email" sx={{ width: 540, mb: 2 }} />
                    <Box sx={{ display: 'flex' }}>
                        <Autocomplete options={["Marketing Emails (like newsletters and promotional emails)", "Transactional Emails (like confirmations and password resets)", "Personal Emails (formal and informal)", " Technical Emails (like onboarding guides)"]} renderInput={params => <TextField {...params} label="Email Type" />} sx={{ width: '260px' }} />
                        <TextField label="Last Check" sx={{ width: 260, mb: 2, ml: 2 }} />
                    </Box>
                </DialogContent>
                <Button variant="contained" onClick={''} sx={{ backgroundColor: '#2DC4A8', width: 150, py: 1.5, mx: 24, mb: 2, borderRadius: 2 }}>Submit</Button>
            </Dialog>
        </div>
    )
}

export default Mailboxes
