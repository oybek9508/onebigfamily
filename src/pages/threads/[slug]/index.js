import Layout from "@/components/layout.js";
import { Box, Grid, Typography, ImageList, ImageListItem } from "@mui/material";
import Link from "next/link";
import React from "react";
import { threadTypes } from "@/constants/threads";

const Slug = () => {
  return (
    <Grid>
      <Layout>
        <Box sx={{ px: "5rem", py: "2rem" }}>
          {threadTypes.map((type) => (
            <Box key="type" id={type.id}>
              <Typography
                sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
              >
                {type.title}
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
                {type?.data?.map((item, idx) => {
                  console.log("type.data", type.data);
                  return (
                    <Link
                      href={`/threads${item.url}/${idx + 1}`}
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
                  );
                })}
              </ImageList>
            </Box>
          ))}
        </Box>
      </Layout>
    </Grid>
  );
};

export default Slug;
