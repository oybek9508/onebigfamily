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
	// const [images, setImages] = useState(
	// 	dataList[parseInt(query.id) - 1]?.images?.blue
	// );
	// let imgs = Object.values(dataList[parseInt(query.id)]?.images).flat();

	let imgs = dataList;
	console.log("imgs", imgs);
	const [images, setImages] = useState(imgs);
	console.log("query.id", query);

	// const data = dataList?.filter((item) => item.id === query.id);

	console.log("dataList", dataList);
	console.log("images", images);

	// useEffect(() => {
	// 	if (itemColor === "white") {
	// 		setImages(data[0]?.images?.white);
	// 	} else if (itemColor === "blue") {
	// 		setImages(data[0]?.images?.blue);
	// 	} else if (itemColor === "purple") {
	// 		setImages(data[0]?.images?.purple);
	// 	} else if (itemColor === "dark_grey") {
	// 		setImages(data[0]?.images?.dark_grey);
	// 	} else if (itemColor === "light_grey") {
	// 		setImages(data[0]?.images?.light_grey);
	// 	}
	// }, [itemColor]);
	console.log("thumb", thumb);

	// const getSelectedImg = imgs?.filter((img) => img.id === thumb);

	// console.log("getSeletedImg", getSelectedImg);

	const ImgMagnify = () => (
		<ReactImageMagnify
			enlargedImagePosition="beside"
			{...{
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
