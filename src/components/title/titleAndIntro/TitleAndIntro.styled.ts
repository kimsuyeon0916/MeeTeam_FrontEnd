import styled from 'styled-components';

const TitleAndIntro = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	box-sizing: border-box;

	.procedure__subtitle {
		color: #000;
		font-size: 3rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.1rem;
		margin-top: 6.83rem;
	}

	.procedure__intro {
		margin-top: 2.25rem;

		p:nth-child(1) {
			color: #151515;
			font-size: 1.65rem;
			font-style: normal;
			font-weight: 500;
			line-height: 1.65rem;
			letter-spacing: -0.033rem;
		}

		p:nth-child(2) {
			margin-top: 1.2rem;
			color: #8e8e8e;
			font-size: 1.4rem;
			font-style: normal;
			font-weight: 500;
			line-height: 2.2rem;
		}
	}
`;

const S = { TitleAndIntro };

export default S;
