import styled from 'styled-components';

const PortfolioCardLayout = styled.article`
	display: flex;
	flex-direction: column;
	row-gap: 0.8rem;

	cursor: pointer;
`;

const PortfolioCardBox = styled.div<{ $url?: string }>`
	position: relative;

	border-radius: 0.75rem;
	overflow: hidden;

	aspect-ratio: 183 / 103; // 포트폴리오 비율
`;

const PortfolioCardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const PortfolioCardTitle = styled.div`
	color: var(--Light-Black, #373f41);

	font-size: 1.6rem;
	font-weight: 600;
	line-height: 2.4rem;
	letter-spacing: 0.0032rem;

	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 2; // 원하는 라인수
	-webkit-box-orient: vertical;
`;

const PortfolioTagRow = styled.div`
	position: absolute;
	top: 0.8rem;
	left: 0.9rem;

	display: flex;
	flex-direction: row;
	column-gap: 0.8rem;
`;

const PortfolioCardTag = styled.span`
	align-items: center;

	display: flex;
	padding: 0.6rem 0.8rem;
	border-radius: 0.4rem;

	background: #eaf7ff;
	color: #000;

	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.4rem;
	letter-spacing: 0.02rem;
`;

const PortfolioCardButton = styled.button<{ $checked?: boolean }>`
	position: absolute;
	bottom: 1rem;
	right: 1rem;

	box-sizing: border-box;
	display: flex;
	width: 2.8rem;
	height: 2.8rem;
	justify-content: center;
	align-items: center;
	border-radius: 10rem;
	${props => !props.$checked && 'border: 1px solid #fff'};
	background: ${props =>
		props.$checked ? 'var(--main-color, #5877FC)' : 'rgba(255, 255, 255, 0.3)'};
	color: var(--ButtonColors-Primary-outline-default, #fff);

	font-size: 1.6rem;
	font-weight: 600;
	line-height: 2.4rem;
	letter-spacing: 0.0032rem;
`;

const S = {
	PortfolioCardLayout,
	PortfolioCardBox,
	PortfolioCardImage,
	PortfolioCardTitle,
	PortfolioTagRow,
	PortfolioCardTag,
	PortfolioCardButton,
};

export default S;
