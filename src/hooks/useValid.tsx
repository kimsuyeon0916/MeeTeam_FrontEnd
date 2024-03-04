import { useEffect, useState } from 'react';

// <유효성 검사 목록>
// 범위(1개 필수) ✅
// 유형(1개 필수) ✅
// 마감일(오늘 이전 선택 불가) ✅
// 진행기간(마감일보다 일찍 끝날 수 없음) ✅
// 수업(체크 시, 수업명, 교수명 입력) ✅
// 태그(1개 이상) ✅
// 제목(필수 입력, 몇자 이상(10자)) ✅

export default function useValid(data: any) {
	const [validMessage, setValidMessage] = useState('');
	const [isValid, setIsValid] = useState({
		isScope: false,
		isCategory: false,
		isDeadline: false,
		isEndDate: false,
		isCourseTagDto: {
			courseTagName: false,
			courseTagProfessor: false,
		},
		isRecruitmentRole: [
			{
				role: false,
				count: false,
				skill: false,
			},
		],
		isTag: false,
		isTitle: false,
	});

	useEffect(() => {
		if (data.scope === '') {
			setValidMessage('* 범위를 선택해주세요.');
		} else {
			setValidMessage('');
		}
		setIsValid({ ...isValid, isScope: data.scope !== '' ? true : false });
	}, [data.scope]);

	useEffect(() => {
		if (data.category === '') {
			setValidMessage('* 유형을 선택해주세요.');
		} else {
			setValidMessage('');
		}
		setIsValid({ ...isValid, isCategory: data.category !== '' ? true : false });
	}, [data.category]);

	useEffect(() => {
		const date = new Date(data.deadline);
		if (date < new Date()) {
			setValidMessage('* 마감일을 오늘 이후로 설정해주세요.');
		} else {
			setValidMessage('');
		}
		setIsValid({ ...isValid, isDeadline: date >= new Date() });
	}, [data.deadline]);

	useEffect(() => {
		const endDate = new Date(data.period[1]);
		const deadline = new Date(data.deadline);
		if (endDate < deadline) {
			setValidMessage('* 진행완료 날짜를 마감일보다 늦게 설정할 수 없습니다.');
		} else {
			setValidMessage('');
		}
		setIsValid({ ...isValid, isEndDate: endDate < deadline ? false : true });
	}, [data.period[1]]);

	useEffect(() => {
		const isCourseValue = data.courseTagDto.isCourse;
		const courseName = data.courseTagDto.courseTagName;
		if (isCourseValue && courseName === '') {
			setValidMessage('* 수업명을 입력해주세요.');
		} else {
			setValidMessage('');
		}
		setIsValid({
			...isValid,
			isCourseTagDto: {
				...isValid.isCourseTagDto,
				courseTagName: isCourseValue && courseName ? true : false,
			},
		});
	}, [data.courseTagDto.isCourse, data.courseTagDto.courseTagName]);

	useEffect(() => {
		const isCourseValue = data.courseTagDto.isCourse;
		const professorName = data.courseTagDto.courseTagProfessor;
		if (isCourseValue && professorName === '') {
			setValidMessage('* 교수명을 입력해주세요.');
		} else {
			setValidMessage('');
		}
		setIsValid({
			...isValid,
			isCourseTagDto: {
				...isValid.isCourseTagDto,
				courseTagProfessor: isCourseValue && professorName ? true : false,
			},
		});
	}, [data.courseTagDto.isCourse, data.courseTagDto.courseTagProfessor]);

	useEffect(() => {
		if (data.title === '') {
			setValidMessage('* 제목을 입력해주세요.');
		} else if (data.title.length < 10) {
			setValidMessage('* 제목을 10자 이상 입력해주세요.');
		} else {
			setValidMessage('');
		}
		setIsValid({ ...isValid, isTitle: data.title.length < 10 ? false : true });
	}, [data.title]);

	useEffect(() => {
		if (data.tag.length === 0) {
			setValidMessage('* 태그를 하나 이상 선택해주세요.');
		} else {
			setValidMessage('');
		}
		setIsValid({ ...isValid, isTag: data.tag.length === 0 ? false : true });
	}, [data.tag.length]);

	return {
		validMessage,
		isValid,
	};
}
