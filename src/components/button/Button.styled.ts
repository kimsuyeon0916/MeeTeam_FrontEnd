import styled from 'styled-components';

const ButtonLayout = styled.button<{ $add?: boolean }>`
	all: unset;
	display: flex;
	width: 4.8rem;
	height: 4.8rem;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	border-radius: 1rem;
	${props =>
		props.$add
			? `border: 1px solid #e3e3e3; background: #fff;`
			: `border: 1px solid #8E8E8E; background: #F6F6F6;`}
`;

const S = { ButtonLayout };

export default S;
