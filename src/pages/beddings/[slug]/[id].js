/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout/index.js";
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
	console.log("router", router);

	const filteredBeddings = (data) => {
		return data.filter((d, i) => query.id === d.id);
	};

	const singlePremium = filteredBeddings(beddingTypes[0]?.data);
	const singleDeluxe = filteredBeddings(beddingTypes[1]?.data);
	const singleSatin = filteredBeddings(beddingTypes[2]?.data);
	const singleExclusive = filteredBeddings(beddingTypes[3]?.data);
	const singleDigital = filteredBeddings(beddingTypes[4]?.data);

	useEffect(() => {
		const data =
			slug === "satin"
				? singleSatin
				: slug === "premium"
				? singlePremium
				: slug === "exclusive"
				? singleExclusive
				: slug === "digital"
				? singleDigital
				: singleDeluxe;

		setBeddingData(data);
	}, [slug]);

	const dataList = [
		...singleSatin,
		...singlePremium,
		...singleExclusive,
		...singleDigital,
		...singleDeluxe,
	];
	console.log("beddingData", beddingData);
	return (
		<Grid>
			<Layout isFixed>
				<DetailedPage data={beddingData} dataList={dataList} />
			</Layout>
		</Grid>
	);
};

export default Detailed;
