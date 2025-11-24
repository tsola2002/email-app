import React from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";

function ForgotPassword() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* LEFT SECTION */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#23B6A4",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        {/* Top decorative box (optional background shapes can go here) */}
        <Box
          sx={{
            width: "80%",
            height: 150,
            border: "1px dashed rgba(255,255,255,0.3)",
            mb: 4,
          }}
        ></Box>

        {/* Text content */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Forgot Password?
        </Typography>
        <Typography variant="body1">
          Type your E-Mail to recover password.
        </Typography>

        {/* Bottom decorative box */}
        <Box
          sx={{
            width: "80%",
            height: 150,
            border: "1px dashed rgba(255,255,255,0.3)",
            mt: 4,
          }}
        ></Box>
      </Grid>

      {/* RIGHT SECTION */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 4,
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: 2 }}>
          <img
            src="/logo.png"
            alt="Reply AI Logo"
            style={{ width: 80, height: 80 }}
          />
        </Box>

        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Reset Your Password
        </Typography>

        {/* Email Input */}
        <Box component="form" sx={{ width: "80%", maxWidth: 400, mt: 2 }}>
          <TextField
            fullWidth
            label="Type Your E-Mail Here"
            type="email"
            variant="outlined"
            margin="normal"
          />

          {/* Reset Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#23B6A4",
              "&:hover": { backgroundColor: "#1f9b8c" },
              mt: 2,
            }}
          >
            Reset Password
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ForgotPassword;
