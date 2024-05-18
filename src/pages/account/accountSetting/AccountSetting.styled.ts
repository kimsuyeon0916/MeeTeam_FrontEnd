import styled from 'styled-components';

const AccountSettingStyled = styled.section`
	font-family: Pretendard;
	width: clamp(45%, 96rem, 75%);
	margin: 0 auto;

	h2 {
		color: #151515;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 2.9rem;
		letter-spacing: 0.0048rem;
		margin-top: 8rem;
	}

	.title-underbar {
		margin: 6rem 0;
	}

	.red {
		color: #f85858;
	}

	h4 {
		color: #151515;
		font-size: 1.8rem;
		font-weight: 600;
		line-height: 2.1rem;
		letter-spacing: 0.0036rem;
	}

	.wrapper-menu {
		display: flex;
		flex-direction: column;
		gap: 2.4rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 96rem;
		padding: 1.6rem 2rem;
		box-sizing: border-box;
		min-height: 10.2rem;
		border-radius: 0.75rem;
		border: 0.75px solid #d3d3d3;
		background: #fff;
		cursor: pointer;
	}

	.container-hidden {
		width: 100%;
		height: 11rem;
	}

	.container-account {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		flex-shrink: 0;
	}

	.container-account__title {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	svg {
		font-size: 2rem;
		cursor: pointer;
	}

	.wrapper-personal {
		margin-top: 3.4rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		span {
			color: #8e8e8e;
			font-family: Pretendard;
			font-size: 1.6rem;
			font-weight: 600;
			line-height: 1.9rem;
			letter-spacing: 0.0032rem;
			text-decoration-line: underline;
			cursor: pointer;
		}

		.icon {
			margin-top: 0.3rem;
		}
	}
`;

const S = { AccountSettingStyled };

export default S;
