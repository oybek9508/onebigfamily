import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "webp";
const filePath = "beddings/satin";
const { arr1, arr2, arr3 } = imgArrs;

const images1 = imageArrays(arr3, 1, filePath, fileType);
const images2 = imageArrays(arr1, 2, filePath, fileType);
const images3 = imageArrays(arr2, 3, filePath, fileType);
const images4 = imageArrays(arr2, 4, filePath, fileType);
const images5 = imageArrays(arr2, 5, filePath, fileType);
const images6 = imageArrays(arr3, 6, filePath, fileType);

export const satinImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
