import styled from 'styled-components';

const RecruitCreatePage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	margin-bottom: 18rem;

	hr {
		margin-top: 1.6rem;
	}

	.container__controller {
		margin-top: 10rem;
		display: flex;
		justify-content: center;
		gap: 2rem;

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 15rem;
			height: 5rem;
			padding: 1rem 1rem;
			border: none;
			gap: 1rem;
			border-radius: 0.8rem;
			cursor: pointer;
			color: #373f41;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 500;
			line-height: 1.8rem;
			letter-spacing: 0.02rem;
		}

		button:nth-child(1) {
			background: #e0e6ff;
		}

		button:nth-child(2) {
			background: #5877fc;
			color: #fff;
		}
	}
`;

const S = { RecruitCreatePage };

export default S;
