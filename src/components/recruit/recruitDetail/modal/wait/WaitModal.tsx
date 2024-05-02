import React from 'react';
import S from './WaitModal.styled';
import { useSetRecoilState } from 'recoil';
import { waitModalState } from '../../../../../atom';

const WaitModal = () => {
	const setIsWait = useSetRecoilState(waitModalState);
	const onClickConfirm = () => {
		setIsWait(false);
	};
	return (
		<S.WaitModal>
			<h3>조금만 기다려주세요!</h3>
			<section className='description'>
				<span className='body2-medium'>해당 서비스는 아직 준비 중에 있습니다.</span>
				<span className='body2-medium'>다음 버전을 기대해 주세요!</span>
			</section>
			<section className='btn-container'>
				<button className='confirm btn-txt' onClick={onClickConfirm}>
					확인
				</button>
			</section>
		</S.WaitModal>
	);
};

export default WaitModal;
