"use client"

import { useState } from "react"
import { Box, Typography, Button, Select, MenuItem, Avatar, IconButton } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"

const mockUsers = [
  { id: 1, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 2, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 3, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 4, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 5, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 6, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 7, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 8, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 9, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
  { id: 10, name: "Tarik Abaza", email: "Tarik_abaza@hotmail.com" },
]

export default function UserListContent() {
  const [users, setUsers] = useState(mockUsers)
  const [permission, setPermission] = useState("Admin")

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* Header Bar */}
      <Box
        sx={{
          bgcolor: "#2c3e50",
          color: "white",
          px: 3,
          py: 1,
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.5px",
        }}
      >
        User View
      </Box>

      {/* Top Section with Title and Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          bgcolor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#2c3e50",
              mb: 1,
            }}
          >
            User List
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {/* User Profile */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              pl: 2,
              borderLeft: "1px solid #e0e0e0",
            }}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#2c3e50",
                fontWeight: "bold",
              }}
            >
              TA
            </Avatar>
            <Box>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#2c3e50",
                }}
              >
                Tarik Abaza
              </Typography>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "#95a5a6",
                }}
              >
                Admin
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Action Controls */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          bgcolor: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Select
            value={permission}
            onChange={(e) => setPermission(e.target.value)}
            sx={{
              width: 180,
              height: 36,
              fontSize: "13px",
              bgcolor: "#f5f5f5",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          >
            <MenuItem value="Admin">Change Permission</MenuItem>
            <MenuItem value="User">User</MenuItem>
            <MenuItem value="Moderator">Moderator</MenuItem>
          </Select>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#1abc9c",
              color: "white",
              textTransform: "none",
              fontSize: "13px",
              fontWeight: 600,
              px: 3,
              "&:hover": {
                bgcolor: "#16a085",
              },
            }}
          >
            New User
          </Button>
        </Box>
      </Box>

      {/* User List */}
      <Box sx={{ flex: 1, overflow: "auto", bgcolor: "#ffffff" }}>
        {users.map((user) => (
          <Box key={user.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2.5,
                px: 3,
                borderBottom: "1px solid #f0f0f0",
                "&:hover": {
                  bgcolor: "#fafafa",
                },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#2c3e50",
                    mb: 0.5,
                  }}
                >
                  {user.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#95a5a6",
                  }}
                >
                  {user.email}
                </Typography>
              </Box>

              <IconButton
                size="small"
                onClick={() => handleDeleteUser(user.id)}
                sx={{
                  color: "#bdc3c7",
                  "&:hover": {
                    color: "#e74c3c",
                    bgcolor: "#ffe0e0",
                  },
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
