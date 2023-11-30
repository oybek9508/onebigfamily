import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "webp";
const filePath = "/towels/inception";
const { arr6 } = imgArrs;

const images1 = imageArrays(arr6, 1, filePath, fileType);
const images2 = imageArrays(arr6, 2, filePath, fileType);
const images3 = imageArrays(arr6, 3, filePath, fileType);
const images4 = imageArrays(arr6, 4, filePath, fileType);
const images5 = imageArrays(arr6, 5, filePath, fileType);
const images6 = imageArrays(arr6, 6, filePath, fileType);

export const inceptionImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
