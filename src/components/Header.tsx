import React from 'react';

const Header = () => {
	return <SHeader></SHeader>;
};

export default Header;

const SHeader = styled.div`
	display: flex;
	width: 1920px;
	height: 90px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
`;
