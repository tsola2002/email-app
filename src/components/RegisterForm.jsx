import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../assets/Logo2.jpg";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "50px",
    backgroundColor: "#f5f8ff",
    transition: "0.25s ease",
    height: 42, // slightly smaller to fit form
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    backgroundColor: "#ffffff",
    boxShadow: "0 0 0 3px rgba(34,167,142,0.2)",
  },
  "& .MuiOutlinedInput-input": {
    paddingY: "10px", // reduced padding for compact height
  },
};

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating account...");
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        boxSizing: "border-box",
      }}
    >
      {/* LOGO SPOT */}
      <Box
        sx={{
          mb: 2,
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{
            width: { xs: 80, sm: 100, md: 120 },
            maxWidth: "100%",
            height: "auto",
            mb: 1.5,
            objectFit: "contain",
          }}
        />
      </Box>

      {/* FORM FIELDS */}
      <FormControl fullWidth sx={{ mb: 1.5 }}>
        <TextField label="Username *" variant="outlined" required sx={inputStyle} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 1.5 }}>
        <TextField label="Email *" type="email" required sx={inputStyle} />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 1.5 }}>
        <TextField
          label="Password *"
          type={showPassword ? "text" : "password"}
          required
          sx={inputStyle}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField
          label="Date of Birth *"
          type="date"
          InputLabelProps={{ shrink: true }}
          required
          sx={inputStyle}
        />
      </FormControl>

      {/* SIGN UP BUTTON */}
      <Button
        fullWidth
        type="submit"
        variant="contained"
        sx={{
          width: "100%",
          py: 1.3, // slightly smaller to match reduced inputs
          fontSize: "1rem",
          textTransform: "none",
          backgroundColor: "#22A78E",
          "&:hover": { backgroundColor: "#1c826e" },
          borderRadius: "50px",
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
}
