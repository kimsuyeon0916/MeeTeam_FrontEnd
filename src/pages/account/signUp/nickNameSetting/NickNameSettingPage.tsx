import React from 'react';
import S from './NickNameSettingPage.styled';
import { SIGN_UP_DATA } from '../SignUpData';
import { useNavigate } from 'react-router-dom';
import { useNaverSignUp } from '../../../../hooks';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../../atom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FormValues {
	nickname: string;
}

const NickNameSettingPage = () => {
	const title = `밋팀에서 사용하실\n닉네임을 설정해주세요`;

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FormValues>({ mode: 'onChange' });

	const setUserState = useSetRecoilState(userState);

	const checkNaverSignUpInSuccess = () => {
		navigate('/');
		localStorage.removeItem('naverSignUpState');
		localStorage.removeItem('submitEmailState');
	};

	const { mutate } = useNaverSignUp({ onSuccess: checkNaverSignUpInSuccess, setUserState });

	const naverSignUpHandler: SubmitHandler<FormValues> = data => {
		const urlParams = new URLSearchParams(window.location.search);
		const code = urlParams.get('emailCode');

		code && mutate({ emailCode: code, nickname: data.nickname });
	};

	return (
		<S.NickNameSettingPageLayout>
			<header className='account__header'>
				<h1>{title}</h1>
			</header>
			<S.NickNameSettingPageForm onSubmit={handleSubmit(naverSignUpHandler)}>
				{SIGN_UP_DATA.map(
					({ name, validation, ...props }, index) =>
						name === 'nickname' && (
							<label className='account__label' key={index}>
								<input className='account__input' {...register(name, validation)} {...props} />
								<small className='account_input-validation'>{errors[name]?.message}</small>
							</label>
						)
				)}
				<S.NickNameSettingButton type='submit' value='signUp'>
					확인
				</S.NickNameSettingButton>
			</S.NickNameSettingPageForm>
			<DevTool control={control} />
		</S.NickNameSettingPageLayout>
	);
};
export default NickNameSettingPage;
