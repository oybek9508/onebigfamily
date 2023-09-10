/* eslint-disable react/jsx-no-duplicate-props */
import DetailedPage from "@/components/common/DetailedPage";
import Layout from "@/components/layout/index.js";
import { beddingTypes } from "@/constants/beddings";
import { Grid } from "@mui/material";
import memoizeOne from "memoize-one";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detailed = ({ ssrRenderedBeddingData }) => {
	const [beddingData, setBeddingData] = useState([]);
	const router = useRouter();
	const { query } = router;

	useEffect(() => {
		const handleBackButton = () => {
			const { link } = router.query;
			// Define your custom back button behavior here
			// For example, navigate to a specific route when the back button is pressed
			window.location.href = `/beddings/${link}#${link}`;
		};

		// Add an event listener to the window's popstate event (back/forward navigation)
		window.addEventListener("popstate", handleBackButton);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("popstate", handleBackButton);
		};
	}, [router.query]);

	const filteredBeddings = memoizeOne((data) => {
		return data.filter((d) => query.id === d.id);
	});

	const beddingTypeMap = {
		premium: ssrRenderedBeddingData[0]?.data,
		deluxe: ssrRenderedBeddingData[1]?.data,
		"3d": ssrRenderedBeddingData[4]?.data,
		exclusive: ssrRenderedBeddingData[3]?.data,
		digital: ssrRenderedBeddingData[2]?.data,
		jacquard: ssrRenderedBeddingData[5]?.data,
	};

	useEffect(() => {
		const selectedBeddingData = beddingTypeMap[query.slug] || beddingTypeMap.deluxe;
		setBeddingData(filteredBeddings(selectedBeddingData));
	}, [query.slug, query.id]);

	return (
		<Grid>
			<Layout isFixed fullWidth>
				<DetailedPage data={beddingData} textileType="bedding" />
			</Layout>
		</Grid>
	);
};

export const getServerSideProps = async () => {
	const data = beddingTypes;
	return {
		props: { ssrRenderedBeddingData: data },
	};
};

export default Detailed;
