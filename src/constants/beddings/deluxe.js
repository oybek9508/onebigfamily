const arr2 = [1, 2];
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3, 4];
const arr5 = [1, 2, 3, 4, 5];
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8];

const imageArrays = (arr, imgNo) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/beddings/deluxe/images${imgNo}/img${img}.jpg`,
			thumbnail: `/assets/images/beddings/deluxe/images${imgNo}/img${img}.jpg`,
		};
		console.log("imageObj", imageObj);
		return imageObj;
	});
};

const images1 = imageArrays(arr5, 1);
const images2 = imageArrays(arr3, 2);
const images3 = imageArrays(arr8, 3);
const images4 = imageArrays(arr3, 4);
const images5 = imageArrays(arr2, 5);
const images6 = imageArrays(arr4, 6);

export const deluxeImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
