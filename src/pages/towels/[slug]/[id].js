/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout.js";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  terryData,
  dobbyData,
  velourData,
  data as jacquardData,
  pestemalData,
  waffleData,
} from "@/constants/towels";

const Detailed = () => {
  const [towelData, setTowelData] = useState([]);
  const router = useRouter();
  const { query } = router;
  // const { id } = query;
  // console.log("id", id);
  console.log("router.query.id", router);
  console.log("terryData.id", terryData);

  const singleTerry = terryData.filter((data) => query.id === data.id);
  const singleDobby = dobbyData.filter((data) => query.id === data.id);
  const singleVelour = velourData.filter((data) => query.id === data.id);
  const singleJacquard = jacquardData.filter((data) => query.id === data.id);
  const singlePestemal = pestemalData.filter((data) => query.id === data.id);
  const singleWaffle = waffleData.filter((data) => query.id === data.id);

  useEffect(() => {
    const data =
      query.slug === "terry"
        ? singleTerry
        : query.slug === "dobby"
        ? singleDobby
        : query.slug === "jacquard"
        ? singleJacquard
        : query.slug === "pestemal"
        ? singlePestemal
        : query.slug === "waffle"
        ? singleWaffle
        : singleVelour;
    setTowelData(data);
  }, [query.slug]);

  console.log("data >>>", towelData);

  return (
    <Grid>
      <Layout isFixed>
        {towelData.map((data) => (
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
