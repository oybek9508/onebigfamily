import ProductCard from "@/components/ProductCard";
import { H1 } from "@/components/Typography";
import { beddignsData } from "@/constants/beddings";
import { Box, Grid } from "@mui/material";
import { useCallback } from "react";

const generateProductUrl = (title) => {
	const lowerCaseTitle = title.toLowerCase();
	const spaceIndex = lowerCaseTitle.indexOf(" ");
	const slug = lowerCaseTitle.substring(0, spaceIndex);
	return `/beddings/${slug}/#${slug}`;
};

const BeddingCategory = () => {
	const memoizedBeddingsData = useCallback(beddignsData, []);
	return (
		<Box sx={{ py: { xs: "40px", md: "80px" }, px: { xs: "40px", xl: 0 } }}>
			<Box my={2}>
				<H1 mb="4px">Beddings</H1>
			</Box>
			<Grid container mb={-0.5} spacing={3}>
				{memoizedBeddingsData.map((item, ind) => (
					<Grid key={ind} item lg={4} md={6} sm={6} xs={12}>
						<ProductCard
							fixedHeight
							id={item.id}
							imgUrl={item.img}
							title={item.title}
							url={generateProductUrl(item.title)}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default BeddingCategory;
