const arr1 = [1];
const arr2 = [1, 2];
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3, 4];

const imageArrays = (arr, imgNo) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/beddings/satin/images${imgNo}/img${img}.jpg`,
			thumbnail: `/assets/images/beddings/satin/images${imgNo}/img${img}.jpg`,
		};
		console.log("imageObj", imageObj);
		return imageObj;
	});
};

const images1 = imageArrays(arr3, 1);
const images2 = imageArrays(arr1, 2);
const images3 = imageArrays(arr2, 3);
const images4 = imageArrays(arr2, 4);
const images5 = imageArrays(arr2, 5);
const images6 = imageArrays(arr3, 6);

export const satinImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
