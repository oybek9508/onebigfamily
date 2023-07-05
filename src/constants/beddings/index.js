import { deluxeImages } from "./deluxe";
import { digitalImages } from "./digital";
import { exclusiveImages } from "./exclusive";
import { premiumImages } from "./premium";
import { satinImages } from "./satin_digital";

const type = "100% Cotton";
const size = [
	"140x200cm with 1 pillow case 70x80cm",
	"160x200cm with 2 pillow cases 70x80cm",
	"200x220cm with 2 pillow cases 70x80cm",
];

export const beddignsData = [
	{
		img: premiumImages.images1[0].original,
		title: "Premium Satin",
	},
	{
		img: deluxeImages.images1[0].original,
		title: "Deluxe Ranforce",
	},
	{
		img: satinImages.images1[0].original,
		title: "Satin Digital",
	},
	{
		img: exclusiveImages.images1[0].original,
		title: "Exclusive Satin",
	},
	{
		img: digitalImages.images1[0].original,
		title: "Digital Series",
	},
];

export const beddingTypes = [
	{
		id: "1",
		link: "premium",
		title: "Premium Satin",
		data: [
			{
				id: "1",
				url: "/premium",
				type,
				size,
				img: premiumImages.images1[0].original,
				title: "Buhara",
				images: premiumImages.images1,
			},
			{
				id: "2",
				url: "/premium",
				type,
				size,
				img: premiumImages.images2[0].original,
				title: "Florenza",
				images: premiumImages.images2,
			},
			{
				id: "3",
				url: "/premium",
				type,
				size,
				img: premiumImages.images3[0].original,
				title: "Mirabel",
				images: premiumImages.images3,
			},
			{
				id: "4",
				url: "/premium",
				type,
				size,
				img: premiumImages.images4[0].original,
				title: "Imaj",
				images: premiumImages.images4,
			},
			{
				id: "5",
				url: "/premium",
				type,
				size,
				img: premiumImages.images5[0].original,
				title: "Mona",
				images: premiumImages.images5,
			},
			{
				id: "6",
				url: "/premium",
				type,
				size,
				img: premiumImages.images6[0].original,
				title: "Stella",
				images: premiumImages.images6,
			},
		],
	},
	{
		id: "2",
		link: "deluxe",
		title: "Deluxe Ranforce",
		data: [
			{
				id: "1",
				url: "/deluxe",
				type,
				size,
				img: deluxeImages.images1[0].original,
				title: "Alisa",
				images: deluxeImages.images1,
			},
			{
				id: "2",
				url: "/deluxe",
				type,
				size,
				img: deluxeImages.images2[0].original,
				title: "Dalyan",
				images: deluxeImages.images2,
			},
			{
				id: "3",
				url: "/deluxe",
				type,
				size,
				img: deluxeImages.images3[0].original,
				title: "Gala",
				images: deluxeImages.images3,
			},
			{
				id: "4",
				url: "/deluxe",
				type,
				size,
				img: deluxeImages.images4[0].original,
				title: "Layla",
				images: deluxeImages.images4,
			},
			{
				id: "5",
				url: "/deluxe",
				type,
				size,
				img: deluxeImages.images5[0].original,
				title: "Luisa",
				images: deluxeImages.images5,
			},
			{
				id: "6",
				url: "/deluxe",
				type,
				size,
				img: deluxeImages.images6[0].original,
				title: "Zena",
				images: deluxeImages.images6,
			},
		],
	},
	{
		id: "3",
		link: "satin",
		title: "Satin Digital",
		data: [
			{
				id: "1",
				url: "/satin",
				type,
				size,
				img: satinImages.images1[0].original,
				title: "Alisa",
				images: satinImages.images1,
			},
			{
				id: "2",
				url: "/satin",
				type,
				size,
				img: satinImages.images2[0].original,
				title: "Dalyan",
				images: satinImages.images2,
			},
			{
				id: "3",
				url: "/satin",
				type,
				size,
				img: satinImages.images3[0].original,
				title: "Gala",
				images: satinImages.images3,
			},
			{
				id: "4",
				url: "/satin",
				type,
				size,
				img: satinImages.images4[0].original,
				title: "Layla",
				images: satinImages.images4,
			},
			{
				id: "5",
				url: "/satin",
				type,
				size,
				img: satinImages.images5[0].original,
				title: "Luisa",
				images: satinImages.images5,
			},
			{
				id: "6",
				url: "/satin",
				type,
				size,
				img: satinImages.images6[0].original,
				title: "Zena",
				images: satinImages.images6,
			},
		],
	},
	{
		id: "4",
		link: "exclusive",
		title: "Exclusive Digital",
		data: [
			{
				id: "1",
				url: "/exclusive",
				type,
				size,
				img: exclusiveImages.images1[0].original,
				title: "Alisa",
				images: exclusiveImages.images1,
			},
			{
				id: "2",
				url: "/exclusive",
				type,
				size,
				img: exclusiveImages.images2[0].original,
				title: "Dalyan",
				images: exclusiveImages.images2,
			},
			{
				id: "3",
				url: "/exclusive",
				type,
				size,
				img: exclusiveImages.images3[0].original,
				title: "Gala",
				images: exclusiveImages.images3,
			},
			{
				id: "4",
				url: "/exclusive",
				type,
				size,
				img: exclusiveImages.images4[0].original,
				title: "Layla",
				images: exclusiveImages.images4,
			},
			{
				id: "5",
				url: "/exclusive",
				type,
				size,
				img: exclusiveImages.images5[0].original,
				title: "Luisa",
				images: exclusiveImages.images5,
			},
			{
				id: "6",
				url: "/exclusive",
				type,
				size,
				img: exclusiveImages.images6[0].original,
				title: "Zena",
				images: exclusiveImages.images6,
			},
		],
	},
	{
		id: "5",
		link: "digital",
		title: "Digital Series",
		data: [
			{
				id: "1",
				url: "/digital",
				type,
				size,
				img: digitalImages.images1[0].original,
				title: "Alisa",
				images: digitalImages.images1,
			},
			{
				id: "2",
				url: "/digital",
				type,
				size,
				img: digitalImages.images2[0].original,
				title: "Dalyan",
				images: digitalImages.images2,
			},
			{
				id: "3",
				url: "/digital",
				type,
				size,
				img: digitalImages.images3[0].original,
				title: "Gala",
				images: digitalImages.images3,
			},
			{
				id: "4",
				url: "/digital",
				type,
				size,
				img: digitalImages.images4[0].original,
				title: "Layla",
				images: digitalImages.images4,
			},
			{
				id: "5",
				url: "/digital",
				type,
				size,
				img: digitalImages.images5[0].original,
				title: "Luisa",
				images: digitalImages.images5,
			},
			{
				id: "6",
				url: "/digital",
				type,
				size,
				img: digitalImages.images6[0].original,
				title: "Zena",
				images: digitalImages.images6,
			},
		],
	},
];
