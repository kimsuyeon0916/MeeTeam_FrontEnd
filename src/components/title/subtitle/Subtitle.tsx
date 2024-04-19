import React from 'react';
import S from './Subtitle.styled';

const Subtitle = (children: any) => {
	const content: string = children.children;
	return <S.Subtitle>{content}</S.Subtitle>;
};

export default React.memo(Subtitle);
