import React from 'react';
import S from './RadiusProfile.styled';
import { memberProfileDefaultIcon } from '../../components/index';

const RadiusProfile = (props: { size?: string; url?: string; index?: number }) => {
	return (
		<S.RadiusProfileLayout $index={props.index} $size={props.size}>
			{props.url === '' ? (
				memberProfileDefaultIcon
			) : (
				<S.RadiusProfileImage src={props.url} />
			)}
		</S.RadiusProfileLayout>
	);
};

export default RadiusProfile;
