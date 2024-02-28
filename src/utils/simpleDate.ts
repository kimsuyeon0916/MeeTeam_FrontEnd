const simpleDate = (date: Date) => {
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString();
	const day = date.getDate().toString();
	const total = year + '-' + month + '-' + day;
	return total;
};

export default simpleDate;
