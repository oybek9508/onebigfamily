/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import Layout from "@/components/layout/index.js";

import { beddingTypes } from "@/constants/beddings";
import DetailedPage from "@/components/common/DetailedPage";

const Detailed = () => {
	const [beddingData, setBeddingData] = useState([]);
	const router = useRouter();
	const { query } = router;

	const filteredBeddings = (data) => {
		return data.filter((d, i) => query.id === d.id);
	};

	const singlePremium = filteredBeddings(beddingTypes[0]?.data);
	const singleDeluxe = filteredBeddings(beddingTypes[1]?.data);
	const singleSatin = filteredBeddings(beddingTypes[2]?.data);
	const singleExclusive = filteredBeddings(beddingTypes[3]?.data);
	const singleDigital = filteredBeddings(beddingTypes[4]?.data);
	const singleJacquard = filteredBeddings(beddingTypes[5]?.data);

	useEffect(() => {
		const data =
			query.slug === "digital"
				? singleSatin
				: query.slug === "premium"
				? singlePremium
				: query.slug === "exclusive"
				? singleExclusive
				: query.slug === "3d"
				? singleDigital
				: query.slug === "deluxe"
				? singleDeluxe
				: query.slug === "jacquard" && singleJacquard;

		setBeddingData(data);
	}, [query.slug]);

	return (
		<Grid>
			<Layout isFixed fullWidth>
				<DetailedPage data={beddingData} textileType="bedding" />
			</Layout>
		</Grid>
	);
};

export default Detailed;
