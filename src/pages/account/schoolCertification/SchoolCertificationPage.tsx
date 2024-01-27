import React, { useState } from 'react';
import S from './SchoolCertificationPage.styled';
import { GoBack } from '../../../components';
import { SCHOOL_CERTIFICATION_DATA } from '../..';
import { useCertificateSchool } from '../../../hooks';
import { useRecoilState } from 'recoil';
import { naverSignUpState, submitEmailState } from '../../../atom';

const SchoolCertificationPage = () => {
	const [signUp, setSignUp] = useRecoilState(naverSignUpState);

	const [next, setNext] = useState(false);

	const [submitEmail, setSubmitEmail] = useRecoilState(submitEmailState);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSignUp({ ...signUp, [name]: value });
	};

	const nextHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		setNext(prev => !prev);
	};

	const checkCertificationInSuccess = () => {
		setSubmitEmail(() => true);
	};

	const { mutate } = useCertificateSchool({ onSuccess: checkCertificationInSuccess });

	const certificateHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		signUp && mutate(signUp);
	};

	return (
		<S.SchoolCertificationLayout>
			<header className='account__header'>
				<h1>
					학교 인증하고, <b>밋팀</b>을 만나보세요!
				</h1>
				{next && (
					<GoBack clickHandler={e => nextHandler(e)} style='left: -15.98rem; top: -5.53rem; ' />
				)}
			</header>
			<S.SchoolCertificationPageForm
				onSubmit={e => certificateHandler(e)}
				$submitEmail={submitEmail}
			>
				<div className='account__form-row'>
					{SCHOOL_CERTIFICATION_DATA.map(
						({ label, type, placeholder, name, isNext }, index) =>
							isNext === next && (
								<label className='account__label' key={index}>
									{label}
									<input
										className='account__input'
										type={type}
										placeholder={placeholder}
										name={name}
										value={signUp?.[name]}
										onChange={e => changeHandler(e)}
									/>
								</label>
							)
					)}
				</div>
				{submitEmail && (
					<S.SchoolCertificationMark>인증 이메일이 발송되었습니다.</S.SchoolCertificationMark>
				)}
				<S.SchoolCertificationButton
					onClick={e => !next && nextHandler(e)}
					type={next ? 'submit' : 'button'}
					value={next ? 'certificate' : 'next'}
				>
					{next ? '인증하기' : '다음'}
				</S.SchoolCertificationButton>
			</S.SchoolCertificationPageForm>
		</S.SchoolCertificationLayout>
	);
};

export default SchoolCertificationPage;
