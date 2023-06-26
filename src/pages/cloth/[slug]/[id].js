/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout/index.js";
import { Box, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { clothTypes } from "@/constants/cloth";
import DetailedPage from "@/components/common/DetailedPage";

const Detailed = () => {
	const [clothData, setClothData] = useState([]);
	const router = useRouter();
	const { query } = router;
	const { slug } = query;
	console.log("router.query.id", router);

	const filteredBeddings = (data) => {
		return data.filter((d, i) => query.id === d.id);
	};

	const singleFitted = filteredBeddings(clothTypes[0].data);
	const singleRound = filteredBeddings(clothTypes[1].data);
	const singleRectangular = filteredBeddings(clothTypes[2].data);

	useEffect(() => {
		const data =
			slug === "fitted"
				? singleFitted
				: slug === "round"
				? singleRound
				: singleRectangular;
		setClothData(data);
	}, [slug]);

	const dataList = [...singleFitted, ...singleRound, ...singleRectangular];

	return (
		<Grid>
			<Layout isFixed>
				<DetailedPage data={clothData} dataList={dataList} />
			</Layout>
		</Grid>
	);
};

export default Detailed;
