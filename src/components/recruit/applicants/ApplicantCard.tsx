import React, { useState, useEffect } from 'react';
import S from './ApplicantCard.styled';
import ProfileImage from '../../profile/image/ProfileImage';
import { DropdownArrow, School, User } from '../../../assets';
import { ApplicantInfo } from '../../../types';
import { useSetRecoilState } from 'recoil';
import { applicantHolder } from '../../../atom';
import { useNavigate } from 'react-router-dom';

const ApplicantCard = ({
	applicantId,
	applyRoleName,
	departmentName,
	message,
	name,
	nickname,
	profileImg,
	score,
	universityName,
	userId,
	year,
}: ApplicantInfo) => {
	const navigate = useNavigate();
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const setIsHold = useSetRecoilState(applicantHolder);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const onClickCheckbox = () => {
		setIsChecked(prev => !prev);
	};

	useEffect(() => {
		if (isChecked) {
			setIsHold(prev => [...prev, applicantId]);
		} else {
			setIsHold(prev => prev.filter(id => id !== applicantId));
		}
	}, [isChecked]);

	return (
		<S.ApplicantCard>
			<section className='container-checkbox'>
				<input type='checkbox' onClick={onClickCheckbox} checked={isChecked} />
			</section>
			<section className='container-user'>
				<section className='header'>
					<section className='user-icon'>
						<ProfileImage url={profileImg} size='3.3rem' nickname={nickname} />
						<span className='body1-semibold'>{nickname}</span>
					</section>
					<section className='user-info'>
						<section className='user-element'>
							<img src={User} />
							<span className='body2-medium'>{name}</span>
						</section>
						<section className='user-element'>
							<img src={School} />
							<span className='body2-medium'>{universityName}</span>
						</section>
						<section className='user-element'>
							<img src={School} />
							<span className='body2-medium score'>{score !== 0 ? score : '-'}</span>
						</section>
						<section className='user-element more'>
							<span className='body2-medium'>더보기</span>
							<img src={DropdownArrow} />
						</section>
					</section>
				</section>
				<section className='footer'>
					<section className='apply-info'>
						<h4>{applyRoleName}</h4>
						<span className='body2-medium message'>{message}</span>
					</section>
					<button
						type='button'
						className='btn-profile'
						onClick={() => window.open(`/profile/${userId}`)}
					>
						프로필 보러가기
					</button>
				</section>
			</section>
		</S.ApplicantCard>
	);
};

export default ApplicantCard;
