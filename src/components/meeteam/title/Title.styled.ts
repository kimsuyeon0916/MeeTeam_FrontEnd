import styled from 'styled-components';

const TitleRow = styled.header`
	display: flex;
	align-items: center;
	color: #000;
	font-size: 2.7rem;
	font-style: normal;
	font-weight: 400;
	column-gap: 1.05rem;
`;

const TitleSpan = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.45rem 1.35rem;
	height: 2.7rem;
	border-radius: 0.6rem;
	background: linear-gradient(90deg, #4e99ef -6.72%, #723dff 107.8%);
	color: #fff;
	font-size: 1.2rem;
`;
const S = { TitleRow, TitleSpan };

export default S;
