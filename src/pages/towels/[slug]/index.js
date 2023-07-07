import Layout from "@/components/layout/index.js";
import { Box, Grid, Typography, ImageList, CardMedia } from "@mui/material";
import Link from "next/link";
import React from "react";
import { terryTowelData } from "@/constants/towels";
import { useRouter } from "next/router";
import { H1, Paragraph } from "@/components/Typography";
import ProductCard from "@/components/ProductCard";

console.log("terryTowelData", terryTowelData);

const Slug = () => {
	const router = useRouter();
	console.log("router", router);
	return (
		<Grid>
			<Layout>
				<Box sx={{ py: "2rem", px: { xs: "40px", xl: 0 } }}>
					<Box id="dobby" sx={{ py: "20px" }}>
						<Box my={2}>
							<H1 mb="4px">Dobby Towels</H1>
						</Box>
						<Grid container mb={-0.5} spacing={3}>
							{terryTowelData[0]?.dobbyData?.map((item, idx) => (
								<Grid key={idx} item lg={4} md={6} sm={6} xs={12}>
									<ProductCard
										id={item.id}
										imgUrl={item.img}
										title={item.title}
										url={`/towels/dobby/${idx + 1}`}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
					<Box id="jacquard" sx={{ py: "20px" }}>
						<Box my={2}>
							<H1 mb="4px">Jacquard Towels</H1>
						</Box>
						<Grid container mb={-0.5} spacing={3}>
							{terryTowelData[1]?.data?.map((item, idx) => (
								<Grid key={idx} item lg={4} md={6} sm={6} xs={12}>
									<ProductCard
										id={item.id}
										imgUrl={item.img}
										title={item.title}
										url={`/towels/jacquard/${idx + 1}`}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
					<Box id="pestemal" sx={{ py: "20px" }}>
						<Box my={2}>
							<H1 mb="4px">Pestemal</H1>
						</Box>
						<Grid container mb={-0.5} spacing={3}>
							{terryTowelData[2]?.pestemalData?.map((item, idx) => (
								<Grid key={idx} item lg={4} md={6} sm={6} xs={12}>
									<ProductCard
										id={item.id}
										imgUrl={item.img}
										title={item.title}
										url={`/towels/pestemal/${idx + 1}`}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
					<Box id="waffle" sx={{ py: "20px" }}>
						<Box my={2}>
							<H1 mb="4px">Waffle Towels</H1>
						</Box>
						<Grid container mb={-0.5} spacing={3}>
							{terryTowelData[3]?.waffleData?.map((item, idx) => (
								<Grid key={idx} item lg={4} md={6} sm={6} xs={12}>
									<ProductCard
										id={item.id}
										imgUrl={item.img}
										title={item.title}
										url={`/towels/pestemal/${idx + 1}`}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
					<Box id="velour" sx={{ py: "20px" }}>
						<Box my={2}>
							<H1 mb="4px">Velour Towels</H1>
						</Box>
						<Grid container mb={-0.5} spacing={3}>
							{terryTowelData[4]?.velourData?.map((item, idx) => (
								<Grid key={idx} item lg={4} md={6} sm={6} xs={12}>
									<ProductCard
										id={item.id}
										imgUrl={item.img}
										title={item.title}
										url={`/towels/velour/${idx + 1}`}
									/>
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
			</Layout>
		</Grid>
	);
};

export default Slug;
