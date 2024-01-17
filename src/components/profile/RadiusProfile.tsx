import React from 'react';
import S from './RadiusProfile.styled';
import { MEMBER_PROFILE_DEFAULT_ICON } from '../index';

interface ProfileImage {
	size?: string;
	url?: string;
}

const RadiusProfile = ({ size, url }: ProfileImage) => {
	return (
		<S.RadiusProfileLayout $size={size}>
			{url === '' ? MEMBER_PROFILE_DEFAULT_ICON : <S.RadiusProfileImage src={url} />}
		</S.RadiusProfileLayout>
	);
};

export default RadiusProfile;
