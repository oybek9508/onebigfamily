const { Grid, Box, Typography } = require("@mui/material");

const Intro = () => {
	return (
		<Grid
			id="threads"
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
					Threads
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
					Elevate your textile artistry with the superior quality and durability that our top-tier threads and
					yarns provide, promising a world of possibilities for your crafting endeavors.
				</Typography>
			</Box>
		</Grid>
	);
};
export default Intro;
