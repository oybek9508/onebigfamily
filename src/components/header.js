/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import {
	CssBaseline,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import Link from "next/link";

const navItems = [
	{ title: "Towels", link: "towels" },
	{ title: "Beddings", link: "beddings" },
	{ title: "Threads", link: "threads" },
	// { title: "Table Cloth", link: "cloth" },
];

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const customStyle = {
	fontFamily: "PT_Serif",
	textTransform: "capitalize",
	fontSize: "20px",
	fontWeight: 300,
	"&:hover": {
		textDecoration: "underline",
	},
};

const drawer = (
	<div>
		<Toolbar sx={{ height: "80px" }} />
		<Divider />
		<List>
			{[
				{ title: "Towels", link: "towels" },
				{ title: "Beddings", link: "beddings" },
			].map((text, index) => (
				<ListItem key={text.title} disablePadding>
					<Link href={`/#${text.link}`}>
						<ListItemButton>
							<ListItemText primary={text.title} />
							<Divider />
						</ListItemButton>
					</Link>
				</ListItem>
			))}
		</List>
	</div>
);

const drawerWidth = 240;

const Header = (props) => {
	const router = useRouter();
	const [activeNav, setActiveNav] = useState("");
	const [mobileOpen, setMobileOpen] = useState(false);
	const [value, setValue] = useState(0);
	const [bgColor, setBgColor] = useState("white");
	const navRef = useRef();

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};
	let container = null;
	useEffect(() => {
		if (window !== undefined) {
			container = () => window().document.body;
		}
	}, []);
	// const container = window().document.body;
	// window !== undefined ? () => window().document.body : undefined;

	const homePage =
		bgColor !== "white" ||
		(router.asPath !== "/" && router.asPath.substring(0, 2) !== "/#");
	const navColor = homePage ? "#fff" : "#000";
	navRef.current = bgColor;
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 80;

			if (show) {
				setBgColor("#527768");
			} else {
				setBgColor("white");
			}
		};
		document.addEventListener("scroll", handleScroll);
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				width: "100vw",
				height: "80px",
				boxShadow: theme.shadows[1],
				justifyContent: "center",
				alignItems: "center",
				bgcolor:
					router.asPath === "/" || router.asPath.substring(0, 2) === "/#"
						? bgColor
						: "#527768",
				zIndex: theme.zIndex.drawer + 1,
			})}
		>
			<CssBaseline />
			<AppBar
				component="nav"
				position="sticky"
				sx={(theme) => ({
					maxWidth: "100%",
					width: "1440px",
					boxShadow: "none",
					bgcolor: "inherit",
					zIndex: theme.zIndex.drawer + 1,
				})}
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						// display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
						zIndex: 99,
					}}
				>
					{drawer}
				</Drawer>
				<Toolbar
					sx={(theme) => ({
						zIndex: theme.zIndex.drawer + 1,
					})}
				>
					<IconButton
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { md: "none" }, color: navColor }}
					>
						<MenuIcon />
					</IconButton>
					<Box sx={{ flexGrow: 1 }}>
						<Button sx={{ color: "#fff" }} onClick={() => router.push("/")}>
							<img
								src={
									homePage
										? "/BigWayTrading_Logo_wt.png"
										: "/BigWayTrading_Logo_bk.png"
								}
								alt="big way logo"
								style={{ width: "60px", height: "60px", marginRight: "16px" }}
								loading="lazy"
							/>
							<Typography
								component="div"
								fontFamily="Rufina"
								sx={{
									display: {
										fontSize: "24px",

										cursor: "pointer",
										textTransform: "capitalize",
										color: navColor,
									},
								}}
							>
								Big Way Trading
							</Typography>
						</Button>
					</Box>
					<Box sx={{ display: { xs: "none", md: "block" } }}>
						<Button
							sx={{
								...customStyle,
								color: navColor,
							}}
							onClick={() => router.push("/about")}
						>
							About us
						</Button>
						{navItems.map((item) => (
							<a
								{...(router.asPath !== "/"
									? {
											onClick: () => router.replace(`/#${item.link}`),
									  }
									: { onClick: () => router.push(`/#${item.link}`) })}
								key={item.title}
								href={`#${item.link}`}
								style={{
									textDecoration: "none",
									curser: "pointer",
								}}
							>
								<Button
									sx={{
										...customStyle,
										color: navColor,
									}}
								>
									{item.title}
								</Button>
							</a>
						))}
					</Box>
					<Box sx={{ ml: "50px", display: { xs: "none", md: "block" } }}>
						<a
							{...(router.asPath !== "/"
								? {
										onClick: () => router.replace(`/#contacts`),
								  }
								: { onClick: () => router.push(`/#contacts`) })}
							href={`#contacts`}
						>
							<Button
								sx={{
									color: navColor,
									fontFamily: "PT_Serif",
									textTransform: "capitalize",
									fontSize: "24px",
									fontWeight: 300,
									"&:hover": {
										textDecoration: "underline",
									},
								}}
							>
								Contact us
							</Button>
						</a>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
