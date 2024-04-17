import React, { useState, useEffect } from 'react';
import S from './Card.styled';
import { useNavigate } from 'react-router-dom';
import { FilledBookmark, UnfilledBookmark } from '../../../assets';
import { ProfileImage } from '../..';
import { Post } from '../../../types';
import { useBookmark } from '../../../hooks';
import { useDelBookmark } from '../../../hooks/useBookMark';
import { useQueryClient } from '@tanstack/react-query';

const RecruitCard = ({
	id,
	title,
	category,
	writerNickname,
	writerProfileImg,
	deadline,
	scope,
	isBookmarked,
	writerId,
	isClosed,
}: Post) => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [isMarked, setIsMarked] = useState<boolean>(isBookmarked);
	const onSuccess = () => {
		queryClient.invalidateQueries({ queryKey: ['recruit_board'] });
	};
	const { mutate: bookmarked } = useBookmark();
	const { mutate: unBookmarked } = useDelBookmark();

	const onClickContent = () => {
		navigate(`/recruitment/postings/${id}`);
	};

	const onClickBookmark = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		if (!isMarked) {
			bookmarked(Number(id));
		} else {
			unBookmarked(Number(id));
		}
		setIsMarked(prev => !prev);
	};

	useEffect(() => {
		setIsMarked(isBookmarked);
	}, [isBookmarked]);

	return (
		<S.RecruitCard onClick={onClickContent} $isClosed={isClosed}>
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
					<ProfileImage userId={writerId} size='2.31rem' url={writerProfileImg} />
					<span>{writerNickname}</span>
				</section>
				{isClosed ? (
					<span className='closed txt2'>모집마감</span>
				) : (
					<span className='date'>~ {deadline}</span>
				)}
			</section>
		</S.RecruitCard>
	);
};

export default React.memo(RecruitCard);
