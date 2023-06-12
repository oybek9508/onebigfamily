const arr1 = [1];
const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3, 4];
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const imageArrays = (arr, imgNo) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/towels/waffle/images${imgNo}/img${img}.JPG`,
			thumbnail: `/assets/images/towels/waffle/images${imgNo}/img${img}.JPG`,
		};
		console.log("imageObj", imageObj);
		return imageObj;
	});
};

const images1 = imageArrays(arr3, 1);
const images2 = imageArrays(arr4, 2);
const images3 = imageArrays(arr3, 3);
const images4 = imageArrays(arr9, 4);
const images5 = imageArrays(arr1, 5);
const images6 = imageArrays(arr1, 6);

export const waffleImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
