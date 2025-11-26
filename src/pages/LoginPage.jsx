import React from "react";
import Box from "@mui/material/Box";
import LeftPanel from "../components/LeftPanel";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Left Side */}
      <Box sx={{ width: "50%" }}>
        <LeftPanel />
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 4,
        }}
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
