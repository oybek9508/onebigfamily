/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout.js";
import { Grid } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { beddingTypes } from "@/constants/beddings";
import DetailedPage from "@/components/common/DetailedPage";

const Detailed = () => {
	const [beddingData, setBeddingData] = useState([]);
	const router = useRouter();
	const { query } = router;
	const { slug } = query;
	console.log("router.query.id", router);

	const filteredBeddings = (data) => {
		return data.filter((d, i) => query.id === d.id);
	};

	const singleBonitta = filteredBeddings(beddingTypes[0].data);
	const singleBamboo = filteredBeddings(beddingTypes[1].data);
	const singlePremium = filteredBeddings(beddingTypes[2].data);
	const singleExclusive = filteredBeddings(beddingTypes[3].data);
	const singleJacquard = filteredBeddings(beddingTypes[4].data);
	const singleDigital = filteredBeddings(beddingTypes[5].data);
	const singleCotton = filteredBeddings(beddingTypes[6].data);
	const singleDuet = filteredBeddings(beddingTypes[7].data);
	const singleDeluxe = filteredBeddings(beddingTypes[8].data);
	const singleAlways = filteredBeddings(beddingTypes[9].data);
	const singleBaby = filteredBeddings(beddingTypes[10].data);
	const dataList = [
		...singleBonitta,
		...singleBamboo,
		...singlePremium,
		...singleExclusive,
		...singleJacquard,
		...singleDigital,
		...singleCotton,
		...singleDuet,
		...singleDeluxe,
		...singleAlways,
		...singleBaby,
	];
	console.log("dataList", dataList);

	useEffect(() => {
		const data =
			slug === "bonitta"
				? singleBonitta
				: slug === "bamboo"
				? singleBamboo
				: slug === "premium"
				? singlePremium
				: slug === "exclusive"
				? singleExclusive
				: slug === "jacquard"
				? singleJacquard
				: slug === "digital"
				? singleDigital
				: slug === "cotton"
				? singleCotton
				: slug === "duet"
				? singleDuet
				: slug === "deluxe"
				? singleDeluxe
				: slug === "always"
				? singleAlways
				: singleBaby;
		setBeddingData(data);
	}, [slug]);

	return (
		<Grid>
			<Layout isFixed>
				<DetailedPage data={beddingData} dataList={dataList} />
			</Layout>
		</Grid>
	);
};

export default Detailed;
