import styled from 'styled-components';

const NaverLoginButton = styled.button`
	all: unset;
	position: absolute;
	visibility: none;
`;

const NaverCustomButton = styled.button`
	all: unset;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 4.875rem;
	background: #03c75a;
	border-radius: 0.45rem;
	color: #fff;
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 1.35rem;
	cursor: pointer;

	.sign-in__naver-icon {
		position: absolute;
		display: flex;
		height: 4.875rem;
		left: 0;
	}
`;

const S = { NaverLoginButton, NaverCustomButton };

export default S;
