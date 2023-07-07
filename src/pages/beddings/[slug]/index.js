import Layout from "@/components/layout/index.js";
import {
	Box,
	Grid,
	Typography,
	ImageList,
	ImageListItem,
	CardMedia,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { beddingTypes } from "@/constants/beddings";
import { H1 } from "@/components/Typography";
import ProductCard from "@/components/ProductCard";

console.log("beddingTypes", beddingTypes);

const Slug = () => {
	return (
		<Grid>
			<Layout>
				<Box sx={{ py: "4rem", px: { xs: "40px", xl: 0 } }}>
					{beddingTypes.map((type) => (
						<Box key="type" id={type.id} sx={{ py: "20px" }}>
							<Box my={2}>
								<H1 mb="4px">{type.title}</H1>
							</Box>
							<Grid container mb={-0.5} spacing={3}>
								{type?.data?.map((item, idx) => {
									console.log("type.data", type.data);
									return (
										<Grid key={idx} item lg={4} md={6} sm={6} xs={12}>
											<ProductCard
												fixedHeight
												id={item.id}
												imgUrl={item.img}
												title={item.title}
												url={`/beddings${item.url}/${idx + 1}`}
											/>
										</Grid>
									);
								})}
							</Grid>
						</Box>
					))}
				</Box>
			</Layout>
		</Grid>
	);
};

export default Slug;
