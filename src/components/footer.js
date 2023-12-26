import useWindowSize from "@/hooks/useWindowSize";
import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

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

const phoneStyle = {
	fontFamily: "Ariel",
	fontSize: 16,
	fontWeight: 400,
	fontStyle: "normal",
	color: "#fff",
};

const countryStyle = {
	fontFamily: "Roboto",
	fontSize: 16,
	fontWeight: "bold",
	color: "#fff",
};

const Footer = ({ isFixed }) => {
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
					alignItems: "flex-start",
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
					md={3}
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
							gap: 1,
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
								fontWeight: 600,
								fontSize: "1.5rem",
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
					md={1}
					sx={{
						display: { xs: "none", md: "flex" },
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Grid
						item
						xs={12}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							mt: 2,
							gap: 3,
						}}
					>
						<Typography sx={{ width: "100%", color: "#fff", fontWeight: 600, fontSize: 18 }}>
							Products
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1, alignItems: "flex-start" }}>
							<Typography
								sx={{
									color: "#fff",
									...customStyle,
								}}
								onClick={() => router.push("/")}
							>
								Home
							</Typography>
							<Typography sx={{ color: "#fff", ...customStyle }} onClick={() => router.push("/about")}>
								About
							</Typography>

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
										<Typography sx={{ color: "#fff", ...customStyle }}>{item.title}</Typography>
									</a>
								</Box>
							))}
						</Box>
					</Grid>
				</Grid>
				<Grid
					container
					item
					xs={12}
					md={2}
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
					}}
				>
					<Grid
						item
						xs={12}
						md={7}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							mt: 2,
							gap: 3,
						}}
					>
						<Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 18 }}>Follow us</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 1 }}>
							<Box
								sx={{
									display: "flex",
									alignContent: "center",
								}}
							>
								<Typography sx={phoneStyle}>
									<Link
										target="_blank"
										href="https://www.facebook.com/bigwaytradingllc?mibextid=LQQJ4d"
										style={{ textDecoration: "underline" }}
									>
										Facebook
									</Link>
								</Typography>
							</Box>
							<Box sx={{ display: "flex", alignContent: "center" }}>
								<Typography sx={phoneStyle}>
									<Link
										target="_blank"
										href="https://www.instagram.com/bigwaytrading.com_?igsh=aWVtZGdxMm90YThk&utm_source=qrm"
										style={{ textDecoration: "underline" }}
									>
										Instagram
									</Link>
								</Typography>
							</Box>
							<Box sx={{ display: "flex", alignContent: "center" }}>
								<Typography sx={phoneStyle}>
									<Link
										target="_blank"
										href="https://api.whatsapp.com/send?phone=%2B48571780101&app=facebook&entry_point=page_cta"
										style={{ textDecoration: "underline" }}
									>
										Whatsapp
									</Link>
								</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
				<Grid
					container
					item
					xs={12}
					md={5}
					sx={{
						display: { xs: "none", md: "flex" },
						justifyContent: "center",
					}}
				>
					<Grid
						item
						xs={12}
						md={12}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							justifyContent: "center",
							mt: 2,
							gap: 3,
						}}
					>
						<Typography sx={{ color: "#fff", fontWeight: 600, fontSize: 18 }}>Contact us</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
							<Box sx={{ display: "flex", gap: 2 }}>
								<Box>
									<LocalPhoneIcon sx={{ color: "#fff" }} />
								</Box>
								<Box>
									<Box
										sx={{
											display: "flex",
											alignContent: "center",
											gap: 1,
										}}
									>
										<Typography sx={phoneStyle}>+48 571 78 01 01</Typography>
										<Typography sx={countryStyle}>🇵🇱 Poland</Typography>
									</Box>
									<Box sx={{ display: "flex", alignContent: "center", gap: 1 }}>
										<Typography sx={phoneStyle}>+49 176 7279 9554</Typography>
										<Typography sx={countryStyle}>🇩🇪 Germany</Typography>
									</Box>
									<Box sx={{ display: "flex", alignContent: "center", gap: 1 }}>
										<Typography sx={phoneStyle}>+44 7715 239446</Typography>
										<Typography sx={countryStyle}>🇬🇧 UK</Typography>
									</Box>
								</Box>
							</Box>
							<Box sx={{ display: "flex", gap: 2 }}>
								<Box>
									<EmailIcon sx={{ color: "#fff" }} />
								</Box>
								<Box>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Typography sx={phoneStyle}>
											<Link
												target="_blank"
												href="mailto:sales@bigwaytrading.com"
												style={{ textDecoration: "underline" }}
											>
												sales@bigwaytrading.com
											</Link>
										</Typography>
										<Typography sx={phoneStyle}>
											<Link
												target="_blank"
												href="mailto:info@bigwaytrading.com"
												style={{ textDecoration: "underline" }}
											>
												info@bigwaytrading.com
											</Link>
										</Typography>
									</Box>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
