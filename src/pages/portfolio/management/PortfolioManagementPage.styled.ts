import styled from 'styled-components';

const PortfolioManagementLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 auto;
	// margin-bottom: 15rem;
	width: clamp(45%, 96rem, 75%); // width: 96rem;
	color: var(--Light-Black, #373f41);

	h2 {
		color: var(--Text-textColor1, #151515);
		/* Headline/h2 */
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 2.9rem; /* 120.833% */
		letter-spacing: 0.0048rem;
	}
`;

const PortfolioManagementHeader = styled.header`
	display: flex;
	flex-direction: row;
	margin-top: 8rem;
	margin-bottom: 2rem;
`;

const PortfolioManagementGrid = styled.div`
  display: grid;
	// margin: 8rem 0;
  margin-top: 8rem;
	grid-template-columns: repeat(auto-fill, minmax(22.5rem, 1fr));
	grid-auto-rows: minmax(12.7rem, auto);
	row-gap: 4rem;
	column-gap: 2rem;

	/* 스크롤바 숨기기 */
	overflow-y: auto;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
`;

const PortfolioManagementColumn = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;

	color: var(--State-unactive, #8e8e8e);

	/* Headline/h3 */
	font-size: 2rem;
	font-weight: 600;
	line-height: 2.4rem; /* 120% */
	letter-spacing: 0.004rem;
`;

const S = {
	PortfolioManagementLayout,
	PortfolioManagementHeader,
	PortfolioManagementGrid,
	PortfolioManagementColumn,
};

export default S;
