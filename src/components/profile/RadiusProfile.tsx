import React from 'react';
import S from './RadiusProfile.styled';
import { MEMBER_PROFILE_DEFAULT_ICON } from '../index';

const RadiusProfile = (props: { size?: string; url?: string }) => {
	return (
		<S.RadiusProfileLayout $size={props.size}>
			{props.url === '' ? MEMBER_PROFILE_DEFAULT_ICON : <S.RadiusProfileImage src={props.url} />}
		</S.RadiusProfileLayout>
	);
};

export default RadiusProfile;
