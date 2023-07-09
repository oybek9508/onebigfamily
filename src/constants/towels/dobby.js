import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "JPG";
const filePath = "/towels/dobby";
const { arr4, arr5, arr6 } = imgArrs;

const images1 = imageArrays(arr4, 1, filePath, fileType);
const images2 = imageArrays(arr4, 2, filePath, fileType);
const images3 = imageArrays(arr4, 3, filePath, fileType);
const images4 = imageArrays(arr4, 4, filePath, fileType);
const images5 = imageArrays(arr5, 5, filePath, fileType);
const images6 = imageArrays(arr5, 6, filePath, fileType);
const images7 = imageArrays(arr6, 7, filePath, fileType);

export const dobbyImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
	images7,
};
