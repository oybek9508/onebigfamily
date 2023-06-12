const arr1 = [1];

const imageArrays = (arr, imgNo) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/towels/velour/images${imgNo}/img${img}.jpg`,
			thumbnail: `/assets/images/towels/velour/images${imgNo}/img${img}.jpg`,
		};
		console.log("imageObj", imageObj);
		return imageObj;
	});
};

const images1 = imageArrays(arr1, 1);
const images2 = imageArrays(arr1, 2);
const images3 = imageArrays(arr1, 3);

export const velourImages = {
	images1,
	images2,
	images3,
};
