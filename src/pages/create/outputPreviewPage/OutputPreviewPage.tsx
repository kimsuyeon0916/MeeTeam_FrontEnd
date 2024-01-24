import React, { useState } from 'react';
import S from './OutputPreviewPage.styled';
import { RequiredInformation, Tag } from '../../../components';
import { LeftBtn, RightBtn } from '../../../assets';
import { AnimatePresence, motion } from 'framer-motion';

const OutputPreviewPage = () => {
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [isBack, setIsBack] = useState<boolean>(false);
	const lists = [
		'https://ifh.cc/g/T1CCBL.png',
		'https://hanghae99.spartacodingclub.kr/_next/image?url=https%3A%2F%2Fmedia-sparta.s3.amazonaws.com%2Fmedia%2Ftempvideos%2F20211203%2Fthumb.jpeg&w=1920&q=75',
		'https://ifh.cc/g/YO5Z7z.jpg',
	];
	const handlePrevSlide = () => {
		setIsBack(true);
		setSlideIndex(prevIndex => (prevIndex === 0 ? lists.length - 1 : prevIndex - 1));
	};

	const handleNextSlide = () => {
		setIsBack(false);
		setSlideIndex(prevIndex => (prevIndex === lists.length - 1 ? 0 : prevIndex + 1));
	};

	console.log(isBack);

	return (
		<S.OutputPreview>
			<div className='container-images'>
				<div className='container-images__title'>
					<span>[커뮤니티 웹 서비스 프로젝트]</span>
					<Tag type={'완료'} />
				</div>
				<AnimatePresence initial={false} mode='wait'>
					<div className='container-images__slide'>
						<motion.img
							className='slider'
							initial={{
								x: isBack ? -1000 : 1000,
								opacity: 0,
							}}
							animate={{
								x: 0,
								opacity: 1,
							}}
							exit={{
								x: isBack ? -1000 : 1000,
								opacity: 0,
							}}
							key={slideIndex}
							src={lists[slideIndex]}
							transition={{
								x: { type: 'spring', damping: 30, stiffness: 300 },
								opacity: { duration: 0.5 },
							}}
						/>
						<img className='left-btn' src={LeftBtn} onClick={handlePrevSlide} />
						<img className='right-btn' src={RightBtn} onClick={handleNextSlide} />
					</div>
				</AnimatePresence>
			</div>
			<div className='container-info'>
				<span className='container-info__subtitle'>[커뮤니티 웹 서비스 프로젝트]</span>
				<div className='container-info__tags'>
					<RequiredInformation $isPreview={true} />
				</div>
				<div className='container-info__introduction'>
					<span>프로젝트 소개</span>
					<p>
						밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team, 만남을 의미하는 Meet이 합쳐진
						단어입니다. 대학생들의 보다 원활한 팀프로젝트를 위해 기획하게 되었으며, 그 외에
						포토폴리오로서의 기능까지 생각하고 있습니다!
					</p>
					<p>
						☑️궁극적인 목표 익명이든, 익명이 아니든 오픈된 프로필을 통해서 서로에 대한 충분한 정보를
						바탕으로 팀원을 구하는 문화를 만들어 보는 것입니다.
					</p>
					<p>🎯타깃층 팀프로젝트를 해야할 때, 목적이 맞는 팀원이 필요한 대학생</p>
				</div>
			</div>
			<div className='container-members'>
				<span className='container-members__subtitle'>👤 참여 멤버</span>
				<div className='container-members__slide'>
					<div className='member-card'></div>
					<div className='member-card'></div>
					<div className='member-card'></div>
				</div>
			</div>
		</S.OutputPreview>
	);
};

export default OutputPreviewPage;
