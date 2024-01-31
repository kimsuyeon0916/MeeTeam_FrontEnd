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
			}

			.container-recommend {
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 0.75px solid #dcdcdc;
				background: #f6f6f6;
				display: flex;
				flex-direction: column;
				padding: 3.08rem 2.55rem 2.55rem 2.55rem;
				gap: 1.5rem;

				.title {
					color: #000;
					font-family: Apple SD Gothic Neo;
					font-size: 1.8rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.8rem; /* 100% */
					letter-spacing: -0.036rem;
				}

				.content {
					display: flex;
					flex-direction: column;
					width: 100%;
					height: 18.375rem;
					flex-shrink: 0;
					border-radius: 0.75rem;
					border: 1.5px solid var(--main-color, #ababab);
					background: #f9f9f9;
					padding: 1.35rem 1.5rem 1.8rem 1.5rem;
					cursor: pointer;

					&:hover {
						transition: 0.3s ease-in-out;
						border: 1.5px solid var(--main-color, #5877fc);
					}

					.content-tags {
						display: flex;
						justify-content: space-between;

						.tags {
							display: flex;
							gap: 0.6rem;

							div:nth-child(1) {
								display: flex;
								width: 4.05rem;
								height: 2.4rem;
								padding: 0.75rem;
								justify-content: center;
								align-items: center;
								gap: 0.75rem;
								border-radius: 0.6rem;
								background: #e0e6ff;
								color: #000;
								font-family: Apple SD Gothic Neo;
								font-size: 1.2rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.35rem; /* 112.5% */
								letter-spacing: 0.015rem;
							}

							div:nth-child(2) {
								display: flex;
								width: 5.55rem;
								height: 2.4rem;
								padding: 0.75rem;
								justify-content: center;
								align-items: center;
								gap: 0.75rem;
								border-radius: 0.6rem;
								background: #e3f5ff;
								color: var(--Light-Black, var(--text-color-2, #373f41));
								font-family: Apple SD Gothic Neo;
								font-size: 1.1rem;
								font-style: normal;
								font-weight: 400;
								line-height: 1.35rem; /* 112.5% */
								letter-spacing: 0.015rem;
							}
						}
					}

					.content-title {
						height: 4.8rem;
						flex-shrink: 0;
						margin-top: 1.65rem;
						/* overflow: hidden; */
						color: var(--Light-Black, var(--text-color-2, #373f41));
						text-overflow: ellipsis;
						/* white-space: nowrap; */
						font-family: Apple SD Gothic Neo;
						font-size: 1.65rem;
						font-style: normal;
						font-weight: 400;
						line-height: 130%; /* 2.145rem */
						letter-spacing: 0.015rem;
					}

					.content-info {
						display: flex;
						margin-top: 5rem;
						justify-content: space-between;

						div {
							color: var(--Light-Black, var(--text-color-2, #373f41));
							font-family: Apple SD Gothic Neo;
							font-size: 1.2rem;
							font-style: normal;
							font-weight: 400;
							line-height: 1.35rem; /* 112.5% */
							letter-spacing: 0.015rem;
						}
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
