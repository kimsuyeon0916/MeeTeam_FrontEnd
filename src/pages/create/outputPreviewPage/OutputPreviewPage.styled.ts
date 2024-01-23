import styled from 'styled-components';

const OutputPreview = styled.div`
	width: clamp(45%, 108rem, 75%);
	margin: 0 auto;
	margin-bottom: 5rem;

	.container-images {
		display: flex;
		flex-direction: column;
		margin-top: 4.05rem;

		.container-images__title {
			display: flex;
			align-items: center;
			gap: 0.7rem;

			span {
				color: #000;
				text-align: center;
				font-family: 'Apple SD Gothic Neo';
				font-size: 2.7rem;
				font-style: normal;
				font-weight: 400;
				line-height: 4.2rem; /* 155.556% */
				letter-spacing: 0.015rem;
				margin-top: 0.3rem;
			}
		}

		.container-images__slide {
			position: relative;
			margin-top: 1.95rem;

			.slider {
				width: 100%;
				height: 51rem;
				border-radius: 0.6rem;
				background: #f1f1f1;
			}

			.left-btn {
				position: absolute;
				top: 45%;
				left: -5rem;
			}

			.right-btn {
				position: absolute;
				top: 45%;
				right: -5rem;
			}
		}
	}

	.container-info {
		display: flex;
		flex-direction: column;
		margin-top: 3.38rem;

		.container-info__subtitle {
			color: #000;
			font-family: 'Apple SD Gothic Neo';
			font-size: 2.4rem;
			font-style: normal;
			font-weight: 400;
			line-height: 4.2rem; /* 175% */
			letter-spacing: 0.015rem;
		}

		.container-info__tags {
			margin-top: 1.73rem;
		}

		.container-info__introduction {
			margin-top: 4.05rem;
			span {
				color: #000;
				font-family: 'Apple SD Gothic Neo';
				font-size: 1.8rem;
				font-style: normal;
				font-weight: 400;
				line-height: 1.8rem; /* 100% */
				letter-spacing: -0.036rem;
			}

			p {
				color: var(--text-color-2, #373f41);
				font-family: 'Apple SD Gothic Neo';
				font-size: 1.5rem;
				font-style: normal;
				font-weight: 400;
				line-height: 150%; /* 2.25rem */
				letter-spacing: 0.015rem;
				margin-top: 1rem;
			}
		}
	}

	.container-members {
		display: flex;
		flex-direction: column;
		margin-top: 3.75rem;

		.container-members__subtitle {
			color: var(--Light-Black, var(--text-color-2, #373f41));
			font-family: 'Apple SD Gothic Neo';
			font-size: 2.1rem;
			font-style: normal;
			font-weight: 400;
			line-height: 4.2rem; /* 200% */
			letter-spacing: 0.015rem;
		}

		.container-members__slide {
			margin-top: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2.25rem;

			.member-card {
				width: 32.025rem;
				height: 21rem;
				flex-shrink: 0;
				border-radius: 0.75rem;
				border: 0.75px solid #dcdcdc;
				background: #f9f9f9;
			}
		}
	}
`;

const S = { OutputPreview };

export default S;
