import styled from 'styled-components';
import { SlArrowLeft } from 'react-icons/sl';

const GoBackButton = styled(SlArrowLeft)<{ $style?: string }>`
	position: absolute;
	width: 3rem;
	height: 4.8rem;
	cursor: pointer;
	${props => props.$style}
`;

const S = { GoBackButton };

export default S;
