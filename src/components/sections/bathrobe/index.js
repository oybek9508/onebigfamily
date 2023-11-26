import { Grid } from "@mui/material";
import React from "react";
import Intro from "./intro";
import BathrobeCategory from "./category";

const Bathrobes = () => {
	return (
		<Grid>
			<Intro />
			<BathrobeCategory />
		</Grid>
	);
};

export default Bathrobes;
