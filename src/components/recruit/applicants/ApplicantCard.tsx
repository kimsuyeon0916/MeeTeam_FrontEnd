import React from 'react';
import S from './ApplicantCard.styled';
import ProfileImage from '../../profile/image/ProfileImage';
import { DropdownArrow, School, User } from '../../../assets';

const ApplicantCard = () => {
	return (
		<S.ApplicantCard>
			<section className='container-checkbox'>
				<input type='checkbox' />
			</section>
			<section className='container-user'>
				<section className='header'>
					<section className='user-icon'>
						<ProfileImage url='' size='3.3rem' nickname='Minji_98' />
						<span className='body1-semibold'>{'Minji_98'}</span>
					</section>
					<section className='user-info'>
						<section className='user-element'>
							<img src={User} />
							<span className='body2-medium'>{'김민지'}</span>
						</section>
						<section className='user-element'>
							<img src={School} />
							<span className='body2-medium'>{'광운대학교'}</span>
						</section>
						<section className='user-element'>
							<img src={School} />
							<span className='body2-medium'>{'4.5'}</span>
						</section>
						<section className='user-element'>
							<span className='body2-medium'>더보기</span>
							<img src={DropdownArrow} />
						</section>
					</section>
				</section>
				<section className='footer'>
					<section className='apply-info'>
						<h4>{'백엔드 개발자'}</h4>
						<span className='body2-medium message'>백엔드 개발자로 참여하고 싶어요!!</span>
					</section>
					<button type='button' className='btn-profile'>
						프로필 보러가기
					</button>
				</section>
			</section>
		</S.ApplicantCard>
	);
};

export default ApplicantCard;
