import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	width: 25.65rem;
	height: 13.5rem;
	flex-shrink: 0;
	border-radius: 0.75rem;
	cursor: pointer;

	.tag-container {
		position: relative;

		img {
			width: 100%;
			height: 100%;
			border-radius: 0.75rem;
		}
	}
`;

const S = { Card };

export default S;
