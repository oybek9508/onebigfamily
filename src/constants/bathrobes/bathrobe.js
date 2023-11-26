import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "webp";
const filePath = "/bathrobes/bathrobe";
const { arr2 } = imgArrs;

const images1 = imageArrays(arr2, 1, filePath, fileType);

export const bathrobeImages = {
	images1,
};
