/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout.js";
import { Box, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { terryTowelData } from "@/constants/towels";
import DetailedPage from "@/components/common/DetailedPage";

const Detailed = () => {
	let towelList = [];
	const [towelData, setTowelData] = useState([]);
	const router = useRouter();
	const { query } = router;

	const filteredTowels = (data) => {
		return data.filter((d, i) => query.id === d.id);
	};

	const singleTerry = filteredTowels(terryTowelData[0].terryData);

	const singleDobby = filteredTowels(terryTowelData[1].dobbyData);
	const singleVelour = filteredTowels(terryTowelData[5]?.velourData);
	const singleJacquard = filteredTowels(terryTowelData[2]?.data);
	const singlePestemal = filteredTowels(terryTowelData[3]?.pestemalData);
	const singleWaffle = filteredTowels(terryTowelData[4]?.waffleData);

	useEffect(() => {
		const data =
			query.slug === "terry"
				? singleTerry
				: query.slug === "dobby"
				? singleDobby
				: query.slug === "jacquard"
				? singleJacquard
				: query.slug === "pestemal"
				? singlePestemal
				: query.slug === "waffle"
				? singleWaffle
				: singleVelour;
		setTowelData(data);
	}, [query.slug]);

	towelList = [
		...singleTerry,
		...singleDobby,
		...singleJacquard,
		...singlePestemal,
		...singleWaffle,
		...singleVelour,
	];

	console.log("towel data >>>", towelData);

	return (
		<Grid>
			<Layout isFixed>
				<DetailedPage data={towelData} dataList={towelList} />
			</Layout>
		</Grid>
	);
};

export default Detailed;
