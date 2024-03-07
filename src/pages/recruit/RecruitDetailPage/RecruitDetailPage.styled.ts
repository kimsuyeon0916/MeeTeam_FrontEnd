import styled from 'styled-components';

const RecruitDetailPage = styled.section`
	width: clamp(33.33%, 108rem, 66.66%);
	margin: 0 auto;
	margin-top: 3.38rem;
	margin-bottom: 3.38rem;
	background-color: #fff;
	overflow: hidden;

	.container-header {
		display: flex;
		align-items: center;
		gap: 0.9rem;

		.container-header__profile {
			display: flex;
			align-items: center;

			span {
				margin-left: 0.6rem;
				color: #373f41;
				font-size: 1.6rem;
				font-weight: 600;
				line-height: 1.9rem;
				letter-spacing: 0.0032rem;
			}
		}

		.bubble {
			color: #373f41;
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
			border-radius: 2rem;
			border: 0.1rem solid #e0e6ff;
			background: #fff;
			padding: 0.8rem 1rem;
		}

		.first {
			margin-left: 0.7rem;
		}

		.date {
			margin-left: 0.8rem;
			color: #8e8e8e;
			font-size: 1.4rem;
			font-weight: 500;
			line-height: 1.7rem;
			letter-spacing: 0.0028rem;
		}
	}

	h1 {
		color: #151515;
		font-size: 2.8rem;
		font-weight: 700;
		line-height: 3.6rem;
		letter-spacing: 0.0056rem;
		margin-top: 1.13rem;
	}

	.wrapper-info {
		margin-top: 4rem;
		border-radius: 1rem;
		border: 0.075rem solid #e3e3e3;
		background: #fff;
		display: flex;
		padding: 4.8rem 9.8rem;
		box-sizing: border-box;
		gap: 16rem;

		.container-info {
			display: flex;
			align-items: flex-end;
			gap: 4.2rem;
			line-height: 1.9rem;
			letter-spacing: 0.0032rem;
			font-size: 1.6rem;

			.subtitles {
				display: flex;
				flex-direction: column;
				color: #8e8e8e;
				gap: 4rem;
			}

			.values {
				display: flex;
				flex-direction: column;
				color: #373f41;
				font-weight: 600;
				gap: 4rem;

				section {
					display: flex;
					gap: 2rem;

					span:nth-child(2) {
						color: #5877fc;
					}
				}
			}
		}
	}

	.wrapper-description {
		margin-top: 8rem;

		hr {
			height: 0.1125rem;
			background: #e3e3e3;
			border: none;
		}

		p {
			padding: 4.8rem 9.8rem;
			color: #373f41;
			font-size: 1.6rem;
			font-weight: 500;
			line-height: 1.9rem;
			letter-spacing: 0.0032rem;
			box-sizing: border-box;
		}
	}

	h3 {
		color: #151515;
		font-size: 2rem;
		font-weight: 600;
		line-height: 2.4rem;
		letter-spacing: 0.004rem;
	}

	.wrapper-roles {
		margin-top: 8rem;

		.scroll {
			width: 120%;
			overflow-x: scroll;

			&::-webkit-scrollbar {
				display: none;
			}
		}

		.container-roles {
			margin-top: 1.98rem;
			display: flex;
			gap: 1.6rem;
			background-color: #fff;
			overflow: hidden;

			.wrapper-card {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				width: 24rem;
				height: 27rem;
				border-radius: 1rem;
				border: 0.075rem solid #e3e3e3;
				background: #fff;
				padding: 1.8rem 2rem;
				box-sizing: border-box;

				.container-role_info {
					section {
						display: flex;
						flex-wrap: wrap;
						margin-top: 1.2rem;
						gap: 0.8rem;
					}
				}

				h4 {
					color: #373f41;
					font-size: 1.4rem;
					font-weight: 600;
					line-height: 1.7rem;
					letter-spacing: 0.0028rem;
				}

				hr {
					width: 100%;
					margin: 1.6rem 0;
				}

				.apply-info {
					display: flex;
					gap: 4.8rem;
					margin-top: 1.24rem;
					margin-bottom: 1.6rem;

					.people {
						font-size: 1.2rem;
						line-height: 1.4rem;
						letter-spacing: 0.0024rem;

						span:nth-child(1) {
							color: #8e8e8e;
							font-weight: 500;
							margin-right: 0.68rem;
						}
						span:nth-child(2) {
							color: #373f41;
							font-weight: 600;
						}
					}
				}

				.progress-bar {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;

					span {
						color: #373f41;
						font-size: 1rem;
						line-height: 1.2rem;
						letter-spacing: 0.002rem;
					}
				}
			}
		}
	}

	.tag {
		display: flex;
		padding: 0.6rem 0.8rem;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		box-sizing: border-box;
		border-radius: 1.5rem;
		background: #e0e6ff;
	}

	.wrapper-tags {
		margin-top: 8rem;
		display: flex;
		flex-direction: column;

		.container-tags {
			margin-top: 2rem;
			display: flex;
			flex-wrap: wrap;
			gap: 1.6rem;

			span {
				height: 3.2rem;
				color: #151515;
				font-size: 1.4rem;
				font-weight: 600;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;
				padding: 0.8rem 1rem;
			}
		}
	}

	.wrapper-btn {
		margin-top: 8rem;
		display: flex;
		justify-content: center;

		button {
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			justify-content: center;
			align-items: center;
			border-radius: 0.6rem;
			border: 0.15rem solid #e3e3e3;
			background: #fff;
			font-size: 1.6rem;
			color: #373f41;
		}
	}

	.wrapper-comments {
		.container-title {
			display: flex;
			align-items: flex-end;
			gap: 0.4rem;
			span {
				color: #5877fc;
				font-size: 1.2rem;
				font-weight: 600;
				line-height: 1.4rem;
			}
		}

		hr {
			margin-top: 1.18rem;
			background: #e3e3e3;
			border: none;
			height: 0.075rem;
		}

		.container-comments {
			padding: 1.6rem 3rem;
			box-sizing: border-box;
		}
	}
`;

const S = {
	RecruitDetailPage,
};

export default S;
