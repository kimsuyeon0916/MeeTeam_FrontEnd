import styled from 'styled-components';

const RequiredInformationGrid = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, auto);
	column-gap: 9.75rem;
	row-gap: 1.57rem;
	font-family: Pretendard;
	font-size: 1.5rem;
	font-style: normal;
	width: clamp(50%, 108rem, 70%);
	// background-color: #fff;
	margin: 3rem auto;
	border: 0.75px solid #bcd7ff;
	border-radius: 0.75rem;
	padding: 2.25rem 5.7rem;
`;

const RequiredInformationItem = styled.li`
	display: flex;
	column-gap: 2.25rem;
	align-items: center;

	.required-information__row {
		display: flex;
		column-gap: 1.2rem;
	}
`;

const RequiredInformationHead = styled.h3`
	display: flex;
	color: var(--text-color, #151515);
	font-weight: 500;
`;

interface Props {
	$isRound: boolean;
	$color: string;
}
const RequiredInformationSpan = styled.span<Props>`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem;
	height: 3.15rem;
	font-weight: 400;
	border-radius: ${props => (props.$isRound ? `7.5rem` : `0.6rem`)};
	background: ${props => props.$color};
`;

const S = {
	RequiredInformationGrid,
	RequiredInformationItem,
	RequiredInformationHead,
	RequiredInformationSpan,
};

export default S;
