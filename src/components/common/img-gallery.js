import ImageGallery from "react-image-gallery";
import ReactImageMagnify from "react-image-magnify";
import "react-image-gallery/styles/css/image-gallery.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { featuredData } from "@/constants/featured";

const ImgGallery = ({ setHover, setItemColor, itemColor, dataList }) => {
	const router = useRouter();
	const [thumb, setThumb] = useState(1);
	const { query } = router;

	let imgs = dataList;
	console.log("imgs", imgs);
	const [images, setImages] = useState(imgs);
	console.log("query.id", query);

	console.log("dataList", dataList);
	console.log("images", images);
	console.log("thumb", thumb);

	const ImgMagnify = () => (
		<ReactImageMagnify
			enlargedImagePosition="beside"
			{...{
				imageStyle: { objectFit: "scale-down" },
				smallImage: {
					src: imgs[thumb - 1].thumbnail,
					width: 600,
					height: 500,
				},
				largeImage: {
					src: imgs[thumb - 1]?.thumbnail,
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
			items={imgs}
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
