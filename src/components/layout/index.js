import React from "react";
import Sticky from "../common/Sticky";
import { Grid } from "@mui/material";
import MobileBottomNavigation from "../mobile-navigation/MobileBottomNavigation";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children, isFixed }) => {
	return (
		<Grid
			container
			justifyContent="center"
			sx={{
				height: isFixed && "100vh",
				backgroundColor: "#F6F9FC",
			}}
		>
			<Sticky fixedOn={0}>
				<Header />
			</Sticky>
			<Grid
				sx={{
					width: {
						xs: "90%",
						sm: "560px",
						md: "760px",
						lg: "1140px",
						xl: "1440px",
					},
					maxWidth: "100%",
				}}
			>
				<div>
					<div />
					{children}
				</div>
			</Grid>
			<Footer />
			<MobileBottomNavigation />
		</Grid>
	);
};

export default Layout;
