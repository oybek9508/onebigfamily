import { Box, Grid } from "@mui/material";
import ProductCard from "../ProductCard";
import { H1 } from "../Typography";

const ThreadsProducts = ({ title, data, path }) => {
	return (
		<Box id={path} sx={{ py: "20px" }}>
			<Box my={2}>
				<H1 mb="4px">{title}</H1>
			</Box>
			<Grid container mb={-0.5} spacing={3}>
				{data?.map((item, idx) => (
					<Grid key={idx} item lg={4} md={6} sm={6} xs={12}>
						<ProductCard
							id={item.id}
							imgUrl={item.img}
							title={item.title}
							subtitle={item.subtitle}
							url={`/threads/${path}/${idx + 1}?path=${path}`}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ThreadsProducts;
