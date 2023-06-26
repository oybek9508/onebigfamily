import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import Link from "next/link";
import { featuredData, featuredLinks } from "@/constants/featured";

const Featured = () => {
	const imgRef = useRef();
	return (
		<Grid
			sx={{
				px: { xs: "2rem", md: "5rem" },
				py: { xs: "40px", md: "80px" },
			}}
		>
			<Box>
				<Typography
					sx={{
						fontSize: { xs: "32px", md: "48px" },
						fontWeight: 600,
						fontFamily: "Rufina",
					}}
				>
					Featured Products
				</Typography>
				<Grid
					container
					sx={{
						mt: "40px",
						mb: "40px",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: { xs: "center", sm: "space-between" },
					}}
					// gap={40}
					// cols={3}
				>
					{featuredLinks.map((item, idx) => (
						<Grid
							item
							xs={12}
							sm={5}
							md={3}
							key={item.url}
							sx={{
								margin: 1,
							}}
						>
							<Link href={item.url}>
								<CardMedia
									component="img"
									ref={imgRef}
									src={`${item.src}`}
									// srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
									alt={item.title}
									loading="lazy"
								/>
								<Typography
									sx={{
										fontSize: { xs: "20px", sm: "24px" },
										fontFamily: "Rufina",
										mt: 2,
										textAlign: "center",
									}}
								>
									{item.title}
								</Typography>
							</Link>
						</Grid>
					))}
				</Grid>
			</Box>
		</Grid>
	);
};

export default Featured;
