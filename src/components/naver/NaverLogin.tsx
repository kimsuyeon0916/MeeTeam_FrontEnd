import React, { useRef, useEffect } from 'react';
import S from './NaverLogin.styled';

const NaverLogin = () => {
	const naverRef = useRef<HTMLButtonElement | null>(null);

	const { naver }: any = window;

	const initializeNaverLogin = () => {
		const naverLogin = new naver.LoginWithNaverId({
			clientId: import.meta.env.VITE_NAVER_CLIENT_ID,
			callbackUrl: import.meta.env.VITE_NAVER_CALLBACK_URL,
			isPopup: false,
			loginButton: { type: 1, height: '48.75' },
		});

		naverLogin.init();
	};

	const naverLoginHandler = () => {
		const target = naverRef.current && (naverRef.current.children[0] as HTMLDivElement);
		target && target.click();
	};

	useEffect(() => {
		initializeNaverLogin();
	}, []);

	return (
		<>
			<S.NaverLoginButton ref={naverRef} id='naverIdLogin' />
			<S.NaverCustomButton onClick={naverLoginHandler}>
				<img src='/src/assets/NaverIcon.png' className='sign-in__naver-icon' alt='naverIcon' />
				<span>네이버 로그인</span>
			</S.NaverCustomButton>
		</>
	);
};

export default NaverLogin;
