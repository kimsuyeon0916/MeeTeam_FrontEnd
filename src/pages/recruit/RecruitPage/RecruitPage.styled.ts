import styled from 'styled-components';

const RecruitPage = styled.div`
	width: clamp(45%, 96rem, 75%);
	margin: 0 auto;

	h2 {
		color: #373f41;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 2.9rem;
		letter-spacing: 0.0048rem;
	}

	h3 {
		color: #8e8e8e;
		font-size: 2rem;
		font-weight: 600;
		line-height: 2.4rem;
		letter-spacing: 0.004rem;
	}

	.body1 {
		color: #8e8e8e;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.body2 {
		color: #5877fc;
		font-size: 1.4rem;
		font-weight: 600;
		letter-spacing: 0.0028rem;
	}

	.wrapper-title {
		display: flex;
		align-items: center;
		margin-top: 6rem;
		gap: 1.6rem;

		.sep {
			font-size: 3rem;
			color: #e3e3e3;
		}

		.container-field {
			display: flex;
			align-items: center;
		}
	}

	.wrapper-filters {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 3.2rem;

		.container-filters {
			display: flex;
			align-items: center;
			gap: 1.6rem;

			.dropdown-detailed {
				position: relative;
				display: flex;
				align-items: center;
				padding: 1.2rem 1rem 1.2rem 1.6rem;
				border: 0.75px solid #e0e6ff;
				box-sizing: border-box;
				border-radius: 0.6rem;
				font-size: 1.5rem;
				color: #373f41;
				font-weight: 400;
				width: 13rem;

				.dropdown-box {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: space-between;
				}

				.container-dropdown {
					position: absolute;
					top: 5rem;
					left: 0rem;
					display: flex;
					width: 74.8rem;
					height: 39.9rem;
					align-items: flex-start;
					border-radius: 1rem;
					border: 1px solid #e3e3e3;
					background: #fff;
					box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
					z-index: 501;

					.sidebar {
						display: flex;
						height: 100%;
						padding: 2.8rem 2.8rem 2.8rem 3.2rem;
						box-sizing: border-box;
						flex-direction: column;
						border-right: 0.1rem solid #e3e3e3;
						gap: 2.1rem;

						.sidebar-elem {
							cursor: pointer;
						}
					}

					.dropdown-search {
						padding: 2.8rem 3.2rem 2.8rem 2.8rem;
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						gap: 2rem;
						position: relative;

						.search {
							width: 58rem;
							height: 4.8rem;
							border-radius: 1rem;
							border: 1px solid #e3e3e3;
							background: #fff;
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 1.2rem 1.6rem;
							box-sizing: border-box;

							input {
								padding: 0;
								margin: 0;
								border: none;
								outline: none;
							}
						}

						.role-menu {
							width: 58rem;
							position: absolute;
							top: 12rem;
							border-radius: 1rem;
							border: 1px solid #e3e3e3;
							padding: 1.2rem 1.6rem;
							box-sizing: border-box;
							background: #fff;
							box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

							ul {
								display: flex;
								flex-direction: column;
								gap: 1.2rem;
								color: #8e8e8e;

								li {
									cursor: pointer;
									&:hover {
										color: #373f41;
									}
								}
							}
						}

						.container-tag {
							display: flex;
							width: 58rem;
							height: 18rem;
							padding: 1.8rem 2rem;
							align-items: flex-start;
							align-content: flex-start;
							gap: 1.6rem;
							flex-wrap: wrap;
							border-radius: 1rem;
							background: #f8fafb;

							.tags {
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

						.container-btns {
							display: flex;
							align-items: center;
							gap: 1.6rem;
							justify-content: flex-end;

							.clear {
								display: flex;
								align-items: center;
								gap: 0.4rem;
								cursor: pointer;

								span {
									margin-top: 0.2rem;
									font-size: 1.4rem;
									letter-spacing: 0.0028rem;
									color: #8e8e8e;
								}
							}

							button {
								display: flex;
								height: 3.6rem;
								padding: 1.2rem 2rem;
								box-sizing: border-box;
								border-radius: 0.6rem;
								background: #5877fc;
								color: #fff;
								font-size: 1.4rem;
								line-height: 1.7rem;
								justify-content: center;
								align-items: center;
							}
						}
					}
				}
			}
		}

		.container-options__search {
			display: inline-flex;
			justify-content: flex-start;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;
			align-items: center;
			width: 26rem;
			gap: 1.2rem;
			border-radius: 7.5rem;
			border: 0.75px solid #dcdcdc;
			background: #fff;
			color: #373f41;
			font-size: 1.2rem;
			font-weight: 400;
			line-height: 1.35rem;
			letter-spacing: 0.015rem;

			input {
				width: 20rem;
				border: none;
				outline: none;
				font-size: 1.2rem;
				background-color: transparent;
				font-size: 1.4rem;
			}
		}
	}

	hr {
		margin-top: 2.32rem;
		margin-bottom: 2.32rem;
		background: #e3e3e3;
		height: 0.75px;
		border: 0;
	}

	.container-contents {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 3.75rem;
		margin-bottom: 5rem;

		.bookmark-intro {
			display: flex;
			align-items: center;
			gap: 0.8rem;

			img {
				width: 1.4rem;
				height: 1.8rem;
			}
		}

		.container-contents__grid {
			margin-top: 2rem;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 1.8rem 1.8rem;
		}
	}

	.container-pagination {
		display: flex;
		justify-content: center;
		align-items: center;

		ul {
			list-style: none;
			display: flex;
		}
	}
`;

const S = { RecruitPage };

export default S;
