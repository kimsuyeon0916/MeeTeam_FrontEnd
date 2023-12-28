import styled from 'styled-components';

const MeeTeamCreatePage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	margin-bottom: 30px;

	.procedure {
		height: 80px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		box-sizing: border-box;
		margin-top: 2.81rem;

		.procedure__subtitle {
			color: #373f41;
			font-family: Apple SD Gothic Neo;
			font-size: 2.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 4.2rem; /* 175% */
			letter-spacing: 0.015rem;
		}

		.procedure__intro {
			width: 30rem;
			height: 2.25rem;
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			line-height: 3.5rem;
			letter-spacing: 0.0125rem;

			p {
				color: #8e8e8e;
				font-family: Apple SD Gothic Neo;
				font-size: 1.65rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.65rem; /* 100% */
				letter-spacing: -0.033rem;
			}
		}
	}

	.wrapper {
		width: 100%;
		margin-top: 2rem;
		margin-bottom: 50px;
		padding-bottom: 50px;
		border-radius: 0.5rem;
		border: 2px solid #bcd7ff;
		background: #f7faff;

		.container {
			width: 80%;
			margin: 0 auto;
			padding-top: 50px;
			display: flex;
			flex-direction: column;
			gap: 5rem;
		}
		.container__teamname {
			height: 100px;

			.container__teamname-input {
				padding: 10px 0px;

				input {
					width: 40.125rem;
					height: 4.875rem;
					flex-shrink: 0;
					border-radius: 0.75rem;
					border: 0.75px solid #e3e3e3;
					background: #fff;
					outline: none;
					padding-left: 2.1rem;
					box-sizing: border-box;
				}
			}
		}

		.container__info {
			margin-top: 70px;

			.info-wrapper {
				margin: 0 auto;
			}

			.container__info-select {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 30.82rem;
				margin-top: 15px;
			}
		}

		.container__tag {
			margin-top: 70px;
		}

		.container__intro {
			margin-top: 7rem;

			div:nth-child(2) {
				/* padding: 10px 20px; */
				.editor {
					background-color: #fff;
					border-radius: 10px;
				}
			}
		}

		.container__member {
			margin-top: 70px;
			width: 100%;

			.controll {
				/* display: flex; */
				gap: 0.5rem;
				margin-bottom: 30px;

				button {
					border: none;
					width: 5rem;
					height: 1.5rem;
					border-radius: 5px;
					cursor: pointer;
				}

				button:nth-child(2) {
					margin-left: 20px;
					background-color: #00b894;
					color: #fff;
				}

				button:nth-child(3) {
					margin-left: 5px;
					background-color: #e17055;
					color: #fff;
				}
			}

			.container__member-add {
				display: flex;
				justify-content: center;
				align-items: center;

				.addition {
					width: 2.7rem;
					height: 2.7rem;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 3rem;
					border-radius: 50%;
					color: #000;
					cursor: pointer;
				}
			}
		}

		.container__controller {
			margin-top: 70px;
			display: flex;
			justify-content: center;
			gap: 1rem;

			button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 12rem;
				height: 3.5rem;
				padding: 0.625rem;
				gap: 0.625rem;
				border-radius: 0.5rem;
				border: 0.5px solid #ababab;
				cursor: pointer;
				font-size: 1rem;
			}

			button:nth-child(1) {
				background: #a9a9a9;
			}

			button:nth-child(2) {
				background: #00b894;
				color: #fff;
			}
		}
	}
`;

const S = { MeeTeamCreatePage };

export default S;
