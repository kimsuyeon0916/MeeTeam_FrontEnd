import styled from 'styled-components';
import Main from '../Main.sytled';

const DashBoardArticle = styled(Main.MainArticle)`
	display: flex;
	padding: 1.65rem 2.55rem;
`;

const DashBoardLayout = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.8rem;
	font-family: Pretendard;

	.dash-board__row {
		display: flex;
		align-items: center;
		column-gap: 1.8rem;
	}

	.dash-board__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1.8rem;
		row-gap: 1.8rem;
	}

	.dash-board--long-height {
		display: flex;
		flex: 1;
		height: 26.25rem;
		flex-direction: column;
	}

	.dash-board--middle-height {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		height: 8.925rem;
	}

	.dash-board--short-height {
		align-items: center;
		column-gap: 2.55rem;
		height: 6.75rem;
	}
`;

const DashBoardMeeTeamButton = styled.button`
	all: unset;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 0.67rem;
	text-decoration-line: underline;
	cursor: pointer;
`;

const DashBoardBlueButton = styled.button<{ $done?: boolean }>`
	all: unset;
	font-family: Pretendard;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;
	padding: 0 1.5rem;
	height: 3.45rem;
	border-radius: 0.6rem;
	color: #fff;
	background: ${props => (props.$done ? '#FF6A6A' : '#5877FC;')};
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 400;
	cursor: pointer;
`;

const DashBoardGradationButton = styled(DashBoardBlueButton)<{ $done?: boolean }>`
	background: ${props =>
		props.$done
			? '#FF6A6A'
			: 'linear-gradient(270deg, rgba(95, 92, 236, 0.80) -6.3%, #D85CEC 101.52%)'};
`;

const S = {
	DashBoardArticle,
	DashBoardLayout,
	DashBoardMeeTeamButton,
	DashBoardBlueButton,
	DashBoardGradationButton,
};

export default S;
