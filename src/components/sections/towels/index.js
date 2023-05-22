import { Grid } from "@mui/material";
import React from "react";
import TowelCategory from "./category";
import Intro from "./intro";

const Towels = () => {
  return (
    <Grid>
      <Intro />
      <TowelCategory />
    </Grid>
  );
};

export default Towels;
