const tagStringToTagArray = (tagString) => {
	let resultArray = tagString.split(",");
	resultArray.forEach((tag, index) => {
		if (tag[0] === " ") resultArray[index] = tag.slice(1);
	});
	return resultArray;
}

export default tagStringToTagArray;
