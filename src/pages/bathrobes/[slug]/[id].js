/* eslint-disable react-hooks/exhaustive-deps */
import DetailedPage from "@/components/common/DetailedPage";
import Layout from "@/components/layout";
import { bathrobesData } from "@/constants/bathrobes";
import { Grid } from "@mui/material";
import memoizeOne from "memoize-one";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Detailed = ({ ssrRenderedBathrobeData }) => {
	const router = useRouter();
	const { query } = router;
	const [bathrobeData, setBathrobeData] = useState([]);

	useEffect(() => {
		const handleBackButton = () => {
			const { path } = query;
			window.location.href = `/bathrobes/${path}#${path}`;
		};
		// Add an event listener to the window's popstate event (back/forward navigation)
		window.addEventListener("popstate", handleBackButton);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("popstate", handleBackButton);
		};
	}, [router.query]);

	const getFilteredBathrobes = memoizeOne((data) => {
		return data.filter((d) => query.id === d.id);
	});

	const bathrobesTypes = {
		bathrobe: ssrRenderedBathrobeData[0]?.bathrobeData,
	};

	useEffect(() => {
		const selectedBathrobeData = bathrobesTypes[query.slug];
		setBathrobeData(getFilteredBathrobes(selectedBathrobeData));
	}, [query.slug, query.id]);

	return (
		<Grid>
			<Layout isFixed fullWidth>
				<DetailedPage data={bathrobeData} textileType="bathrobe" />
			</Layout>
		</Grid>
	);
};

export const getServerSideProps = async () => {
	const data = bathrobesData;
	return {
		props: {
			ssrRenderedBathrobeData: data,
		},
	};
};

export default Detailed;
