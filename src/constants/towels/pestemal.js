import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "JPG";
const filePath = "/towels/pestemal";
const { arr4, arr1 } = imgArrs;

const images1 = imageArrays(arr4, 1, filePath, fileType);
const images2 = imageArrays(arr4, 2, filePath, fileType);
const images3 = imageArrays(arr1, 3, filePath, fileType);
const images4 = imageArrays(arr1, 4, filePath, fileType);
const images5 = imageArrays(arr1, 5, filePath, fileType);
const images6 = imageArrays(arr1, 6, filePath, fileType);

export const pestemalImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
