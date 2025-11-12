import React from 'react'
import { Box } from "@mui/material";


function MailEditor({content, setContent}) {
    const handleInput =(e) => {
        setContent(e.target.innerHTML)
    }
  return (
    <Box sx={{ p: 2, borderTop: "1px solid #eee" }}>
      <div
        contentEditable
        style={{ minHeight: "200px", outline: "none" }}
        onInput={handleInput}
      />
    </Box>
  )
}

export default MailEditor
