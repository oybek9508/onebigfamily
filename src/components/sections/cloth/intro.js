import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
	return (
		<Grid
			id="cloth"
			sx={{
				py: "4rem",
				px: "5rem",
				width: "100vw",
				position: "relative",
				backgroundPosition: "center center",
				backgroundSize: "cover",
				backdropFilter: "blur(5px)",
				backgroundImage: "url(assets/images/bg_images/cloth.png)",
				top: 0,
			}}
		>
			<Box sx={{ color: "#fff" }}>
				<Typography
					sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
				>
					Table cloth
				</Typography>
				<Typography
					sx={{
						width: "90%",
						fontSize: "20px",
						fontFamily: "PT_Sarif",
						lineHeight: "24px",
						fontWeight: 400,
						mt: 2,
					}}
				>
					Introducing our exquisite tablecloths, meticulously crafted from 100%
					cotton for the perfect combination of elegance and durability.
					Transform your dining experience with the luxurious softness and
					natural texture of our cotton tablecloths, adding a touch of
					sophistication to any occasion. Enhance your table setting with
					confidence, knowing that our high-quality cotton fabrics offer both
					style and practicality.
				</Typography>
				{/* <Button
          sx={{
            bgcolor: "#4A7F51",
            mt: 4,
            fontSize: "16px",
            color: "#fff",
            px: 2,
            py: 1.5,
          }}
        >
          See more
        </Button> */}
			</Box>
		</Grid>
	);
};

export default Intro;
