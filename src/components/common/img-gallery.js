import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import "react-image-gallery/styles/css/image-gallery.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";

const ImgGallery = ({ setHover, dataList }) => {
	const router = useRouter();
	const [thumb, setThumb] = useState(1);
	const { query } = router;

	let imgs = dataList;
	const [images, setImages] = useState(imgs);

	const ImgMagnify = () => (
		<Box
			sx={{
				width: "600px",
				height: "500px",
				maxWidth: "100%",
				maxHeight: "100%",
			}}
		>
			<ReactImageMagnify
				enlargedImagePosition="beside"
				{...{
					smallImage: {
						src: imgs[thumb - 1].thumbnail,
						isFluidWidth: true,
					},
					largeImage: {
						src: imgs[thumb - 1]?.thumbnail,
						width: 1200,
						height: 1800,
					},
					isHintEnabled: true,
					enlargedImagePortalId: "myPortal",
					shouldUsePositiveSpaceLens: true,
					// lensStyle: { width: "300px", height: "300px" },
					enlargedImageContainerStyle: {
						border: "2px solid grey",
						position: "absolute",
					},
					enlargedImageContainerDimensions: {
						width: "120%",
						height: "150%",
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
					onMouseOver={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					renderItem={() => <ImgMagnify />}
					onThumbnailClick={(e, idx) => setThumb(idx + 1)}
				/>
			</Box>
			<Box sx={{ display: { xs: "block", lg: "none" } }}>
				<ImageGallery
					items={imgs}
					// useWindowKeydown={true}
					// thumbnailPosition="bottom"
					showThumbnails={false}
					// originalHeight={16}
					showFullscreenButton={false}
					// originalWidth={16}
					showNav={true}
					showBullets
					showPlayButton={false}
					// onMouseOver={() => setHover(true)}
					// onMouseLeave={() => setHover(false)}
					// slideOnThumbnailOver={true}
					// renderItem={() => <ImgMagnify />}
					// onThumbnailClick={(e, idx) => setThumb(idx + 1)}
				/>
			</Box>
		</Box>
	);
};

export default ImgGallery;
