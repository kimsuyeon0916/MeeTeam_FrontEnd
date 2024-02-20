const fixModalBackground = (modalState: boolean) => {
	// state인자로 받기
	if (modalState) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
};

export default fixModalBackground;
