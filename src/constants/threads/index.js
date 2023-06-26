import { images } from "../towelImages";
import { combedImages } from "./combed";

export const itemData = [
	{
		img: combedImages.images1[0].original,
		title: "Combed ",
	},
	{
		img: combedImages.images1[0].original,
		title: "Carded Ring",
	},
];

export const threadTypes = [
	{
		id: "combed",
		title: "Coloured",
		data: [
			{
				id: "1",
				url: "/combed",
				img: combedImages.images1[0].original,
				title: "combed1",
				images: combedImages.images1,
			},
		],
	},
	{
		id: "carded",
		title: "White",
		data: [
			{
				id: "1",
				url: "/carded",
				img: combedImages.images1[0].original,
				title: "carded1",
				images: combedImages.images1,
			},
		],
	},
];
