import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Importing your images correctly
import topArt from "../assets/img1.png";
import bottomArt from "../assets/img2.png";

export default function LeftPanel() {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#22A78E",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 6,
      }}
    >
      <Box>
        {/* Top Artwork */}
        <Box
          component="img"
          src={topArt}
          alt="Top Artwork"
          sx={{ width: "70%", opacity: 1, filter: "brightness(0.5)" }}
        />

        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 4 }}>
          Welcome!
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, opacity: 0.9 }}>
          Log in to unlock AI-powered and personalization of E-Mails.
        </Typography>
      </Box>

      {/* Bottom Artwork */}
      <Box
        component="img"
        src={bottomArt}
        alt="Bottom Artwork"
        sx={{
          width: "80%",
          opacity: 1,
            filter: "brightness(0.5)",
        }}
      />
    </Box>
  );
}
