import ImgGallery from "@/components/common/img-gallery";
import { Box, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const customSizeStyles = {
	mr: 2,
	border: "2px solid #347AB7",
	borderRadius: "5px",
	p: "4px 8px",
};

const DetailedPage = ({ data: imageData, dataList, useData }) => {
	console.log("imageData", imageData);
	const router = useRouter();
	const [hover, setHover] = useState(false);
	const [itemColor, setItemColor] = useState("");
	const { id } = router.query;
	const detailedItem = imageData;
	console.log("imageData", imageData);
	console.log("detailedItem", detailedItem);
	console.log("dataList[parseInt(id - 1)]", [dataList[parseInt(id - 1)]]);
	return (
		<div>
			{detailedItem?.map((data) => (
				<Grid
					key={data?.id}
					sx={{
						p: "8rem 5rem",
						display: "flex",
						bgcolor: "#fff",
						width: "100vw",
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
							<Typography variant="h5" sx={{ mb: 2 }}>
								{data?.title}
							</Typography>

							<Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
								<Typography
									variant="subtitle1"
									fontWeight="bold"
									sx={{ mr: 2 }}
								>
									Size:
								</Typography>
								{data?.size?.map((s) => (
									<Box
										key={s}
										sx={{
											...customSizeStyles,
										}}
									>
										{s}
									</Box>
								))}
							</Box>
							<Divider sx={{ mb: 2 }} />

							<Typography color="#565959">Type: {data?.type}</Typography>
							<Divider sx={{ my: 2 }} />
							<Typography color="#565959" sx={{ textTransform: "capitalize" }}>
								Color: {itemColor.replace("_", " ")}
							</Typography>
							<Divider sx={{ my: 2 }} />
							<Box sx={{ display: "flex", mb: 2 }}>
								{detailedItem[0]?.images?.blue && (
									<CardMedia
										itemColor="blue"
										onClick={() => setItemColor("blue")}
										component="img"
										alt="blue towel"
										src={detailedItem[0].images?.blue[0]?.original}
										sx={{ width: "70px", height: "70px", mr: 2 }}
									/>
								)}
								{detailedItem[0]?.images?.white && (
									<CardMedia
										itemColor="white"
										onClick={() => setItemColor("white")}
										component="img"
										alt="white towel"
										src={detailedItem[0].images?.white[0]?.original}
										sx={{ width: "70px", height: "70px", mr: 2 }}
									/>
								)}
								{detailedItem[0]?.images?.purple && (
									<CardMedia
										itemColor="purple"
										onClick={() => setItemColor("purple")}
										component="img"
										alt="purple towel"
										src={detailedItem[0].images?.purple[0]?.original}
										sx={{ width: "70px", height: "70px", mr: 2 }}
									/>
								)}
								{detailedItem[0]?.images?.dark_grey && (
									<CardMedia
										itemColor="dark_grey"
										onClick={() => setItemColor("dark_grey")}
										component="img"
										alt="dark grey towel"
										src={detailedItem[0].images?.dark_grey[0]?.original}
										sx={{ width: "70px", height: "70px", mr: 2 }}
									/>
								)}
								{detailedItem[0]?.images?.light_grey && (
									<CardMedia
										itemColor="light_grey"
										onClick={() => setItemColor("light_grey")}
										component="img"
										alt="white towel"
										src={detailedItem[0].images?.light_grey[0]?.original}
										sx={{ width: "70px", height: "70px", mr: 2 }}
									/>
								)}
							</Box>
							<Typography fontSize="16px" fontWeight="bold">
								About this item:
							</Typography>
							<Typography>{data?.about}</Typography>
						</Box>
					</Grid>
				</Grid>
			))}
		</div>
	);
};

export default DetailedPage;
