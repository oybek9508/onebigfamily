const arr3 = [1, 2, 3];
const arr4 = [1, 2, 3, 4];

const imageArrays = (arr, imgNo) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/beddings/jacquard/images${imgNo}/img${img}.jpg`,
			thumbnail: `/assets/images/beddings/jacquard/images${imgNo}/img${img}.jpg`,
		};
		console.log("imageObj", imageObj);
		return imageObj;
	});
};

const images1 = imageArrays(arr4, 1);
const images2 = imageArrays(arr3, 2);
const images3 = imageArrays(arr3, 3);
const images4 = imageArrays(arr4, 4);
const images5 = imageArrays(arr4, 5);
const images6 = imageArrays(arr3, 6);

export const jacquardImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
