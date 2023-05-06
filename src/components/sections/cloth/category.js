import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const ClothCategory = () => {
  return (
    <Grid
      sx={{
        px: "5rem",
        py: "80px",
      }}
    >
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
        {itemData.map((item, idx) => (
          <Link
            href={`/cloth/${item.title
              .toLocaleLowerCase()
              .substring(0, item.title.indexOf(" "))}/#${item.title
              .toLocaleLowerCase()
              .substring(0, item.title.indexOf(" "))}`}
            key={item.img}
          >
            <ImageListItem rows={1} cols={1}>
              <img
                style={{ height: "216px" }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <Typography
                sx={{ fontSize: "24px", fontFamily: "Rufina", mt: 2 }}
              >
                {item.title}
              </Typography>
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Grid>
  );
};

export default ClothCategory;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Fitted table cloth",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Round table cloth",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Rectangular ",
  },
];
