import React from 'react';
import S from './NickNameSettingPage.styled';
import { SIGN_UP_DATA } from '../SignUpData';
import { useNavigate } from 'react-router-dom';
import { useNaverSignUp } from '../../../../hooks';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { naverSignUpState, userState } from '../../../../atom';

const NickNameSettingPage = () => {
	const navigate = useNavigate();

	const title = `밋팀에서 사용하실\n닉네임을 설정해주세요`;

	const [signUp, setSignUp] = useRecoilState(naverSignUpState);

	const setUserState = useSetRecoilState(userState);
	const naverSignUp = useRecoilValue(naverSignUpState);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSignUp({ ...signUp, [name]: value });
	};

	const checkNaverSignUpInSuccess = () => {
		navigate('/');
		localStorage.removeItem('naverSignUpState');
	};

	const { mutate } = useNaverSignUp({ onSuccess: checkNaverSignUpInSuccess, setUserState });

	const naverSignUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(naverSignUp);
		console.log(userState);
		naverSignUp && mutate(naverSignUp);
	};

	return (
		<S.NickNameSettingPageLayout>
			<header className='account__header'>
				<h1>{title}</h1>
			</header>
			<S.NickNameSettingPageForm onSubmit={e => naverSignUpHandler(e)}>
				{SIGN_UP_DATA.map(
					({ type, placeholder, name }, index) =>
						name === 'nickName' && (
							<label className='account__label' key={index}>
								<input
									className='account__input'
									type={type}
									placeholder={placeholder}
									name={name}
									value={signUp?.nickName}
									onChange={e => changeHandler(e)}
								/>
							</label>
						)
				)}
				<S.NickNameSettingButton type='submit' value='signUp'>
					확인
				</S.NickNameSettingButton>
			</S.NickNameSettingPageForm>
		</S.NickNameSettingPageLayout>
	);
};
export default NickNameSettingPage;
