import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "jpg";
const filePath = "beddings/deluxe";
const { arr2, arr3, arr4, arr5, arr8 } = imgArrs;

const images1 = imageArrays(arr5, 1, filePath, fileType);
const images2 = imageArrays(arr3, 2, filePath, fileType);
const images3 = imageArrays(arr8, 3, filePath, fileType);
const images4 = imageArrays(arr3, 4, filePath, fileType);
const images5 = imageArrays(arr2, 5, filePath, fileType);
const images6 = imageArrays(arr4, 6, filePath, fileType);

export const deluxeImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
