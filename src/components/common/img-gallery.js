import { useState } from "react";
import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import "react-image-gallery/styles/css/image-gallery.css";
import { Box } from "@mui/material";

const ImgGallery = ({ dataList, textileType }) => {
	const [thumb, setThumb] = useState(1);
	let imgs = dataList;

	const ImgMagnify = () => (
		<Box
			sx={{
				width: "600px",
				height: "500px",
				maxWidth: "100%",
				maxHeight: "70%",
				objectFit: "cover",
			}}
		>
			<ReactImageMagnify
				enlargedImagePosition="beside"
				{...{
					smallImage: {
						src: imgs[thumb - 1].thumbnail,
						isFluidWidth: true,
						sizes: "(min-width: 1000px) 33.5vw, (min-width: 415px) 50vw, 100vw",
					},
					largeImage: {
						src: imgs[thumb - 1]?.thumbnail,
						width: 1200,
						height: 1800,
					},
					isHintEnabled: true,
					enlargedImagePortalId: "myPortal",
					shouldUsePositiveSpaceLens: true,
					enlargedImageContainerStyle: {
						position: "absolute",
					},
					lensStyle: { width: "300px" },
					enlargedImageContainerDimensions: {
						width: "120%",
						height: textileType === "bedding" ? "80%" : "150%",
					},
				}}
			/>
		</Box>
	);

	return (
		<Box>
			<Box sx={{ display: { xs: "none", lg: "block" } }}>
				<ImageGallery
					items={imgs}
					useWindowKeydown={true}
					thumbnailPosition="left"
					showThumbnails={true}
					originalHeight={16}
					showFullscreenButton={false}
					originalWidth={16}
					showNav={false}
					showPlayButton={false}
					renderItem={() => <ImgMagnify />}
					onThumbnailClick={(e, idx) => setThumb(idx + 1)}
				/>
			</Box>
			<Box sx={{ display: { xs: "block", lg: "none" } }}>
				<ImageGallery
					items={imgs}
					showThumbnails={false}
					showFullscreenButton={false}
					showNav={true}
					showBullets
					showPlayButton={false}
				/>
			</Box>
		</Box>
	);
};

export default ImgGallery;
