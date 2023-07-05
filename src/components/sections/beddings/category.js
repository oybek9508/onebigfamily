import ProductCard from "@/components/ProductCard";
import { H1, Paragraph } from "@/components/Typography";
import { beddignsData } from "@/constants/beddings";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const BeddingCategory = () => {
	return (
		<Box sx={{ py: { xs: "40px", md: "80px" } }}>
			<Box my={2}>
				<H1 mb="4px">Beddings</H1>
				<Paragraph color="grey.600">
					Tall blind but were, been folks not the expand
				</Paragraph>
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
		// <Grid
		// 	sx={{
		// 		px: { xs: "2rem", md: "5rem" },
		// 		pt: { xs: "40px", md: "80px" },
		// 	}}
		// >
		// 	<Grid
		// 		container
		// 		sx={{
		// 			mt: "40px",
		// 			mb: "40px",
		// 			display: "flex",
		// 			flexWrap: "wrap",
		// 			justifyContent: { xs: "center", sm: "space-between" },
		// 		}}
		// 	>
		// 		{beddignsData.map((item, idx) => (
		// 			<Grid
		// 				item
		// 				xs={12}
		// 				sm={5}
		// 				md={3.5}
		// 				lg={3.5}
		// 				key={item.url}
		// 				sx={(theme) => ({
		// 					margin: 1,
		// 					boxShadow: theme.shadows[5],

		// 					height: "300px",
		// 					pb: 4,
		// 				})}
		// 			>
		// 				<Link
		// 					href={`/beddings/${item.title
		// 						.toLocaleLowerCase()
		// 						.substring(0, item.title.indexOf(" "))}/#${item.title
		// 						.toLocaleLowerCase()
		// 						.substring(0, item.title.indexOf(" "))}`}
		// 					key={item.img}
		// 				>
		// 					<CardMedia
		// 						component="img"
		// 						sx={{
		// 							height: "90%",
		// 							width: "100%",
		// 						}}
		// 						src={item.img}
		// 						alt={item.title}
		// 						loading="lazy"
		// 					/>
		// 					<Typography
		// 						sx={{
		// 							fontSize: { xs: "20px", sm: "24px" },
		// 							fontFamily: "Rufina",
		// 							mt: 2,
		// 							textAlign: "center",
		// 						}}
		// 					>
		// 						{item.title}
		// 					</Typography>
		// 				</Link>
		// 			</Grid>
		// 		))}
		// 	</Grid>
		// </Grid>
	);
};

export default BeddingCategory;
