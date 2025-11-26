import React from 'react'
import { Box } from "@mui/material";
import DOMPurify from "dompurify";


function MailPreview({ content }) {
  return (
    <Box sx={{ mb: 3, p: 2, borderBottom: "1px solid #eee", minHeight: 200 }}>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
    </Box>
  )
}

export default MailPreview
 