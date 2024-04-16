const fixModalBackground = (modalState: boolean) => {
	if (modalState) {
		document.body.style.overflow = 'hidden';
	} else if (!modalState) {
		document.body.style.overflow = 'auto';
	}
};

export default fixModalBackground;
