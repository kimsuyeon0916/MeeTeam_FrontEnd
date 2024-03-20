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
	}

	label {
		color: #8e8e8e;
		/* Body/body1/medium */
		font-size: 1.6rem;
		/* line-height: 1.9rem; */
		letter-spacing: 0.0032rem;
	}

	.container-basic {
		display: flex;
		width: 100%;
		margin-top: 4rem;

		.container-basic__inputs {
			width: 76.4rem;
			display: flex;
			flex-direction: column;
			gap: 2.8rem;

			.inputs-title {
				display: flex;
				flex-direction: column;

				input {
					display: flex;
					width: 100%;
					height: 4.8rem;
					padding: 1.2rem 1.6rem;
					box-sizing: border-box;
					border-radius: 1rem;
					border: 0.1rem solid #e3e3e3;
					background: #fff;
					margin-top: 0.8rem;
				}
			}

			.inputs-deadline {
				width: 48.5%;
			}

			.radio-btns {
				display: flex;
				align-items: center;
				gap: 2rem;
				margin-top: 1.6rem;
				width: 100%;

				.radio-btn {
					display: flex;
					align-items: center;
					gap: 0.8rem;
				}
			}

			.radio-input {
				width: 2rem;
				height: 2rem;
				border-radius: 99.9rem;
				border: 1px solid #e3e3e3;
				background: #fff;
				padding: 0;
				margin: 0;
			}

			.inputs-scope-category {
				display: flex;
				justify-content: flex-start;
				width: 100%;
				gap: 2rem;

				.container-scope {
					width: 100%;
				}
				.container-category {
					width: 100%;
				}
			}

			.inputs-dates {
				.container-dates {
					display: flex;
					gap: 2rem;
					width: 100%;

					.start-date {
						width: 100%;
					}
					.end-date {
						width: 100%;
					}
				}
			}

			.inputs-course {
				display: flex;
				flex-direction: column;
				width: 100%;

				.intro {
					display: flex;
					justify-content: space-between;
					margin-top: 0.95rem;

					.description {
						color: #8e8e8e;
						font-size: 1.4rem;
						line-height: 1.7rem;
						letter-spacing: 0.0028rem;
					}

					section {
						display: flex;
						align-items: center;

						input {
							padding: 0;
							margin: 0;
						}

						.course-label {
							font-size: 1.4rem;
							margin-left: 0.8rem;
							margin-top: 0.1rem;
						}
					}
				}

				.wrapper-inputs {
					display: flex;
					width: 100%;
					gap: 2rem;
					margin-top: 0.8rem;

					.container-inputs {
						width: 100%;

						input {
							height: 4.8rem;
							padding: 1.2rem 1.6rem;
							flex: 1 0 0;
							box-sizing: border-box;
							margin: 0;
							width: 100%;
							border-radius: 1rem;
							border: 1px solid #8e8e8e;
							background: #e3e3e3;
						}
					}
				}
			}
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

	.container-details {
		display: flex;
		width: 100%;
		margin-top: 4rem;

		.container-details__editor {
			width: 76.4rem;
			display: flex;
			flex-direction: column;

			.intro {
				color: #373f41;
				font-size: 1.4rem;
				font-weight: 600;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;
			}

			.editor {
				background-color: #fff;
				border-radius: 0.1rem;
				width: 100%;
				margin-top: 0.8rem;
			}

			.ql-container.ql-snow {
				border: 0.1rem solid #e3e3e3;
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
				padding: 0.8rem;
			}
		}
	}

	.container-roles {
		display: flex;
		width: 100%;
		margin-top: 4rem;
		min-height: 20rem;

		.container-roles__control {
			display: flex;
			width: 76.4rem;
			gap: 0.8rem;

			.inputs {
				display: flex;
				width: 100%;
				gap: 0.8rem;

				.role-input {
					width: 30%;
					height: 4.2rem;
					padding: 0 1.3rem;
					box-sizing: border-box;
					border: 0.1rem solid #e3e3e3;
					border-radius: 0.75rem;
				}

				.count-input {
					width: 15%;
					height: 4.2rem;
					padding: 0 1.3rem;
					box-sizing: border-box;
					border: 0.1rem solid #e3e3e3;
					border-radius: 0.75rem;
				}

				.container-skills {
					width: 100%;
					position: relative;
					height: 4.2rem;
					display: flex;
					align-items: center;
					flex-wrap: nowrap;
					padding: 0 1.3rem;
					box-sizing: border-box;
					border: 0.1rem solid #e3e3e3;
					border-radius: 0.75rem;
					overflow-x: scroll;
					overflow-y: hidden;

					&::-webkit-scrollbar {
						display: none;
					}

					.skills-input {
						display: inline-flex;
						min-width: 25rem;
						padding: 0;
						height: 4.875rem;
						border: none;
						outline: none;
						font-size: 1.4rem;
						background: transparent;
						outline: none;
						padding-left: 1.3rem;
						box-sizing: border-box;
					}

					.container-tags {
						display: inline-flex;
						height: 2.15rem;
						padding: 1.5rem 0 1.5rem 1.125rem;
						justify-content: center;
						align-items: center;
						flex-shrink: 0;
						margin: 5px;
						border-radius: 7.5rem;
						background: #e0e6ff;
						color: #373f41;
						font-size: 1.5rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.8rem;
						letter-spacing: 0.02rem;
						box-sizing: border-box;
					}

					button {
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: transparent;
						margin-left: 5px;
						border-radius: 50%;
						color: #54a0ff;
						border: none;
						box-sizing: border-box;
						cursor: pointer;

						img {
							width: 2rem;
							box-sizing: border-box;
						}
					}
				}
			}

			.add-btn {
				width: 4.2rem;
				height: 4.2rem;
				button {
					width: 4.2rem;
					height: 4.2rem;
					border-radius: 0.75rem;
					background: #fff;
					border: 0.1rem solid #e3e3e3;
					display: flex;
					justify-content: center;
					align-items: center;

					img {
						width: 2rem;
					}
				}
			}
		}
	}

	.container-tags {
		display: flex;
		width: 100%;
		margin-top: 4rem;
		min-height: 20rem;

		.container-tags__inputs {
			width: 100%;
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
