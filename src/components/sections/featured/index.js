import { Box, Grid } from "@mui/material";
import React, { useRef } from "react";
import { featuredLinks } from "@/constants/featured";
import { H1 } from "@/components/Typography";
import ProductCard from "@/components/ProductCard";

const Featured = () => {
	return (
		<Box sx={{ py: { xs: "40px", md: "80px" }, px: { xs: "40px", xl: 0 } }}>
			<Box my={2}>
				<H1 mb="4px">Featured Products</H1>
			</Box>
			<Grid container mb={-0.5} spacing={3}>
				{featuredLinks.map((item, ind) => (
					<Grid key={ind} item lg={4} md={6} sm={6} xs={12}>
						<ProductCard
							fixedHeight={ind > 2}
							id={item.id}
							imgUrl={item.src}
							title={item.title}
							url={item.url}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
export default Featured;
