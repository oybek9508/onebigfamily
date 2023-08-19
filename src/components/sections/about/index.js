import React from "react";
import { Box, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const slideData = ["intro1.jpg", "intro2.jpg", "intro3.jpg", "intro4.jpg"];

const About = () => {
	return (
		<Grid
			sx={{ mt: 2, height: { xs: "30vh", sm: "40vh", md: "50vh", lg: "60vh" } }}
		>
			<Swiper
				effect={"fade"}
				navigation
				loop
				autoplay={{
					delay: 3000,
				}}
				slidesPerView={1}
				pagination={{
					clickable: true,
				}}
				className="mySwiper"
				style={{ height: "100%" }}
			>
				{slideData.map((slide, index) => (
					<SwiperSlide key={index}>
						<Grid
							sx={{
								py: "10rem",
								width: "100%",
								height: "100%",
								position: "relative",
								backgroundPosition: "center center",
								backgroundSize: "cover",
								backgroundImage: `url(/assets/images/bg_images/${slide})`,
								top: 0,
							}}
						>
							<Box sx={{ color: "#fff" }}></Box>
						</Grid>
					</SwiperSlide>
				))}
			</Swiper>
		</Grid>
	);
};

export default About;
