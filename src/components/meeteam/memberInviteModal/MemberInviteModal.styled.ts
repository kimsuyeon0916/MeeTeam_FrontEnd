import styled from 'styled-components';

const MemberInviteModal = styled.div`
	width: 45.525rem;
	height: 52.575rem;
	position: fixed;
	border-radius: 0.75rem;
	border: 0.75px solid #dcdcdc;
	background: #f9f9f9;
	display: flex;
	flex-direction: column;
	z-index: 501;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.container-modal {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 2rem;
		box-sizing: border-box;
		margin: 0 auto;

		.container-modal__top {
			display: flex;
			justify-content: space-between;
			align-items: center;

			button {
				display: flex;
				justify-content: flex-end;
				background-color: transparent;
			}
		}

		.container-modal__search {
			margin-top: 0.8rem;
			display: flex;
			flex-direction: column;
			gap: 0.3rem;

			span {
				color: var(--text-color, #151515);
				font-family: Pretendard;
				font-size: 1.8rem;
				font-weight: 400;
				line-height: 120%; /* 2.16rem */
				letter-spacing: -0.036rem;
			}

			input {
				padding-left: 2rem;
				width: 100%;
				height: 4rem;
				border-radius: 0.75rem;
				border: 0.75px solid var(--box_stroke, #e3e3e3);
				background: #fff;
				box-sizing: border-box;
				outline: none;
			}
		}

		.container-modal__role {
			margin-top: 11rem;
			display: flex;
			flex-direction: column;
			gap: 0.3rem;

			span {
				color: var(--text-color, #151515);
				font-family: Pretendard;
				font-size: 1.8rem;
				font-weight: 400;
				line-height: 120%; /* 2.16rem */
				letter-spacing: -0.036rem;
			}

			.dropdown-header {
				position: relative;
				cursor: pointer;
				label {
					display: flex;
					color: var(--text-color-2, #373f41);
					font-family: Pretendard;
					font-size: 1.5rem;
					font-style: normal;
					font-weight: 400;
					line-height: 130%; /* 1.95rem */
					letter-spacing: 0.015rem;
					cursor: pointer;
				}

				padding: 1rem 2rem;
				width: 100%;
				height: 4rem;
				border-radius: 0.75rem;
				border: 0.75px solid var(--box_stroke, #e3e3e3);
				background: #fff;
				box-sizing: border-box;
				outline: none;
			}

			.dropdown {
				position: absolute;
				width: 100%;
				display: flex;
				flex-direction: column;
				top: 4.5rem;
				left: 0;
				border-radius: 0.75rem;
				border: 0.75px solid var(--box_stroke, #e3e3e3);
				background: #fff;

				span {
					color: #000;
					font-family: Pretendard;
					font-size: 1.2rem;
					font-style: normal;
					font-weight: 400;
					line-height: 1.65rem; /* 137.5% */
					letter-spacing: 0.015rem;
					width: 100%;
					padding: 1rem 2rem;
					box-sizing: border-box;

					&:hover {
						transition: 0.2s;
						color: #5877fc;
					}
				}
			}
		}

		.container-modal__button {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 11rem;

			.button-invite {
				display: flex;
				width: 16.5rem;
				height: 4.875rem;
				padding: 0.75rem;
				justify-content: center;
				align-items: center;
				border-radius: 0.3rem;
				background: var(--main-color, #5877fc);
				color: #fff;
				box-sizing: border-box;
				color: #fff;
				font-family: Pretendard;
				font-size: 1.8rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.35rem; /* 75% */
				letter-spacing: 0.015rem;
			}
		}
	}
`;

const SMember = { MemberInviteModal };

export default SMember;
