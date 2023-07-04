import { terryTowelData } from "@/constants/towels";
import { CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TowelCategory = () => {
	return (
		<Grid
			sx={{
				px: { xs: "2rem", md: "5rem" },
				py: { xs: "40px", md: "80px" },
			}}
		>
			<Grid
				container
				sx={{
					mt: "40px",
					mb: "40px",
					display: "flex",
					flexWrap: "wrap",
					justifyContent: { xs: "center", sm: "space-between" },
				}}
			>
				{terryTowelData.map((item, idx) => {
					return (
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
							<Link
								href={`/towels/${item.title
									.toLocaleLowerCase()
									.substring(0, item.title.indexOf(" "))}/#${item.title
									.toLocaleLowerCase()
									.substring(0, item.title.indexOf(" "))}`}
							>
								<CardMedia
									component="img"
									src={`${item.img}`}
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
					);
				})}
			</Grid>
		</Grid>
	);
};

export default TowelCategory;
