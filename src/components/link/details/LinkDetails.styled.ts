import styled from 'styled-components';

const LinkDetailsLayout = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: var(--text-color, #151515);

	h4 {
		width: 9.8rem;
	}

	img {
		margin-right: 0.6rem;
	}

	a {
		color: var(--text-color, #151515) !important;
	}
`;

const S = { LinkDetailsLayout };

export default S;
