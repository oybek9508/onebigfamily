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
			"Aisha Home Textile is one of Uzbekistan's premier home textile companies. With a strong focus on quality, we take pride in producing the finest home textiles that enhance the beauty and comfort of your living spaces. Our commitment to excellence has allowed us to establish fruitful business relationships with clients across 16 countries, ensuring our products reach homes around the world. Discover the perfect blend of style and functionality with Aisha Home Textile.",
	},
	{
		title: "One Big Family",
		desciption:
			"One Big Family is a renowned company dedicated to the import and export of textile products. With our expertise and experience in the industry since 2017, we have successfully established ourselves as specialists in sourcing and delivering high-quality textile goods. Our commitment to customer satisfaction and our extensive network of partners enable us to provide exceptional products and services.",
	},
	{
		title: "Terra Textile",
		desciption:
			"Terra Textile is a prominent textile trade company based in Turkey. With a solid foundation established in 2012, we have been actively engaged in the textile industry, catering to the diverse needs of our valued clients. Our strategic location in Turkey, a hub of textile manufacturing, allows us to source and provide a wide range of high-quality textile products to customers worldwide. Trust Terra Textile for exceptional service and a seamless textile trading experience.",
	},
];
