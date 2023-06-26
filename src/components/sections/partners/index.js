import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Partners = () => {
	return (
		<Grid sx={{ px: { xs: "2rem", sm: "5rem" }, pb: "4rem" }}>
			<Box>
				<Typography
					sx={{
						fontSize: { xs: "32px", sm: "48px" },
						fontFamily: "Rufina",
						fontWeight: 700,
						mb: 5,
					}}
				>
					Our Partners
				</Typography>
				<Grid
					container
					sx={{
						display: "flex",
						justifyContent: { xs: "center", sm: "space-between" },
					}}
				>
					{partnerList.map((list, idx) => (
						<Grid item md={5} lg={3} key={list.title} sx={{ mb: "3rem" }}>
							<Typography
								sx={{
									fontSize: "24px",
									fontFamily: "Rufina",
									fontWeight: 700,
									textDecoration: "bold",
									mb: 1,
								}}
							>
								{list.title}
							</Typography>
							<Typography
								sx={{
									fontFamily: "PT_Serif",
									fontSize: "16px",
								}}
							>
								{list.desciption}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Box>
		</Grid>
	);
};

export default Partners;

const partnerList = [
	{
		title: "Aisha Home Textiles",
		desciption:
			"Aisha Home Textiles is a home textile business in Seoul, offering a wide range of quality and stylish fabrics and furnishings for the home. From curtains, bedding and upholstery to rugs and throws, Aisha Home Textiles provides customers with high-end products that add warmth and coziness to any space. With a focus on quality and unique designs, One Big Family Home Textiles is the perfect choice for any home.",
	},
	{
		title: "Oqtosh Textile",
		desciption:
			"Oqtosh Textiles is a home textile business based in Seoul, offering a wide range of high quality home textiles such as bedding, curtains, rugs, and more. The company offers personalized customer service and a unique selection of stylish and cozy home textiles to help make your living space truly yours. With their commitment to customer service and quality products, Oqtosh Textiles is the perfect place to find the perfect textile for your home.",
	},
	{
		title: "Terra Textile",
		desciption:
			"Terra Tekstil in Seoul provides quality home textiles for everyone. We have a diverse selection of items to choose from, including bedding, curtains, towels, rugs, and much more. Our experienced staff is here to help you find the perfect home textile for your needs. From traditional to modern, we have something for all tastes. Terra Tekstil will make sure your home looks beautiful and feels comfortable.",
	},
];
