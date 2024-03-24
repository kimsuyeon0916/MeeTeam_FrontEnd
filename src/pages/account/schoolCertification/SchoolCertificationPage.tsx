import React, { useEffect, useState } from 'react';
import S from './SchoolCertificationPage.styled';
import { GoBack } from '../../../components';
import { SCHOOL_CERTIFICATION_DATA } from '../..';
import { useCertificateSchool, useReadUniversityList, useReadDepartmentList } from '../../../hooks';
import { ComboBox } from '../../../components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Department } from '../../../types';

interface FormValues {
	year: string;
	university: string;
	department: string;
	email: string;
}

const SchoolCertificationPage = () => {
	const [next, setNext] = useState(false);
	const [submitEmail, setSubmitEmail] = useState(false);
	const [domain, setDomain] = useState<string>();

	const nextHandler = (e: React.MouseEvent) => {
		// 학과 리스트 넘겨줄 때 domain 만 따로 넘겨주는 거 변경 요청 시도
		e.preventDefault();
		setDomain(
			universityList?.find(university => university.universityName === getValues('university'))
				?.universityDomain
		);
		setNext(prev => !prev);
	};

	const { register, handleSubmit, setValue, control, getValues } = useForm<FormValues>();

	const checkCertificationInSuccess = () => {
		setSubmitEmail(() => true);
	};

	const { mutate } = useCertificateSchool({ onSuccess: checkCertificationInSuccess });

	const certificateHandler: SubmitHandler<FormValues> = data => {
		console.log(localStorage.PLATFORM_ID);
		mutate({
			platformId: localStorage.PLATFORM_ID,
			year: data.year,
			universityId: sessionStorage.university,
			departmentId: sessionStorage.department,
			emailId: data.email,
		});
	};

	const { data: universityList, refetch: readUniversityList } = useReadUniversityList();
	const { data: departmentList, refetch: readDepartmentList } = useReadDepartmentList();

	useEffect(() => {
		readUniversityList();
	}, []);

	useEffect(() => {
		sessionStorage?.university && readDepartmentList();
	}, [sessionStorage?.university]);

	const optionList = (name: string) => {
		if (name === 'university') {
			return universityList?.map(university => ({
				id: university.universityId,
				title: university.universityName,
			}));
		} else if (name === 'department') {
			return departmentList?.map((department: Department) => ({
				id: department.departmentId,
				title: department.departmentName,
			}));
		}
	};

	return (
		<S.SchoolCertificationLayout>
			<header className='account__header'>
				<h1>학교 인증하고, 밋팀을 만나보세요!</h1>
				{next && (
					<GoBack clickHandler={e => nextHandler(e)} style='left: -15.98rem; top: -5.53rem; ' />
				)}
			</header>
			<S.SchoolCertificationPageForm
				onSubmit={handleSubmit(certificateHandler)}
				$submitEmail={submitEmail}
			>
				<div className='account__form-column'>
					{SCHOOL_CERTIFICATION_DATA.map(
						({ isNext, name, ...props }) =>
							isNext === next && (
								<S.SchoolCertificationRow key={name}>
									<ComboBox
										register={register}
										setValue={setValue}
										optionList={optionList(name)}
										name={name}
										{...props}
									/>
									{next && name === 'email' && (
										<S.SchoolCertificationEmailDomain>{`@ ${domain}`}</S.SchoolCertificationEmailDomain>
									)}
								</S.SchoolCertificationRow>
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
			<DevTool control={control} />
		</S.SchoolCertificationLayout>
	);
};

export default SchoolCertificationPage;
