import { Box, Grid, ImageListItemBar, Typography } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";
import { featuredData } from "@/constants/featured";

const Featured = () => {
  return (
    <Grid
      sx={{
        px: "5rem",
        py: "80px",
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: "48px", fontWeight: 600, fontFamily: "Rufina" }}
        >
          Featured Products
        </Typography>
        <ImageList
          sx={{
            width: "100%",
            height: "100%",
            mt: "40px",
            mb: "40px",
          }}
          gap={40}
          cols={3}
        >
          {featuredData.map((item, idx) => (
            <Link href={`/featured/${idx + 1}`} key={item.img}>
              <ImageListItem rows={1} cols={1}>
                <img
                  style={{ height: "216px" }}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar title={item.title} position="below" />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Box>
    </Grid>
  );
};

export default Featured;
