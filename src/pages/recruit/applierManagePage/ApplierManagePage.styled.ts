import styled from 'styled-components';

interface ApplicantManage {
	$isChecked: boolean;
}

const ApplierManagePage = styled.section<ApplicantManage>`
	width: clamp(45%, 96rem, 75%);
	margin: 0 auto;
	display: flex;
	justify-content: center;
	gap: 5.4rem;
	margin-bottom: 20rem;
	position: relative;

	h1 {
		color: #151515;
		font-size: 2.8rem;
		font-weight: 700;
		line-height: 3.6rem;
		letter-spacing: 0.0056rem;
	}

	h4 {
		color: #373f41;
		font-size: 1.8rem;
		font-weight: 600;
		line-height: 2.1rem;
		letter-spacing: 0.0036rem;
	}

	.body1-semibold {
		color: #373f41;
		font-size: 1.6rem;
		font-weight: 600;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.body1-medium {
		color: #8e8e8e;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.body2-semibold {
		color: #373f41;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.body2-medium {
		color: #8e8e8e;
		font-size: 1.4rem;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.text-small {
		color: #f7faff;
		font-size: 1.4rem;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.text-big {
		color: #8e8e8e;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.wrapper-applicants {
		width: 100%;
		margin-top: 8rem;
		position: relative;

		.container-title {
			position: relative;

			.page-link {
				position: absolute;
				right: 1rem;
				top: 4.8rem;
				cursor: pointer;

				&:hover {
					transform: 0.2s;
					transition: 0.2s ease-in-out;
					color: #5877fc;
				}
			}
		}

		.container-link {
			display: flex;
			flex-direction: column;
			gap: 1.2rem;
			margin-top: 6rem;

			.input-link {
				display: flex;
				justify-content: space-between;
				align-items: center;
				gap: 2rem;
				width: 100%;

				.container-input__link {
					display: flex;
					align-items: center;
					gap: 0.8rem;
				}

				.input-chat {
					display: flex;
					width: 100%;
					height: 4.8rem;
					padding: 1.2rem 1.6rem;
					align-items: center;
					gap: 1rem;
					box-sizing: border-box;
					border-radius: 1rem;
					border: 1px solid #e3e3e3;
					background: #fff;
				}
			}

			.btn-setting {
				display: flex;
				width: 7rem;
				height: 3.6rem;
				padding: 1.2rem 2rem;
				justify-content: center;
				align-items: center;
				border-radius: 0.6rem;
				background: #5877fc;
				margin-right: 0.8rem;
			}
		}

		.container-applicants {
			margin-top: 6rem;

			.header-applicants {
				padding-top: 2rem;
				position: sticky;
				top: 0rem;
				z-index: 301;
				background-color: #fff;
			}

			.header-title {
				display: flex;
				flex-direction: column;
				gap: 1.2rem;
			}

			.header-control {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 2rem;

				.btn-container {
					display: flex;
					align-items: center;
					gap: 1.6rem;

					button {
						display: flex;
						height: 4.8rem;
						padding: 1.2rem 3.2rem;
						justify-content: center;
						align-items: center;
						border-radius: 0.6rem;
						background: #e3e3e3;
					}

					.refused {
						background-color: ${props => props.$isChecked && '#F85858'};
						color: ${props => props.$isChecked && '#F8FAFB'};
					}

					.approved {
						background-color: ${props => props.$isChecked && '#5877FC'};
						color: ${props => props.$isChecked && '#F7FAFF'};
					}
				}
			}

			.header-border {
				height: 0.075rem;
				background: #373f41;
				border: none;
				margin-top: 1.2rem;
			}
		}
	}

	.current-recruit {
		width: 34rem;
		height: 41.1rem;
		overflow-y: scroll;
		margin-top: 9rem;
		border-radius: 0.8rem;
		border: 1px solid #e3e3e3;
		background: #fff;
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
		position: sticky;
		top: 5rem;

		.container-title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1.45rem 1.2rem 1.2rem 1.6rem;
		}

		.container-roles {
		}
	}

	.btn-floating {
		position: fixed;
		z-index: 101;
		width: 5.6rem;
		height: 5.6rem;
		bottom: 5rem;
		right: 4rem;
		border-radius: 50%;
		box-shadow:
			0px 4px 20px 0px rgba(0, 0, 0, 0.1),
			0px 2px 2px 0px rgba(0, 0, 0, 0.25);
		cursor: pointer;

		.background {
			position: relative;

			.arrow {
				display: flex;
				flex-direction: column;
				position: absolute;
				top: 1.2rem;
				right: 1.9rem;
				span {
					margin-top: 0.5rem;
				}
			}
		}
	}
`;

const S = { ApplierManagePage };

export default S;
