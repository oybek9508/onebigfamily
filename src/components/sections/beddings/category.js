import { beddignsData } from "@/constants/beddings";
import { CardMedia, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const BeddingCategory = () => {
	return (
		<Grid
			sx={{
				px: { xs: "2rem", md: "5rem" },
				pt: { xs: "40px", md: "80px" },
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
				{beddignsData.map((item, idx) => (
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
							href={`/beddings/${item.title
								.toLocaleLowerCase()
								.substring(0, item.title.indexOf(" "))}/#${item.title
								.toLocaleLowerCase()
								.substring(0, item.title.indexOf(" "))}`}
							key={item.img}
						>
							<CardMedia
								component="img"
								sx={{
									height: "50%",
									width: "90%",
								}}
								src={`${item.img}`}
								// srcSet={`${item.img}`}
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
		</Grid>
	);
};

export default BeddingCategory;
