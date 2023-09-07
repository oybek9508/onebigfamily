/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
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
const ImgBox = styled(Box)(() => ({
	height: ({ fixedHeight }) => (fixedHeight ? 400 : 250),
	maxHeight: "100% !important",
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
						justifyContent: "space-between",
					}}
				>
					<ImgBox id="imgBox" fixedHeight={fixedHeight}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								height: fixedHeight && {
									xs: "400px",
									sm: "400px",
									md: "450px",
									lg: "450px",
									xl: "450px",
								},
								minHeight: !fixedHeight && { xs: 200, sm: 250, md: 300 },
							}}
						>
							<Image
								id="productImg"
								src={imgUrl}
								alt={title}
								loading="lazy"
								width="0"
								height="0"
								style={{
									objectFit: !fixedHeight && "contain",
									width: "100%",
									height: fixedHeight ? "100%" : "90%",
								}}
							/>
						</Box>

						{/* <CardMedia
							onLoad={updateImageHeight}
							ref={imgRef}
							component="img"
							src={imgUrl}
							alt={title}
							loading="lazy"
							sx={{
								height: fixedHeight && {
									xs: "400px",
									sm: "400px",
									md: "450px",
									lg: "430px",
									xl: "450px",
								},
							}}
						/> */}
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
