import ProductCard from "@/components/ProductCard";
import { H1, Paragraph } from "@/components/Typography";
import { beddignsData } from "@/constants/beddings";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const BeddingCategory = () => {
	return (
		<Box sx={{ py: { xs: "40px", md: "80px" }, px: { xs: "40px", xl: 0 } }}>
			<Box my={2}>
				<H1 mb="4px">Beddings</H1>
			</Box>
			<Grid container mb={-0.5} spacing={3}>
				{beddignsData.map((item, ind) => (
					<Grid key={ind} item lg={4} md={6} sm={6} xs={12}>
						<ProductCard
							fixedHeight
							id={item.id}
							imgUrl={item.img}
							title={item.title}
							url={`/beddings/${item.title
								.toLocaleLowerCase()
								.substring(0, item.title.indexOf(" "))}/#${item.title
								.toLocaleLowerCase()
								.substring(0, item.title.indexOf(" "))}`}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default BeddingCategory;
