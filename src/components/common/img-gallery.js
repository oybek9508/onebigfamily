import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { featuredData } from "@/constants/featured";

import "react-image-gallery/styles/css/image-gallery.css";

const ImgGallery = ({ setHover, setItemColor, itemColor, imageData }) => {
	const router = useRouter();
	const [thumb, setThumb] = useState(1);
	const { query } = router;
	// const [images, setImages] = useState(
	// 	imageData[parseInt(query.id) - 1]?.images?.blue
	// );
	let imgs = Object.values(imageData[parseInt(query.id) - 1]?.images)[0];
	const [images, setImages] = useState([...imgs]);
	console.log("query.id", query.id);

	const data = imageData?.filter((item) => item.id === query.id);

	console.log("data", data);

	useEffect(() => {
		if (itemColor === "white") {
			setImages(data[0]?.images?.white);
		} else if (itemColor === "blue") {
			setImages(data[0]?.images?.blue);
		} else if (itemColor === "purple") {
			setImages(data[0]?.images?.purple);
		} else if (itemColor === "dark_grey") {
			setImages(data[0]?.images?.dark_grey);
		} else if (itemColor === "light_grey") {
			setImages(data[0]?.images?.light_grey);
		}
	}, [itemColor]);
	console.log("thumb", thumb);

	const getSelectedImg = images?.filter((img) => img.id === thumb);

	console.log("getSeletedImg", getSelectedImg);

	const ImgMagnify = () => (
		<ReactImageMagnify
			enlargedImagePosition="beside"
			{...{
				smallImage: {
					src: getSelectedImg[0]?.thumbnail,
					width: "500",
					height: "500",
				},
				largeImage: {
					src: getSelectedImg[0]?.thumbnail,
					width: 1800,
					height: 1800,
				},
				isHintEnabled: true,
				enlargedImagePortalId: "myPortal",
			}}
		/>
	);

	return (
		<ImageGallery
			items={images}
			useWindowKeydown={true}
			thumbnailPosition="left"
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
	);
};

export default ImgGallery;
