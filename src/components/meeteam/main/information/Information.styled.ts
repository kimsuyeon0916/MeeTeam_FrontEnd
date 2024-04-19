import styled from 'styled-components';

const InformationLayout = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.8rem;

	.information__grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1.8rem;
		row-gap: 1.8rem;
	}
`;

const S = { InformationLayout };

export default S;
