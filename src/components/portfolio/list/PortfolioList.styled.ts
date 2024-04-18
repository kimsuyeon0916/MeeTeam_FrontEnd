import styled from 'styled-components';

const PortfolioListLayout = styled.section`
	display: flex;
	flex-direction: column;
	padding-top: 8rem;
	padding-bottom: 16rem;
	color: var(--text-color, #151515);
	background: var(--Bluescale-100, #f7faff);
`;

const PortfolioListContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: clamp(45%, 96rem, 75%); // width: 96rem;

	h3 {
		margin-bottom: 2rem;
		color: var(--text-color, #151515);

		/* Headline/h3 */
		font-size: 2rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.4rem; /* 120% */
		letter-spacing: 0.004rem;
	}
`;

const PortfolioList = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 2rem;
	overflow: auto;
	// 스크롤바 제거
	-ms-overflow-style: none; /* 인터넷 익스플로러 */
	scrollbar-width: none; /* 파이어폭스 */
	&::-webkit-scrollbar {
		display: none; /* 크롬, 사파리, 오페라, 엣지 */
	}

	article {
		min-width: 27.4rem;
	}
`;

const S = { PortfolioListLayout, PortfolioListContainer, PortfolioList };

export default S;
