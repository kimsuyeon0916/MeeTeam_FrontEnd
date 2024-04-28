import styled from 'styled-components';

const Header = styled.header<{ $isLogin: boolean }>`
	position: relative;
	border-bottom: 0.375px solid #e3e3e3;

	.body2-semibold {
		color: #8e8e8e;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.header {
		display: flex;
		height: 6.75rem;
		width: clamp(45%, 96rem, 75%);
		align-items: center;
		flex-shrink: 0;
		background-color: #fff;
		justify-content: space-between;
		margin: 0 auto;
	}

	.header-leftside {
		display: flex;
	}

	.header__logo {
		display: flex;
		height: 1.29563rem;
		align-items: center;
		flex-shrink: 0;
		cursor: pointer;

		.logo,
		.logo-name {
			width: 4rem;
		}

		.logo-name {
			margin-left: 0.8rem;
		}

		.university {
			margin: 1rem 0 0 0.8rem;
			color: #373f41;
			font-size: 1.2rem;
			font-weight: 400;
			letter-spacing: 0.015rem;
		}
	}

	.header__navigation {
		display: flex;
		width: 26rem;
		justify-content: flex-start;
		align-items: center;
		gap: 3.2rem;
		margin-left: 6.05rem;

		.header__navigation--navi-text {
			color: #8e8e8e;
			font-size: 1.6rem;
			font-weight: 600;
			line-height: 1.9rem;
			letter-spacing: 0.0032rem;
			cursor: pointer;

			&:hover {
				color: #373f41;
				transition: 0.2s ease-in-out;
			}
		}
		.here {
			color: #5877fc;
		}
	}

	.header__menu {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		/* width: 24.2rem; */
		gap: 1.1rem;

		.header__nickname {
		}

		.header__menu--my {
			position: relative;
			cursor: pointer;

			.login {
				color: #8e8e8e;
				font-size: 1.6rem;
				font-weight: 600;
				line-height: 1.9rem;
				letter-spacing: 0.0032rem;

				&:hover {
					color: #373f41;
					transition: 0.2s ease-in-out;
				}
			}

			.icon-container {
				display: flex;

				.icon-border {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 3.2rem;
					height: 3.2rem;
					border: 1px solid #878787;
					border-radius: 50%;
				}
			}

			.dropdown {
				position: absolute;
				top: 4rem;
				right: 0rem;
				width: 15rem;
				background: #fff;
				border-radius: 0.8rem;
				border: 1px solid #e3e3e3;
				box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
				display: flex;
				flex-direction: column;
				gap: 2rem;
				padding: 2.4rem 2rem;
				z-index: 501;
			}

			.menu {
				color: #8e8e8e;
				font-size: 1.4rem;
				line-height: 1.7rem;
				letter-spacing: 0.0028rem;

				&:hover {
					color: #373f41;
					transition: 0.2s ease-in-out;
				}
			}

			hr {
				margin-top: 1.2rem;
				border: 1px solid #e3e3e3;
			}

			.logout {
				margin-top: -1.2rem;
			}
		}
	}

	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 105;
		background-color: rgba(0, 0, 0, 0.15);
	}
`;

const S = { Header };

export default S;
