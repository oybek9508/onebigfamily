import ProductCard from "@/components/ProductCard";
import { H1 } from "@/components/Typography";
import Layout from "@/components/layout/index.js";
import { beddingTypes } from "@/constants/beddings";
import { Box, Grid } from "@mui/material";

const Slug = ({ data }) => {
	return (
		<Grid>
			<Layout>
				<Box sx={{ py: "4rem", px: { xs: "40px", xl: 0 } }}>
					{data.map((type) => {
						return (
							<Box key={type.link} id={type.link} sx={{ py: "20px" }}>
								<Box my={2}>
									<H1 mb="4px">{type.title}</H1>
								</Box>
								<Grid container mb={-0.5} spacing={3}>
									{type?.data?.map((item, idx) => {
										return (
											<Grid key={idx} item lg={4} md={6} sm={6} xs={12}>
												<ProductCard
													fixedHeight
													id={item.id}
													imgUrl={item.img}
													title={item.title}
													subtitle={item.subtitle}
													url={`/beddings${item.url}/${idx + 1}?link=${type.link}`}
												/>
											</Grid>
										);
									})}
								</Grid>
							</Box>
						);
					})}
				</Box>
			</Layout>
		</Grid>
	);
};

export const getServerSideProps = async ({ params }) => {
	const data = beddingTypes;

	return {
		props: {
			params,
			data,
		},
	};
};

export default Slug;
