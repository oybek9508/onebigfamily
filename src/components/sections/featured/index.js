import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import Link from "next/link";
import { featuredData } from "@/constants/featured";

const Featured = () => {
	const imgRef = useRef();
	return (
		<Grid
			sx={{
				px: "5rem",
				py: "80px",
			}}
		>
			<Box>
				<Typography
					sx={{ fontSize: "48px", fontWeight: 600, fontFamily: "Rufina" }}
				>
					Featured Products
				</Typography>
				<Grid
					sx={{
						// width: "100%",
						// height: "100%",
						mt: "40px",
						mb: "40px",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
					}}
					// gap={40}
					// cols={3}
				>
					{featuredData.map((item, idx) => (
						<Link
							href={`/featured/${idx + 1}`}
							key={item.img}
							style={{
								height: { md: "300px" },
								width: { md: "300px" },
								flexBasis: "30.333333%",
								margin: 1,
							}}
						>
							<Box
							// rows={1}
							// cols={1}
							// sx={{
							//   height: { md: "300px" },
							//   width: { md: "300px" },
							//   flexBasis: "33.333333%",
							// }}
							>
								<CardMedia
									component="img"
									ref={imgRef}
									src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
									// srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
							</Box>
						</Link>
					))}
				</Grid>
			</Box>
		</Grid>
	);
};

export default Featured;
