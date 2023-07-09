import { imageArrays } from "@/utils/fetchImages";
import { imgArrs } from "@/utils/imageSize";

const fileType = "JPG";
const filePath = "/towels/waffle";
const { arr1, arr4, arr3, arr9 } = imgArrs;

const imageProperties = {
	images1: { array: arr3, index: 1 },
	images2: { array: arr4, index: 2 },
	images3: { array: arr3, index: 3 },
	images4: { array: arr9, index: 4 },
	images5: { array: arr1, index: 5 },
	images6: { array: arr1, index: 6 },
};

const waffleImages = {};

for (const [propertyName, { array, index }] of Object.entries(
	imageProperties
)) {
	waffleImages[propertyName] = imageArrays(array, index, filePath, fileType);
}
export { waffleImages };
