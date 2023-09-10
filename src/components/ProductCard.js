/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BlurImage from "../../public/assets/blur.webp";
import FlexBox from "./FlexBox";
import { H3 } from "./Typography";

const StyledCard = styled(Box)(({ theme }) => ({
	position: "relative",
	height: "100%",
	margin: "auto",
	borderRadius: 0,
	overflow: "hidden",
	backgroundColor: "#fff",
	display: "flex",
	justifyContent: "space-between",
	flexDirection: "column",
	transition: "all 250ms ease-in-out",
	"&:hover": {
		"& .css-1i2n18j": {
			display: "flex",
		},
		"& .controlBox": {
			display: "block",
		},
	},
}));

const ImgBox = styled(Box)(({ fixedHeight }) => ({
	...(!fixedHeight && {
		maxHeight: "100% !important",
		display: "flex",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	}),
}));

const ContentWrapper = styled(Box)(() => ({
	padding: "1rem",
	display: "flex",
	justifyContent: "center",
	width: "100%",
	"& .title, & .categories": {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
}));

const ProductCard = (props) => {
	const [onLoadHeight, setOnLoadHeight] = useState(null);
	const { sx, fixedHeight, url, title, imgUrl } = props;
	return (
		<StyledCard sx={sx}>
			{!imgUrl ? (
				<Skeleton variant="rectangular" width={464} height={450} />
			) : (
				<Link
					href={url}
					style={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<ImgBox id="imgBox" fixedHeight={fixedHeight}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								height: fixedHeight
									? 500
									: // {
									  // 		xs: "500px",
									  // 		sm: "500px",
									  // 		md: "550px",
									  // 		lg: "550px",
									  // 		xl: "600px",
									  //   }
									  onLoadHeight || "auto",
								minHeight: !fixedHeight && { xs: 200 },
							}}
						>
							<Image
								id="productImg"
								src={imgUrl}
								onLoad={() => setOnLoadHeight(300)}
								onLoadingComplete={() => setOnLoadHeight(null)}
								blurDataURL={BlurImage}
								alt={title}
								loading="lazy"
								width="0"
								height="0"
								style={{
									objectFit: "contain",
									width: "100%",
									height: fixedHeight ? "100%" : "90%",
								}}
							/>
						</Box>
					</ImgBox>

					<ContentWrapper>
						<FlexBox>
							<Box flex="1 1 0" minWidth="0px">
								<H3
									mb={1}
									className="title"
									fontSize="24px"
									textAlign="center"
									fontWeight="700"
									color="text.secondary"
									title={title}
								>
									{title}
								</H3>
							</Box>
						</FlexBox>
					</ContentWrapper>
				</Link>
			)}
		</StyledCard>
	);
};

export default ProductCard;
