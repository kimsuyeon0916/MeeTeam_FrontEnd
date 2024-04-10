import styled from 'styled-components';

const Pagination = styled.article`
	margin-top: 12rem;
	margin-bottom: 22rem;
	button {
		background-color: transparent;
		color: #8e8e8e;
		text-align: center;
		font-size: 1.6rem;
		line-height: 1.7rem; /* 121.429% */
		letter-spacing: 0.0028rem;
	}

	.active {
		color: #5877fc;
		font-weight: 600;
	}
`;

const S = { Pagination };

export default S;
