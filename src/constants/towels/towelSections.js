import { terryTowelData } from ".";
export const towelSections = [
	{ title: "Dobby Towels", data: terryTowelData[0]?.dobbyData, path: "dobby" },
	{ title: "Jacquard Towels", data: terryTowelData[1]?.data, path: "jacquard" },
	{ title: "Pestemal", data: terryTowelData[2]?.pestemalData, path: "pestemal" },
	{ title: "Waffle Towels", data: terryTowelData[3]?.waffleData, path: "waffle" },
	{ title: "Velour Towels", data: terryTowelData[4]?.velourData, path: "velour" },
];
