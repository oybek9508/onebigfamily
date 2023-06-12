import Layout from "@/components/layout.js";
import {
	Box,
	Grid,
	Typography,
	ImageList,
	ImageListItem,
	CardMedia,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { terryTowelData } from "@/constants/towels";

console.log("terryTowelData", terryTowelData);

const Slug = () => {
	return (
		<Grid>
			<Layout>
				<Box sx={{ px: "5rem", py: "4rem" }}>
					{/* <Box id="bonitta">
						<Typography
							sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
						>
							Terry Towels
						</Typography>
						<ImageList
							sx={{
								width: "100%",
								height: "100%",
								mt: "40px",
								mb: "40px",
							}}
							gap={40}
							cols={3}
						>
							{terryTowelData[0]?.terryData?.map((item, idx) => (
								<Link href={`/towels/terry/${idx + 1}`} key={item.img}>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}
									>
										<CardMedia
											component="img"
											sx={{
												height: { lg: "350px" },
												width: { lg: "350px" },
											}}
											src={`${item.img}`}
											// srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={item.title}
											loading="lazy"
										/>

										<Typography
											sx={{ fontSize: "24px", fontFamily: "Rufina", mt: 2 }}
										>
											{item.title}
										</Typography>
									</Box>
								</Link>
							))}
						</ImageList>
					</Box> */}
					<Box id="dobby" sx={{ py: "4rem" }}>
						<Typography
							sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
						>
							Dobby Towels
						</Typography>
						<ImageList
							sx={{
								width: "100%",
								height: "100%",
								mt: "40px",
								mb: "40px",
							}}
							gap={40}
							cols={3}
						>
							{terryTowelData[0]?.dobbyData?.map((item, idx) => (
								<Link href={`/towels/dobby/${idx + 1}`} key={item.img}>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}
									>
										<CardMedia
											component="img"
											sx={{
												height: { lg: "350px" },
												width: { lg: "350px" },
											}}
											src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={item.title}
											loading="lazy"
										/>

										<Typography
											sx={{ fontSize: "24px", fontFamily: "Rufina", mt: 2 }}
										>
											{item.title}
										</Typography>
									</Box>
								</Link>
							))}
						</ImageList>
					</Box>
					<Box id="jacquard" sx={{ py: "4rem" }}>
						<Typography
							sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
						>
							Jacquard Towels
						</Typography>
						<ImageList
							sx={{
								width: "100%",
								height: "100%",
								mt: "40px",
								mb: "40px",
							}}
							gap={40}
							cols={3}
						>
							{terryTowelData[1]?.data?.map((item, idx) => (
								<Link href={`/towels/jacquard/${idx + 1}`} key={item.img}>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}
									>
										<CardMedia
											component="img"
											sx={{
												height: { lg: "350px" },
												width: { lg: "350px" },
											}}
											src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={item.title}
											loading="lazy"
										/>

										<Typography
											sx={{ fontSize: "24px", fontFamily: "Rufina", mt: 2 }}
										>
											{item.title}
										</Typography>
									</Box>
								</Link>
							))}
						</ImageList>
					</Box>
					<Box id="pestemal" sx={{ py: "4rem" }}>
						<Typography
							sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
						>
							Pestemal
						</Typography>
						<ImageList
							sx={{
								width: "100%",
								height: "100%",
								mt: "40px",
								mb: "40px",
							}}
							gap={40}
							cols={3}
						>
							{terryTowelData[2]?.pestemalData?.map((item, idx) => (
								<Link href={`/towels/pestemal/${idx + 1}`} key={item.img}>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}
									>
										<CardMedia
											component="img"
											sx={{
												height: { lg: "350px" },
												width: { lg: "350px" },
											}}
											src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={item.title}
											loading="lazy"
										/>

										<Typography
											sx={{ fontSize: "24px", fontFamily: "Rufina", mt: 2 }}
										>
											{item.title}
										</Typography>
									</Box>
								</Link>
							))}
						</ImageList>
					</Box>
					<Box id="waffle" sx={{ py: "4rem" }}>
						<Typography
							sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
						>
							Waffle Towels
						</Typography>
						<ImageList
							sx={{
								width: "100%",
								height: "100%",
								mt: "40px",
								mb: "40px",
							}}
							gap={40}
							cols={3}
						>
							{terryTowelData[3]?.waffleData?.map((item, idx) => (
								<Link href={`/towels/waffle/${idx + 1}`} key={item.img}>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}
									>
										<CardMedia
											component="img"
											sx={{
												height: { lg: "350px" },
												width: { lg: "350px" },
											}}
											src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={item.title}
											loading="lazy"
										/>

										<Typography
											sx={{ fontSize: "24px", fontFamily: "Rufina", mt: 2 }}
										>
											{item.title}
										</Typography>
									</Box>
								</Link>
							))}
						</ImageList>
					</Box>
					<Box id="velour" sx={{ py: "4rem" }}>
						<Typography
							sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
						>
							Velour Towels
						</Typography>
						<ImageList
							sx={{
								width: "100%",
								height: "100%",
								mt: "40px",
								mb: "40px",
							}}
							gap={40}
							cols={3}
						>
							{terryTowelData[4]?.velourData?.map((item, idx) => (
								<Link href={`/towels/velour/${idx + 1}`} key={item.img}>
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
										}}
									>
										<CardMedia
											component="img"
											sx={{
												height: { lg: "350px" },
												width: { lg: "350px" },
											}}
											src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
											srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
											alt={item.title}
											loading="lazy"
										/>

										<Typography
											sx={{ fontSize: "24px", fontFamily: "Rufina", mt: 2 }}
										>
											{item.title}
										</Typography>
									</Box>
								</Link>
							))}
						</ImageList>
					</Box>
				</Box>
			</Layout>
		</Grid>
	);
};

export default Slug;
