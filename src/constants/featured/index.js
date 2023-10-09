import { deluxeImages } from "../beddings/deluxe";
import { jacquardImages as jacquardBeddingImages } from "../beddings/jacquard";
import { satinImages } from "../beddings/satin_digital";
import { deluxeSubtitle } from "../beddings/subtitle/deluxe";
import { digitalSubtitle } from "../beddings/subtitle/digital";
import { jacquardSubtitle } from "../beddings/subtitle/jacquard";
import { dobbyImages } from "../towels/dobby";
import { jacquardImages } from "../towels/jacquard";
import { dobbySubtitle } from "../towels/subtitle/dobby";
import { jacquardSubtitle as towelJacquardSubtitle } from "../towels/subtitle/jacquard";

export const featuredLinks = [
	{
		src: dobbyImages.images1[0].original,
		url: "/towels/dobby/1",
		title: `Dobby "Armul"`,
		subtitle: dobbySubtitle.armul,
	},
	{
		src: dobbyImages.images2[0].original,
		url: "/towels/dobby/2",
		title: `Dobby "Butterfly"`,
		subtitle: dobbySubtitle.butterfly,
	},
	{
		src: jacquardImages.images2[0].original,
		url: "/towels/jacquard/2",
		title: `Jacquard "Bella"`,
		subtitle: towelJacquardSubtitle.bella,
	},
	{
		src: deluxeImages.images1[0].original,
		url: "/beddings/deluxe/1",
		title: `Alisa`,
		subtitle: deluxeSubtitle.alisa,
	},
	{
		src: satinImages.images3[0].original,
		url: "/beddings/digital/4",
		title: `Kelly`,
		subtitle: digitalSubtitle.kelly,
	},
	{
		src: jacquardBeddingImages.images3[0].original,
		url: "/beddings/jacquard/3",
		title: `Tecna`,
		subtitle: jacquardSubtitle.tecna,
	},
];
