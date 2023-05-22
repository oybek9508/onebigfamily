import {
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const BeddingCategory = () => {
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
            href={`/beddings/${item.title
              .toLocaleLowerCase()
              .substring(0, item.title.indexOf(" "))}/#${item.title
              .toLocaleLowerCase()
              .substring(0, item.title.indexOf(" "))}`}
            key={item.img}
          >
            <ImageListItem rows={1} cols={1}>
              <CardMedia
                component="img"
                sx={{
                  height: { lg: "350px" },
                  width: { lg: "350px" },
                }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
    </Grid>
  );
};

export default BeddingCategory;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Bonitta ",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Bamboo ",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Premium ",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Exclusive ",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Jacquard Satin",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Digital Series",
  },
  // {
  //   img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
  //   title: "Cotton Satin",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
  //   title: "Duet Style",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
  //   title: "Deluxe Ranforce",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
  //   title: "Always Knit Blanket",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
  //   title: "Baby ",
  // },
];
