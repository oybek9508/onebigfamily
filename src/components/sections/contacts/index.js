import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const phoneStyle = {
	fontFamily: "Ariel",
	fontSize: 16,
	fontWeight: 400,
	fontStyle: "normal",
	color: "rgba(0, 0, 0, 0.6)",
};

const countryStyle = {
	fontFamily: "Roboto",
	fontSize: 16,
	fontWeight: "bold",
	color: "rgba(0, 0, 0, 0.6)",
};

const Contacts = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("service_wrp2y8l", "template_tycq13s", form.current, "nQcAPv3YhccJE7Lbb")
			.then(
				(result) => {
					console.log(result.text);
					console.log("message sent");
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			)
			.catch((err) => alert("There is something wrong the Email server"));
	};
	return (
		<Grid sx={{ py: "4rem", px: { xs: "3rem", sm: "5rem" } }} id="contacts">
			<form ref={form} onSubmit={sendEmail}>
				<Grid container justifyContent="space-between">
					<Grid
						item
						xs={12}
						md={5}
						sx={{
							display: "grid",
							placeContent: "center",
							mb: { xs: "2rem", md: 0 },
						}}
					>
						<Box>
							<Typography
								sx={{
									fontSize: 18,
									fontFamily: "Rufina",
									fontWeight: 700,
									mb: 4,
								}}
							>
								Get in touch with Big Way Trading
							</Typography>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
								<Box sx={{ display: "flex", gap: 2 }}>
									<Box>
										<LocalPhoneIcon sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
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
										<EmailIcon sx={{ color: "rgba(0, 0, 0, 0.6)" }} />
									</Box>
									<Box>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
											}}
										>
											<Typography sx={{ ...phoneStyle, fontSize: 18 }}>
												sales@bigwaytradingcom
											</Typography>
											<Typography sx={{ ...phoneStyle, fontSize: 18 }}>
												info@bigwaytrading.com
											</Typography>
										</Box>
									</Box>
								</Box>
							</Box>
							<Typography sx={{ mt: 2, fontFamily: "PT_Serif", fontSize: "14px" }}>
								Or fill out the form and a member of the Big Way Trading team will get back to you as
								soon as possible.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Grid
							sx={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<Grid
								container
								sx={{
									display: "flex",
									position: "relative",
									mb: 2,
									justifyContent: "space-between",
								}}
							>
								<Grid item xs={12} sm={6} sx={{ width: "100%", mb: { xs: 2, sm: 0 } }}>
									<Typography
										sx={{
											fontFamily: "PT_Serif",
											fontSize: "14px",
											mb: 1,
										}}
									>
										Name
									</Typography>
									<TextField sx={{ width: { xs: "100%", sm: "97%" } }} type="text" name="user_name" />
								</Grid>
								<Grid item xs={12} sm={6} sx={{}}>
									<Typography sx={{ fontFamily: "PT_Serif", fontSize: "14px", mb: 1 }}>
										E-mail
									</Typography>
									<TextField sx={{ width: "100%" }} type="email" name="user_email" />
								</Grid>
							</Grid>
							<Box>
								<Typography sx={{ fontFamily: "PT_Serif", fontSize: "14px", mb: 1 }}>
									Message
								</Typography>
								<TextField multiline rows={5} sx={{ width: "100%" }} name="message" />
							</Box>
						</Grid>
					</Grid>
				</Grid>
				<Box
					sx={{
						display: "flex",
						justifyContent: { xs: "center", md: "flex-end" },
					}}
				>
					<Button
						variant="contained"
						sx={{
							bgcolor: "#4A7F51",
							mt: 4,
							fontSize: "16px",
							color: "#fff",
							px: 2,
							py: 1.5,
							width: { xs: "100%", sm: "144px" },
							fontFamily: "PT_Serif",
							textTransform: "capitalize",
						}}
						type="submit"
					>
						Send
					</Button>
				</Box>
			</form>
		</Grid>
	);
};

export default Contacts;
