import React, { useState } from 'react';
import S from './Card.styled';
import { useNavigate } from 'react-router-dom';
import { FilledBookmark, UnfilledBookmark } from '../../../assets';
import { ProfileImage } from '../..';

const RecruitCard = () => {
	const navigate = useNavigate();
	const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

	const onClickContent = () => {
		navigate('/recruit/1');
	};

	const onClickBookmark = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setIsBookmarked(prev => !prev);
	};
	return (
		<S.RecruitCard onClick={onClickContent}>
			<section className='content-tags'>
				<section className='tags'>
					<article className='tag scope'>교외</article>
					<article className='tag category'>프로젝트</article>
				</section>
				<section onClick={onClickBookmark}>
					{isBookmarked ? <img src={FilledBookmark} /> : <img src={UnfilledBookmark} />}
				</section>
			</section>
			<article className='content-title'>
				[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
			</article>
			<section className='content-info'>
				<section className='user'>
					<ProfileImage nickname='Minji_98' size='2.31rem' />
					<span>{'Minji_98'}</span>
				</section>
				<span className='date'>~{'24/05/03'}</span>
			</section>
		</S.RecruitCard>
	);
};

export default React.memo(RecruitCard);
