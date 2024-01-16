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
				height: 54rem;
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
					font-weight: 500;
					line-height: 1.8rem; /* 100% */
					letter-spacing: -0.036rem;
				}

				p {
					margin-top: 2rem;
					color: var(--text-color-2, #373f41);
					font-family: Pretendard;
					font-size: 1.5rem;
					font-style: normal;
					font-weight: 400;
					line-height: 150%; /* 2.7rem */
					letter-spacing: 0.015rem;
				}
			}

			.container-current {
				height: 26.1rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 1.5px solid #eeecff;
				background: #fff;
			}
			.container-tags {
				height: 7.88rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 1.5px solid #eeecff;
				background: #fff;
			}
		}

		.container-right {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
			width: 34.8rem;

			.container-apply {
				height: 33.6rem;
				border-radius: 0.75rem;
				border: 0.75px solid #dcdcdc;
				background: #f9f9f9;
			}
			.container-recommend {
				height: 24rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 0.75px solid #dcdcdc;
				background: #f6f6f6;
			}
		}
	}
	.container-comments {
		width: 100%;
		height: 23.25rem;
		flex-shrink: 0;
		border-radius: 0.75rem;
		border: 1.5px solid #bcd7ff;
		background: #f7faff;
		margin-top: 1.5rem;
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
