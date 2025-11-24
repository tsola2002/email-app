"use client"
import { useState } from "react"
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Tabs,
  Tab,
  TextField,
  IconButton,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material"
import { Search } from "@mui/icons-material"
import Sidebar from "../sidebar" // <-- using YOUR sidebar here!

export default function EmailDashboard() {
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const emailStatuses = [
    { id: "all", label: "All E-Mails", color: "#00BFA5" },
    { id: "could-not-respond", label: "Could Not Respond", color: "#FFA500" },
    { id: "draft", label: "Draft", color: "#5C6BC0" },
    { id: "annotated", label: "Annotated", color: "#E91E63" },
    { id: "manually-responded", label: "Manually Responded", color: "#FFA500" },
    { id: "auto-respond", label: "Auto Respond", color: "#00BFA5" },
    { id: "ignored-deleted", label: "Ignored/Deleted", color: "#F44336" },
  ]

  const emails = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    status: emailStatuses[Math.floor(Math.random() * 6) + 1], 
    name: "Tarik Abaza",
    email: "Tarik_abaza@hotmail.com",
    subject: "Your Contract Has Started",
    description: "Contract Action Taken By Tarik Abaza...",
    date: "14/09/2024",
  }))

  const paginatedEmails = emails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <Box display="flex" height="100vh" bgcolor="#f5f5f5">
      {/* 👇 Your Sidebar component plugged in */}
      <Box
        sx={{
          width: 250,
          borderRight: "1px solid #e0e0e0",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Sidebar />
      </Box>

      {/* Main Section */}
      <Box flex={1} display="flex" flexDirection="column">
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          borderBottom="1px solid #ddd"
          bgcolor="#fff"
        >
          <Typography variant="h5" fontWeight="bold">
            E-Mail
          </Typography>

          <Box display="flex" alignItems="center" gap={2}>
            <TextField
              size="small"
              placeholder="Search Listing"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton size="small">
                    <Search />
                  </IconButton>
                ),
              }}
            />
            <Avatar>TA</Avatar>
            <Box>
              <Typography variant="subtitle2">Tarik Abaza</Typography>
              <Typography variant="caption" color="text.secondary">
                Admin
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Tabs (Email filters) */}
        <Tabs
          value={selectedStatus}
          onChange={(e, val) => setSelectedStatus(val)}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          sx={{ borderBottom: "1px solid #ddd", px: 2 }}
        >
          {emailStatuses.map((status) => (
            <Tab key={status.id} label={status.label} value={status.id} />
          ))}
        </Tabs>

        {/* Email List */}
        <Box flex={1} overflow="auto">
          {paginatedEmails.map((email) => (
            <Paper
              key={email.id}
              sx={{
                m: 1,
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderLeft: `4px solid ${email.status.color}`,
              }}
            >
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {email.status.label}
                </Typography>
                <Typography variant="body2">{email.subject}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {email.description}
                </Typography>
              </Box>

              <Box textAlign="right">
                <Typography variant="subtitle2">{email.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {email.email}
                </Typography>
                <Typography variant="caption">{email.date}</Typography>
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Pagination */}
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="#fff"
          borderTop="1px solid #ddd"
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2">Show</Typography>
            <Select
              size="small"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </Box>

          <Pagination
            count={3}
            page={currentPage}
            onChange={(e, val) => setCurrentPage(val)}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  )
}
