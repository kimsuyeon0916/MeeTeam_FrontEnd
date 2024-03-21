import React, { useState, useEffect } from 'react';
import S from './SignInPage.styled';
import { NaverLogin } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { EndPoint } from '../../../service';
import { useCheckExist } from '../../../hooks';

const SignInPage = () => {
	const navigate = useNavigate();
	const [callBack, setCallBack] = useState(true);

	const getAuthCode = () => {
		const urlParams = new URLSearchParams(window.location.search);
		return urlParams.get('code');
	};

	const handleNaverSignInSuccess = () => {
		if (localStorage?.ACCESS_TOKEN_KEY) {
			return navigate('/');
		}
		return navigate('/signup/school');
	};

	const { mutate } = useCheckExist({ onSuccess: handleNaverSignInSuccess });

	useEffect(() => {
		const code = getAuthCode();
		!code && setCallBack(false);
		code && mutate({ authorizationCode: code });
	}, [mutate]);

	return (
		<S.SignInPageLayout $callBack={callBack}>
			<header className='sign-in__header'>
				<h1>로그인</h1>
			</header>
			<S.SignInPageForm method='post' action={import.meta.env.VITE_BASE_URL + EndPoint.SIGN_IN}>
				<label className='sign-in__label'>
					<input className='account__input' type='text' placeholder='학교 이메일' name='username' />
				</label>
				<label className='sign-in__label'>
					<input
						className='account__input'
						type='password'
						placeholder='비밀번호'
						name='password'
					/>
				</label>
				<label className='sign-in__label--auto-sign-in'>
					<input type='checkbox' className='sign-in__input--auto-sign-in' name='autoSignIn' />
					자동 로그인
				</label>
				<S.SignInPageButton type='submit' value='submit'>
					로그인
				</S.SignInPageButton>
			</S.SignInPageForm>
			<div className='sign-in__button-row'>
				<button
					type='button'
					className='sign-in__button'
					onClick={() => navigate('/signUp/school')}
				>
					회원가입
				</button>
				<hr className='sign_in__vertical' />
				<button
					type='button'
					className='sign-in__button'
					onClick={() => navigate('/find/password')}
				>
					비밀번호 찾기
				</button>
			</div>
			<div className='sign-in__social-login-column'>
				<div className='sign-in__social-login-marker'>
					<hr className='sign_in__horizon' />
					소셜 계정 로그인
					<hr className='sign_in__horizon' />
				</div>
				<div>
					<NaverLogin />
				</div>
			</div>
		</S.SignInPageLayout>
	);
};

export default SignInPage;
