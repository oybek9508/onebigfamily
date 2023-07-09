import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";
const fileType = "jpg";
const filePath = "beddings/digital";
const { arr1, arr2 } = imgArrs;

const images1 = imageArrays(arr1, 1, filePath, fileType);
const images2 = imageArrays(arr1, 2, filePath, fileType);
const images3 = imageArrays(arr1, 3, filePath, fileType);
const images4 = imageArrays(arr1, 4, filePath, fileType);
const images5 = imageArrays(arr1, 5, filePath, fileType);
const images6 = imageArrays(arr2, 6, filePath, fileType);

export const digitalImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
