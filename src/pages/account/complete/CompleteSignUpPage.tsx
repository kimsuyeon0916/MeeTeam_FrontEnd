import React, { useState, useEffect } from 'react';
import S from './CompleteSignUpPage.styled';
import { Modal, ModalPortal, PrimaryBtn } from '../../../components';
import { Congratulation } from '../../../assets';
import { useNavigate } from 'react-router-dom';
import { fixModalBackground } from '../../../utils';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../atom';

const CompleteSignUpPage = () => {
	const navigate = useNavigate();
	const user = useRecoilValue(userState);

	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		fixModalBackground(modalOpen);
	}, [modalOpen]);

	const modalProps = {
		title: '프로필을 추가해보세요!',
		content:
			'프로필 입력정보를 추가하면\n팀을 만날 확률이 늘어납니다.\n내 프로필로 이동하시겠습니끼?',
		defaultBtn: {
			title: '나중에 하기',
			handleClick: () => navigate('/'),
		},
		primaryBtn: {
			title: '프로필로 이동',
			handleClick: () => navigate(`/profile/${user?.userId}`),
		},
	};

	return (
		<S.CompleteSignUpLayout>
			<header className='account__header'>
				<h1>밋팀에서 팀을 만날 수 있어요!</h1>
			</header>
			<img src={Congratulation} alt='회원가입을 축하합니다!' />
			<div>
				<PrimaryBtn title='확인' type='button' handleClick={() => setModalOpen(true)} />
				{modalOpen && (
					<ModalPortal>
						<Modal {...modalProps} />
					</ModalPortal>
				)}
			</div>
		</S.CompleteSignUpLayout>
	);
};

export default CompleteSignUpPage;
