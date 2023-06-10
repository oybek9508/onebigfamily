import Layout from "@/components/layout.js";
import {
	Box,
	Grid,
	Typography,
	ImageList,
	ImageListItem,
	CardMedia,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { beddingTypes } from "@/constants/beddings";

console.log("beddingTypes", beddingTypes);

// baddingTypes =  [{...}, {...}]
// 0: {
//   id
// :
// "bonitta"
// title
// :
// "Bonitta",
// data: [
//   id: '1',
//   url: 'dasdf',
//   img: 'asdfas',
//   images: asdfas
// ]
// }

const Slug = () => {
	return (
		<Grid>
			<Layout>
				<Box sx={{ px: "5rem", py: "4rem" }}>
					{beddingTypes.map((type) => (
						<Box key="type" id={type.id} sx={{ py: "4rem" }}>
							<Typography
								sx={{ fontSize: "48px", fontFamily: "Rufina", fontWeight: 700 }}
							>
								{type.title}
							</Typography>
							<ImageList
								sx={{
									width: "100%",
									height: "100%",
									mt: "40px",
									mb: "40px",
								}}
								gap={40}
								cols={3}
							>
								{type?.data?.map((item, idx) => {
									console.log("type.data", type.data);
									return (
										<Link
											href={`/beddings${item.url}/${idx + 1}`}
											key={item.img}
										>
											<ImageListItem rows={1} cols={1}>
												<CardMedia
													component="img"
													sx={{
														height: { lg: "350px" },
														width: { lg: "350px" },
													}}
													src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
													srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
													alt={item.title}
													loading="lazy"
												/>

												<Typography
													sx={{ fontSize: "24px", fontFamily: "Rufina", mt: 2 }}
												>
													{item.title}
												</Typography>
											</ImageListItem>
										</Link>
									);
								})}
							</ImageList>
						</Box>
					))}
				</Box>
			</Layout>
		</Grid>
	);
};

export default Slug;
