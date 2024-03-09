import React from 'react';
import { RadiusProfile } from '../../..';
import { TitleAndEtc } from '../../../../types';
import S from './TitleInfo.styled';

type scores = {
	[key: number]: string;
};

const scoreObj: scores = {
	4.5: 'A+',
	4.0: 'A',
	3.5: 'B+',
	3.0: 'B',
};

const TitleInfo = ({ nickname, responseRate, score, createdAt, title }: TitleAndEtc) => {
	return (
		<S.TitleInfo>
			<section className='container-header'>
				<section className='container-header__profile'>
					<RadiusProfile
						size='3.3075rem'
						url='https://i.pinimg.com/236x/90/c7/f7/90c7f7afa68ea9b875eafbe887f454e8.jpg'
					/>
					<span>{nickname}</span>
				</section>
				<span className='bubble first'>응답률 {responseRate}</span>
				<span className='bubble'>평점 {scoreObj[score]}</span>
				<span className='date'>{createdAt}</span>
			</section>
			<h1>{title}</h1>
		</S.TitleInfo>
	);
};

export default TitleInfo;
