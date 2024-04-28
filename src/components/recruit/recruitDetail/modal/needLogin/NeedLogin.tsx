import React from 'react';
import { useSetRecoilState } from 'recoil';
import { needLoginModalState } from '../../../../../atom';
import { NEEDLOGINTYPE } from '../../../../../constant/loginModalMessage';
import S from './NeedLogin.styled';
import { useNavigate } from 'react-router-dom';

interface NeedLoginInfo {
	type: string;
}

const NeedLogin = ({ type }: NeedLoginInfo) => {
	const navigate = useNavigate();
	const setLoginModalState = useSetRecoilState(needLoginModalState);
	const onClickBack = () => {
		setLoginModalState({ isOpen: false, type: '' });
	};

	const onClickConfirm = () => {
		navigate('/signin');
		setLoginModalState({ isOpen: false, type: '' });
	};
	return (
		<S.NeedLogin>
			<h3>{NEEDLOGINTYPE[type].TITLE}</h3>
			<section className='description'>
				<span className='body2-medium'>지금 로그인을 하고</span>
				<span className='body2-medium'>{NEEDLOGINTYPE[type].MESSAGE}</span>
			</section>
			<section className='btn-container'>
				<button className='cancel btn-txt' onClick={onClickBack}>
					나중에 하기
				</button>
				<button className='confirm btn-txt' onClick={onClickConfirm}>
					로그인 하기
				</button>
			</section>
		</S.NeedLogin>
	);
};

export default NeedLogin;
