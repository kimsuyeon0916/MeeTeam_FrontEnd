import styled from 'styled-components';

const BasicInformation = styled.section`
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
`;

const S = { BasicInformation };

export default S;
