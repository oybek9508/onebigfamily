const arr1 = [1];
const arr2 = [1, 2];

const imageArrays = (arr, imgNo) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/beddings/digital/images${imgNo}/img${img}.jpg`,
			thumbnail: `/assets/images/beddings/digital/images${imgNo}/img${img}.jpg`,
		};
		console.log("imageObj", imageObj);
		return imageObj;
	});
};

const images1 = imageArrays(arr1, 1);
const images2 = imageArrays(arr1, 2);
const images3 = imageArrays(arr1, 3);
const images4 = imageArrays(arr1, 4);
const images5 = imageArrays(arr1, 5);
const images6 = imageArrays(arr2, 6);

export const digitalImages = {
	images1,
	images2,
	images3,
	images4,
	images5,
	images6,
};
