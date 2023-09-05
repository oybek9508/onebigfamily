/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton } from "@mui/material";
import { Box, styled } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FlexBox from "./FlexBox";
import { H3 } from "./Typography";

const StyledCard = styled(Box)(({ theme }) => ({
	position: "relative",
	height: "100%",
	margin: "auto",
	borderRadius: 0,
	overflow: "hidden",
	backgroundColor: "#fff",
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
const ImgBox = styled(Box)(({ theme }) => ({
	height: ({ fixedHeight }) => (fixedHeight ? 400 : 250),
	maxHeight: "100% !important",
	[theme.breakpoints.up("xs")]: {
		marginBottom: "10%",
	},
	[theme.breakpoints.up("sm")]: {
		marginBottom: 10,
	},
	[theme.breakpoints.up("md")]: {
		marginBottom: 50,
	},
	[theme.breakpoints.up("lg")]: {
		marginBottom: 60,
	},
	[theme.breakpoints.up("xl")]: {
		marginBottom: 100,
	},
}));
const ContentWrapper = styled(Box)(() => ({
	padding: "1rem",
	"& .title, & .categories": {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
}));

const ProductCard = (props) => {
	const imgRef = useRef(null);
	const [imgHeight, setImgHeight] = useState(0);
	const [imageHeight, setImageHeight] = useState(0);

	const { sx, fixedHeight, url, title, imgUrl } = props;

	const updateImageHeight = () => {
		if (imgRef.current) {
			setImgHeight(imgRef.current.offsetHeight);
		}
	};

	useEffect(() => {
		// Initial image height calculation
		updateImageHeight();

		// Attach the event listener
		window.addEventListener("resize", updateImageHeight);

		// Clean up the event listener on unmount
		return () => {
			window.removeEventListener("resize", updateImageHeight);
		};
	}, []);

	useEffect(() => {
		if (imgHeight === 0) {
			setImageHeight(200);
		} else {
			setImageHeight(imgHeight);
		}
	}, []);

	return (
		<StyledCard sx={sx}>
			{!imgUrl ? (
				<Skeleton variant="rectangular" width={464} height={450} />
			) : (
				<Link href={url}>
					<ImgBox id="imgBox" fixedHeight={fixedHeight}>
						<Box className="product-card">
							<Box className="product-card-images">
								<Box sx={{ maxWidth: "100%", height: "auto" }}>
									<Image
										id="productImg"
										onLoad={updateImageHeight}
										src={imgUrl}
										alt={title}
										loading="lazy"
										width="0"
										height="0"
										style={{
											width: "100%",
											height: 450,
										}}
									/>
								</Box>
							</Box>
							{/* Other product card content */}
						</Box>
						{/* {fixedHeight ? (
							<Box
								sx={{
									height: fixedHeight && {
										xs: "400px",
										sm: "400px",
										md: "450px",
										lg: "430px",
										xl: "450px",
									},
								}}
							>
								<LazyImage
									id="productImg"
									onLoad={updateImageHeight}
									src={imgUrl}
									alt={title}
									loading="lazy"
									layout="fill"
									objectFit="cover"
								/>
							</Box>
						) : (
							<LazyImage
								id="productImg"
								onLoad={updateImageHeight}
								src={imgUrl}
								alt={title}
								width={394}
								height={450}
								loading="lazy"
								layout="intrinsic"
							/>
						)} */}

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
