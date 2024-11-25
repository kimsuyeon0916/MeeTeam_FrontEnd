import styled from 'styled-components';

const ApplicantCard = styled.article`
	display: flex;
	width: 100%;
	padding: 1.8rem 2rem;
	align-items: flex-start;
	border-bottom: 1px solid #e3e3e3;
	background: #fff;

	.container-checkbox {
		width: 3.6rem;
		input {
			margin-top: 0.8rem;
		}
	}

	.value {
		color: #000000;
	}

	.container-user {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2.35rem;

		.header {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.user-icon {
				display: flex;
				align-items: center;
				gap: 0.55rem;
			}
			.user-info {
				display: flex;
				align-items: center;
				gap: 2rem;

				.user-element {
					display: flex;
					align-items: center;

					span {
						margin-top: 0.3rem;
					}
				}

				.score {
					margin-left: 0.3rem;
				}

				.more {
					cursor: pointer;
				}
			}
		}

		.wrapper-detailed {
			display: flex;
			flex-direction: column;
			gap: 1.6rem;

			.container-detailed {
				display: flex;
				gap: 10rem;
			}

			.container-detailed__row {
				display: flex;
				gap: 4rem;
			}

			.container-detailed__column {
				display: flex;
				flex-direction: column;
				gap: 1.1rem;
			}

			.detailed-hr {
				width: 100%;
				border: none;
				height: 0.1rem;
				background: #e3e3e3;
			}
		}

		.footer {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.apply-info {
				display: flex;
				align-items: center;
			}

			.message {
				margin-left: 1.2rem;
			}

			.btn-profile {
				display: flex;
				width: 14.5rem;
				height: 3.6rem;
				padding: 1.2rem 2rem;
				justify-content: center;
				align-items: center;
				border-radius: 0.6rem;
				border: 1px solid #e3e3e3;
				background: #fff;
			}
		}
	}
`;

const S = { ApplicantCard };

export default S;
