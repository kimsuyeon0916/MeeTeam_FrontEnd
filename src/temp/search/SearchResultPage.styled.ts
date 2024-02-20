import styled from 'styled-components';

const SearchResultPage = styled.div`
	margin: 0 auto;
	width: 108rem;
	margin-bottom: 5rem;

	.container-bar {
		position: relative;
		margin-top: 3.2rem;
		display: inline-flex;
		justify-content: flex-start;
		align-items: center;
		width: 100%;

		img {
			position: absolute;
			left: 21rem;
			top: 1.5rem;
		}

		.container-input {
			width: 100%;
			input {
				display: flex;
				margin: 0 auto;
				width: 70rem;
				height: 5rem;
				padding: 0.6rem 1.8rem 0.6rem 5rem;
				box-sizing: border-box;
				align-items: center;
				gap: 1rem;
				flex-shrink: 0;
				border-radius: 10rem;
				background: var(--sub-color, #e0e6ff);
				border: none;
				outline: none;
				font-size: 1.8rem;
				font-weight: 400;
			}
		}
	}

	.container-relate {
		width: 70rem;
		margin: 0 auto;
		margin-top: 3.2rem;

		.title-total {
			color: #373f41;
			font-size: 2rem;
			font-style: normal;
			font-weight: 400;
			line-height: 120%; /* 2.4rem */
			letter-spacing: 0.02rem;
		}

		.container-relate__keywords {
			margin-top: 2.5rem;
			display: flex;
			flex-direction: column;

			span {
				color: #373f41;
				font-size: 1.4rem;
				font-style: normal;
				font-weight: 400;
				line-height: 120%;
				letter-spacing: 0.02rem;
			}

			.keywords {
				display: flex;
				flex-wrap: wrap;
				gap: 0.8rem;
				margin-top: 0.6rem;

				.keyword {
					display: flex;
					height: 3.3rem;
					padding: 0.7rem 2.2rem;
					justify-content: center;
					align-items: center;
					gap: 1rem;
					flex-shrink: 0;
					border-radius: 0.6rem;
					background: #5877fc;
					color: #fff;
					font-size: 1.4rem;
					font-style: normal;
					font-weight: 400;
					line-height: 2.4rem;
					letter-spacing: -0.028rem;
					cursor: pointer;
				}
			}
		}
	}

	.container-types {
		display: flex;
		align-items: center;
		margin-top: 5.25rem;
		gap: 5.4rem;
		margin-left: 3rem;

		span {
			color: #373f41;
			font-size: 1.8rem;
			font-style: normal;
			font-weight: 400;
			line-height: 5.6rem;
			letter-spacing: 0.02rem;
			cursor: pointer;
		}
	}

	.container-results {
		border-radius: 1rem;
		border: 1px solid #dcdcdc;
		background: #f9f9f9;
		min-height: 60rem;
	}
`;

const S = { SearchResultPage };

export default S;
