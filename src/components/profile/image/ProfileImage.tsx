import React from 'react';
import S from './ProfileImage.styled';
import { DefaultProfileImage } from '../../../assets';

interface ProfileImage {
	size: string;
	url?: string;
}

const ProfileImage = ({ size, url }: ProfileImage) => {
	return (
		<S.ProfileImageLayout $size={size} $url={url}>
			<S.ProfileImage src={url ? url : DefaultProfileImage} alt='프로필이미지' />
		</S.ProfileImageLayout>
	);
};

export default ProfileImage;
