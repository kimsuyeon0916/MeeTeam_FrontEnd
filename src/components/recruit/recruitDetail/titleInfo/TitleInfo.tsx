import React, { useState } from 'react';
import { ProfileImage } from '../../..';
import { TitleAndEtc } from '../../../../types';
import S from './TitleInfo.styled';
import { FilledBookmark, UnfilledBookmark } from '../../../../assets';
import { useBookmark } from '../../../../hooks';
import { useDelBookmark } from '../../../../hooks/useBookMark';
import { useNavigate, useParams } from 'react-router-dom';

const TitleInfo = ({
	nickname,
	responseRate,
	createdAt,
	title,
	writerProfileImg,
	bookmarkCount,
	writerScore,
	writerId,
	isBookmarked,
}: TitleAndEtc) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [bookmarkCnt, setBookmarkCnt] = useState<number>(bookmarkCount);
	const [isMarked, setIsMarked] = useState<boolean>(isBookmarked);
	const { mutate: bookmarked } = useBookmark();
	const { mutate: unBookmarked } = useDelBookmark();

	const toggleBookmark = () => {
		if (!isMarked) {
			bookmarked(Number(id));
			setBookmarkCnt(prev => prev + 1);
		} else {
			unBookmarked(Number(id));
			setBookmarkCnt(prev => prev - 1);
		}
		setIsMarked(!isMarked);
	};

	const onClickProfile = () => {
		navigate(`/user/profile/${writerId}`);
	};

	return (
		<S.TitleInfo>
			<section className='container-header'>
				<section className='container-header__profile' onClick={onClickProfile}>
					<ProfileImage size='3.3075rem' nickname={nickname} url={writerProfileImg} />
					<span>{nickname}</span>
				</section>
				<span className='bubble first'>응답률 {responseRate}%</span>
				<span className='bubble'>평점 {writerScore.toFixed(1)}</span>
				<span className='date'>{createdAt}</span>
				<section className='container-bookmark'>
					<img
						className='icon-bookmark'
						src={isMarked ? FilledBookmark : UnfilledBookmark}
						onClick={toggleBookmark}
					/>
					<span className='count-bookmark'>{bookmarkCnt}</span>
				</section>
			</section>
			<h1>{title}</h1>
		</S.TitleInfo>
	);
};

export default TitleInfo;
