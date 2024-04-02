const simpleDate = (date: Date | null) => {
	if (date) {
		const year: string = date.getFullYear().toString();
		const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
		const day: string = date.getDate().toString().padStart(2, '0');
		const total: string = year + '-' + month + '-' + day;
		return total;
	} else {
		return;
	}
};

export default simpleDate;
