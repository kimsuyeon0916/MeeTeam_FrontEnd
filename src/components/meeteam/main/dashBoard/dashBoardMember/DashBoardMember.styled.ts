import styled from 'styled-components';
import Main from '../../Main.sytled';

const DashBoardMemberLayout = styled(Main.MainArticle)`
	display: flex;
	flex-direction: column;
	row-gap: 1.35rem;
	min-width: 0;
	padding: 1.65rem 2.55rem;
	height: 26.25rem;
	background: #fff;

	font-weight: 500;
	font-size: 1.5rem;
	color: #151515;

	.dash-board-member__row {
		position: relative;
		display: flex;
		padding: 1.35rem 0rem;
		align-items: center;
		column-gap: 1.8rem;
	}

	.dash-board-member__small-text {
		display: flex;
		align-items: center;
		column-gap: 0.35rem;
		margin-left: auto;
		font-weight: 500;
		font-size: 1rem;
		color: #373f41;
	}
`;

const DashBoardMemberSpan = styled.span<{ $index?: number }>`
	position: ${props => (props.$index === 0 ? '' : 'absolute')};
	left: ${props => 4.3 + 2.8 * props.$index}rem;
	z-index: ${props => props.$index};
`;
const DashBoardMemberPlusButton = styled.button`
	all: unset;
	display: flex;
	column-gap: 0.45rem;
	align-items: center;
	margin-left: auto;
	color: #373f41;
	cursor: pointer;
`;

const S = { DashBoardMemberLayout, DashBoardMemberSpan, DashBoardMemberPlusButton };

export default S;
