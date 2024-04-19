import styled from 'styled-components';

const RadioLabel = styled.label`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const RadioInput = styled.input`
	margin: 0 1.2rem;
	width: 2rem;
	height: 2rem;
`;

const S = { RadioLabel, RadioInput };

export default S;
