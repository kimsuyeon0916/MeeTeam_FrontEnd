import styled from 'styled-components';

const RecruitDescription = styled.article`
	margin-top: 8rem;

	hr {
		height: 0.1125rem;
		background: #e3e3e3;
		border: none;
	}

	.container-contents {
		margin-top: 4.8rem;
		padding: 0 9.8rem 1rem 9.8rem;
		color: #373f41;
		font-size: 1.6rem;
		font-weight: 500;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
		box-sizing: border-box;

		h1 {
			font-size: 3.2rem;
		}
		h2 {
			font-size: 2.4rem;
		}
		h3 {
			font-size: 1.872rem;
		}
		h4 {
			font-size: 1.6rem;
		}
		h5 {
			font-size: 1.328rem;
		}
		h6 {
			font-size: 1.072rem;
		}
		strong {
			font-weight: bold;
		}
		ul {
			list-style-type: circle;
			padding-left: 2rem;
		}
		ol {
			list-style-type: decimal;
			padding-left: 2rem;
		}

		em {
			font-style: italic;
		}
		blockquote {
			border-left: 4px solid #ccc;
			margin-bottom: 5px;
			margin-top: 5px;
			padding-left: 16px;
		}
	}
`;

const S = { RecruitDescription };

export default S;
