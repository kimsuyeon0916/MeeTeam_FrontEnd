import styled from 'styled-components';

const MainLayout = styled.div`
	display: flex;
	font-size: 1.6rem;
	flex-direction: column;
	width: clamp(45%, 108rem, 75%);
	background-color: #f7faff;
	margin: 0 auto;
	margin-bottom: 10%;
	border-radius: 0vw 0vw 0.417vw 0.417vw;
	border: 0.15rem solid #bcd7ff;
	border-top: 0;
	padding: 3.75rem;
`;

const MainArticle = styled.article`
	display: flex;
	border-radius: 0.75rem;
	border: 0.075rem solid #bcd7ff;
	background: #fff;
	color: var(--Light-Black, #373f41);
	font-style: normal;

	.main__column {
		display: flex;
		flex-direction: column;
	}

	.main__row {
		display: flex;
		align-items: center;
	}

	.main--small-text {
		font-size: 1.2rem;
		font-weight: 400;
		line-height: 1.44rem;
	}

	.main--middle-text {
		font-size: 1.5rem;
		font-weight: 400;
	}

	.main--big-text {
		color: var(--text-color, #151515);
		font-size: 1.8rem;
		font-weight: 500;
	}
`;

const S = { MainLayout, MainArticle };

export default S;
