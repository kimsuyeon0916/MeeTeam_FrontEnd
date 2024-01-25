import React, { useRef } from 'react';
import S from './SignInPage.styled';
import { NaverLogin } from '../../../components';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
	const navigate = useNavigate();
	return (
		<S.SignInPageLayout>
			<header className='sign-in__header'>
				<h1>로그인</h1>
			</header>
			<S.SignInPageForm>
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
				<button type='button' className='sign-in__button'>
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
