"use client"

import { useState } from "react"
import { useTheme } from "@mui/material/styles"
import { useLocation } from "react-router-dom"
import Box from "@mui/material/Box"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Drawer from "@mui/material/Drawer"
import Sidebar from "./Sidebar"
import AppRoutes from "./AppRoutes"

const drawerWidth = 240

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const pageTitles = {
    "/email": "E-Mail",
    "/mailbox1": "Mailbox 1",
    "/mailbox2": "Mailbox 2",
    "/manualrespond": "Manual Respond To",
    "/users": "User List",
    "/companies": "Companies",
    "/mailboxes": "Mailboxes",
    "/blocked": "Blocked E-Mail",
  }

  const PageHeader = pageTitles[location.pathname] || "DASHBOARD"

  return (
    <Box sx={{ display: "flex" }}>
      {/* ✅ HEADER */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          borderBottom: "1px solid #eee",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton onClick={handleDrawerToggle} sx={{ display: { md: "none" }, mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {PageHeader}
          </Typography>
          <Box sx={{ ml: "auto", display: "flex" }}>
            <Avatar />
            <Box sx={{ ml: 1 }}>
              <Typography variant="body1" fontWeight={600}>
                Tarik Abaza
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Admin
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ SIDEBAR */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        {/* Mobile Drawer (temporary) */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          <Sidebar />
        </Drawer>

        {/* Desktop Drawer (persistent) */}
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              borderRight: "1px solid #eee",
            },
          }}
        >
          <Sidebar />
        </Drawer>
      </Box>

      {/* ✅ MAIN CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, mt: 10 }}>
        <AppRoutes />
      </Box>
    </Box>
  )
}
