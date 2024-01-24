import React, { useState } from 'react';
import S from './SchoolCertificationPage.styled';
import { GoBack } from '../../components';
import { School, SCHOOL_CERTIFICATION_DATA } from '..';

const SchoolCertificationPage = () => {
	const [school, setSchool] = useState<School>({ school: '', major: '', year: '', email: '' });

	const [next, setNext] = useState(false);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSchool({ ...school, [name]: value });
	};

	const nextHandler = (e: React.MouseEvent) => {
		e.preventDefault();
		setNext(prev => !prev);
	};

	const certificateHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<S.SchoolCertificationLayout>
			<header className='school-certification__header'>
				<h1>
					학교 인증하고, <b>밋팀</b>을 만나보세요.
				</h1>
				{next && (
					<GoBack clickHandler={e => nextHandler(e)} style='left: -15.98rem; top: -5.53rem; ' />
				)}
			</header>
			<S.SchoolCertificationPageForm onSubmit={certificateHandler}>
				<div className='school-certification_form-row'>
					{SCHOOL_CERTIFICATION_DATA.map(
						({ label, type, placeholder, name, isNext }, index) =>
							isNext === next && (
								<label className='school-certification__label' key={index}>
									{label}
									<input
										className='school-certification__input'
										type={type}
										placeholder={placeholder}
										name={name}
										value={school[name]}
										onChange={e => changeHandler(e)}
									/>
								</label>
							)
					)}
				</div>
				<S.SchoolCertificationButton
					onClick={e => !next && nextHandler(e)}
					type={next ? 'button' : 'submit'}
					value={next ? 'certificate' : 'next'}
				>
					{next ? '인증하기' : '다음'}
				</S.SchoolCertificationButton>
			</S.SchoolCertificationPageForm>
		</S.SchoolCertificationLayout>
	);
};

export default SchoolCertificationPage;
