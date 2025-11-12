import { Box, List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "./assets/image 1.png";
import { NavLink, useLocation } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const menuItems = [
  {
    label: "E-Mail",
    path: "/email",
    children: [
      { label: "Mailbox 1", path: "/mailbox1" },
      { label: "Mailbox 2", path: "/mailbox2" }
    ]
  },
  { label: "User List", path: "/users" },
  { label: "Companies", path: "/companies" },
  { label: "Mailboxes", path: "/mailboxes" },
  { label: "Blocked E-Mail", path: "/blocked" }
];

function Sidebar() {
  const location = useLocation();
  const [emailOpen, setEmailOpen] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/mailbox")) {
      setEmailOpen(true);
    }
  }, [location.pathname]);

  return (
    <Box >
      {/* Logo */}
      <img src={logo} style={{ width: 150, padding: 30, height: 120 }} />

      <List>
        {menuItems.map((item) => {
          if (item.children) {
            const isParentActive = item.children.some((child) =>
              location.pathname.startsWith(child.path)
            );

            return (
              <Box key={item.label}>
                <ListItemButton
                  onClick={() => setEmailOpen(!emailOpen)}
                  sx={{
                    mb: 1,
                    backgroundColor: isParentActive ? "#D0F5E0" : "transparent",
                    borderLeft: isParentActive
                      ? "4px solid #00BD7E"
                      : "4px solid transparent",
                    color: isParentActive ? "#00BD7E" : "#bdbdbdff"
                  }}
                >
                  <ListItemText primary={item.label} />
                  {emailOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={emailOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {({ isActive }) => (
                          <ListItemButton
                            sx={{
                              ml: 3,
                              mr: 3,
                              pr: 10,
                              mb: 1,
                              borderRadius: "6px",
                              backgroundColor: isActive
                                ? "#D0F5E0"
                                : "transparent",
                              color: isActive ? "#00BD7E" : "#868686ff"
                            }}
                          >
                            <ListItemText primary={child.label} />
                          </ListItemButton>
                        )}
                      </NavLink>
                    ))}
                  </List>
                </Collapse>
              </Box>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {({ isActive }) => (
                <ListItemButton
                  sx={{
                    mb: 1,
                    borderRadius: "6px",
                    backgroundColor: isActive ? "#D0F5E0" : "transparent",
                    borderLeft: isActive
                      ? "4px solid #00BD7E"
                      : "4px solid transparent",
                    color: isActive ? "#00BD7E" : "inherit"
                  }}
                >
                  <ListItemText primary={item.label} sx={{ color: isActive ? "inherit" : "#868686ff" }} />
                </ListItemButton>
              )}
            </NavLink>
          );
        })}

        <ListItemButton sx={{
          mt: 44,
          height: 44,
          borderRadius: "6px",
          borderLeft: "4px solid #00BD7E",
        }}>Log Out</ListItemButton>
      </List>
    </Box>
  );
}

export default Sidebar;
