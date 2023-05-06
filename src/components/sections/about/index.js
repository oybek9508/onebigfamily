import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        py: "10rem",
        px: "5rem",
        width: "100vw",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: "url(assets/images/bg_images/intro.png)",
        top: 0,
      }}
    >
      <Box sx={{ color: "#fff" }}>
        <Typography
          sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
        >
          Big Way
        </Typography>
        {/* <Typography
          sx={{
            width: "770px",
            fontSize: "20px",
            fontFamily: "PT_Serif",
            mt: 2,
          }}
        >
          One Big Family is providing quality products to bring warmth and
          comfort to your home and office. Our goal is to make each customer
          part of our family, with a range of beddings, kitchen linens, and
          other home décor items that come together to create a unique and
          inviting atmosphere. Make One Big Family part of your home today!
        </Typography> */}
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
          About the company
        </Button> */}
      </Box>
    </Grid>
  );
};

export default About;
