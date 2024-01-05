import styled from 'styled-components';
import Main from '../../Main.sytled';

const DashBoardLinkLayout = styled(Main.MainArticle)`
	display: flex;
	flex: 1;
	flex-direction: column;
	row-gap: 1.35rem;
	padding: 1.65rem 2.55rem;
	height: 26.25rem;
	background: #fff;

	.dash-board-link__box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 3.6rem 0;
		color: var(--text-color-2, #373f41);
		font-size: 1.35rem;
		font-weight: 500;
		line-height: 2rem;
	}

	.dash-board-link__box--small-text {
		display: flex;
		color: #808080;
		font-size: 0.975rem;
		font-weight: 400;
	}
`;

const DashBoardLinkImageIcon = styled.img`
	width: 3.6rem;
	height: 3.6rem;
	border-radius: 0.6rem;
`;

const DashBoardLinkPlusButton = styled.button`
	all: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	cursor: pointer;
`;

const DashBoardLinkRegisterButton = styled.button`
	all: unset;
	display: flex;
	margin: 0 auto;
	column-gap: 0.75rem;
	padding: 0.75rem 1.5rem;
	border-radius: 0.6rem;
	background: var(--sub2-color, #f3f5ff);
	color: var(--text-color-2, #373f41);
	font-size: 1.35rem;
	font-weight: 400;
	cursor: pointer;
	stroke: #373f41;
	stroke-width: 1.125;
`;

const S = {
	DashBoardLinkLayout,
	DashBoardLinkImageIcon,
	DashBoardLinkPlusButton,
	DashBoardLinkRegisterButton,
};

export default S;
