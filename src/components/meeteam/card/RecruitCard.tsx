import React, { useState } from 'react';
import S from './Card.styled';
import { useNavigate } from 'react-router-dom';
import { FilledBookmark, UnfilledBookmark } from '../../../assets';
import { ProfileImage } from '../..';
import { Post } from '../../../types';

const RecruitCard = ({
	id,
	title,
	category,
	writerNickname,
	writerProfileImg,
	deadline,
	scope,
	isBookmarked,
}: Post) => {
	const navigate = useNavigate();
	const [isMarked, setIsMarked] = useState<boolean>(isBookmarked);

	const onClickContent = () => {
		navigate('/recruit/1');
	};

	const onClickBookmark = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setIsMarked(prev => !prev);
	};
	return (
		<S.RecruitCard onClick={onClickContent}>
			<section className='content-tags'>
				<section className='header'>
					<section className='tags'>
						<article className='tag scope'>{scope}</article>
						<article className='tag category'>{category}</article>
					</section>
					<section onClick={onClickBookmark}>
						{isMarked ? <img src={FilledBookmark} /> : <img src={UnfilledBookmark} />}
					</section>
				</section>
				<article className='content-title'>{title}</article>
			</section>
			<section className='content-info'>
				<section className='user'>
					<ProfileImage nickname='Minji_98' size='2.31rem' url={writerProfileImg} />
					<span>{writerNickname}</span>
				</section>
				<span className='date'>~ {deadline}</span>
			</section>
		</S.RecruitCard>
	);
};

export default React.memo(RecruitCard);
