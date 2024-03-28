import styled from 'styled-components';

interface IDropdown {
	$showDropdown?: boolean;
	scope?: boolean;
	$isCheck?: boolean;
}

const Dropdown = styled.div<IDropdown>`
	position: relative;
	.wrapper {
		position: relative;
		display: flex;
		align-items: center;
		padding: 1.2rem 1rem 1.2rem 1.6rem;
		border: 0.75px solid ${props => (props.$showDropdown ? '#5877FC' : '#e0e6ff')};
		box-sizing: border-box;
		border-radius: 0.6rem;
		min-width: ${props => (props.scope ? '15rem' : '13rem')};
		justify-content: space-between;
		color: #373f41;
		font-size: 1.8rem;
		font-weight: 400;
		line-height: 2.1rem;
		letter-spacing: 0.015rem;
		box-sizing: border-box;
		cursor: pointer;

		.temp {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 6rem;
			cursor: pointer;
			color: #373f41;
			font-size: 3rem;
			width: 100%;

			.value {
				font-size: 1.5rem;
			}

			.icon {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 1.1rem;
			}
		}

		.dropdown {
			position: absolute;
			top: 5rem;
			width: 100%;
			right: 0rem;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;
			z-index: 500;
			border-radius: 1rem;
			border: 1px solid #e3e3e3;
			background: #fff;
			box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
			display: flex;

			.menu-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				font-size: 1.6rem;
				gap: 2rem;
				color: #8e8e8e;
				width: 100%;
				padding: 1.5rem 1rem;
				box-sizing: border-box;

				.menu-scope {
					position: relative;
					display: flex;
					align-content: center;
					gap: 0.8rem;
					width: 100%;

					input {
						margin: 0;
						padding: 0;
						width: 2rem;
						border: #5877fc;
					}

					input:checked + label {
						color: #000;
					}

					label {
						cursor: pointer;
					}

					&:hover {
						color: #373f41;
						transition: 0.2s;
					}
				}

				.inside {
					position: absolute;
					top: 0rem;
					left: 14.9rem;
					width: 67.6rem;
					height: 32.4rem;
					border-radius: 1rem;
					border: 1px solid #e3e3e3;
					background: #fff;
					box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
					padding: 2.8rem 3.2rem 2.8rem 2.5rem;
					z-index: 501;

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

								&:hover {
									border: 1px solid red;
								}
							}

							.course-label {
								font-size: 1.4rem;
								margin-left: 0.8rem;
								margin-top: 0.1rem;
								color: #8e8e8e;

								&:hover {
									color: #000;
									transition: 0.2s ease-in-out;
								}
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
							position: relative;

							input {
								height: 4.8rem;
								padding: 1.2rem 1.6rem;
								flex: 1 0 0;
								box-sizing: border-box;
								margin: 0;
								width: 100%;
								border-radius: 1rem;
								font-size: 1.6rem;
								border: 1px solid #8e8e8e;
								background: ${props => (props.$isCheck ? 'transparent' : '#e3e3e3')};

								&:hover {
									border: 1px solid #5877fc;
									transition: 0.2s ease-in-out;
								}
								&:focus {
									outline: none;
									border: 1px solid #5877fc;
								}
							}

							.dropdown {
								position: absolute;
								width: 100%;
								display: flex;
								flex-direction: column;
								font-size: 1.4rem;
								color: #8e8e8e;
								gap: 1.2rem;
								padding: 1.2rem 1.6rem;
								z-index: 401;
								background-color: #fff;
								border-radius: 1rem;
								border: 1px solid #e3e3e3;
								box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

								span {
									cursor: pointer;
								}
							}
						}
					}
				}

				li {
					&:hover {
						color: #373f41;
						transition: 0.2s;
					}
				}
			}
		}

		.category {
			min-width: 13rem;
			padding: 0.2rem 0.2rem;
			box-sizing: border-box;
		}
	}
`;

const S = { Dropdown };

export default S;
