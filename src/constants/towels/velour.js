import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "jpg";
const filePath = "/towels/velour";
const { arr1 } = imgArrs;

const images1 = imageArrays(arr1, 1, filePath, fileType);
const images2 = imageArrays(arr1, 2, filePath, fileType);
const images3 = imageArrays(arr1, 3, filePath, fileType);

export const velourImages = {
	images1,
	images2,
	images3,
};
