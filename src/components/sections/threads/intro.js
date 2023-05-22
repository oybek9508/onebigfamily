import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <Grid
      id="threads"
      sx={{
        py: "4rem",
        px: "5rem",
        width: "100vw",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backdropFilter: "blur(5px)",
        backgroundImage: "url(assets/images/bg_images/beddings.png)",
        top: 0,
      }}
    >
      <Box sx={{ color: "#fff" }}>
        <Typography
          sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
        >
          Threads
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
          Welcome to One Big Family Home Textiles in Seoul! We specialize in
          beautiful, high-quality home textiles to make your space feel cozy,
          comfortable and stylish.
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
