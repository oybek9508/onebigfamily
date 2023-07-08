import ProductCard from "@/components/ProductCard";
import { H1, Paragraph } from "@/components/Typography";
import { terryTowelData } from "@/constants/towels";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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
		// <Grid
		// 	sx={{
		// 		px: { xs: "2rem", md: "5rem" },
		// 		py: { xs: "40px", md: "80px" },
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
		// 		{terryTowelData.map((item, idx) => {
		// 			return (
		// 				<Grid
		// 					item
		// 					xs={12}
		// 					sm={5}
		// 					md={3.5}
		// 					lg={3.5}
		// 					key={item.url}
		// 					sx={(theme) => ({
		// 						margin: 1,
		// 						boxShadow: theme.shadows[5],
		// 						borderRadius: "20px",
		// 						py: 4,
		// 					})}
		// 				>
		// 					<Link
		// 						href={`/towels/${item.title
		// 							.toLocaleLowerCase()
		// 							.substring(0, item.title.indexOf(" "))}/#${item.title
		// 							.toLocaleLowerCase()
		// 							.substring(0, item.title.indexOf(" "))}`}
		// 					>
		// 						<CardMedia
		// 							component="img"
		// 							src={item.img}
		// 							alt={item.title}
		// 							loading="lazy"
		// 							sx={{ borderRadius: "20px" }}
		// 						/>

		// 						<Typography
		// 							sx={{
		// 								fontSize: { xs: "20px", sm: "24px" },
		// 								fontFamily: "Rufina",
		// 								mt: 2,
		// 								textAlign: "center",
		// 							}}
		// 						>
		// 							{item.title}
		// 						</Typography>
		// 					</Link>
		// 				</Grid>
		// 			);
		// 		})}
		// 	</Grid>
		// </Grid>
	);
};

export default TowelCategory;
