import ProductCard from "@/components/ProductCard";
import { H1 } from "@/components/Typography";
import { threadsData } from "@/constants/threads";
import { Box, Grid } from "@mui/material";
import { useCallback } from "react";

const generateProductUrl = (title) => {
	const lowerCaseTitle = title.toLowerCase();
	const spaceIndex = lowerCaseTitle.indexOf(" ");
	const slug = lowerCaseTitle.substring(0, spaceIndex);
	return `/threads/${slug}/#${slug}`;
};

const ThreadCategory = () => {
	const memoizedThreadsData = useCallback(threadsData, []);
	return (
		<Box sx={{ py: { xs: "40px", md: "80px" }, px: { xs: "40px", xl: 0 } }}>
			<Box my={2}>
				<H1 mb="4px">Towels</H1>
			</Box>
			<Grid container mb={-0.5} spacing={3}>
				{memoizedThreadsData?.map((item, ind) => {
					return (
						<Grid key={ind} item lg={4} md={6} sm={6} xs={12}>
							<ProductCard
								id={item.id}
								imgUrl={item.img}
								title={item.title}
								subtitle={item?.subtitle}
								url={generateProductUrl(item.title)}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default ThreadCategory;
