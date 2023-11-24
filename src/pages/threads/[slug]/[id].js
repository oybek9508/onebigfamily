import DetailedPage from "@/components/common/DetailedPage";
import Layout from "@/components/layout";
import { threadsData } from "@/constants/threads";
import { Grid } from "@mui/material";
import memoizeOne from "memoize-one";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Detailed = ({ ssrRenderedTowelData }) => {
	const router = useRouter();
	const { query } = router;
	const [threadData, setThreadData] = useState([]);

	useEffect(() => {
		const handleBackButton = () => {
			const { path } = query;
			window.location.href = `/threads/${path}#${path}`;
		};
		// Add an event listener to the window's popstate event (back/forward navigation)
		window.addEventListener("popstate", handleBackButton);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("popstate", handleBackButton);
		};
	}, [router.query]);

	const getFilteredThreads = memoizeOne((data) => {
		return data.filter((d) => query.id === d.id);
	});

	const threadsTypes = {
		bamboo: ssrRenderedTowelData[0]?.bambooData,
		cotton: ssrRenderedTowelData[1]?.cottonData,
		polyester: ssrRenderedTowelData[2]?.polyesterData,
		viscose: ssrRenderedTowelData[2]?.viscoseData,
	};

	useEffect(() => {
		const selectedThreadData = threadsTypes[query.slug] || threadsTypes.cotton;
		setThreadData(getFilteredThreads(selectedThreadData));
	}, [query.slug, query.id]);

	return (
		<Grid>
			<Layout isFixed fullWidth>
				<DetailedPage data={threadData} textileType="thread" />
			</Layout>
		</Grid>
	);
};

export const getServerSideProps = async () => {
	const data = threadsData;
	return {
		props: {
			ssrRenderedTowelData: data,
		},
	};
};

export default Detailed;
