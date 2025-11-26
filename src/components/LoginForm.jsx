import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";

// Import your logo image
import logo from "../assets/image 1.png";

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting login...");
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 400,
        p: 4,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 3 }}>
        {/* Logo Image */}
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
            mb: 2,
          }}
        />

        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Log In
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Type your User ID Here"
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Type your Password Here"
          type="password"
          variant="outlined"
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormControlLabel control={<Checkbox />} label="Keep me logged in" />

          <Typography
            variant="body2"
            sx={{ mt: 3, opacity: 0.7, cursor: "pointer" }}
            onClick={() => (window.location.href = "/forgot-password")}
          >
            Forgot Passsword?
          </Typography>
        </Box>

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            mt: 3,
            py: 1.3,
            backgroundColor: "#22A78E",
            "&:hover": {
              backgroundColor: "#22A78E",
            },
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
}
