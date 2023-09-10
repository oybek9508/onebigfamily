import { deluxeImages } from "./deluxe";
import { digitalImages } from "./digital";
import { exclusiveImages } from "./exclusive";
import { jacquardImages } from "./jacquard";
import { premiumImages } from "./premium";
import { satinImages } from "./satin_digital";

const type = "100% Cotton";
const jacquardType = "Mixture of Cotton, Silk and Linen";
const size = [
	"140x200cm with 1 pillow case 70x80cm",
	"160x200cm with 2 pillow cases 70x80cm",
	"200x220cm with 2 pillow cases 70x80cm",
];

const white = { name: "White", color: "#fcfcfc" };
const powder = { name: "Powder", color: "#ffd1e3" };
const lilac = { name: "Lilac", color: "#b474b4" };
const smoke = { name: "Smoke", color: "#7f7f81" };
const cream = { name: "Cream", color: "#f0ece2" };
const grey = { name: "Grey", color: "#37474f" };
const soil = { name: "Soil", color: "#bdbdbd" };
const red = { name: "Red", color: "#800020" };
const blue = { name: "Blue", color: "#005689" };
const champagne = { name: "Champagne", color: "#f9f1ec" };
const cappuccino = { name: "Cappuccino", color: "#BDB3A9" };
const ercu = { name: "Ercu", color: "#ccc1a7" };
const mink = { name: "Mink", color: "#968379" };
const purple = { name: "Purple", color: "#e1bee7" };
const black = { name: "Black", color: "#0d0d0d" };
const caramel = { name: "Caramel", color: "#ffd9a4" };
const green = { name: "Green", color: "#446465" };
const denim = { name: "Denim", color: "#355283" };
const beige = { name: "Beige", color: "#f5f5dc" };
const lavender = { name: "Lavender", color: "#fcbedb" };
const brown = { name: "Brown", color: "#635049" };
const brownie = { name: "Brownie", color: "#8a7c76" };
const marin = { name: "Marin", color: "#085896" };
const coral = { name: "Coral", color: "#f08080" };
const rose = { name: "Rose", color: "#74344c" };
const navy = { name: "Navy", color: "#0b2842" };
const anthacide = { name: "Anthacide", color: "#2b2c2c" };
const almond = { name: "Almond", color: "#caad91" };
const sand = { name: "Sand", color: "#d7ccc8" };

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
		title: "Digital Satin",
	},
	{
		img: exclusiveImages.images1[0].original,
		title: "Exclusive Satin",
	},
	{
		img: digitalImages.images1[0].original,
		title: "3D Series",
	},
	{
		img: jacquardImages.images1[0].original,
		title: "Jacquard Satin",
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
				color: [white, powder],
				threadCount: "120/cm²",
				img: premiumImages.images1[0].original,
				title: "Buhara",
				images: premiumImages.images1,
			},
			{
				id: "2",
				url: "/premium",
				type,
				size,
				color: [white, lilac, smoke],
				threadCount: "120/cm²",
				img: premiumImages.images2[0].original,
				title: "Florenza",
				images: premiumImages.images2,
			},
			{
				id: "3",
				url: "/premium",
				type,
				size,
				color: [cream, grey, soil],
				threadCount: "120/cm²",
				img: premiumImages.images3[0].original,
				title: "Mirabel",
				images: premiumImages.images3,
			},
			{
				id: "4",
				url: "/premium",
				type,
				size,
				color: [red, grey, blue],
				threadCount: "120/cm²",
				img: premiumImages.images4[0].original,
				title: "Imaj",
				images: premiumImages.images4,
			},
			{
				id: "5",
				url: "/premium",
				type,
				size,
				color: [grey, lilac, soil],
				threadCount: "120/cm²",
				img: premiumImages.images5[0].original,
				title: "Mona",
				images: premiumImages.images5,
			},
			{
				id: "6",
				url: "/premium",
				type,
				size,
				color: [champagne, cappuccino],
				threadCount: "120/cm²",
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
				color: [ercu, grey, lilac, powder, mink],
				threadCount: "60/cm²",
				img: deluxeImages.images1[0].original,
				title: "Alisa",
				images: deluxeImages.images1,
			},
			{
				id: "2",
				url: "/deluxe",
				type,
				size,
				color: [ercu, purple, powder],
				threadCount: "60/cm²",
				img: deluxeImages.images2[0].original,
				title: "Dalyan",
				images: deluxeImages.images2,
			},
			{
				id: "3",
				url: "/deluxe",
				type,
				size,
				color: [black, red, white, grey, cream, lilac, powder, mink],
				threadCount: "60/cm²",
				img: deluxeImages.images3[0].original,
				title: "Gala",
				images: deluxeImages.images3,
			},
			{
				id: "4",
				url: "/deluxe",
				type,
				size,
				color: [white, powder, mink],
				threadCount: "60/cm²",
				img: deluxeImages.images4[2].original,
				title: "Layla",
				images: deluxeImages.images4,
			},
			{
				id: "5",
				url: "/deluxe",
				type,
				size,
				color: [ercu, lilac],
				threadCount: "60/cm²",
				img: deluxeImages.images5[0].original,
				title: "Luisa",
				images: deluxeImages.images5,
			},
			{
				id: "6",
				url: "/deluxe",
				type,
				size,
				color: [grey, lilac, blue, green],
				threadCount: "60/cm²",
				img: deluxeImages.images6[0].original,
				title: "Zena",
				images: deluxeImages.images6,
			},
		],
	},
	{
		id: "3",
		link: "digital",
		title: "Digital Satin",
		data: [
			{
				id: "1",
				url: "/digital",
				type,
				size,
				color: [brownie, marin, purple],
				threadCount: "100/cm²",
				img: satinImages.images1[0].original,
				title: "Bonitta",
				images: satinImages.images1,
			},
			{
				id: "2",
				url: "/digital",
				type,
				size,

				threadCount: "100/cm²",
				img: satinImages.images2[0].original,
				title: "Ramira",
				images: satinImages.images2,
			},
			{
				id: "3",
				url: "/digital",
				type,
				size,
				color: [caramel, green],
				threadCount: "100/cm²",
				img: satinImages.images3[0].original,
				title: "Hannah",
				images: satinImages.images3,
			},
			{
				id: "4",
				url: "/digital",
				type,
				size,
				color: [caramel, purple],
				threadCount: "100/cm²",
				img: satinImages.images4[0].original,
				title: "Kelly",
				images: satinImages.images4,
			},
			{
				id: "5",
				url: "/digital",
				type,
				size,
				color: [brownie, denim],
				threadCount: "100/cm²",
				img: satinImages.images5[0].original,
				title: "Marcela",
				images: satinImages.images5,
			},
			{
				id: "6",
				url: "/digital",
				type,
				size,
				color: [brownie, marin, denim],
				threadCount: "100/cm²",
				img: satinImages.images6[0].original,
				title: "Yasenya",
				images: satinImages.images6,
			},
		],
	},
	{
		id: "4",
		link: "exclusive",
		title: "Exclusive Satin",
		data: [
			{
				id: "1",
				url: "/exclusive",
				type,
				size,
				color: [brown, black, denim, caramel],
				img: exclusiveImages.images1[0].original,
				title: "Fantacy",
				images: exclusiveImages.images1,
			},
			{
				id: "2",
				url: "/exclusive",
				type,
				size,
				color: [almond, white, sand, black, brown],
				img: exclusiveImages.images2[0].original,
				title: "Novel Line",
				images: exclusiveImages.images2,
			},
			{
				id: "3",
				url: "/exclusive",
				type,
				size,
				color: [white, grey, cream, red],
				img: exclusiveImages.images3[0].original,
				title: "Stripe Style",
				images: exclusiveImages.images3,
			},
			{
				id: "4",
				url: "/exclusive",
				type,
				size,
				color: [lavender, coral, rose],
				img: exclusiveImages.images4[0].original,
				title: "Moda Life",
				images: exclusiveImages.images4,
			},
			{
				id: "5",
				url: "/exclusive",
				type,
				size,

				img: exclusiveImages.images5[0].original,
				title: "Santa",
				images: exclusiveImages.images5,
			},
			{
				id: "6",
				url: "/exclusive",
				type,
				size,
				color: [ercu, champagne],
				img: exclusiveImages.images6[0].original,
				title: "Catra",
				images: exclusiveImages.images6,
			},
		],
	},
	{
		id: "5",
		link: "3d",
		title: "3D Series",
		data: [
			{
				id: "1",
				url: "/3d",
				type,
				size,
				img: digitalImages.images1[0].original,
				title: "Andrea",
				images: digitalImages.images1,
			},
			{
				id: "2",
				url: "/3d",
				type,
				size,
				img: digitalImages.images2[0].original,
				title: "Amara",
				images: digitalImages.images2,
			},
			{
				id: "3",
				url: "/3d",
				type,
				size,
				img: digitalImages.images3[0].original,
				title: "Moon",
				images: digitalImages.images3,
			},
			{
				id: "4",
				url: "/3d",
				type,
				size,
				img: digitalImages.images4[0].original,
				title: "Ocean",
				images: digitalImages.images4,
			},
			{
				id: "5",
				url: "/3d",
				type,
				size,
				img: digitalImages.images5[0].original,
				title: "Dania",
				images: digitalImages.images5,
			},
			{
				id: "6",
				url: "/3d",
				type,
				size,
				img: digitalImages.images6[0].original,
				title: "Swan",
				images: digitalImages.images6,
			},
		],
	},
	{
		id: "5",
		link: "jacquard",
		title: "Jacquard Satin",
		data: [
			{
				id: "1",
				url: "/jacquard",
				type: jacquardType,
				size,
				color: [denim, beige, lavender, brownie],
				img: jacquardImages.images1[0].original,
				title: "Dracell",
				images: jacquardImages.images1,
			},
			{
				id: "2",
				url: "/jacquard",
				type: jacquardType,
				size,
				color: [red, grey, green],
				img: jacquardImages.images2[0].original,
				title: "Clover",
				images: jacquardImages.images2,
			},
			{
				id: "3",
				url: "/jacquard",
				type: jacquardType,
				size,
				color: [navy, mink, anthacide],
				img: jacquardImages.images3[0].original,
				title: "Tecna",
				images: jacquardImages.images3,
			},
			{
				id: "4",
				url: "/jacquard",
				type: jacquardType,
				size,
				color: [white, powder, champagne, lavender],
				img: jacquardImages.images4[0].original,
				title: "Herra",
				images: jacquardImages.images4,
			},
			{
				id: "5",
				url: "/jacquard",
				type: jacquardType,
				size,
				color: [lilac, white, smoke],
				img: jacquardImages.images5[1].original,
				title: "Sare",
				images: jacquardImages.images5,
			},
			{
				id: "6",
				url: "/jacquard",
				type: jacquardType,
				size,
				color: [soil, grey, cream],
				img: jacquardImages.images6[0].original,
				title: "Lamone",
				images: jacquardImages.images6,
			},
		],
	},
];
