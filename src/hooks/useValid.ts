import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { validMessageState, validState } from '../atom';
import { InputState } from '../types';

export default function useValid(data: InputState) {
	const [validMessage, setValidMessage] = useRecoilState(validMessageState);
	const [isValid, setIsValid] = useRecoilState(validState);

	useEffect(() => {
		const convertedStart = new Date(data.proceedingStart as any);
		const convertedEnd = new Date(data.proceedingEnd as any);
		if (convertedStart > convertedEnd) {
			setValidMessage(prev => ({
				...prev,
				endDate: '종료일을 시작일보다 일찍 설정할 수 없습니다.',
			}));
		} else {
			setValidMessage(prev => ({
				...prev,
				endDate: '',
			}));
		}
		setIsValid(prev => ({
			...prev,
			isEndDate: convertedStart < convertedEnd,
		}));
	}, [data.proceedingStart, data.proceedingEnd]);

	useEffect(() => {
		const deadlineDate = new Date(data.deadline as any);
		const endDate = new Date(data.proceedingEnd as any);
		const endDateCheck = deadlineDate > endDate;
		if (endDateCheck) {
			setValidMessage(prev => ({
				...prev,
				deadline: '마감일을 종료일보다 늦게 설정할 수 없습니다.',
			}));
		} else {
			setValidMessage(prev => ({
				...prev,
				deadline: '',
			}));
		}
		setIsValid(prev => ({
			...prev,
			isDeadline: !endDateCheck ? true : false,
		}));
	}, [data.deadline, data.proceedingEnd]);

	useEffect(() => {
		if (data.tags.length === 0) {
			setValidMessage(prev => ({ ...prev, tag: '태그를 하나 이상 선택해주세요.' }));
		} else {
			setValidMessage({ ...validMessage, tag: '' });
		}
		setIsValid({ ...isValid, isTag: data.tags.length !== 0 ? true : false });
	}, [data.tags.length]);

	useEffect(() => {
		if (data.title === '') {
			setValidMessage(prev => ({ ...prev, title: '제목을 입력해주세요.' }));
		} else if (data.title.length < 10) {
			setValidMessage(prev => ({ ...prev, title: '제목을 10자 이상 입력해주세요.' }));
		} else {
			setValidMessage(prev => ({ ...prev, title: '' }));
		}
		setIsValid(prev => ({ ...prev, isTitle: data.title.length < 10 ? false : true }));
	}, [data.title]);

	useEffect(() => {
		if (data.scope === '') {
			setValidMessage(prev => ({ ...prev, scope: '범위를 선택해주세요.' }));
		} else {
			setValidMessage(prev => ({ ...prev, scope: '' }));
		}
		setIsValid(prev => ({ ...prev, isScope: data.scope !== '' }));
	}, [data.scope]);

	useEffect(() => {
		if (data.category === '') {
			setValidMessage(prev => ({ ...prev, category: '유형을 선택해주세요.' }));
		} else {
			setValidMessage(prev => ({ ...prev, category: '' }));
		}
		setIsValid(prev => ({ ...prev, isCategory: data.category !== '' }));
	}, [data.category]);

	useEffect(() => {
		if (data.proceedType === '') {
			setValidMessage(prev => ({ ...prev, procedure: '진행방식을 선택해주세요.' }));
		} else {
			setValidMessage(prev => ({ ...prev, procedure: '' }));
		}
		setIsValid(prev => ({ ...prev, isProcedure: data.proceedType !== '' }));
	}, [data.proceedType]);

	useEffect(() => {}, [data.recruitmentRoles]);

	return { validMessage, isValid };
}
