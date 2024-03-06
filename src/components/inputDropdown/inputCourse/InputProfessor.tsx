import React, { useRef, useState, useEffect } from 'react';
import S from './InputCourse.styled';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';
import { useDebounce } from '../../../hooks';
import { getProfessorKeyword } from '../../../api';

const InputProfessor = ({ isChecked }: { isChecked: boolean }) => {
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [professor, setProfessor] = useState<string>('');
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const keywordProfessor = useDebounce(professor, 500);
	const { data, isLoading } = useQuery({
		queryKey: ['searchProfessor', keywordProfessor],
		queryFn: () => getProfessorKeyword(keywordProfessor),
	});

	const onChangeProfessor = (event: React.ChangeEvent<HTMLInputElement>) => {
		const content = event.target.value;
		setProfessor(content);
		setInfo({
			...info,
			courseTagDto: {
				...info.courseTagDto,
				courseTagProfessor: content,
			},
		});
	};
	const onClickProfessor = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setProfessor(innerText);
		setInfo({
			...info,
			courseTagDto: {
				...info.courseTagDto,
				isCourse: true,
				courseTagProfessor: innerText,
			},
		});
		setShowDropdown(false);
	};

	useEffect(() => {
		if (!isChecked) {
			setShowDropdown(false);
		}
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
	}, [dropdownRef.current, showDropdown, isChecked]);

	return (
		<S.InputProfessor $isProfessorClicked={showDropdown} ref={dropdownRef}>
			<div className='temp'></div>
			<input
				type='text'
				placeholder='교수명'
				className={!isChecked ? 'disable course' : 'course'}
				disabled={!isChecked ? true : false}
				onChange={onChangeProfessor}
				onClick={() => setShowDropdown(prev => !prev)}
				value={professor}
			/>
			{showDropdown && (
				<section className='dropdown'>
					{!isLoading &&
						data?.map((keyword: any) => (
							<span key={keyword.id} onClick={onClickProfessor}>
								{keyword.name}
							</span>
						))}
				</section>
			)}
		</S.InputProfessor>
	);
};

export default InputProfessor;
