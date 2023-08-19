import memoizeOne from "memoize-one";

export const imageArrays = memoizeOne((arr, imgNo, imgPath, fileType) => {
	return arr.map((img, idx) => {
		let imageObj = {
			id: idx + 1,
			original: `/assets/images/${imgPath}/images${imgNo}/img${img}.${fileType}`,
			thumbnail: `/assets/images/${imgPath}/images${imgNo}/img${img}.${fileType}`,
		};
		return imageObj;
	});
});
