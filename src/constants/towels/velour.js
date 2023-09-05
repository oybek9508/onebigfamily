import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "webp";
const filePath = "/towels/velour";
const { arr4 } = imgArrs;

const images1 = imageArrays(arr4, 1, filePath, fileType);
const images2 = imageArrays(arr4, 2, filePath, fileType);

export const velourImages = {
	images1,
	images2,
};
