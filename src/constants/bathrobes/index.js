import { bathrobeImages } from "./bathrobe";
import { bathrobeSubtitle } from "./subtitle/bathrobe";

const size = "L-XL";
const type = "100% cotton";

const bathrobeColor = [
	{ name: "White", color: "#fcfcfc" },
	// { name: "Blue", color: "#005689" },
	// { name: "Light Grey", color: "#F5F5F5" },
	// { name: "Dark Grey", color: "#A9A9A9" },
];

console.log("bathrobeImages", bathrobeImages);

export const bathrobesData = [
	{
		img: bathrobeImages.images1[0].original,
		title: "Bathrobes",
		subtitle: bathrobeSubtitle.bathrobe,
		bathrobeData: [
			{
				id: "1",
				img: bathrobeImages.images1[0].original,
				title: "Bathrobe",
				subtitle: bathrobeSubtitle.bathrobe,
				size: [size],
				type,
				color: bathrobeColor,
				images: bathrobeImages.images1,
			},
		],
	},
];
