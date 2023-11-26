import ProductCard from "@/components/ProductCard";
import { H1 } from "@/components/Typography";
import { bathrobesData } from "@/constants/bathrobes";
import { Box, Grid } from "@mui/material";
import { useCallback } from "react";

const generateProductUrl = (title) => {
	const lowerCaseTitle = title.toLowerCase();
	// const spaceIndex = lowerCaseTitle.indexOf(" ");
	// const slug = lowerCaseTitle.substring(0, spaceIndex);
	return `/bathrobes/${lowerCaseTitle}/#${lowerCaseTitle}`;
};

const BathrobeCategory = () => {
	const memoizedBathrobesData = useCallback(bathrobesData, []);
	return (
		<Box sx={{ py: { xs: "40px", md: "80px" }, px: { xs: "40px", xl: 0 } }}>
			<Box my={2}>
				<H1 mb="4px">Bathrobes</H1>
			</Box>
			<Grid container mb={-0.5} spacing={3}>
				{memoizedBathrobesData?.map((item, ind) => {
					return (
						<Grid key={ind} item lg={4} md={6} sm={6} xs={12}>
							<ProductCard
								id={item.id}
								imgUrl={item.img}
								title={item.title}
								subtitle={item.subtitle}
								url={generateProductUrl(item.title)}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default BathrobeCategory;
