import styled from 'styled-components';

const PortfolioModalLayout = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: rgba(21, 21, 21, 0.4);
`;

const PortfolioModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2.8rem 4rem;
	width: clamp(30%, 58rem, 75%);
	border-radius: 1rem;
	border: 0.1rem solid var(--box_stroke, #e3e3e3);
	background: var(--Grayscale-100, #f8fafb);
	color: var(--text-color-2, #373f41);

	/* Body/body2/medium */
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.6rem; /* 114.286% */
	letter-spacing: 0.0028rem;
`;

const PortfolioModalTitle = styled.span`
	display: flex;
	margin-bottom: 2.8rem;
	color: var(--text-color, #151515);

	/* Headline/h3 */
	font-size: 2rem;
	font-weight: 600;
	line-height: 2.4rem; /* 120% */
	letter-spacing: 0.004rem;
`;

const PortfolioModalContent = styled.div`
	display: flex;
	margin-bottom: 2.8rem;
	font-weight: 600;
`;

const PortfolioContentList = styled.ul`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 4rem;
	border-top: 0.05rem solid var(--Border-boxStroke, #d3d3d3);
	border-bottom: 0.05rem solid var(--Border-boxStroke, #d3d3d3);
`;

const PortfolioContentItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const PortfolioContentItemTitle = styled.h6`
	display: flex;
	padding: 0.86rem 1.59rem;
	border: 0.05rem solid var(--Border-boxStroke, #d3d3d3);
	border-left: 0;
	background: var(--Grayscale-200, #f6f6f6);
	color: var(--text-color, #151515);
`;

const PortfolioContentItemInfo = styled.div`
	flex: 1;
	display: flex;
	padding: 0.86rem 1.59rem;
	flex-direction: row;
	column-gap: 1rem;
	border: 0.05rem solid var(--Border-boxStroke, #d3d3d3);
	border-right: 0;
	background: var(--Form-fill-others, #fff);
`;

const S = {
	PortfolioModalLayout,
	PortfolioModalContainer,
	PortfolioModalTitle,
	PortfolioModalContent,
	PortfolioContentList,
	PortfolioContentItem,
	PortfolioContentItemTitle,
	PortfolioContentItemInfo,
};

export default S;
