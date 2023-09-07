import { deluxeImages } from "../beddings/deluxe";
import { jacquardImages as jacquardBeddingImages } from "../beddings/jacquard";
import { satinImages } from "../beddings/satin_digital";
import { dobbyImages } from "../towels/dobby";
import { jacquardImages } from "../towels/jacquard";

export const featuredLinks = [
	{
		src: dobbyImages.images1[0].original,
		url: "/towels/dobby/1",
		title: `Dobby "Armul"`,
	},
	{
		src: dobbyImages.images2[0].original,
		url: "/towels/dobby/2",
		title: `Dobby "Butterfly"`,
	},
	{
		src: jacquardImages.images2[0].original,
		url: "/towels/jacquard/2",
		title: `Jacquard "Bella"`,
	},
	{
		src: deluxeImages.images1[0].original,
		url: "/beddings/deluxe/1",
		title: `Alisa`,
	},
	{
		src: satinImages.images3[0].original,
		url: "/beddings/digital/4",
		title: `Kelly`,
	},
	{
		src: jacquardBeddingImages.images3[0].original,
		url: "/beddings/jacquard/3",
		title: `Tecna`,
	},
];
