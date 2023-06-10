import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const About = () => {
  return (
    <>
      <Swiper
        effect={"fade"}
        navigation
        loop
        autoplay={{
          delay: 3000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Grid
            sx={{
              py: "10rem",
              width: "100vw",
              height: "100vh",
              position: "relative",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundImage: "url(/assets/images/bg_images/intro1.jpg)",
              top: 0,
            }}
          >
            <Box sx={{ color: "#fff" }}></Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid
            sx={{
              py: "10rem",
              width: "100vw",
              height: "100vh",
              position: "relative",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundImage: "url(/assets/images/bg_images/intro2.jpg)",
              top: 0,
            }}
          >
            <Box sx={{ color: "#fff" }}></Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid
            sx={{
              py: "10rem",
              width: "100vw",
              height: "100vh",
              position: "relative",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundImage: "url(assets/images/bg_images/intro3.jpg)",
              top: 0,
            }}
          >
            <Box sx={{ color: "#fff" }}></Box>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid
            sx={{
              py: "10rem",
              width: "100vw",
              height: "100vh",
              position: "relative",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundImage: "url(/assets/images/bg_images/intro4.jpg)",
              top: 0,
            }}
          >
            <Box sx={{ color: "#fff" }}></Box>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default About;
