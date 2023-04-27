import Layout from "@/components/layout.js";
import { Grid, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Layout isFixed={true}>
      <Grid p="80px" sx={{ bgcolor: "#FFFFFF" }}>
        <Typography
          sx={{
            my: 4,
            fontSize: "16px",
            fontFamily: "Rufina",
            fontWeight: 700,
          }}
        >
          Welcome to One Big Family
        </Typography>
        <Typography sx={{ my: 2, fontFamily: "PT_Serif", fontSize: "14px" }}>
          At One Big Family, we believe that home is a place of comfort and
          love. That&apos;s why we specialize in providing quality home textiles
          that create a warm, inviting atmosphere for your family. From high
          quality linens to cozy blankets and throws, we carry the products to
          make your house feel like a home.
        </Typography>
        <Typography sx={{ my: 2, fontFamily: "PT_Serif", fontSize: "14px" }}>
          We understand that it isn&apos;t just about the products, but about
          creating a bond between family members. Our personalized service helps
          make each shopping experience special, and our dedication to customer
          satisfaction ensures you&apos;ll receive quality products that you can
          be proud of for years to come.
        </Typography>
        <Typography sx={{ my: 2, fontFamily: "PT_Serif", fontSize: "14px" }}>
          Come join the One Big Family today and see what a difference quality
          home textiles can make in your home.
        </Typography>
      </Grid>
    </Layout>
  );
};

export default About;
