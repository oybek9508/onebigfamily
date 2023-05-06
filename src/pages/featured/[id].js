import { useRouter } from "next/router";
import React from "react";
import { featuredData } from "@/constants/featured";
import { Divider, Grid, Typography } from "@mui/material";
import Layout from "@/components/layout.js";

const Detailed = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  const detailedItem = featuredData.filter((item, idx) => item.id === id);
  console.log("detailedItem", detailedItem);
  return (
    <Grid>
      <Layout isFixed>
        {detailedItem.map((data) => (
          <Grid
            key={data.id}
            sx={{ px: "5rem", py: "4rem", bgcolor: "#fff" }}
            container
          >
            <Grid item md={4}>
              <img
                style={{ height: "216px", width: "200px" }}
                src={data?.img}
                alt="towel"
                loading="lazy"
                // height={216}
                // width={216}
              />
            </Grid>
            <Grid item md={8}>
              <Typography variant="h5">Title: {data?.title}</Typography>
              <Typography variant="caption" color="#007185" fontSize="14px">
                Description: {data?.description}
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold">
                Rating: {data?.rating}
              </Typography>
              <Divider />

              <Typography color="#565959">Type: {data?.type}</Typography>
              <Divider />
              <Typography color="#565959">Color: {data?.color}</Typography>
              <Divider />
              <Typography fontSize="16px" fontWeight="bold">
                About this item:
              </Typography>
              <Typography>{data?.about}</Typography>
            </Grid>
          </Grid>
        ))}
      </Layout>
    </Grid>
  );
};

export default Detailed;
