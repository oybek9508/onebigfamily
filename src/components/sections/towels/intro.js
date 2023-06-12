import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
	return (
		<Grid
			id="towels"
			sx={{
				py: "4rem",
				px: "5rem",
				width: "100vw",
				position: "relative",
				backgroundPosition: "center center",
				backgroundSize: "cover",
				backdropFilter: "blur(5px)",
				backgroundImage: "url(assets/images/bg_images/towels.png)",
				top: 0,
			}}
		>
			<Box sx={{ color: "#fff" }}>
				<Typography
					sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
				>
					Towels
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
					Introducing our premium towels, crafted with unparalleled quality from
					100% cotton. Experience luxurious softness and absorbency like never
					before, ensuring a delightful and indulgent bathing experience.
					Elevate your daily routine with these top-tier towels, designed to
					wrap you in comfort and durability.
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
