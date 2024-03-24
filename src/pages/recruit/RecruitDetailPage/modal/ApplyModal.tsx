import React, { useState, useRef } from 'react';
import S from './ApplyModal.styled';

const temp = {
	name: '송유진',
	school: '광운대학교',
	major: '소프트웨어학부',
	email: 'jiminni_01@kw.ac.kr',
	score: '4.3',
	enrolledYear: '2018',
};

const ApplyModal = () => {
	const controlRef = useRef(null);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const isSelected = true; // 임시
	const isValid = isChecked && isSelected;
	const onClickCheckbox = () => {
		setIsChecked(prev => !prev);
	};
	const onClickConfirm = () => {
		if (isValid) {
		}
	};

	return (
		<S.Modal>
			<article>
				<h1>신청 정보</h1>
				<section className='description'>
					<span>멤버들에게 내 정보를 공개할 수 있나요?</span>
					<span>정보 공개 동의 시, 내 정보가 멤버들에게 보이며 팀매칭에 유리해집니다.</span>
					<article className='agreement'>
						<input type='checkbox' onClick={onClickCheckbox} />
						<span>개인정보 열람 동의</span>
					</article>
				</section>
			</article>
			<article className='container-user__info'>
				<h3>내 정보</h3>
				<section className='user-info'>
					<section className='user-info__section'>
						<section>
							<span>이름</span>
							<span>학교</span>
							<span>학과</span>
							<span>이메일</span>
						</section>
						<section>
							<span>{temp.name}</span>
							<span>{temp.school}</span>
							<span>{temp.major}</span>
							<span>{temp.email}</span>
						</section>
					</section>
					<section className='user-info__section'>
						<section>
							<span>평점</span>
							<span>입학년도</span>
						</section>
						<section>
							<span>{temp.score}</span>
							<span>{temp.enrolledYear}</span>
						</section>
					</section>
				</section>
			</article>
			<article className='container-role'>
				<input type='text' placeholder='지원역할을 선택해주세요.' />
			</article>
			<article className='container-message'>
				<textarea placeholder='전할 말을 20자 이내로 입력해주세요.' />
			</article>
			<article className='container-buttons'>
				<button type='button'>취소하기</button>
				<button className='confirm' type='button' onClick={onClickConfirm}>
					확인
				</button>
			</article>
		</S.Modal>
	);
};

export default ApplyModal;
