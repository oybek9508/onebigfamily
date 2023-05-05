/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout.js";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { threadTypes } from "@/constants/threads";

const Detailed = () => {
  const [threadData, setThreadData] = useState([]);
  const router = useRouter();
  const { query } = router;
  const { slug } = query;
  // console.log("id", id);
  console.log("router.query.id", router);

  const threadsData = threadTypes.map((data) => data.data);

  const singleCombed = threadsData[0].filter((data) => query.id === data.id);
  const singleCarded = threadsData[1].filter((data) => query.id === data.id);
  const singleOpenEnd = threadsData[2].filter((data) => query.id === data.id);

  useEffect(() => {
    const data =
      slug === "combed"
        ? singleCombed
        : slug === "carded"
        ? singleCarded
        : singleOpenEnd;
    setThreadData(data);
  }, [slug]);

  return (
    <Grid>
      <Layout isFixed>
        {threadData.map((data) => (
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
