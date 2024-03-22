import styled from 'styled-components';

interface ProfileImage {
	$size: string;
	$url?: string;
}

const ProfileImageLayout = styled.div<ProfileImage>`
	width: ${props => props.$size};
	height: ${props => props.$size};
	border-radius: 70%;
	overflow: hidden;
	border: ${props => props.$url && '0.075rem solid #b9b9b9'};
	cursor: pointer;
`;

const ProfileImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const S = { ProfileImageLayout, ProfileImage };

export default S;
