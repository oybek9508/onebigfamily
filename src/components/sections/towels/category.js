import ProductCard from "@/components/ProductCard";
import { H1 } from "@/components/Typography";
import { terryTowelData } from "@/constants/towels";
import { Box, Grid } from "@mui/material";
import React from "react";

const TowelCategory = () => {
	return (
		<Box sx={{ py: { xs: "40px", md: "80px" }, px: { xs: "40px", xl: 0 } }}>
			<Box my={2}>
				<H1 mb="4px">Towels</H1>
			</Box>
			<Grid container mb={-0.5} spacing={3}>
				{terryTowelData.map((item, ind) => (
					<Grid key={ind} item lg={4} md={6} sm={6} xs={12}>
						<ProductCard
							id={item.id}
							imgUrl={item.img}
							title={item.title}
							url={`/towels/${item.title
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

export default TowelCategory;
