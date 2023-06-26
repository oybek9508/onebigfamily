import ImgGallery from "@/components/common/img-gallery";
import Layout from "@/components/layout/index.js";
import { paragraph } from "@/constants/about";
import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
	return (
		<Layout isFixed={true}>
			<Grid
				sx={{
					bgcolor: "#FFFFFF",
					height: "100%",
					p: { xs: "3rem", sm: "5rem" },
				}}
			>
				<Typography
					sx={{
						my: 4,
						fontSize: "24px",
						fontFamily: "Rufina",
						fontWeight: 700,
					}}
				>
					Big Way Trading
				</Typography>
				{paragraph.map((p, i) => (
					<Typography
						key={i}
						sx={{ my: 2, fontFamily: "PT_Serif", fontSize: "20px" }}
					>
						{p}
					</Typography>
				))}
			</Grid>
		</Layout>
	);
};

export default About;
