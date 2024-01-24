import React from 'react';
import S from './SignUpPage.styled';
import { SIGN_UP_DATA } from '../../index';

const SignUpPage = () => {
	const submitHandelr = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<S.SignUpPageLayout>
			<header className='account__header'>
				<h1>회원가입</h1>
			</header>
			<S.SignUpPageForm onSubmit={e => submitHandelr(e)}>
				<div className='account__form-row'>
					{SIGN_UP_DATA.map(
						({ label, type, placeholder, name }, index) =>
							name !== 'nickName' && (
								<label className='account__label' key={index}>
									{label}
									<input
										className='account__input'
										type={type}
										placeholder={placeholder}
										name={name}
									></input>
								</label>
							)
					)}
				</div>
				<S.SignUpButton type='submit' value='submit'>
					완료
				</S.SignUpButton>
			</S.SignUpPageForm>
		</S.SignUpPageLayout>
	);
};

export default SignUpPage;
