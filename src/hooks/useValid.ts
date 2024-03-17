import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { validMessageState, validState } from '../atom';
import { InputState } from '../types';

// <유효성 검사 목록>
// 범위(1개 필수) ✅
// 유형(1개 필수) ✅
// 마감일(오늘 이전 선택 불가) ✅
// 진행기간(마감일보다 일찍 끝날 수 없음) ✅
// 수업(체크 시, 수업명, 교수명 입력) ✅
// 제목(필수 입력, 몇자 이상(10자)) ✅
// 부적절한 역할 검사 추가(자동완성 선택지에서 선택하지 않은 역할)
// 부적절한 스킬 검사 추가(userRole vs temp 길이 비교)

export default function useValid(data: InputState) {
	const [validMessage, setValidMessage] = useRecoilState(validMessageState);
	const [isValid, setIsValid] = useRecoilState(validState);

	useEffect(() => {
		const endDate = new Date(data.period[1] as any);
		const deadline = new Date(data.deadline as any);
		if (endDate < deadline) {
			setValidMessage(prev => ({
				...prev,
				endDate: '* 진행완료 날짜를 마감일보다 늦게 설정할 수 없습니다.',
			}));
		}
		setIsValid(prev => ({ ...prev, isEndDate: endDate < deadline ? false : true }));
	}, [data.period[1], data.deadline]);

	useEffect(() => {
		const courseName = data.courseTagDto.courseTagName;
		if (courseName === '') {
			setValidMessage(prev => ({
				...prev,
				courseTagDto: { ...prev.courseTagDto, courseTagName: '* 수업명을 입력해주세요.' },
			}));
		} else {
			setValidMessage({
				...validMessage,
				courseTagDto: { ...validMessage.courseTagDto, courseTagName: '' },
			});
		}
		setIsValid({
			...isValid,
			isCourseTagDto: {
				...isValid.isCourseTagDto,
				courseTagName: courseName ? true : false,
			},
		});
	}, [data.courseTagDto.courseTagName]);

	useEffect(() => {
		const professorName = data.courseTagDto.courseTagProfessor;
		if (professorName === '') {
			setValidMessage(prev => ({
				...prev,
				courseTagDto: {
					...prev.courseTagDto,
					courseTagProfessor: '* 교수명을 입력해주세요.',
				},
			}));
		} else {
			setValidMessage(prev => ({
				...prev,
				courseTagDto: { ...validMessage.courseTagDto, courseTagProfessor: '' },
			}));
		}
		setIsValid(prev => ({
			...prev,
			isCourseTagDto: {
				...prev.isCourseTagDto,
				courseTagProfessor: professorName ? true : false,
			},
		}));
	}, [data.courseTagDto.courseTagProfessor]);

	useEffect(() => {
		if (data.tag.length === 0) {
			setValidMessage(prev => ({ ...prev, tag: '* 태그를 하나 이상 선택해주세요.' }));
		} else {
			setValidMessage({ ...validMessage, tag: '' });
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
