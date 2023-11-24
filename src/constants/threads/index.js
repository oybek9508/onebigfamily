import { bambooImages } from "./bamboo";
import { cottonImages } from "./cotton";
import { polyesterImages } from "./polyester";
import { viscoseImages } from "./viscose";

// const type = "100% Cotton";
// const size = ["33x33cm", "50x90cm", "70x140cm", "100x180cm"];

export const threadsData = [
	{
		img: bambooImages.images1[0].original,
		title: "Bamboo Threads",
		bambooData: [
			{
				id: "1",
				img: bambooImages.images1[0].original,
				title: "Bamboo/Cotton",
				images: bambooImages.images1,
			},
		],
	},
	{
		img: cottonImages.images1[0].original,
		title: "Cotton Threads",
		cottonData: [
			{
				id: "1",
				img: cottonImages.images1[0].original,
				title: "COTTON 100%",
				images: cottonImages.images1,
			},
		],
	},
	{
		img: polyesterImages.images1[0].original,
		title: "Polyester Threads",
		polyesterData: [
			{
				id: "1",
				img: polyesterImages.images1[0].original,
				title: "POLYESTER 100%",
				images: polyesterImages.images1,
			},
		],
	},
	{
		img: viscoseImages.images1[0].original,
		title: "Viscose Threads",
		viscoseData: [
			{
				id: "1",
				img: viscoseImages.images1[0].original,
				title: "VISCOSE RAYON FILAMENT",
				images: viscoseImages.images1,
			},
		],
	},
];
