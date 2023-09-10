import DetailedPage from "@/components/common/DetailedPage";
import Layout from "@/components/layout/index.js";
import { terryTowelData } from "@/constants/towels";
import { Grid } from "@mui/material";
import memoizeOne from "memoize-one";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detailed = ({ ssrRenderedTowelData }) => {
	const router = useRouter();
	const { query } = router;
	const [towelData, setTowelData] = useState([]);

	useEffect(() => {
		const handleBackButton = () => {
			const { path } = query;
			// Define your custom back button behavior here
			// For example, navigate to a specific route when the back button is pressed
			window.location.href = `/towels/${path}#${path}`;
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

	const getFilteredTowels = memoizeOne((data) => {
		return data.filter((d) => query.id === d.id);
	});

	const towelTypes = {
		dobby: ssrRenderedTowelData[0]?.dobbyData,
		velour: ssrRenderedTowelData[3]?.velourData,
		jacquard: ssrRenderedTowelData[1]?.data,
		waffle: ssrRenderedTowelData[2]?.waffleData,
	};

	useEffect(() => {
		const selectedTowelData = towelTypes[query.slug] || towelTypes.velour;
		setTowelData(getFilteredTowels(selectedTowelData));
	}, [query.slug, query.id]);

	return (
		<Grid>
			<Layout isFixed fullWidth>
				<DetailedPage data={towelData} textileType="towel" />
			</Layout>
		</Grid>
	);
};

export const getServerSideProps = async () => {
	const data = terryTowelData;
	return {
		props: {
			ssrRenderedTowelData: data,
		},
	};
};

export default Detailed;
