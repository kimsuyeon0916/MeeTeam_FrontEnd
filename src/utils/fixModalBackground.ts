const fixModalBackground = (modalState: boolean) => {
	// state 인자로 받기
	if (modalState) {
		document.body.style.overflow = 'hidden';
	} else if (!modalState) {
		document.body.style.overflow = 'auto';
	}
};

export default fixModalBackground;
