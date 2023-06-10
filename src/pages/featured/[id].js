import React from "react";
import { featuredData } from "@/constants/featured";
import { Grid } from "@mui/material";
import Layout from "@/components/layout.js";
import DetailedPage from "@/components/common/DetailedPage";

const Detailed = () => {
	return (
		<Grid container sx={{ width: "100%" }}>
			<Layout isFixed>
				<DetailedPage dataList={featuredData} data={featuredData} />
			</Layout>
		</Grid>
	);
};

export default Detailed;
