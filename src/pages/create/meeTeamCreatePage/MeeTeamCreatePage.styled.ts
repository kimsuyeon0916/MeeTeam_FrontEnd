import styled from 'styled-components';

const MeeTeamCreatePage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	margin-bottom: 7rem;
	position: relative;

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
			font-size: 2.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 4.2rem;
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
				font-size: 1.65rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.65rem;
				letter-spacing: -0.033rem;
			}
		}
	}

	.wrapper {
		width: 100%;
		margin-top: 2.5rem;
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
			gap: 2rem;
		}
		.container__teamname {
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

			.teamname-length {
				width: 40rem;
				display: flex;
				justify-content: flex-end;
			}

			p {
				color: red;
				font-size: 1.2rem;
			}
		}

		.container__info {
			.info-wrapper {
				display: flex;
				flex-direction: column;
				gap: 2.5rem;
				margin: 0 auto;
			}

			.container__info-select {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 30.82rem;
				margin-top: 0.6rem;

				p {
					position: absolute;
					color: red;
					font-size: 1.2rem;
					padding-top: 1rem;
					box-sizing: border-box;
				}

				.title-info {
					position: relative;

					input[type='checkbox'] {
						top: 1.25rem;
						left: 32.3rem;
						position: absolute;
						border: 1.5px solid #5877fc;
						background: #fff;
					}
				}

				.fix {
					margin-top: 0.5rem;
				}

				.description {
					color: #8e8e8e;
					font-size: 1.4rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.35rem;
					letter-spacing: 0.015rem;
					margin-left: 2rem;
				}

				.description-check {
					position: absolute;
					top: 1.6rem;
					left: 34.5rem;
					color: #373f41;
					font-size: 1.35rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.35rem;
					letter-spacing: 0.015rem;
				}

				.container-course {
					display: flex;
					gap: 5.8rem;

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

					.disable {
						background-color: #e3e3e3;
					}
				}
			}
		}

		.container__tag {
			margin-top: 2.55rem;
		}

		.container__intro {
			margin-top: 4.35rem;

			div:nth-child(2) {
				.editor {
					background-color: #fff;
					border-radius: 10px;
				}
			}

			.ql-container.ql-snow {
				border: 0.75px solid #e3e3e3;
				border-bottom-right-radius: 0.75rem;
				border-bottom-left-radius: 0.75rem;
				height: 30.825rem;
			}

			.ql-toolbar.ql-snow {
				border: 0.75px solid #e3e3e3;
				border-top-right-radius: 0.75rem;
				border-top-left-radius: 0.75rem;
				box-sizing: border-box;
				padding: 8px;
			}
		}

		.container__img {
			margin-top: 4.35rem;

			.container__img-input {
				padding: 10px 0px;

				input {
					display: none;
				}

				.file-label {
					position: relative;
					display: block;
					width: 25.65rem;
					height: 13.5rem;
					flex-shrink: 0;
					border-radius: 0.75rem;
					border: 0.75px solid #e3e3e3;
					background: #fff;
					outline: none;
					color: #a7a7a7;
					font-size: 1.3rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.8rem;
					letter-spacing: 0.02rem;
					display: flex;
					align-items: center;
					cursor: pointer;

					.uploaded-img {
						width: 100%;
						height: 100%;
						border-radius: 0.75rem;

						&:hover {
							transition: 0.2s ease-in-out;
						}
					}

					.icon {
						position: absolute;
						top: 1.8rem;
						right: 7.6rem;
						transition: 0.5s ease-in-out;
						opacity: 70%;
						width: 10rem;
					}
				}

				.haveFile {
					color: #000;
				}
			}
		}

		.container__member {
			margin-top: 4.35rem;
			width: 100%;

			.container__member-title {
				display: flex;
				justify-content: space-between;

				button {
					display: flex;
					width: 10rem;
					height: 3.5rem;
					padding: 1rem;
					justify-content: center;
					align-items: center;
					gap: 1rem;
					border: none;
					outline: none;
					border-radius: 0.4rem;
					background: var(--main-color, #5877fc);
					color: #fff;
				}
			}

			.modal-box {
				position: fixed;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background-color: rgba(0, 0, 0, 0.3);
				z-index: 100;
			}

			.container__member-area {
				min-height: 24rem;
				width: 100%;
				background-color: #fff;
				border: 1px solid #dcdcdc;
				border-radius: 1rem;
				padding: 3rem 4rem;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				gap: 1rem 1rem;
			}

			.container__member-area__element {
				width: 24rem;
				height: 13.5rem;
				flex-shrink: 0;
				border-radius: 1rem;
				border: 1px dashed #cdcdcd;
				background: #fdfdfd;
			}

			.member {
				position: relative;
				width: 24rem;

				.delete {
					position: absolute;
					top: 1rem;
					right: 1.2rem;
					font-size: 1.5rem;
					cursor: pointer;
				}
			}

			.container__member-add {
				display: flex;
				justify-content: center;
				align-items: center;

				.addition {
					width: 7rem;
					height: 7rem;
					flex-shrink: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					color: #000;
					cursor: pointer;
					opacity: 0.8;
					filter: drop-shadow(0px 3px 18.75px rgba(0, 0, 0, 0.11));

					.addition-container {
					}
				}
			}
		}
	}
	.container__controller {
		margin-top: 2.77rem;
		display: flex;
		justify-content: flex-end;
		gap: 2rem;

		button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 16.5rem;
			height: 4.875rem;
			padding: 0.75rem;
			border: none;
			gap: 1rem;
			border-radius: 0.8rem;
			cursor: pointer;
			color: #373f41;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.8rem; /* 75% */
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

const S = { MeeTeamCreatePage };

export default S;
