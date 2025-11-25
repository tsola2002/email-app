import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import topArt from "../assets/img1.png";
import bottomArt from "../assets/img2.png";
import logo from "../assets/image 1.png";

export default function ForgotPassword() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: { xs: "column", md: "row" }, // responsive
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          backgroundColor: "#22A78E",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          p: 6,
        }}
      >
        {/* TOP ART */}
        <Box
          component="img"
          src={topArt}
          alt="Top Artwork"
          sx={{
            width: "70%",
            maxHeight: "200px",
            objectFit: "contain",
            opacity: 0.5,
            filter: "brightness(0.5)",
            mb: 2,
          }}
        />

        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Forgot Password
        </Typography>

        <Typography variant="body1" sx={{ mt: 1, opacity: 0.9 }}>
          Type your email to recover your password
        </Typography>

        {/* BOTTOM ART */}
        <Box
          component="img"
          src={bottomArt}
          alt="Bottom Artwork"
          sx={{
            width: "80%",
            maxHeight: "220px",
            objectFit: "contain",
            opacity: 0.5,
            filter: "brightness(0.5)",
            mt: "auto", // keeps it at the bottom without stretching
          }}
        />
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          px: 4,
          py: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "400px", textAlign: "center" }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Login Logo"
            sx={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              objectFit: "cover",
              margin: "0 auto",
              mb: 3,
            }}
          />

          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Reset Your Password
          </Typography>

          {/* EMAIL INPUT */}
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            sx={{ mb: 3, borderRadius: "10px" }}
          />

          {/* SUBMIT BUTTON */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              backgroundColor: "#22A78E",
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: "10px",
              "&:hover": { backgroundColor: "#1b8c77" },
            }}
          >
            Reset Password
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 3, opacity: 0.7, cursor: "pointer" }}
            onClick={() => (window.location.href = "/")}
          >
            Back to Login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
