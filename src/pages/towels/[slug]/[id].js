/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout/index.js";
import { Grid } from "@mui/material";
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

	const singleDobby = filteredTowels(terryTowelData[0].dobbyData);
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

	towelList = [
		...singleDobby,
		...singleJacquard,
		...singlePestemal,
		...singleWaffle,
		...singleVelour,
	];

	return (
		<Grid>
			<Layout isFixed>
				<DetailedPage data={towelData} dataList={towelList} />
			</Layout>
		</Grid>
	);
};

export default Detailed;
