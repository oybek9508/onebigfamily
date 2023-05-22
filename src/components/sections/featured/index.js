import {
  Box,
  CardMedia,
  Grid,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "next/link";
import { featuredData } from "@/constants/featured";

const Featured = () => {
  const imgRef = useRef();
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
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
          gap={40}
          cols={3}
        >
          {featuredData.map((item, idx) => (
            <Link href={`/featured/${idx + 1}`} key={item.img}>
              <ImageListItem
                // rows={1}
                // cols={1}
                sx={{
                  height: { md: "300px", lg: "360px" },
                  width: { md: "300px", lg: "360px" },
                  flex: 2,
                }}
              >
                <CardMedia
                  component="img"
                  ref={imgRef}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontFamily: "Rufina",
                    mt: 2,
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Box>
    </Grid>
  );
};

export default Featured;
