import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "webp";
const filePath = "/threads/bamboo";
const { arr1 } = imgArrs;

const images1 = imageArrays(arr1, 1, filePath, fileType);

export const bambooImages = { images1 };
