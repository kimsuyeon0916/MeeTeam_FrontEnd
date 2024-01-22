import styled from 'styled-components';

interface Props {
	$isRound: boolean;
	$color: string;
}

const RecruitDetailPage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	margin-top: 3.38rem;
	margin-bottom: 3.38rem;

	.container {
		display: flex;
		gap: 1.5rem;

		.container-left {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			width: 71.4rem;

			.container-info {
				/* height: 54rem; */
				border-radius: 0.75rem;
				border: 1.5px solid #eeecff;
				background: #fff;
				padding: 2.25rem 3.45rem;
				box-sizing: border-box;

				.container-info__title {
					display: flex;
					align-items: center;
					gap: 1.27rem;
					margin-top: 0.5rem;

					h1 {
						margin-top: 0.2rem;
						color: #000;
						font-family: Apple SD Gothic Neo;
						font-size: 2.4rem;
						font-style: normal;
						font-weight: 400;
						line-height: 3rem;
						letter-spacing: 0.015rem;
					}
				}

				.container-info__writer {
					display: flex;
					align-items: center;
					gap: 0.7rem;
					margin-top: 1.37rem;

					.profile-img {
						width: 3.3075rem;
						height: 3.3075rem;
						flex-shrink: 0;
						background-color: #bcd7ff;
						border-radius: 50%;
					}

					div:nth-child(2) {
						color: var(--Light-Black, var(--text-color-2, #373f41));
						font-family: Apple SD Gothic Neo;
						font-size: 1.5rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.35rem; /* 90% */
						letter-spacing: 0.015rem;
					}
				}
			}

			.container-required__info {
				margin-top: 3.6rem;
				display: grid;
				grid-template-columns: 1fr 2fr;
				grid-row-gap: 1.5rem;
				grid-column-gap: 8rem;
			}

			.container-introduction {
				margin-top: 5rem;

				h4 {
					color: #000;
					font-family: Apple SD Gothic Neo;
					font-size: 1.8rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.8rem; /* 100% */
					letter-spacing: -0.036rem;
				}

				p {
					margin-top: 3rem;
					color: var(--text-color-2, #373f41);
					font-family: Pretendard;
					font-size: 1.6rem;
					font-style: normal;
					font-weight: 400;
					line-height: 150%; /* 2.7rem */
					letter-spacing: 0.015rem;
				}
			}

			.container-current {
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 1.5px solid #eeecff;
				background: #fff;
				padding: 2.33rem 3.45rem;

				.container-current__title {
					color: #000;
					font-family: Apple SD Gothic Neo;
					font-size: 1.8rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.8rem; /* 100% */
					letter-spacing: -0.036rem;
				}

				.container-current__roles {
					display: flex;
					flex-direction: column;
					justify-content: center;
					gap: 1.43rem;
					margin-top: 1.73rem;

					.container-current__roles--element {
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 45.75rem;
						/* height: 7.8rem; */
						flex-shrink: 0;
						border-radius: 0.75rem;
						border: 0.75px solid #dcdcdc;
						background: #f9f9f9;
						padding: 1.35rem 2.03rem 0.75rem 2.03rem;
						box-sizing: border-box;

						.roles-info {
							display: flex;
							flex-direction: column;
							justify-content: flex-start;
							gap: 0.8rem;
						}

						.roles-info__role {
							display: flex;
							align-items: center;
							gap: 1.25rem;

							.role {
								color: #000;
								font-family: Apple SD Gothic Neo;
								font-size: 1.65rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.8rem; /* 109.091% */
								letter-spacing: 0.015rem;
							}

							.members {
								display: flex;
								align-items: center;

								.member {
									width: 2.55rem;
									height: 2.55rem;
									flex-shrink: 0;
									cursor: pointer;
								}
							}
						}

						.roles-info__spec {
							display: flex;
							gap: 0.6rem;

							.spec {
								display: inline-flex;
								width: 7.275rem;
								height: 2.5rem;
								padding: 0.75rem 1.125rem;
								justify-content: center;
								align-items: center;
								gap: 0.75rem;
								flex-shrink: 0;
								color: var(--Light-Black, var(--text-color-2, #373f41));
								font-family: Apple SD Gothic Neo;
								font-size: 1.4rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.35rem; /* 90% */
								letter-spacing: 0.015rem;
								border-radius: 7.5rem;
								border: 0.75px solid #000;
								background: #fff;
							}
						}

						.roles-button {
							border: none;
							outline: none;
							width: 9.15rem;
							height: 4.125rem;
							flex-shrink: 0;
							border-radius: 0.75rem;
							color: #fff;
							font-family: Inter;
							font-size: 1.5rem;
							font-style: normal;
							font-weight: 400;
							line-height: 4.2rem; /* 233.333% */
							letter-spacing: 0.015rem;
							background: var(--main-color, #5877fc);
							cursor: pointer;
						}
					}
				}
			}
			.container-tags {
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 1.5px solid #eeecff;
				background: #fff;
				padding: 2rem 3.45rem;
				box-sizing: border-box;

				.container-tags__title {
					color: #000;
					font-family: Apple SD Gothic Neo;
					font-size: 1.8rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.8rem; /* 100% */
					letter-spacing: -0.036rem;
				}

				.container-tags__box {
					margin-top: 1.73rem;
					display: flex;
					align-items: center;
					gap: 0.97rem;

					.tag {
						display: flex;
						height: 3.15rem;
						padding: 0.75rem 1.125rem;
						justify-content: center;
						align-items: center;
						gap: 0.75rem;
						border-radius: 7.5rem;
						background: var(--sub-color, #e0e6ff);
						color: var(--Light-Black, var(--text-color-2, #373f41));
						font-family: Apple SD Gothic Neo;
						font-size: 1.5rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.35rem; /* 90% */
						letter-spacing: 0.015rem;
					}
				}
			}
		}

		.container-right {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			width: 34.8rem;

			.container-apply {
				border-radius: 0.75rem;
				border: 0.75px solid #dcdcdc;
				background: #f9f9f9;
				padding: 3.3rem 3rem 1.5rem 3rem;

				.container-apply__member {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					gap: 7rem;

					.type {
						color: #000;
						font-family: Apple SD Gothic Neo;
						font-size: 1.8rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.8rem; /* 100% */
						letter-spacing: -0.036rem;
					}

					.leader-info {
						display: flex;
						gap: 0.62rem;
						margin-top: 2rem;

						.leader-info__icon {
							width: 3.3075rem;
							height: 3.3075rem;
							flex-shrink: 0;
							border-radius: 50%;
							background-color: #bcd7ff;
						}

						.leader-info__name {
							display: flex;
							flex-direction: column;
							justify-content: center;
							gap: 0.3rem;

							span:nth-child(1) {
								color: var(--Light-Black, var(--text-color-2, #373f41));
								font-family: Apple SD Gothic Neo;
								font-size: 1.5rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.35rem; /* 90% */
								letter-spacing: 0.015rem;
							}

							span:nth-child(2) {
								color: #858585;
								font-family: Apple SD Gothic Neo;
								font-size: 1.2rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.35rem; /* 150% */
								letter-spacing: 0.015rem;
							}
						}
					}

					.member-info {
						position: relative;
						display: flex;
						position: relative;
						margin-top: 2rem;
						/* height: 3.3rem; */

						.member-info__icon {
							width: 3.15rem;
							height: 3.15rem;
							flex-shrink: 0;
						}

						.first {
							left: 2rem;
						}

						.second {
							right: 0rem;
						}

						.third {
							right: 2rem;
						}
					}
				}

				hr {
					margin-top: 2.8rem;
				}

				.container-apply__deadline {
					margin-top: 2.51rem;
					display: flex;
					flex-direction: column;
					gap: 0.75rem;

					span:nth-child(1) {
						color: #000;
						font-family: Apple SD Gothic Neo;
						font-size: 1.8rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.8rem; /* 100% */
						letter-spacing: -0.036rem;
					}
					span:nth-child(2) {
						color: var(--Light-Black, var(--text-color-2, #373f41));
						font-family: Apple SD Gothic Neo;
						font-size: 1.5rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.35rem; /* 90% */
						letter-spacing: 0.015rem;
					}
				}

				.container-apply__buttons {
					margin-top: 3.1rem;
					display: flex;
					flex-direction: column;
					gap: 0.75rem;
					align-items: center;

					button {
						border: none;
						outline: none;
						display: flex;
						width: 25.65rem;
						height: 4.275rem;
						padding: 0.75rem;
						justify-content: center;
						align-items: center;
						gap: 0.75rem;
						flex-shrink: 0;
						border-radius: 7.5rem;
						cursor: pointer;
					}

					button:nth-child(1) {
						background-color: #fff;
						border: 0.75px solid rgba(95, 92, 236, 0.76);
					}

					button:nth-child(2) {
						color: #fff;
						background: linear-gradient(270deg, rgba(95, 92, 236, 0.76) -6.3%, #d85cec 101.52%);
					}
				}

				.container-apply__form {
					display: flex;
					flex-direction: column;
					gap: 1.8rem;

					.container-apply__form-title {
						color: #000;
						font-family: 'Apple SD Gothic Neo';
						font-size: 1.8rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.8rem; /* 100% */
						letter-spacing: -0.036rem;
					}

					.container-apply__form-my {
						display: flex;
						align-items: center;
						gap: 0.85rem;

						span {
							color: var(--Light-Black, var(--text-color-2, #373f41));
							font-family: 'Apple SD Gothic Neo';
							font-size: 1.5rem;
							font-style: normal;
							font-weight: 400;
							line-height: 1.35rem; /* 90% */
							letter-spacing: 0.015rem;
						}
					}

					.container-apply__form-input {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-top: 1.75rem;
						gap: 1.65rem;

						.container-apply__roles {
							display: flex;
							width: 100%;
							height: 4rem;
							padding: 0.45rem 1.35rem;
							align-items: center;
							border-radius: 0.75rem;
							border: 1.125px solid #614bf7;
							background: #fff;
							outline: none;
							color: var(--Light-Black, var(--text-color-2, #373f41));
							font-family: 'Apple SD Gothic Neo';
							font-size: 1.3rem;
							font-style: normal;
							font-weight: 400;
							line-height: 140%; /* 2.1rem */
							letter-spacing: 0.015rem;
							cursor: pointer;
						}

						.container-apply__words {
							display: flex;
							width: 90%;
							height: 3rem;
							padding: 0.45rem 1.35rem;
							align-items: center;
							border-radius: 0.75rem;
							border: 1.125px solid #614bf7;
							background: #fff;
							outline: none;
						}
					}

					.container-apply__form-warn {
						display: flex;
						flex-direction: column;
						padding: 1.35rem 1.45rem;
						background-color: #fff;
						width: 100%;
						border-radius: 0.6rem;

						span:nth-child(1) {
							color: #000;
							font-family: 'Apple SD Gothic Neo';
							font-size: 1.5rem;
							font-style: normal;
							font-weight: 400;
							line-height: 1.8rem; /* 120% */
							letter-spacing: -0.03rem;
						}
						span:nth-child(2) {
							margin-top: 0.3rem;
							color: #686868;
							font-family: 'Apple SD Gothic Neo';
							font-size: 1.05rem;
							font-style: normal;
							font-weight: 400;
							line-height: 1.8rem; /* 171.429% */
							letter-spacing: -0.021rem;
						}

						.container-checkbox {
							display: flex;
							align-items: center;
							margin-top: 0.82rem;

							label {
								color: #000;
								font-family: 'Apple SD Gothic Neo';
								font-size: 1.2rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.8rem; /* 150% */
								letter-spacing: -0.024rem;
								margin-top: 0.2rem;
								margin-left: 0.4rem;
							}
						}
					}

					.container-apply__form-button {
						display: flex;
						height: 4.275rem;
						padding: 0.75rem;
						justify-content: center;
						align-items: center;
						gap: 0.75rem;
						flex-shrink: 0;
						border-radius: 7.5rem;
						background: linear-gradient(270deg, rgba(95, 92, 236, 0.76) -6.3%, #d85cec 101.52%);
						color: #fff;
					}
				}
			}

			.container-recommend {
				height: 24rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 0.75px solid #dcdcdc;
				background: #f6f6f6;
				display: flex;
				flex-direction: column;
				padding: 3.08rem 2.55rem 2.55rem 2.55rem;

				.title {
					color: #000;
					font-family: Apple SD Gothic Neo;
					font-size: 1.8rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.8rem; /* 100% */
					letter-spacing: -0.036rem;
				}

				.container-recommend__img {
					width: 29.7rem;
					position: relative;

					img {
						width: 100%;
						border-radius: 0.75rem;
						margin-top: 1.5rem;
					}

					.container-recommend__img--tags {
						display: flex;
						gap: 0.6rem;
						position: absolute;
						top: 2.5rem;
						left: 1rem;
					}
				}
			}
		}
	}
	.container-comments {
		width: 100%;
		height: 100%;
		flex-shrink: 0;
		border-radius: 0.75rem;
		border: 1.5px solid #bcd7ff;
		background: #f7faff;
		margin-top: 1.5rem;
		padding: 2rem 3.45rem;

		.container-comments__lists {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1.3rem;
			margin-bottom: 2rem;

			.comment {
				display: flex;
				gap: 2rem;
				align-items: center;

				.comment-icon {
					display: flex;
				}

				.comment-info {
					display: flex;
					flex-direction: column;
					gap: 0.3rem;

					span:nth-child(1) {
						color: #434343;
						font-family: 'Apple SD Gothic Neo';
						font-size: 1.2rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.35rem; /* 150% */
						letter-spacing: 0.015rem;
					}
					span:nth-child(2) {
						padding: 0.4rem 1.5rem;
						background-color: #fff;
						color: var(--text-color-2, #373f41);
						font-family: 'Apple SD Gothic Neo';
						font-size: 1.5rem;
						font-style: normal;
						font-weight: 400;
						line-height: 150%; /* 2.25rem */
						letter-spacing: 0.015rem;
						border-radius: 0.75rem;
					}
				}
			}
		}

		.container-comments__title {
			color: var(--Light-Black, var(--text-color-2, #373f41));
			font-family: Apple SD Gothic Neo;
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 3rem; /* 233.333% */
			letter-spacing: 0.015rem;
		}

		.container-comments__wrapper {
			.user-input {
				display: flex;
				gap: 2.1rem;

				.user-input__icon {
					width: 3.15rem;
					height: 3.15rem;
					flex-shrink: 0;
				}

				input {
					width: 79.8rem;
					height: 3.75rem;
					flex-shrink: 0;
					border-radius: 0.75rem;
					border: 0.75px solid #bebebe;
					background: #fff;
					outline: none;
					padding-left: 1.3rem;
				}

				button {
					display: flex;
					width: 12.7rem;
					height: 3.75rem;
					padding: 0.75rem;
					justify-content: center;
					align-items: center;
					gap: 0.75rem;
					flex-shrink: 0;
					border-radius: 0.6rem;
					background: var(--main-color, #5877fc);
					border: none;
					outline: none;
					color: #fff;
					cursor: pointer;
				}
			}
		}
	}
`;

const RequiredInformationItem = styled.li`
	display: flex;
	column-gap: 2.25rem;
	align-items: center;
	.required-information__row {
		display: flex;
		column-gap: 1.2rem;
	}
`;

const RequiredInformationHead = styled.h3`
	display: flex;
	color: var(--text-color, #151515);
	font-weight: 400;
	font-size: 1.4rem;
`;

const RequiredInformationSpan = styled.span<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem;
	height: 3.15rem;
	font-size: 1.4rem;
	font-weight: 400;
	border-radius: ${props => (props.$isRound ? `7.5rem` : `0.6rem`)};
	background: ${props => props.$color};
`;

const SRecruit = {
	RecruitDetailPage,
	RequiredInformationItem,
	RequiredInformationSpan,
	RequiredInformationHead,
};

export default SRecruit;
