import { Grid } from "@mui/material";
import React from "react";
import Intro from "./intro";
import ThreadCategory from "./category";

const Threads = () => {
	return (
		<Grid>
			<Intro />
			<ThreadCategory />
		</Grid>
	);
};

export default Threads;
