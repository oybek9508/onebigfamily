import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <Grid
      id="towels"
      sx={{
        py: "2rem",
        px: "5rem",
        width: "100vw",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backdropFilter: "blur(5px)",
        backgroundImage: "url(assets/images/bg_images/towels.png)",
        top: 0,
      }}
    >
      <Box sx={{ color: "#fff" }}>
        <Typography
          sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
        >
          Towels
        </Typography>
        <Typography
          sx={{
            width: "770px",
            fontSize: "20px",
            fontFamily: "PT_Sarif",
            lineHeight: "24px",
            fontWeight: 400,
            mt: 2,
          }}
        >
          Experience the highest quality home textile products from One Big
          Family Home Textiles in Seoul! Our products offer a unique combination
          of comfort, style, and affordability, perfect for creating a cozy home
          atmosphere. Let us help you bring your home to life with our luxurious
          fabrics, vibrant colors, and unique prints. Welcome to One Big Family
          Home Textiles - where you can find the perfect touch for your home!
        </Typography>
        {/* <Button
          sx={{
            bgcolor: "#4A7F51",
            mt: 4,
            fontSize: "16px",
            color: "#fff",
            px: 2,
            py: 1.5,
          }}
        >
          See more
        </Button> */}
      </Box>
    </Grid>
  );
};

export default Intro;
