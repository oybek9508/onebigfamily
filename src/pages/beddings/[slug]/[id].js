/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout.js";
import { Box, CardMedia, Divider, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { beddingTypes } from "@/constants/beddings";

const Detailed = () => {
  const [beddingData, setBeddingData] = useState([]);
  const router = useRouter();
  const { query } = router;
  const { slug } = query;
  // console.log("id", id);
  console.log("router.query.id", router);

  const beddingsData = beddingTypes.map((data) => data.data);

  console.log("beddingsData", beddingsData);

  console.log("beddingTypes", beddingTypes);
  const singleBonitta = beddingsData[0].filter((data) => query.id === data.id);
  const singleBamboo = beddingsData[1].filter((data) => query.id === data.id);
  const singlePremium = beddingsData[2].filter((data) => query.id === data.id);
  const singleExclusive = beddingsData[3].filter(
    (data) => query.id === data.id
  );
  const singleJacquard = beddingsData[4].filter((data) => query.id === data.id);
  const singleDigital = beddingsData[5].filter((data) => query.id === data.id);
  const singleCotton = beddingsData[6].filter((data) => query.id === data.id);
  const singleDuet = beddingsData[7].filter((data) => query.id === data.id);
  const singleDeluxe = beddingsData[8].filter((data) => query.id === data.id);
  const singleAlways = beddingsData[9].filter((data) => query.id === data.id);
  const singleBaby = beddingsData[10].filter((data) => query.id === data.id);

  useEffect(() => {
    const data =
      slug === "bonitta"
        ? singleBonitta
        : slug === "bamboo"
        ? singleBamboo
        : slug === "premium"
        ? singlePremium
        : slug === "exclusive"
        ? singleExclusive
        : slug === "jacquard"
        ? singleJacquard
        : slug === "digital"
        ? singleDigital
        : slug === "cotton"
        ? singleCotton
        : slug === "duet"
        ? singleDuet
        : slug === "deluxe"
        ? singleDeluxe
        : slug === "always"
        ? singleAlways
        : singleBaby;
    setBeddingData(data);
  }, [slug]);

  console.log("beddingData", beddingData);

  return (
    <Grid>
      <Layout isFixed>
        {beddingData.map((data) => (
          <Grid
            key={data.id}
            sx={{ px: "5rem", py: "4rem", bgcolor: "#fff" }}
            container
          >
            <Grid item md={4}>
              <CardMedia
                component="img"
                sx={{
                  height: { lg: "350px" },
                  width: { lg: "350px" },
                }}
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
