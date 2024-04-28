import React, { useEffect, useState } from 'react';
import { NeedLogin, ProfileImage } from '../../..';
import { TitleAndEtc } from '../../../../types';
import S from './TitleInfo.styled';
import { FilledBookmark, UnfilledBookmark } from '../../../../assets';
import { useBookmark, useLogin } from '../../../../hooks';
import { useDelBookmark } from '../../../../hooks/useBookMark';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { needLoginModalState } from '../../../../atom';

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
	const { isLoggedIn } = useLogin();
	const [isMarked, setIsMarked] = useState<boolean>(isBookmarked);
	const { mutate: bookmarked } = useBookmark({ queryKey: 'detailedPage' });
	const { mutate: unBookmarked } = useDelBookmark({ queryKey: 'detailedPage' });
	const [needLoginModal, setNeedLoginModal] = useRecoilState(needLoginModalState);

	const toggleBookmark = () => {
		if (!isLoggedIn) {
			setNeedLoginModal({ isOpen: true, type: 'BOOKMARK' });
			return;
		}
		if (!isMarked) {
			bookmarked(Number(id));
		} else {
			unBookmarked(Number(id));
		}
		setIsMarked(prev => !prev);
	};

	return (
		<S.TitleInfo>
			<section className='container-header'>
				<section className='container-header__profile'>
					<ProfileImage size='3.3075rem' userId={writerId} url={writerProfileImg} />
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
					<span className='count-bookmark'>{bookmarkCount}</span>
				</section>
			</section>
			<h1>{title}</h1>
			{needLoginModal.isOpen && (
				<section className='modal-background'>
					<NeedLogin type={needLoginModal.type} />
				</section>
			)}
		</S.TitleInfo>
	);
};

export default TitleInfo;
