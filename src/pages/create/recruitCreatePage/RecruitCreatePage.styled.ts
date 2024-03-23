import styled from 'styled-components';

const RecruitCreatePage = styled.div`
	width: clamp(45%, 96rem, 75%);
	margin: 0 auto;
	margin-bottom: 17rem;

	h2 {
		color: #151515;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 2.9rem;
		letter-spacing: 0.0048rem;
	}
	h4 {
		color: #373f41;
		font-size: 1.8rem;
		font-weight: 600;
		line-height: 2.1rem;
		letter-spacing: 0.0036rem;
	}

	.container-introduction {
		margin-top: 8rem;
		h4 {
			margin-top: 1.2rem;
		}
	}

	.under-intro {
		width: 100%;
		height: 0.075rem;
		background: #373f41;
		margin-top: 2rem;
		border: none;
	}

	.input-subtitle {
		color: #373f41;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;

		span {
			color: var(--Redscale-500, #f85858);
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
		}
	}

	.under-info {
		width: 100%;
		height: 0.075rem;
		background: #e3e3e3;
		border: none;
		margin-top: 4rem;
	}

	.subtitle {
		width: 19.6rem;
	}

	.container-tags {
		display: flex;
		width: 100%;
		margin-top: 4rem;
		min-height: 20rem;

		.container-tags__inputs {
			width: 76.4rem;
		}
	}

	.container-btns {
		display: flex;
		justify-content: flex-end;
		gap: 1.6rem;
		margin-top: 12rem;

		button {
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			font-size: 1.6rem;
			border-radius: 0.6rem;
		}

		.cancel-btn {
			border: 1px solid #e3e3e3;
			background: #fff;
		}

		.submit-btn {
			background: #5877fc;
			color: #fff;
		}
	}
`;

const S = { RecruitCreatePage };

export default S;
