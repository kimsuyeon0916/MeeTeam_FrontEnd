import React, { useEffect, useRef, useState } from 'react';
import S from './InputCourse.styled';
import { useQuery } from '@tanstack/react-query';
import { Subtitle } from '../..';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';
import { useDebounce } from '../../../hooks';
import { getCourseKeyword } from '../../../api';
import { InputCourse } from '../../../types';

const InputCourse = ({ isChecked, onClickHandler }: InputCourse) => {
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [courseName, setCourseName] = useState<string>('');
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const keywordCourse = useDebounce(courseName, 500);
	const { data, isLoading } = useQuery({
		queryKey: ['searchCourse', keywordCourse],
		queryFn: () => getCourseKeyword(keywordCourse),
	});

	const onChangeCourseName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const content = event.target.value;
		setCourseName(content);
		setInfo({
			...info,
			courseTagDto: {
				...info.courseTagDto,
				isCourse: true,
				courseTagName: content,
			},
		});
	};

	const onClickCourse = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setCourseName(innerText);
		setInfo({
			...info,
			courseTagDto: {
				...info.courseTagDto,
				isCourse: true,
				courseTagName: innerText,
			},
		});
		setShowDropdown(false);
	};
	const handleOnClick = () => {
		onClickHandler();
		setShowDropdown(false);
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setShowDropdown(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, showDropdown]);

	return (
		<S.InputCourse $isCourseClicked={showDropdown} ref={dropdownRef}>
			<div className='title-info'>
				<article>
					<Subtitle>{'수업'}</Subtitle>
					<span className='description'>수업인 경우에 체크해주세요.</span>
				</article>
				<article>
					<span className='description-check'>수업 선택</span>
					<input type='checkbox' onClick={handleOnClick} />
				</article>
			</div>
			<input
				type='text'
				placeholder='수업명'
				className={!isChecked ? 'disable course' : 'course'}
				disabled={!isChecked ? true : false}
				onChange={onChangeCourseName}
				value={courseName}
				onClick={() => setShowDropdown(prev => !prev)}
			/>
			{showDropdown && (
				<section className='dropdown'>
					{!isLoading &&
						data?.map((keyword: any) => (
							<span key={keyword.id} onClick={onClickCourse}>
								{keyword.name}
							</span>
						))}
				</section>
			)}
		</S.InputCourse>
	);
};

export default InputCourse;
