const CopyClipBoard = async (url: string) => {
	try {
		await navigator.clipboard.writeText(url);
		alert('클립보드에 링크가 복사되었습니다!');
	} catch (err) {
		console.log(err);
	}
};

export default CopyClipBoard;
