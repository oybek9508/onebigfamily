import {
  CardMedia,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const TowelCategory = () => {
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
            href={`/towels/${item.title
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

export default TowelCategory;

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Terry Towels",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Dobby Towels",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Jacquard towels",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Pestemal ",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Waffle Towels",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Velour Towels",
  },
];
