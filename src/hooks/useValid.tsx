import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { validMessageState, validState } from '../atom';

// <유효성 검사 목록>
// 범위(1개 필수) ✅
// 유형(1개 필수) ✅
// 마감일(오늘 이전 선택 불가) ✅
// 진행기간(마감일보다 일찍 끝날 수 없음) ✅
// 수업(체크 시, 수업명, 교수명 입력) ✅
// 제목(필수 입력, 몇자 이상(10자)) ✅

export default function useValid(data: any) {
	const [validMessage, setValidMessage] = useRecoilState(validMessageState);
	const [isValid, setIsValid] = useRecoilState(validState);

	// useEffect(() => {
	// 	const date = new Date(data.deadline);
	// 	if (date < new Date()) {
	// 		setValidMessage({ ...validMessage, deadline: '* 마감일을 오늘 이후로 설정해주세요.' });
	// 	} else {
	// 		setValidMessage({ ...validMessage, deadline: '' });
	// 	}
	// 	setIsValid({ ...isValid, isDeadline: date >= new Date() });
	// }, [data.deadline]);

	// useEffect(() => {
	// 	const endDate = new Date(data.period[1]);
	// 	const deadline = new Date(data.deadline);
	// 	if (endDate < deadline) {
	// 		setValidMessage({
	// 			...validMessage,
	// 			endDate: '* 진행완료 날짜를 마감일보다 늦게 설정할 수 없습니다.',
	// 		});
	// 	}
	// 	setIsValid({ ...isValid, isEndDate: endDate < deadline ? false : true });
	// }, [data.period[1]]);

	// useEffect(() => {
	// 	const isCourseValue = data.courseTagDto.isCourse;
	// 	const courseName = data.courseTagDto.courseTagName;
	// 	if (isCourseValue && courseName === '') {
	// 		setValidMessage({
	// 			...validMessage,
	// 			courseTagDto: { ...validMessage.courseTagDto, courseTagName: '* 수업명을 입력해주세요.' },
	// 		});
	// 	} else {
	// 		setValidMessage({
	// 			...validMessage,
	// 			courseTagDto: { ...validMessage.courseTagDto, courseTagName: '' },
	// 		});
	// 	}
	// 	setIsValid({
	// 		...isValid,
	// 		isCourseTagDto: {
	// 			...isValid.isCourseTagDto,
	// 			courseTagName: isCourseValue && courseName ? true : false,
	// 		},
	// 	});
	// }, [data.courseTagDto.isCourse, data.courseTagDto.courseTagName]);

	// useEffect(() => {
	// 	const isCourseValue = data.courseTagDto.isCourse;
	// 	const professorName = data.courseTagDto.courseTagProfessor;
	// 	if (isCourseValue && professorName === '') {
	// 		setValidMessage({
	// 			...validMessage,
	// 			courseTagDto: {
	// 				...validMessage.courseTagDto,
	// 				courseTagProfessor: '* 교수명을 입력해주세요.',
	// 			},
	// 		});
	// 	} else {
	// 		setValidMessage({
	// 			...validMessage,
	// 			courseTagDto: { ...validMessage.courseTagDto, courseTagProfessor: '' },
	// 		});
	// 	}
	// 	setIsValid({
	// 		...isValid,
	// 		isCourseTagDto: {
	// 			...isValid.isCourseTagDto,
	// 			courseTagProfessor: isCourseValue && professorName ? true : false,
	// 		},
	// 	});
	// }, [data.courseTagDto.isCourse, data.courseTagDto.courseTagProfessor]);

	useEffect(() => {
		if (data.tag.length === 0) {
			setValidMessage(prev => ({ ...prev, tag: '* 태그를 하나 이상 선택해주세요.' }));
		} else {
			setValidMessage({ ...validMessage, tag: '' });
			console.log(validMessage.tag);
		}
		setIsValid({ ...isValid, isTag: data.tag.length !== 0 ? true : false });
	}, [data.tag.length]);

	useEffect(() => {
		if (data.title === '') {
			setValidMessage(prev => ({ ...prev, title: '* 제목을 입력해주세요.' }));
		} else if (data.title.length < 10) {
			setValidMessage(prev => ({ ...prev, title: '* 제목을 10자 이상 입력해주세요.' }));
		} else {
			setValidMessage(prev => ({ ...prev, title: '' }));
		}
		setIsValid(prev => ({ ...prev, isTitle: data.title.length < 10 ? false : true }));
	}, [data.title]);

	useEffect(() => {
		if (data.scope === '') {
			setValidMessage(prev => ({ ...prev, scope: '* 범위를 선택해주세요.' }));
		} else {
			setValidMessage(prev => ({ ...prev, scope: '' }));
		}
		setIsValid(prev => ({ ...prev, isScope: data.scope !== '' }));
	}, [data.scope]);

	useEffect(() => {
		if (data.category === '') {
			setValidMessage(prev => ({ ...prev, category: '* 유형을 선택해주세요.' }));
		} else {
			setValidMessage(prev => ({ ...prev, category: '' }));
		}
		setIsValid(prev => ({ ...prev, isCategory: data.category !== '' ? true : false }));
	}, [data.category]);

	return { validMessage, isValid };
}
