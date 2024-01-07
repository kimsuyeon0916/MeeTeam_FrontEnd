import styled from 'styled-components';
import DashBoard from '../main/dashBoard/DashBoard.styled';

const ProgressStatusLayout = styled(DashBoard.DashBoardArticle)<{ $isCurrent?: boolean }>`
	display: flex;
	padding-top: 1.58rem;
	flex-direction: column;
	row-gap: 2.1rem;
	height: 15.6rem;

	.progress-status__row {
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 6rem;
		stroke: #b7b7b7;
		stroke-width: 1.5;
	}
`;

const ProgressStatusColumn = styled.div<{ $isCurrent?: boolean }>`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 1.35rem;
	font-size: 1.5rem;
	font-weight: 500;
	color: ${props => (props.$isCurrent ? '#151515' : '#B7B7B7')};
	stroke: ${props => (props.$isCurrent ? '#151515' : '#B7B7B7')};
`;

const ProgressStatusIcon = styled.span`
	position: absolute;
	left: -3.79rem;
	top: -0.87rem;
`;

const ProgressStatusButton = styled.button`
	display: flex;
	margin-left: auto;
	padding: 0.75rem 1.5rem;
	justify-content: center;
	align-items: center;
	column-gap: 0.75rem;
	border-radius: 7.5rem;
	border: 0.075rem solid #2577ff;
	font-size: 1.5rem;
	background-color: #fff;
	color: #2577ff;
	cursor: pointer;
	stroke: #2577ff;
	stroke-width: 1.125;
`;

const S = { ProgressStatusLayout, ProgressStatusColumn, ProgressStatusIcon, ProgressStatusButton };

export default S;
