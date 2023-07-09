import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";
const fileType = "jpg";
const filePath = "beddings/exclusive";
const { arr3, arr4, arr5, arr10 } = imgArrs;

const images1 = imageArrays(arr3, 1, filePath, fileType);
const images2 = imageArrays(arr5, 2, filePath, fileType);
const images3 = imageArrays(arr4, 3, filePath, fileType);
const images4 = imageArrays(arr5, 4, filePath, fileType);
const images5 = imageArrays(arr10, 5, filePath, fileType);
const images6 = imageArrays(arr3, 6, filePath, fileType);

export const exclusiveImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
