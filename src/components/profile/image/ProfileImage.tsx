import React from 'react';
import S from './ProfileImage.styled';
import { DefaultProfileImage } from '../../../assets';
import { useNavigate } from 'react-router';

interface ProfileImage {
	nickname?: string;
	size: string;
	url?: string;
}

const ProfileImage = ({ nickname, size, url }: ProfileImage) => {
	const navigate = useNavigate();

	const onClickProfile = () => {
		if (nickname) {
			navigate(`/profile/${nickname}`);
		}
	};

	return (
		<S.ProfileImageLayout $size={size} $url={url} onClick={onClickProfile}>
			<S.ProfileImage src={url ? url : DefaultProfileImage} alt='프로필이미지' />
		</S.ProfileImageLayout>
	);
};

export default ProfileImage;
