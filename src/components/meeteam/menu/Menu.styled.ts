import styled from 'styled-components';

const MenuRow = styled.div`
	display: flex;
	align-items: center;
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
`;

const MenuBox = styled.button<{ $color?: boolean }>`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	height: 5.025rem;
	border-radius: 0.6rem 0.6rem 0rem 0rem;
	border: ${props => (props.$color ? `0.15rem solid #BCD7FF` : `0.075rem solid #cbcbcb`)};
	border-bottom: ${props => (props.$color ? `0` : `0.15rem solid #BCD7FF`)};
	background: ${props => (props.$color ? '#F7FAFF' : '#FFF')};
	color: var(--light-black, ${props => (props.$color ? '#151515' : '#373F41')});
	font-family: Pretendard;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: ${props => (props.$color ? `600` : `400`)};
	cursor: pointer;
`;

const S = { MenuRow, MenuBox };

export default S;
