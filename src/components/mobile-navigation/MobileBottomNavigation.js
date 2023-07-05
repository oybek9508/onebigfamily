import React, { useEffect, useState } from "react";
import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	Drawer,
	styled,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import { CategoryOutlined } from "@mui/icons-material";
import NavLink from "../nav-link/NavLink";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import { layoutConstant } from "@/utils/constants";

const iconStyle = {
	marginBottom: "4px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "25px",
	height: "25px",
};
const { mobileHeaderHeight } = layoutConstant;

const StyledDrawer = styled(Drawer)(({ theme, totalheight }) => ({
	width: 240,
	flexShrink: 0,
	"& .MuiDrawer-paper": {
		width: 240,
		top: totalheight,
		// height: `calc(100% - ${totalheight + mobileHeaderHeight}px)`,
		height: "100%",
		boxShadow: theme.shadows[2],
		boxSizing: "border-box",
	},
	"& .MuiBackdrop-root.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop": {
		top: totalheight,
	},
}));

const Wrapper = styled(Box)(({ theme }) => ({
	display: "none",
	position: "fixed",
	bottom: 0,
	left: 0,
	right: 0,
	height: layoutConstant.mobileNavHeight,
	justifyContent: "space-around",
	backgroundColor: theme.palette.background.paper,
	boxShadow: "0px 1px 4px 3px rgba(0, 0, 0, 0.1)",
	zIndex: theme.zIndex.drawer + 1,
	"@media only screen and (max-width: 900px)": {
		display: "flex",
		width: "100vw",
	},
}));

const MobileBottomNavigation = ({ children }) => {
	const width = useWindowSize();
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("home");
	const { mobileNavHeight, topbarHeight } = layoutConstant;
	const total = mobileNavHeight + topbarHeight;
	const [totalHeight, setTotalHeight] = useState(total);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 30) {
				setTotalHeight(mobileNavHeight);
			} else {
				setTotalHeight(total);
			}
		});
		return () => window.removeEventListener("scroll", null);
	}, []);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	console.log("width", width);
	return width <= 900 ? (
		<Box position="relative" display="flex" flexDirection="column">
			<StyledDrawer
				open={open}
				anchor="left" // variant="persistent"
				totalheight={totalHeight}
				onClose={handleDrawerClose}
			>
				{children}
			</StyledDrawer>
			<Wrapper value={value} onChange={handleChange}>
				{/* <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />

			<BottomNavigationAction label="About" value="about" icon={<InfoIcon />} />
			<BottomNavigationAction
				label="Gategory"
				value="gategory"
				icon={<CategoryOutlined />}
			/>
			<BottomNavigationAction
				label="Contact"
				value="contact"
				icon={<ContactMailIcon />}
			/> */}
				{navList.map((item) => {
					if (item.href) {
						return (
							<Link href={item.href} key={item.label}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										height: "100%",
									}}
								>
									{<item.icon sx={iconStyle} fontSize="small" />}

									{item.label}
								</Box>
							</Link>
						);
					} else {
						return (
							<a href="mailto:sales@bigwaytrading.com" key={item.label}>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										justifyContent: "center",
										height: "100%",
									}}
									// onClick={open ? handleDrawerClose : handleDrawerOpen}
								>
									{<item.icon sx={iconStyle} fontSize="small" />}

									{item.label}
								</Box>
							</a>
						);
					}
				})}
			</Wrapper>
		</Box>
	) : null;
};

const navList = [
	{
		label: "Home",
		value: "home",
		icon: HomeIcon,
		href: "/",
	},
	{
		label: "About",
		value: "about",
		icon: InfoIcon,
		href: "/about",
	},
	{
		label: "Contact",
		value: "contact",
		icon: ContactMailIcon,
	},
];
export default MobileBottomNavigation;