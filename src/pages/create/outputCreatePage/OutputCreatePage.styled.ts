import styled from 'styled-components';

const OutputCreatePage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	margin-bottom: 7rem;

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
				gap: 2rem;
				margin: 0 auto;
			}

			.container__info-select {
				width: 100%;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				gap: 30.82rem;
				margin-top: 15px;

				p {
					position: absolute;
					color: red;
					font-size: 1.2rem;
					padding-top: 1rem;
					box-sizing: border-box;
				}
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
				font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
				padding: 8px;
			}
		}

		.container__img {
			margin-top: 4.35rem;

			.container__img-input {
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

		.container__outputs {
			margin-top: 4.35rem;

			.description {
				white-space: pre-wrap;
				font-size: 12px;
				line-height: 1.42;
				letter-spacing: normal;
				color: #666;
				margin-bottom: 1rem;
			}

			.container__outputs--images {
				width: 100%;
				min-height: 24rem;
				background-color: #fff;
				padding: 2rem 2rem;
				border-radius: 1rem;
				border: 1px solid #e3e3e3;
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 2rem 2rem;

				.image {
					background-color: #00cec9;
					height: 16rem;
					border-radius: 1rem;
					cursor: pointer;
				}
			}
		}

		.container__links {
			margin-top: 4.35rem;

			p {
				white-space: pre-wrap;
				font-size: 12px;
				line-height: 1.42;
				letter-spacing: normal;
				color: #666;
			}

			.container__links--wrapper {
				display: flex;
				flex-direction: column;

				.btn-add {
					width: 100%;
					display: flex;
					padding: 2rem 0rem;
					color: #36f;
					background-color: transparent;
					font-size: 1.5rem;
				}

				.links {
					ul {
						list-style: none;

						.link {
							margin: 0;
							padding: 20px 30px;
							position: relative;
							border-radius: 1rem;
							border: none;
							border-bottom: 1px solid #f1f1f1;
							background-color: #fff;
							list-style: none;
						}

						.link-item {
							display: flex;
							align-items: flex-start;
							gap: 15px;
						}

						.link-item__dropdown {
							display: flex;
							-ms-flex-pack: justify;
							justify-content: space-between;
							-ms-flex-align: center;
							align-items: center;
							position: relative;
							width: 100%;
							height: 50px;
							padding-right: 15px;
							padding-left: 15px;
							border-radius: 5px;
							border: 1px solid #e1e2e3;
							background-color: #fff;
							font-size: 15px;
							max-width: 180px;
							height: 48px;

							select {
								position: absolute;
								top: 0;
								left: 0;
								z-index: 1;
								width: 100%;
								height: 100%;
								padding-left: 15px;
								border: 0;
								outline: none;
								appearance: none;
								background: transparent;
								option {
									font-weight: normal;
									display: block;
									min-height: 1.2em;
									padding: 0px 2px 1px;
									white-space: nowrap;
								}
							}
						}

						.link-item__input {
							width: 100%;
							.link-address {
								font-weight: 400;
								font-size: 16px;
								line-height: 150%;
								padding: 13px 0;
								resize: none;
								background-color: transparent;
								border: none;
								outline: none;
								margin-bottom: 3px;
								border-radius: 0;
								height: auto;
								width: 100%;
								white-space: pre-wrap;
								word-wrap: break-word;
							}

							.link-description {
								background-color: transparent;
								border: none;
								padding: 0;
								margin-bottom: 3px;
								border-radius: 0;
								height: auto;
								width: 100%;
								white-space: pre-wrap;
								word-wrap: break-word;
								color: #767676;
								outline: none;
							}
						}
						button {
							background-color: transparent;
							font-size: 1.5rem;
						}
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
			width: 16.5rem;
			height: 4.875rem;
			padding: 0.75rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			padding: 1rem 1rem;
			border: none;
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

		button:nth-child(3) {
			background: #5877fc;
			color: #fff;
		}
	}
`;

const S = { OutputCreatePage };

export default S;
