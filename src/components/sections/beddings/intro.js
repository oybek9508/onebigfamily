import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
  return (
    <Grid
      id="beddings"
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
          Beddings
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
          One Big Family in Seoul is a home textile business with a special
          mission: to provide customers with cozy, welcoming textiles to create
          a warm, inviting atmosphere in their homes. Our high-quality fabrics,
          soft colors, and unique designs make us the perfect choice for your
          home décor. Our textiles are also ethically sourced, so you can rest
          assured that they are helping to create a more sustainable future.
          Shop with us today to join our One Big Family!
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
