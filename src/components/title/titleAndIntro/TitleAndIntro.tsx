import React from 'react';
import S from './TitleAndIntro.styled';
import { TitleInfo } from '../../../types';

const TitleAndIntro = ({ title, descriptions }: TitleInfo) => {
	return (
		<S.TitleAndIntro>
			<article className='procedure__subtitle'>{title}</article>
			<article className='procedure__intro'>
				{descriptions?.map(description => <p>{description}</p>)}
			</article>
		</S.TitleAndIntro>
	);
};

export default TitleAndIntro;
