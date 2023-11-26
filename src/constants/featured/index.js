import { deluxeImages } from "../beddings/deluxe";
import { jacquardImages as jacquardBeddingImages } from "../beddings/jacquard";
import { satinImages } from "../beddings/satin_digital";
import { deluxeSubtitle } from "../beddings/subtitle/deluxe";
import { digitalSubtitle } from "../beddings/subtitle/digital";
import { jacquardSubtitle } from "../beddings/subtitle/jacquard";
import { dobbyImages } from "../towels/dobby";
import { inceptionImages } from "../towels/inception";
import { jacquardImages } from "../towels/jacquard";
import { dobbySubtitle } from "../towels/subtitle/dobby";
import { inceptionSubtitle } from "../towels/subtitle/inception";
import { jacquardSubtitle as towelJacquardSubtitle } from "../towels/subtitle/jacquard";

export const featuredLinks = [
	{
		src: inceptionImages.images1[0].original,
		url: "/towels/inception/1",
		title: "Inception Towels",
		subtitle: inceptionSubtitle.inception1,
	},
	{
		src: inceptionImages.images2[0].original,
		url: "/towels/inception/2",
		title: "Inception Towels",
		subtitle: inceptionSubtitle.inception2,
	},
	{
		src: inceptionImages.images3[0].original,
		url: "/towels/inception/3",
		title: "Inception Towels",
		subtitle: inceptionSubtitle.inception3,
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
