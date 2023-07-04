const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3, 4];
const arr5 = [1, 2, 3, 4, 5];
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const imageArrays = (arr, imgNo) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/beddings/exclusive/images${imgNo}/img${img}.jpg`,
			thumbnail: `/assets/images/beddings/exclusive/images${imgNo}/img${img}.jpg`,
		};
		console.log("imageObj", imageObj);
		return imageObj;
	});
};

const images1 = imageArrays(arr3, 1);
const images2 = imageArrays(arr4, 2);
const images3 = imageArrays(arr4, 3);
const images4 = imageArrays(arr5, 4);
const images5 = imageArrays(arr10, 5);
const images6 = imageArrays(arr3, 6);

export const exclusiveImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
