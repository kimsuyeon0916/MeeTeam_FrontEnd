import styled from 'styled-components';

const RecruitPage = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;

	.container-filter_area {
		display: flex;
		margin-right: 2.6rem;
		margin-top: 2.3rem;
		.area {
			display: flex;
			width: 8.5rem;
			height: 3.5rem;
			padding: 0.75rem;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			flex-shrink: 0;
			border-radius: 7.5rem;
			background-color: #fcefaa;
			color: #000;
			font-family: Apple SD Gothic Neo;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 2.1rem; /* 100% */
			letter-spacing: 0.015rem;
			cursor: pointer;
		}

		.no {
			background-color: #fff;
		}

		.out {
			background-color: #f3f5ff;
		}
	}

	.container-filter_menu {
		display: flex;
		gap: 1.65rem;
		margin-top: 2.02rem;
	}
	.sep {
		width: 0.3rem;
		height: 3.225rem;
		flex-shrink: 0;
		background-color: #d9d9d9;
	}
	.dropdown-spec {
		display: flex;
		margin-left: 3rem;
		gap: 1.65rem;
	}

	hr {
		margin-top: 2.32rem;
		margin-bottom: 2.32rem;
		background: #ababab;
		height: 0.75px;
		border: 0;
	}

	.container-options {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.container-options__filters {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 0.75rem;

			.filter {
				display: flex;
				width: 13.125rem;
				height: 3.525rem;
				padding: 0.75rem;
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
				cursor: pointer;
			}

			.bookmark {
				border-radius: 7.5rem;
				background: #f7e8fb;
			}
		}

		.container-options__search {
			display: inline-flex;
			justify-content: flex-start;
			padding: 0.8625rem 2rem 0.8625rem 1.2rem;
			box-sizing: border-box;
			height: 3.525rem;
			align-items: center;
			width: 25.175rem;
			gap: 1.2rem;
			border-radius: 7.5rem;
			border: 0.75px solid #dcdcdc;
			background: #f9f9f9;
			color: var(--Light-Black, var(--text-color-2, #373f41));
			font-family: Apple SD Gothic Neo;
			font-size: 1.2rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.35rem; /* 112.5% */
			letter-spacing: 0.015rem;

			svg {
				display: flex;
				align-items: center;
			}

			input {
				width: 20rem;
				border: none;
				outline: none;
				font-size: 1.2rem;
				background-color: transparent;
			}
		}
	}

	.container-contents {
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		gap: 3.75rem;
		margin-bottom: 5rem;

		.container-contents__row {
			.subtitle {
				color: var(--Light-Black, var(--text-color-2, #373f41));
				font-family: Apple SD Gothic Neo;
				font-size: 2rem;
				font-style: normal;
				font-weight: 500;
				line-height: 4.2rem; /* 200% */
				letter-spacing: 0.015rem;
			}

			.contents {
				display: flex;
				margin: 0 auto;
				gap: 1.8rem;

				.content {
					display: flex;
					flex-direction: column;
					width: 25.65rem;
					height: 18.375rem;
					flex-shrink: 0;
					border-radius: 0.75rem;
					border: 1.5px solid var(--main-color, #ababab);
					background: #f9f9f9;
					padding: 1.35rem 1.5rem 1.8rem 1.5rem;
					cursor: pointer;

					&:hover {
						transition: 0.7s;
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
`;

const S = { RecruitPage };

export default S;
