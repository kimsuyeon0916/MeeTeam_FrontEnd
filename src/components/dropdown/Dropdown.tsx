import React, { useState, useRef, useEffect } from 'react';
import S from './Dropdown.styled';
import DropdownArrow from './DropdownArrow';
import { useDebounce } from '../../hooks';
import { useQuery } from '@tanstack/react-query';
import { getCourseKeyword, getProfessorKeyword } from '../../service';
import { useRecoilState } from 'recoil';
import { recruitFilterState } from '../../atom';

interface Dropdown {
	data: string[];
	initialData?: string;
	scope?: boolean;
	normalVersion?: boolean;
}

type keyObj = {
	[key: string]: number;
};

const scopeObj: keyObj = {
	교내: 1,
	교외: 2,
};

const categoryObj: keyObj = {
	프로젝트: 1,
	스터디: 2,
	공모전: 3,
};

const Dropdown = ({ data, initialData, scope, normalVersion }: Dropdown) => {
	const [currentValue, setCurrentValue] = useState(initialData);
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const [dropdown, setDropdown] = useState({
		course: false,
		professor: false,
	});
	const insideRef = useRef<HTMLDivElement | null>(null);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [name, setName] = useState({
		course: '',
		professor: '',
	});
	const keywordCourse = useDebounce(name.course, 500);
	const keywordProfessor = useDebounce(name.professor, 500);
	const [filterState, setFilterState] = useRecoilState(recruitFilterState);

	const { data: dataCourse, isLoading: isLoadingCourse } = useQuery({
		queryKey: ['searchCourse', keywordCourse],
		queryFn: () => getCourseKeyword(keywordCourse),
	});
	const { data: dataProfessor, isLoading: isLoadingProfessor } = useQuery({
		queryKey: ['searchProfessor', keywordProfessor],
		queryFn: () => getProfessorKeyword(keywordProfessor),
	});

	const onClickDropdown = () => {
		setShowDropdown(true);
	};

	const onClickList = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);
		setFilterState(prev => ({ ...prev, category: categoryObj[innerText] }));
		setShowDropdown(false);
	};

	const onClickRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		const value = event.target.value;
		setCurrentValue(value);
		setFilterState(prev => ({ ...prev, scope: scopeObj[value] }));
		if (value !== '교내' || normalVersion) {
			setShowDropdown(false);
		}
	};

	const onClickCheckbox = () => {
		setIsChecked(prev => !prev);
	};

	const onClickCourse = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setName(prev => ({ ...prev, course: innerText }));
		setDropdown(prev => ({ ...prev, course: false }));
	};
	const onClickProfessor = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setName(prev => ({ ...prev, professor: innerText }));
		setDropdown(prev => ({ ...prev, professor: false }));
	};

	const onChangeCourse = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(prev => ({ ...prev, course: event.target.value }));
	};
	const onChangeProfessor = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(prev => ({ ...prev, professor: event.target.value }));
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setShowDropdown(false);
			}

			if (dropdown.course && insideRef.current && !insideRef.current.contains(target as Node)) {
				setDropdown(prev => ({ ...prev, course: false }));
			}

			if (dropdown.professor && insideRef.current && !insideRef.current.contains(target as Node)) {
				setDropdown(prev => ({ ...prev, professor: false }));
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, showDropdown, dropdown.course, dropdown.professor]);

	useEffect(() => {
		if ((scope && filterState.scope === null) || normalVersion) {
			setCurrentValue('범위');
		} else if (!scope && filterState.category === null) {
			setCurrentValue('유형');
		}
	}, [filterState.scope, filterState.category]);

	return (
		<S.Dropdown
			$showDropdown={showDropdown}
			$scope={scope}
			$isCheck={isChecked}
			$normalVersion={normalVersion}
			ref={dropdownRef}
		>
			<article className='wrapper' onClick={onClickDropdown}>
				<div className='temp'>
					<div className='value'>{currentValue}</div>
					<div className='icon'>
						<DropdownArrow />
					</div>
				</div>
				{showDropdown && (
					<>
						<div className='dropdown'>
							{scope ? (
								<ul className='menu-container'>
									{data.map((e: string, index: number) => (
										<>
											<section key={index} className={`menu-scope ${e === '교내' && 'in'}`}>
												<input
													type='radio'
													id={`${index}`}
													name='scope'
													value={e}
													checked={e === currentValue}
													onChange={onClickRadio}
												/>
												<label htmlFor={`${index}`}>{e}</label>
											</section>
											{currentValue === '교내' && !normalVersion && (
												<section className='inside'>
													<section className='intro'>
														<span className='description'>
															수업이신 경우 오른쪽의 “수업” 체크박스를 눌러주세요.
														</span>
														<section>
															<input type='checkbox' id='course' onClick={onClickCheckbox} />
															<label className='course-label' htmlFor='course'>
																수업
															</label>
														</section>
													</section>
													<section className='wrapper-inputs' ref={insideRef}>
														<section className='container-inputs'>
															<input
																type='text'
																placeholder='수업명'
																value={name.course}
																disabled={!isChecked ? true : false}
																onChange={onChangeCourse}
																onClick={() => setDropdown(prev => ({ ...prev, course: true }))}
															/>
															{dropdown.course && (
																<section className='dropdown'>
																	{!isLoadingCourse &&
																		dataCourse?.map((keyword: any) => (
																			<span key={keyword.id} onClick={onClickCourse}>
																				{keyword.name}
																			</span>
																		))}
																</section>
															)}
														</section>
														<section className='container-inputs'>
															<input
																type='text'
																placeholder='교수명'
																value={name.professor}
																disabled={!isChecked ? true : false}
																onChange={onChangeProfessor}
																onClick={() => setDropdown(prev => ({ ...prev, professor: true }))}
															/>
															{dropdown.professor && (
																<section className='dropdown'>
																	{!isLoadingProfessor &&
																		dataProfessor?.map((keyword: any) => (
																			<span key={keyword.id} onClick={onClickProfessor}>
																				{keyword.name}
																			</span>
																		))}
																</section>
															)}
														</section>
													</section>
												</section>
											)}
										</>
									))}
								</ul>
							) : (
								<ul className='menu-container category'>
									{data.map((e: string, index: number) => (
										<li onClick={onClickList} key={index}>
											{e}
										</li>
									))}
								</ul>
							)}
						</div>
					</>
				)}
			</article>
		</S.Dropdown>
	);
};

export default Dropdown;
