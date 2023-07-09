import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "JPG";
const filePath = "/towels/jacquard";
const { arr4, arr8, arr9 } = imgArrs;

const images1 = imageArrays(arr8, 1, filePath, fileType);
const images2 = imageArrays(arr4, 2, filePath, fileType);
const images3 = imageArrays(arr4, 3, filePath, fileType);
const images4 = imageArrays(arr9, 4, filePath, fileType);
const images5 = imageArrays(arr4, 5, filePath, fileType);
const images6 = imageArrays(arr4, 6, filePath, fileType);

export const jacquardImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
