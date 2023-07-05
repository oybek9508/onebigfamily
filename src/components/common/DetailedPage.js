import ImgGallery from "@/components/common/img-gallery";
import { dobbyAboutItem } from "@/constants/towels/text/dobby";
import { pestemalAboutItem } from "@/constants/towels/text/pestemal";
import { waffleAboutItem } from "@/constants/towels/text/waffle";
import { Box, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const customSizeStyles = {
	mr: 2,
	border: "2px solid #347AB7",
	borderRadius: "5px",
	p: "4px 8px",
};

const DetailedPage = ({ data: imageData, dataList, useData, textileType }) => {
	const router = useRouter();
	const [hover, setHover] = useState(false);
	const [itemColor, setItemColor] = useState("");
	console.log("router.query", router.query);
	const { slug } = router.query;
	const detailedItem = imageData;
	return (
		<div>
			{detailedItem?.map((data) => (
				<Grid
					key={data?.id}
					sx={{
						p: "8rem 5rem",
						display: "flex",
						bgcolor: "#fff",
						width: "100%",
						justifyContent: "center",
						flexDirection: { md: "column", lg: "row" },
					}}
				>
					<Grid item sm={12} md={6}>
						<ImgGallery
							setHover={setHover}
							setItemColor={setItemColor}
							itemColor={itemColor}
							dataList={detailedItem[0].images}
						/>
					</Grid>
					<Grid
						id="myPortal"
						sx={{ marginLeft: "5%", width: "100%" }}
						container
						item
						sm={12}
						md={6}
					>
						<Box sx={{ display: hover && "none", width: "100%" }}>
							<Typography
								variant="h5"
								color="#323643"
								sx={{ mb: 2, fontWeight: 700 }}
							>
								{data?.title}
							</Typography>
							<Divider sx={{ my: 2 }} />
							<Box
								sx={{
									display: "flex",
									alignItems: "center",

									my: 2,
								}}
							>
								<Typography
									variant="subtitle1"
									fontWeight="bold"
									color="#565959"
									sx={{ width: "110px" }}
								>
									Possible Sizes:
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: textileType === "bedding" && "column",
										gap: textileType === "bedding" && 1.5,
									}}
								>
									{data?.size?.map((s, idx) => (
										<Box
											key={idx}
											sx={(theme) => ({
												...customSizeStyles,
												border: "none",
												boxShadow: theme.shadows[1],
											})}
										>
											{s}
										</Box>
									))}
								</Box>
							</Box>
							<Divider sx={{ mb: 2 }} />
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Typography
									color="#565959"
									fontWeight="bold"
									sx={{ width: "110px" }}
								>
									Type:
								</Typography>
								<Box>{data?.type}</Box>
							</Box>
							<Divider sx={{ my: 2 }} />
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<Typography
									fontWeight="bold"
									color="#565959"
									sx={{ textTransform: "capitalize", width: "110px" }}
								>
									Color Samples:
								</Typography>
								<Box
									sx={{
										mt: 2,
										display: "flex",
									}}
								>
									{data?.color?.map((s, idx) => (
										<Box
											key={idx}
											sx={{
												...customSizeStyles,
												border: "none",
												display: "flex",
												flexDirection: "column",
												justifyContent: "center",
												alignItems: "center",
												mr: 0,
											}}
										>
											<Box
												sx={(theme) => ({
													width: "25px",
													height: "25px",
													borderRadius: "50%",
													bgcolor: s.color,
													mb: 1,
													boxShadow: theme.shadows[10],
												})}
											/>
											{s.name}
										</Box>
									))}
								</Box>
							</Box>
							<Divider sx={{ my: 2 }} />
							<Typography fontSize="16px" fontWeight="bold">
								About this item:
							</Typography>
							<Box>
								{slug === "dobby" || slug === "jacquard" || slug === "velour"
									? dobbyAboutItem
									: slug === "pestemal"
									? pestemalAboutItem
									: slug === "waffle" && waffleAboutItem}
							</Box>
						</Box>
					</Grid>
				</Grid>
			))}
		</div>
	);
};

export default DetailedPage;
