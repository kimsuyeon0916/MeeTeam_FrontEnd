import React from 'react';
import S from './ApplyModal.styled';
import { useSetRecoilState } from 'recoil';
import { applyStepState } from '../../../../atom';

const temp = {
	name: '송유진',
	school: '광운대학교',
	major: '소프트웨어학부',
	email: 'jiminni_01@kw.ac.kr',
	score: '4.3',
	enrolledYear: '2018',
	role: '백엔드 개발자',
	message: '백엔드 개발자로 참여하고 싶어요!',
};

const ConfirmModal = () => {
	const setApplyStepState = useSetRecoilState(applyStepState);
	const onClickBack = () => {
		setApplyStepState(prev => prev - 1);
	};
	const onClickNext = () => {
		setApplyStepState(prev => prev + 1);
	};
	return (
		<S.Modal>
			<article>
				<h1>신청 정보</h1>
				<section className='description'>
					<h4>멤버들에게 다음과 같이 공개됩니다.</h4>
					<span className='description-confirm'>
						멤버들이 지원자의 프로필을 열람할 수 있습니다.
					</span>
					<span className='description-confirm'>
						신청자 정보는 프로필 편집을 통해 수정할 수 있습니다.
					</span>
				</section>
			</article>
			<article className='container-user__info'>
				<h4>지원자 정보</h4>
				<section className='user-info'>
					<section className='user-info__section'>
						<section>
							<span>이름</span>
							<span>학교</span>
							<span>학과</span>
							<span>이메일</span>
						</section>
						<section>
							<span className='value'>{temp.name}</span>
							<span className='value'>{temp.school}</span>
							<span className='value'>{temp.major}</span>
							<span className='value'>{temp.email}</span>
						</section>
					</section>
					<section className='user-info__section'>
						<section>
							<span>평점</span>
							<span>입학년도</span>
						</section>
						<section>
							<span className='value'>{temp.score}</span>
							<span className='value'>{temp.enrolledYear}</span>
						</section>
					</section>
				</section>
				<hr />
				<section className='role-info'>
					<h4>{temp.role}</h4>
					<p>{temp.message}</p>
				</section>
			</article>
			<article className='container-buttons confirm-btn'>
				<button type='button' className='cancel' onClick={onClickBack}>
					뒤로가기
				</button>
				<button type='button' className='confirm' onClick={onClickNext}>
					제출하기
				</button>
			</article>
		</S.Modal>
	);
};

export default ConfirmModal;
