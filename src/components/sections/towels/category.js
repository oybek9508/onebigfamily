import { terryTowelData } from "@/constants/towels";
import {
	CardMedia,
	Grid,
	ImageList,
	ImageListItem,
	Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const TowelCategory = () => {
	return (
		<Grid
			sx={{
				px: "5rem",
				py: "80px",
			}}
		>
			<ImageList
				sx={{
					width: "100%",
					height: "100%",
					mt: "40px",
					mb: "40px",
				}}
				gap={40}
				cols={3}
			>
				{terryTowelData.map((item, idx) => (
					<Link
						href={`/towels/${item.title
							.toLocaleLowerCase()
							.substring(0, item.title.indexOf(" "))}/#${item.title
							.toLocaleLowerCase()
							.substring(0, item.title.indexOf(" "))}`}
						key={item.img}
					>
						<ImageListItem
							Box
							sx={(theme) => ({
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								// boxShadow: theme.shadows[10],
							})}
						>
							<CardMedia
								component="img"
								sx={{
									height: { lg: "350px" },
									width: { lg: "350px" },
								}}
								src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
								srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>

							<Typography
								sx={{
									fontSize: "24px",
									fontFamily: "Rufina",
									mt: 2,
									textAlign: "center",
								}}
							>
								{item.title}
							</Typography>
						</ImageListItem>
					</Link>
				))}
			</ImageList>
		</Grid>
	);
};

export default TowelCategory;
