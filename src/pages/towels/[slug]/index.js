import Layout from "@/components/layout/index.js";
import TowelProducts from "@/components/towels/TowelProducts";
import { towelSections } from "@/constants/towels/towelSections";
import { Box, Grid } from "@mui/material";

const Slug = ({ data }) => {
	return (
		<Grid>
			<Layout>
				<Box sx={{ py: "2rem", px: { xs: "40px", xl: 0 } }}>
					{data?.map(({ title, data, path }, index) => (
						<TowelProducts key={index} {...{ title, data, path }} />
					))}
				</Box>
			</Layout>
		</Grid>
	);
};

export const getServerSideProps = async () => {
	const data = towelSections;

	return {
		props: {
			data,
		},
	};
};

export default Slug;
