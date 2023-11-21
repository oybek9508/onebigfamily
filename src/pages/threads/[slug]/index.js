import Layout from "@/components/layout";
import ThreadsProducts from "@/components/threads/ThreadsProducts";
import { threadSection } from "@/constants/threads/threadsSection";
import { Box, Grid } from "@mui/material";
import React from "react";

const Slug = ({ data }) => {
	return (
		<Grid>
			<Layout>
				<Box sx={{ py: "2rem", px: { xs: "40px", xl: 0 } }}>
					{data?.map(({ title, data, path }, index) => (
						<ThreadsProducts key={index} {...{ title, data, path }} />
					))}
				</Box>
			</Layout>
		</Grid>
	);
};

export const getServerSideProps = async () => {
	const data = threadSection;

	return {
		props: {
			data,
		},
	};
};

export default Slug;
