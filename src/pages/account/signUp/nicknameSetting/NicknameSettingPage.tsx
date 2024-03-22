import React, { useState, useEffect } from 'react';
import S from './NicknameSettingPage.styled';
import { SIGN_UP_DATA } from '../SignUpData';
import { useNavigate } from 'react-router-dom';
import { useNaverSignUp, useCheckDuplicateNickname, useDebounce } from '../../../../hooks';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../../../atom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface FormValues {
	nickname: string;
}

const NicknameSettingPage = () => {
	const title = `밋팀에서 사용하실\n닉네임을 설정해주세요`;

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isDirty, isValid },
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
		const code = urlParams.get('emailcode');

		// 백엔드에 nickname으로 변경 요청
		code && mutate({ emailCode: code, nickName: data.nickname });
	};

	const nickname = useDebounce(watch('nickname'));
	const authKeys = ['checkDuplicateNickname', nickname];

	const { data } = useCheckDuplicateNickname(authKeys, isDirty && isValid);

	const [duplicateNicknameValidation, setDuplicateNicknameValidation] = useState('');

	const checkDuplicateNickname = () => {
		if (data && !data.isEnable) {
			setDuplicateNicknameValidation(() => '이미 사용중인 닉네임입니다');
		} else if (data?.isEnable) {
			setDuplicateNicknameValidation(() => '사용가능한 닉네임입니다');
		}
	};

	useEffect(() => checkDuplicateNickname(), [data?.isEnable]);

	return (
		<S.NicknameSettingPageLayout>
			<header className='account__header'>
				<h1>{title}</h1>
			</header>
			<S.NicknameSettingPageForm onSubmit={handleSubmit(naverSignUpHandler)}>
				{SIGN_UP_DATA.map(
					({ name, validation, ...props }, index) =>
						name === 'nickname' && (
							<label className='account__label' key={index}>
								<input className='account__input' {...register(name, validation)} {...props} />
								<small className='account_input-validation'>
									{errors[name]?.message}
									{isValid && duplicateNicknameValidation}
								</small>
							</label>
						)
				)}
				<S.NicknameSettingButton disabled={!isDirty || !isValid} type='submit' value='signUp'>
					확인
				</S.NicknameSettingButton>
			</S.NicknameSettingPageForm>
			<DevTool control={control} />
		</S.NicknameSettingPageLayout>
	);
};
export default NicknameSettingPage;
