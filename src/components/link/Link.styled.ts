import styled from 'styled-components';

const LinkLayout = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	column-gap: 1rem;

	/* 반응형 대비 */
	flex-wrap: wrap;
	row-gap: 1rem;
`;

const S = { LinkLayout };

export default S;
