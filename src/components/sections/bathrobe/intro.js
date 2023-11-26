import { Box, Grid, Typography } from "@mui/material";

const Intro = () => {
	return (
		<Grid
			id="bathrobes"
			sx={{
				py: "4rem",
				px: { xs: "2rem", sm: "5rem" },
				width: "100%",
				position: "relative",
				backgroundPosition: "center center",
				backgroundSize: "cover",
				backdropFilter: "blur(5px)",
				backgroundImage: "url(assets/images/bg_images/towels.webp)",
				top: 0,
			}}
		>
			<Box sx={{ color: "#fff" }}>
				<Typography
					sx={{
						fontSize: { xs: "32px", sm: "48px" },
						fontFamily: "Rufina",
						fontWeight: 700,
					}}
				>
					Bathrobes
				</Typography>
				<Typography
					sx={{
						fontSize: "20px",
						fontFamily: "PT_Sarif",
						lineHeight: "24px",
						fontWeight: 400,
						mt: 2,
					}}
				>
					Introducing our premium bathrobes, crafted with unparalleled quality from 100% cotton. Experience
					luxurious softness and absorbency like never before, ensuring a delightful and indulgent bathing
					experience. Elevate your daily routine with these top-tier towels, designed to wrap you in comfort
					and durability.
				</Typography>
			</Box>
		</Grid>
	);
};

export default Intro;
