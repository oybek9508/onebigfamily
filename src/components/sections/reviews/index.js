import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Reviews = () => {
  return (
    <Grid
      container
      justifyContent="end"
      sx={{ px: "5rem", py: "4rem", bgcolor: "#F3F4F6" }}
    >
      <Box
        sx={{
          // width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <CardMedia
          src="assets/images/reviews/table.jpg"
          alt="table"
          component="img"
          sx={{ width: "96px", height: "96px", borderRadius: "50%", mb: 1 }}
        />
        <Typography
          sx={{
            mb: 1,
            fontSize: "24px",
            fontFamily: "Rufina",
            textAlign: "right",
          }}
        >
          One Big Family is a wonderful business for textile lovers! They have a
          great selection of fabrics and their staff is both knowledgeable and
          friendly. I highly recommend One Big Family if you&apos;re looking for
          a quality fabric supplier!
        </Typography>
        <Typography sx={{ fontSize: "16px", fontFamily: "PT_Serif" }}>
          -Mina Taylor
        </Typography>
      </Box>
    </Grid>
  );
};

export default Reviews;
