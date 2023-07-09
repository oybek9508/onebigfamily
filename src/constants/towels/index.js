import { dobbyImages } from "./dobby";
import { jacquardImages } from "./jacquard";
import { pestemalImages } from "./pestemal";
import { velourImages } from "./velour";
import { waffleImages } from "./waffle";

const dobbySize = ["33x33cm", "50x90cm", "70x140cm", "100x180cm"];
const pestemalSize = ["70x150cm", "100x150cm", "150x200cm", "200x220cm"];
const waffleSize = ["33x50cm", "40x70cm", "50x90cm", "70x140cm", "100x150cm"];
const type = "100% Cotton";
const color = [
	{ name: "White", color: "#fcfcfc" },
	{ name: "Blue", color: "#005689" },
	{ name: "Brown", color: "#854836" },
	{ name: "Grey", color: "#8f8787" },
	{ name: "Green", color: "#4c9173" },
	{ name: "Purple", color: "#8971d0" },
	{ name: "Pink", color: " #ffc1c8" },
];

export const terryTowelData = [
	{
		img: dobbyImages.images1[0].original,
		title: "Dobby Towels",
		dobbyData: [
			{
				id: "1",
				img: dobbyImages.images1[0].original,
				title: "Vesta",
				size: dobbySize,
				type,
				color,
				images: dobbyImages.images1,
			},
			{
				id: "2",
				img: dobbyImages.images2[0].original,
				title: "Ellegia",
				size: dobbySize,
				type,
				color,
				images: dobbyImages.images2,
			},
			{
				id: "3",
				img: dobbyImages.images3[0].original,
				title: "Ellegia",
				size: dobbySize,
				type,
				color,
				images: dobbyImages.images3,
			},
			{
				id: "5",
				img: dobbyImages.images5[0].original,
				title: "Crown",
				size: dobbySize,
				type,
				color,
				images: dobbyImages.images5,
			},
			{
				id: "6",
				img: dobbyImages.images6[0].original,
				title: "Riddles",
				size: dobbySize,
				type,
				color,
				images: dobbyImages.images6,
			},
			{
				id: "7",
				img: dobbyImages.images7[0].original,
				title: "Oxford",
				size: dobbySize,
				type,
				color,
				images: dobbyImages.images7,
			},
		],
	},
	{
		img: "/assets/images/towels/jacquard/images1/img1.JPG",
		title: "Jacquard towels",
		data: [
			{
				id: "1",
				img: "/assets/images/towels/jacquard/images1/img1.JPG",
				title: "Pandorra",
				size: dobbySize,
				type,
				color,
				images: jacquardImages.images1,
			},
			{
				id: "2",
				img: "/assets/images/towels/jacquard/images2/img1.JPG",
				title: "Spring",
				size: dobbySize,
				type,
				color,
				images: jacquardImages.images2,
			},
			{
				id: "3",
				img: "/assets/images/towels/jacquard/images3/img1.JPG",
				title: "Muse",
				size: dobbySize,
				type,
				color,
				images: jacquardImages.images3,
			},
			{
				id: "4",
				img: "/assets/images/towels/jacquard/images4/img1.JPG",
				title: "Dresden",
				size: dobbySize,
				type,
				color,
				images: jacquardImages.images4,
			},
			{
				id: "5",
				img: "/assets/images/towels/jacquard/images5/img1.JPG",
				title: "Dafna",
				size: dobbySize,
				type,
				color,
				images: jacquardImages.images5,
			},
			{
				id: "6",
				img: "/assets/images/towels/jacquard/images6/img1.JPG",
				title: "Golden Autumn",
				size: dobbySize,
				type,
				color,
				images: jacquardImages.images6,
			},
		],
	},
	{
		img: "/assets/images/towels/pestemal/images1/img1.JPG",
		title: "Pestemal ",
		pestemalData: [
			{
				id: "1",
				img: "/assets/images/towels/pestemal/images1/img1.JPG",
				title: `Design № 1`,
				size: pestemalSize,
				type,
				color,
				images: pestemalImages.images1,
			},
			{
				id: "2",
				img: "/assets/images/towels/pestemal/images2/img1.JPG",
				title: "Design № 2",
				size: pestemalSize,
				type,
				color,
				images: pestemalImages.images2,
			},
			{
				id: "3",
				img: "/assets/images/towels/pestemal/images3/img1.JPG",
				title: "Design № 3",
				size: pestemalSize,
				type,
				color,
				images: pestemalImages.images3,
			},
			{
				id: "4",
				img: "/assets/images/towels/pestemal/images4/img1.JPG",
				title: "Design № 3",
				size: pestemalSize,
				type,
				color,
				images: pestemalImages.images4,
			},
			{
				id: "5",
				img: "/assets/images/towels/pestemal/images5/img1.JPG",
				title: "Design № 3",
				size: pestemalSize,
				type,
				color,
				images: pestemalImages.images5,
			},
			{
				id: "6",
				img: "/assets/images/towels/pestemal/images6/img1.JPG",
				title: "Design № 4",
				size: pestemalSize,
				type,
				color,
				images: pestemalImages.images6,
			},
		],
	},
	{
		img: "/assets/images/towels/waffle/images1/img1.JPG",
		title: "Waffle Towels",
		waffleData: [
			{
				id: "1",
				img: "/assets/images/towels/waffle/images1/img1.JPG",
				title: "Waffle № 1",
				size: waffleSize,
				type,
				color,
				images: waffleImages.images1,
			},
			{
				id: "2",
				img: "/assets/images/towels/waffle/images2/img1.JPG",
				title: "Waffle № 1",
				size: waffleSize,
				type,
				color,
				images: waffleImages.images2,
			},
			{
				id: "3",
				img: "/assets/images/towels/waffle/images3/img1.JPG",
				title: "Waffle № 2",
				size: waffleSize,
				type,
				color,
				images: waffleImages.images3,
			},
			{
				id: "4",
				img: "/assets/images/towels/waffle/images4/img1.JPG",
				title: "Waffle № 3",
				size: waffleSize,
				type,
				color,
				images: waffleImages.images4,
			},
			{
				id: "5",
				img: "/assets/images/towels/waffle/images5/img1.JPG",
				title: "Waffle № 4",
				size: waffleSize,
				type,
				color,
				images: waffleImages.images5,
			},
			{
				id: "6",
				img: "/assets/images/towels/waffle/images6/img1.JPG",
				title: "Waffle № 5",
				size: waffleSize,
				type,
				color,
				images: waffleImages.images6,
			},
		],
	},
	{
		img: velourImages.images1[0].original,
		title: "Velour Towels",
		velourData: [
			{
				id: "1",
				img: velourImages.images1[0].original,
				title: "Alaska",
				size: dobbySize,
				type,
				color,
				images: velourImages.images1,
			},
			{
				id: "2",
				img: velourImages.images2[0].original,
				title: "Prince",
				size: dobbySize,
				type,
				color,
				images: velourImages.images2,
			},
			{
				id: "3",
				img: velourImages.images3[0].original,
				title: "Bonjour",
				size: dobbySize,
				type,
				color,
				images: velourImages.images3,
			},
		],
	},
];
