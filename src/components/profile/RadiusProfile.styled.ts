import styled from 'styled-components';

const RadiusProfileLayout = styled.div<{ $size?: string }>`
	width: ${props =>
		props.$size === 'big' ? '7.0873rem' : props.$size === 'middle' ? '5.5125rem' : '3.3075rem'};
	height: ${props =>
		props.$size === 'big' ? '7.0873rem' : props.$size === 'middle' ? '5.5125rem' : '3.3075rem'};
	border-radius: 70%;
	overflow: hidden;
	border: 0.075rem solid #b9b9b9;
`;

const RadiusProfileImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const S = { RadiusProfileLayout, RadiusProfileImage };

export default S;
