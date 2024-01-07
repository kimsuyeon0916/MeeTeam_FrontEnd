import styled from 'styled-components';

interface RadiusProfileProps {
	$size?: string;
	$index?: number;
}
const RadiusProfileLayout = styled.div<RadiusProfileProps>`
	position: ${props => (props.$index === 0 ? '' : 'absolute')};
	left: ${props => 4.3 + 2.5 * props.$index}rem;
	width: ${props =>
		props.$size === 'big' ? '7.0873rem' : props.$size === 'middle' ? '5.5125rem' : '4.3313rem'};
	height: ${props =>
		props.$size === 'big' ? '7.0873rem' : props.$size === 'middle' ? '5.5125rem' : '4.3313rem'};
	border-radius: 70%;
	overflow: hidden;
	border: 0.075rem solid #b9b9b9;
	z-index: ${props => props.$index};
`;

const RadiusProfileImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const S = { RadiusProfileLayout, RadiusProfileImage };

export default S;
