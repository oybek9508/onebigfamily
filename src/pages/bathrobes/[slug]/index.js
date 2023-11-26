import BathrobeProducts from "@/components/bathrobes/BathrobeProducts";
import Layout from "@/components/layout";
import { bathrobeSections } from "@/constants/bathrobes/bathrobeSection";
import { Box, Grid } from "@mui/material";
import React from "react";

const Slug = ({ data }) => {
	return (
		<Grid>
			<Layout>
				<Box sx={{ py: "2rem", px: { xs: "40px", xl: 0 } }}>
					{data?.map(({ title, data, path }, index) => (
						<BathrobeProducts key={index} {...{ title, data, path }} />
					))}
				</Box>
			</Layout>
		</Grid>
	);
};

export const getServerSideProps = async () => {
	const data = bathrobeSections;

	return {
		props: {
			data,
		},
	};
};

export default Slug;
