import styled from 'styled-components';

const Modal = styled.section`
	width: 39rem;
	height: 52.2rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #dcdcdc;
	background-color: #f8fafb;
	padding: 3rem;
	box-sizing: border-box;

	h1 {
		color: #000;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.8rem;
		letter-spacing: -0.036rem;
	}

	.description {
		display: flex;
		flex-direction: column;
		margin-top: 1.5rem;

		span:nth-child(1) {
			color: #151515;
			font-size: 1.35rem;
			font-weight: 600;
			line-height: 1.8rem;
			letter-spacing: 0.0027rem;
		}
		span:nth-child(2) {
			color: #373f41;
			font-size: 1.05rem;
			font-weight: 400;
			line-height: 1.8rem;
			letter-spacing: 0.0021rem;
			margin-top: 0.3rem;
		}

		.agreement {
			display: flex;
			align-items: center;
			margin-top: 0.9rem;
			padding: 0;
			gap: 0.6rem;

			input {
				margin-top: 0.5rem;
				padding: 0;
			}
		}
	}

	.container-user__info {
		width: 33rem;
		border-radius: 0.6rem;
		border: 0.075rem solid #e3e3e3;
		background-color: #fff;
		margin-top: 1.5rem;
		padding: 1.8rem;

		h3 {
			color: #8e8e8e;
			font-size: 1.35rem;
			font-weight: 400;
			line-height: 1.8rem;
			letter-spacing: 0.0027rem;
		}

		.confirm-title {
			font-size: 1.8rem;
		}

		.user-info {
			display: flex;
			justify-content: flex-start;
			margin-top: 0.9rem;
			gap: 5rem;

			span {
				color: #8e8e8e;
				font-size: 1.05rem;
				font-weight: 400;
				line-height: 140%;
				letter-spacing: 0.015rem;
			}

			.value {
				color: #373f41;
			}

			.user-info__section {
				display: flex;
				gap: 0.6rem;

				section {
					display: flex;
					flex-direction: column;
					gap: 0.6rem;
				}
			}
		}

		.value {
			color: #373f41;
		}

		.role-info {
			margin-top: 1.8rem;
			color: #373f41;

			h2 {
				font-size: 1.35rem;
				font-weight: 400;
				line-height: 1.8rem;
				letter-spacing: 0.0027rem;
			}

			p {
				font-size: 1.05rem;
				font-weight: 400;
				line-height: 1.8rem;
				letter-spacing: 0.0021rem;
				margin-top: 0.9rem;
			}
		}
	}

	.confirm-info {
		margin-top: 3.92rem;
	}

	.container-role {
		margin-top: 0.9rem;

		input {
			display: flex;
			width: 33rem;
			height: 3.6rem;
			box-sizing: border-box;
			padding: 1.2rem 1.5rem;
			align-items: center;
			border-radius: 0.75rem;
			border: 0.075rem solid #e3e3e3;
			background: #fff;
			color: #8e8e8e;
			font-size: 1.35rem;
			font-weight: 400;
			line-height: 1.35rem;
			letter-spacing: 0.015rem;
		}
	}

	.container-message {
		margin-top: 0.9rem;

		textarea {
			display: flex;
			width: 33rem;
			height: 7.5rem;
			padding: 1.2rem 1.5rem;
			align-items: flex-start;
			resize: none;
			box-sizing: border-box;
			border-radius: 0.75rem;
			border: 0.075rem solid #e3e3e3;
			background: #fff;
			color: #8e8e8e;
			font-family: Pretendard;
			font-size: 1.35rem;
			font-weight: 400;
			line-height: 1.35rem;
			letter-spacing: 0.015rem;
		}
	}

	.container-buttons {
		margin-top: 4.2rem;
		display: flex;
		justify-content: center;
		gap: 1.35rem;

		color: #373f41;
		font-size: 1.35rem;
		font-weight: 400;
		line-height: 1.35rem;
		letter-spacing: 0.015rem;

		button {
			display: flex;
			width: 12.15rem;
			height: 3.6rem;
			padding: 0.75rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 0.6rem;
			background-color: #ededed;
		}

		.confirm {
			background-color: #5877fc;
			font-weight: 700;
			color: #fff;
		}
	}

	.confirm-btn {
		margin-top: 8.94rem;
	}

	hr {
		margin-top: 2.4rem;
		background: #e3e3e3;
		height: 0.1rem;
		border: 0;
	}
`;

const FinalModal = styled.section`
	width: 39rem;
	height: 19.8rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #dcdcdc;
	background-color: #f8fafb;
	padding: 3rem;
	box-sizing: border-box;

	h1 {
		color: #000;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.8rem;
		letter-spacing: -0.036rem;
	}

	.description {
		display: flex;
		flex-direction: column;
		margin-top: 1.5rem;

		span:nth-child(1) {
			color: #151515;
			font-size: 1.35rem;
			font-weight: 600;
			line-height: 1.8rem;
			letter-spacing: 0.0027rem;
		}
		span:nth-child(2) {
			color: #373f41;
			font-size: 1.05rem;
			font-weight: 400;
			line-height: 1.8rem;
			letter-spacing: 0.0021rem;
			margin-top: 0.3rem;
		}

		.agreement {
			display: flex;
			align-items: center;
			margin-top: 0.9rem;
			padding: 0;
			gap: 0.6rem;

			input {
				margin-top: 0.5rem;
				padding: 0;
			}
		}
	}

	.container-button {
		display: flex;
		justify-content: center;
		margin-top: 3rem;

		button {
			display: flex;
			width: 12.15rem;
			height: 3.6rem;
			padding: 0.75rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 0.6rem;
			background-color: #5877fc;
			font-weight: 700;
			color: #fff;
		}
	}
`;

const S = { Modal, FinalModal };

export default S;
