/* eslint-disable @next/next/no-img-element */
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { CssBaseline, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const navItems = [
	{ title: "Towels", link: "towels" },
	{ title: "Beddings", link: "beddings" },
	{ title: "Threads", link: "threads" },
];

const customStyle = {
	fontFamily: "PT_Serif",
	textTransform: "capitalize",
	fontSize: "20px",
	fontWeight: 300,
	"&:hover": {
		textDecoration: "underline",
	},
};

const drawerWidth = 240;

const Header = (props) => {
	const router = useRouter();
	const [mobileOpen, setMobileOpen] = useState(false);
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

	const homePage = bgColor !== "white" || (router.asPath !== "/" && router.asPath.substring(0, 2) !== "/#");
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

	const handleNavigateBack = () => {
		router.back();
	};

	const drawer = (
		<Box role="presentation" onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle}>
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
		</Box>
	);

	return (
		<Box
			sx={(theme) => ({
				display: "flex",
				width: "100vw",
				height: "80px",
				boxShadow: theme.shadows[1],
				justifyContent: "center",
				alignItems: "center",
				bgcolor: router.asPath === "/" || router.asPath.substring(0, 2) === "/#" ? bgColor : "#527768",
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
						onClick={handleNavigateBack}
						sx={{ mr: 2, display: { md: "none" }, color: navColor }}
					>
						<ArrowBackOutlinedIcon />
					</IconButton>

					<Box sx={{ flexGrow: 1 }}>
						<Button sx={{ color: "#fff" }} onClick={() => router.push("/")}>
							<img
								src={homePage ? "/BigWayTrading_Logo_wt.png" : "/BigWayTrading_Logo_bk.png"}
								alt="big way logo"
								style={{
									width: "60px",
									height: "60px",

									marginRight: "16px",
								}}
								loading="lazy"
							/>
							<Typography
								component="div"
								fontFamily="Rufina"
								sx={{
									display: {
										fontSize: "1.3rem",
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
							About
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
					<IconButton
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { md: "none" }, color: navColor }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
