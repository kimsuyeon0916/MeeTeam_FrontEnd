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
			background: #fff;
			color: #373f41;
			font-size: 1.2rem;
			font-weight: 400;
			line-height: 1.35rem;
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

		.container-contents__row {
			.container-subtitle {
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.subtitle {
				color: var(--Light-Black, var(--text-color-2, #373f41));

				font-size: 2rem;
				font-style: normal;
				font-weight: 500;
				line-height: 4.2rem;
				letter-spacing: 0.015rem;
			}

			select {
				border: none;
				outline: none;
				color: var(--Light-Black, var(--text-color-2, #373f41));

				font-size: 1.3rem;
				font-style: normal;
				font-weight: 400;
				line-height: 4.2rem; /* 280% */
				letter-spacing: 0.015rem;
			}
		}
		.contents {
			display: flex;
			margin: 0 auto;
			gap: 1.8rem;
		}

		.container-contents__grid {
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
