import React from 'react';
import S from './LinkDetails.styled';
import { Link } from '../../../types';
import { LinkIcon } from '../../../assets';

const LinkDetails = ({ url, description }: Link) => {
	return (
		<S.LinkDetailsLayout>
			<h4>{description}</h4>
			<img src={LinkIcon} alt='링크 아이콘' />
			<a href={url} target='_blank' title={description} rel='noreferrer noopener'>
				{url}
			</a>
		</S.LinkDetailsLayout>
	);
};

export default LinkDetails;
