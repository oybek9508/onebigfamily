/* eslint-disable react/jsx-no-duplicate-props */
import Layout from "@/components/layout.js";
import { Box, CardMedia, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { threadTypes } from "@/constants/threads";
import DetailedPage from "@/components/common/DetailedPage";

const Detailed = () => {
	const [threadData, setThreadData] = useState([]);
	const router = useRouter();
	const { query } = router;
	const { slug } = query;
	// console.log("id", id);
	console.log("router.query.id", router);

	const filteredBeddings = (data) => {
		return data.filter((d, i) => query.id === d.id);
	};

	const singleCombed = filteredBeddings(threadTypes[0].data);
	const singleCarded = filteredBeddings(threadTypes[1].data);

	useEffect(() => {
		const data = slug === "combed" ? singleCombed : singleCarded;
		setThreadData(data);
	}, [slug]);

	const dataList = [...singleCombed, ...singleCarded];

	return (
		<Grid>
			<Layout isFixed>
				<DetailedPage data={threadData} dataList={dataList} />
			</Layout>
		</Grid>
	);
};

export default Detailed;
