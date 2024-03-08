import React from 'react';
import S from './RadiusProfile.styled';
import { DefaultProfileImage } from '../../assets';

interface ProfileImage {
	size: string;
	url?: string;
}

const RadiusProfile = ({ size, url }: ProfileImage) => {
	return (
		<S.RadiusProfileLayout $size={size} $url={url}>
			<S.RadiusProfileImage src={url ? url : DefaultProfileImage} alt='프로필이미지' />
		</S.RadiusProfileLayout>
	);
};

export default RadiusProfile;
