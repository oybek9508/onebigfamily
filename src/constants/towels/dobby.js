const arr4 = [1, 2, 3, 4];
const arr5 = [1, 2, 3, 4, 5];
const arr6 = [1, 2, 3, 4, 5, 6];

const imageArrays = (arr, imgNo) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/towels/dobby/images${imgNo}/img${img}.JPG`,
			thumbnail: `/assets/images/towels/dobby/images${imgNo}/img${img}.JPG`,
		};
		console.log("imageObj", imageObj);
		return imageObj;
	});
};

const images1 = imageArrays(arr4, 1);
const images2 = imageArrays(arr4, 2);
const images3 = imageArrays(arr4, 3);
const images4 = imageArrays(arr4, 4);
const images5 = imageArrays(arr5, 5);
const images6 = imageArrays(arr5, 6);
const images7 = imageArrays(arr6, 7);

export const dobbyImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
	images7,
};
