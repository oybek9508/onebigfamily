import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "webp";
const filePath = "/towels/waffle";
const { arr4, arr3, arr5 } = imgArrs;

const imageProperties = {
	images1: { array: arr3, index: 1 },
	images2: { array: arr3, index: 2 },
	images3: { array: arr4, index: 3 },
	images4: { array: arr5, index: 4 },
};

const waffleImages = {};

for (const [propertyName, { array, index }] of Object.entries(imageProperties)) {
	waffleImages[propertyName] = imageArrays(array, index, filePath, fileType);
}
export { waffleImages };
