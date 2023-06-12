import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Intro = () => {
	return (
		<Grid
			id="beddings"
			sx={{
				py: "4rem",
				px: "5rem",
				width: "100vw",
				position: "relative",
				backgroundPosition: "center center",
				backgroundSize: "cover",
				backdropFilter: "blur(5px)",
				backgroundImage: "url(assets/images/bg_images/beddings.png)",
				top: 0,
			}}
		>
			<Box sx={{ color: "#fff" }}>
				<Typography
					sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
				>
					Beddings
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
					Introducing our exquisite beddings and bed linens, meticulously
					crafted from 100% cotton for the ultimate in quality. Experience
					unparalleled comfort and a luxurious sleep environment that will leave
					you refreshed and revitalized. Elevate your bedroom with these
					top-tier products, designed to provide unmatched softness, durability,
					and style.
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
