import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";
const fileType = "jpg";
const filePath = "beddings/jacquard";
const { arr4, arr3 } = imgArrs;

const images1 = imageArrays(arr4, 1, filePath, fileType);
const images2 = imageArrays(arr3, 2, filePath, fileType);
const images3 = imageArrays(arr3, 3, filePath, fileType);
const images4 = imageArrays(arr4, 4, filePath, fileType);
const images5 = imageArrays(arr4, 5, filePath, fileType);
const images6 = imageArrays(arr3, 6, filePath, fileType);

export const jacquardImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
