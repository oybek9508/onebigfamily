/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import Layout from "@/components/layout/index.js";
import { terryTowelData } from "@/constants/towels";
import DetailedPage from "@/components/common/DetailedPage";

const Detailed = () => {
	const [towelData, setTowelData] = useState([]);
	const router = useRouter();
	const { query } = router;

	const filteredTowels = (data) => {
		return data.filter((d, i) => query.id === d.id);
	};

	const singleDobby = filteredTowels(terryTowelData[0]?.dobbyData);
	const singleVelour = filteredTowels(terryTowelData[4]?.velourData);
	const singleJacquard = filteredTowels(terryTowelData[1]?.data);
	const singlePestemal = filteredTowels(terryTowelData[2]?.pestemalData);
	const singleWaffle = filteredTowels(terryTowelData[3]?.waffleData);

	useEffect(() => {
		const data =
			query.slug === "dobby"
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

	console.log(" towelData", towelData);
	return (
		<Grid>
			<Layout isFixed fullWidth>
				<DetailedPage data={towelData} textileType="towel" />
			</Layout>
		</Grid>
	);
};

export default Detailed;
