import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "webp";
const filePath = "/towels/dobby";
const { arr3, arr4 } = imgArrs;

const images1 = imageArrays(arr3, 1, filePath, fileType);
const images2 = imageArrays(arr4, 2, filePath, fileType);
const images3 = imageArrays(arr4, 3, filePath, fileType);
const images4 = imageArrays(arr4, 4, filePath, fileType);
const images5 = imageArrays(arr4, 5, filePath, fileType);
const images6 = imageArrays(arr4, 6, filePath, fileType);
const images7 = imageArrays(arr3, 7, filePath, fileType);
const images8 = imageArrays(arr4, 8, filePath, fileType);
const images9 = imageArrays(arr4, 9, filePath, fileType);

export const dobbyImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
	images7,
	images8,
	images9,
};
