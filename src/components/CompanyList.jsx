import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Box, Typography, Button, IconButton } from "@mui/material";

function CompanyList() {
    const companies = [
        "Microsoft", 
        "Google", 
        "Amazon", 
        "Apple", 
        "Tesla", 
        "Netflix",
        "SpaceX", 
        "Meta",
        "Adobe"
    ];

    return (
        <Box sx={{ p: 0, pt: 0, width: '100%', px: 3 }}> 

        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}> 
            <Button
            variant="contained"
            sx={{
                bgcolor: "#2DC4A8",
                "&:hover": { bgcolor: "#32b37e" },
                textTransform: "none",
                boxShadow: 'none'
            }}
            >
            New Company
            </Button>
        </Box>

        <Box sx={{ mt: 2 }}> 
            {companies.map((company, index) => (
            <Box
                key={company + index}
                sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2, 
                borderBottom: "1px solid #f0f0f0", 
                bgcolor: "white", 
                minWidth: 0, 
                borderTop: index === 0 ? "1px solid #f0f0f0" : 'none', 
                '&:hover': { bgcolor: '#f5f5f5' }
                }}
            >
                <Typography 
                variant="body1" 
                sx={{ color: '#0f0f0f96', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexGrow: 1 }}
                >
                {company}
                </Typography>
                
                <Box sx={{ flexShrink: 0, display: 'flex' }}>
                <IconButton size="small" sx={{ color: '#bdbdbd', '&:hover': { color: '#888' } }}>
                    <FiEdit size={16} />
                </IconButton>
                <IconButton size="small" sx={{ color: '#bdbdbd', ml: 1, '&:hover': { color: '#888' } }}>
                    <FiTrash2 size={16} />
                </IconButton>
                </Box>
            </Box>
            
            ))}
        </Box>
        </Box>
    );
}

export default CompanyList;