/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useTheme } from "@mui/system";
import { Box, styled } from "@mui/system";
// import Add from "@mui/icons-material/Add";
import { Button, CardMedia, Chip } from "@mui/material";
// import Remove from "@mui/icons-material/Remove";
// import BazarRating from "components/BazarRating";
// import { useAppContext } from "contexts/app/AppContext";
import React, { useCallback, Fragment } from "react";
import { H3, Span } from "./Typography";
import FlexBox from "./FlexBox";
import LazyImage from "./LazyImage";

const StyledCard = styled(Box)(({ theme }) => ({
	position: "relative",
	height: "100%",
	margin: "auto",
	borderRadius: 0,
	overflow: "hidden",
	backgroundColor: "#fff",
	transition: "all 250ms ease-in-out",
	"&:hover": {
		// boxShadow: theme.shadows[2],
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
const StyledChip = styled(Chip)(({ theme }) => ({
	position: "absolute",
	fontSize: "10px",
	fontWeight: 600,
	paddingLeft: 3,
	paddingRight: 3,
	borderRadius: 0,
	color: "#fff",
	// background: theme.palette.primary.main,
	top: "20px",
	left: "0px",
	zIndex: 11,
}));

const StyledButton = styled(Button)(({ theme }) => ({
	padding: "4px",
	borderRadius: 0,
	transition: "all 0.3s",
	// color: theme.palette.primary.main,
	"&:hover": {
		color: "#fff",
		// background: theme.palette.primary.main,
		// border: `1px solid ${theme.palette.primary.main}`,
	},
}));

const ProductCard = (props) => {
	const {
		sx,
		fixedHeight,
		off,
		url,
		id,
		title,
		price,
		imgUrl,
		rating,
		hideRating,
		productColors,
	} = props;
	return (
		<StyledCard sx={sx}>
			<Link href={url}>
				<ImgBox id="imgBox" fixedHeight={fixedHeight}>
					{/* <LazyImage
						id="productImg"
						src={imgUrl}
						width={100}
						height={100}
						// fill={true}
						layout="responsive"
						objectFit="contain"
					/> */}
					<CardMedia
						component="img"
						// ref={imgRef}
						src={imgUrl}
						// srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
					/>
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
						{/* <Button>Visit</Button> */}
					</FlexBox>
				</ContentWrapper>
			</Link>
		</StyledCard>
	);
};

export default ProductCard;
