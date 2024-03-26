import React from 'react';
import S from './ApplyModal.styled';

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
	return (
		<S.Modal>
			<article>
				<h1>신청 정보</h1>
				<section className='description'>
					<span>멤버들에게 다음과 같이 공개됩니다.</span>
					<span>멤버들이 지원자의 프로필을 열람할 수 있습니다.</span>
				</section>
			</article>
			<article className='container-user__info confirm-info'>
				<h3 className='value'>지원자 정보</h3>
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
					<h2>{temp.role}</h2>
					<p>{temp.message}</p>
				</section>
			</article>
			<article className='container-buttons confirm-btn'>
				<button type='button'>뒤로가기</button>
				<button type='button' className='confirm'>
					제출하기
				</button>
			</article>
		</S.Modal>
	);
};

export default ConfirmModal;
