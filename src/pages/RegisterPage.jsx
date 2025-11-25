import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/test-login"); // navigate to login page
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        px: 2,
        background: "linear-gradient(to right, #e8f1ff, #f4f9ff)",
      }}
    >
      <Card
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 780,
          height: 450,
          borderRadius: "22px",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
        }}
      >
        {/* LEFT GREEN SECTION */}
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(135deg, #22A78E, #22A78E)",
            color: "white",
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ opacity: 0.9, fontSize: "1.1rem", textAlign: "center", mb: 4 }}
          >
            Create your new account to get started.
          </Typography>

          {/* ALREADY HAVE AN ACCOUNT BUTTON */}
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
                borderColor: "white",
              },
              borderRadius: "50px",
              px: 4,
            }}
            onClick={goToLogin}
          >
            Already have an account? Log In
          </Button>
        </Box>

        {/* RIGHT WHITE SECTION */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <RegisterForm />
        </Box>
      </Card>
    </Box>
  );
}
