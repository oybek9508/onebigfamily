import useWindowSize from "@/hooks/useWindowSize";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/legacy/image";
import { useRouter } from "next/router";

const navItems = [
	{ title: "Towels", link: "towels" },
	{ title: "Beddings", link: "beddings" },
];

const customStyle = {
	fontFamily: "PT_Serif",
	fontSize: "16px",
	fontWeight: 300,
	textTransform: "capitalize",
};

const Footer = ({ isFixed }) => {
	const { width } = useWindowSize();
	const router = useRouter();
	return (
		<footer>
			<Grid
				container
				sx={{
					px: { xs: "3rem", sm: "5rem" },
					py: "3rem",
					bgcolor: "#527768",
					position: isFixed && "fixed",
					left: isFixed && 0,
					bottom: isFixed && 0,
					width: "100vw",
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					alignItems: "center",
					justifyContent: {
						xs: "center",
						md: "space-between",
					},
					mb: { xs: "64px", md: 0 },
				}}
			>
				<Grid
					container
					xs={12}
					md={6}
					item
					sx={{
						color: "#fff",
						flexDirection: "column",
						justifyContent: {
							xs: "center",
							sm: "center",
							md: "space-between",
						},
						alignItems: "center",
						height: "50%",
					}}
				>
					<Grid
						item
						sx={{
							display: "flex",
							alignItems: "center",
							mb: 2,
						}}
					>
						<Image
							src="/BigWayTrading_Logo_wt.svg"
							alt="big way logo"
							style={{ marginRight: "16px" }}
							width={60}
							height={60}
						/>
						<Typography
							sx={{
								fontSize: "24px",
								fontFamily: "Rufina",
							}}
							component="div"
						>
							Big Way Trading
						</Typography>
					</Grid>
					<Grid
						item
						alignItems="center"
						sx={{
							display: "flex",
							flexDirection: { xs: "column" },
							justifyContent: { xs: "center", md: "center" },
						}}
					>
						<Typography>Aleje Jerozolimskie 214</Typography>
						<Typography>02-486 Warszawa</Typography>
						<Typography>Poland</Typography>
					</Grid>
				</Grid>
				<Grid
					container
					item
					xs={12}
					md={5}
					sx={{
						display: { xs: "none", md: "flex" },
					}}
				>
					<Grid
						item
						xs={12}
						md={7}
						sx={{
							display: "flex",
							flexDirection: { xs: "column", sm: "row" },
							alignItems: "center",
							justifyContent: "center",
							mt: 2,
						}}
					>
						<Button
							sx={{
								color: "#fff",
								...customStyle,
							}}
							onClick={() => router.push("/")}
						>
							Home
						</Button>
						<Button sx={{ color: "#fff", ...customStyle }} onClick={() => router.push("/about")}>
							About
						</Button>
						{navItems.map((item) => (
							<Box
								key={item.title}
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								<a
									{...(router.asPath !== "/"
										? {
												onClick: () => router.replace(`/#${item.link}`),
										  }
										: { onClick: () => router.push(`/#${item.link}`) })}
									href={`#${item.link}`}
									style={{ textDecoration: "none", curser: "pointer" }}
								>
									<Button sx={{ color: "#fff", ...customStyle }}>{item.title}</Button>
								</a>
							</Box>
						))}
					</Grid>
					<Grid
						item
						container
						sx={{
							ml: { xs: 0, sm: "50px" },
							mt: 2,
							width: { xs: "100%", sm: "auto" },
						}}
						xs={12}
						md={1}
						alignItems="center"
						justifyContent="center"
					>
						<a href="mailto:sales@bigwaytrading.com">
							<Button sx={{ color: "#fff", bgcolor: "#4A7F51", ...customStyle }}>Email</Button>
						</a>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
