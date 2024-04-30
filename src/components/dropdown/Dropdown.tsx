import React, { useState, useRef, useEffect } from 'react';
import S from './Dropdown.styled';
import { useDebounce } from '../../hooks';
import { useQuery } from '@tanstack/react-query';
import { getCourseKeyword, getProfessorKeyword } from '../../service';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { applicantFilter, recruitFilterState } from '../../atom';
import { ManageRole, Keyword } from '../../types';
import { DropdownArrowUp, DropdownArrow } from '../../assets';
import { useLocation, useSearchParams } from 'react-router-dom';

interface Dropdown {
	data?: string[];
	initialData?: string;
	$showDropdown?: boolean;
	scope?: boolean;
	category?: boolean;
	applicant?: boolean;
	roleObj?: ManageRole[];
}

type keyObj = {
	[key: string]: number;
};

const scopeObj: keyObj = {
	'전체 보기': 0,
	교외: 1,
	교내: 2,
};

const categoryObj: keyObj = {
	전체: 0,
	프로젝트: 1,
	스터디: 2,
	공모전: 3,
};

const Dropdown = ({ data, initialData, scope, category, applicant, roleObj }: Dropdown) => {
	const [currentValue, setCurrentValue] = useState<string | undefined>(`${initialData}`);
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
	const location = useLocation();
	const setApplicantFilter = useSetRecoilState(applicantFilter);
	const keywordCourse = useDebounce(name.course, 500);
	const keywordProfessor = useDebounce(name.professor, 500);
	const [filterState, setFilterState] = useRecoilState(recruitFilterState);
	const [searchParams, setSearchParams] = useSearchParams();

	const { data: dataCourse, isLoading: isLoadingCourse } = useQuery({
		queryKey: ['searchCourse', keywordCourse],
		queryFn: () => getCourseKeyword(keywordCourse),
	});
	const { data: dataProfessor, isLoading: isLoadingProfessor } = useQuery({
		queryKey: ['searchProfessor', keywordProfessor],
		queryFn: () => getProfessorKeyword(keywordProfessor),
	});

	const getKeyByValue = (obj: keyObj, value: number) => {
		return Object.keys(obj).find(key => obj[key] === value);
	};

	const onClickDropdown = () => {
		if (scope) {
			setShowDropdown(true);
		} else {
			setShowDropdown(prev => !prev);
		}
	};

	const onClickList = (event: React.MouseEvent<HTMLElement>, id?: number) => {
		event.stopPropagation();
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);
		if (applicant && id) {
			setApplicantFilter(id);
		} else {
			if (innerText === '전체') {
				searchParams.delete('category');
				setSearchParams(searchParams);
				setShowDropdown(false);
				return;
			} else {
				searchParams.set('category', categoryObj[innerText].toString());
				setSearchParams(searchParams);
			}
			setFilterState(prev => ({ ...prev, category: Number(searchParams.get('category')) }));
		}
		setShowDropdown(false);
	};

	const onClickRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.stopPropagation();
		const value = event.target.value;
		setCurrentValue(value);
		setFilterState(prev => ({ ...prev, scope: scopeObj[value] }));
		if (value !== '교내') {
			setShowDropdown(false);
		}
		if (value === '전체 보기') {
			searchParams.delete('scope');
			setSearchParams(searchParams);
			return;
		}
		searchParams.set('scope', scopeObj[value].toString());
		setSearchParams(searchParams);
	};

	const onClickCheckbox = () => {
		setIsChecked(prev => !prev);
	};

	const onClickCourse = (event: React.MouseEvent<HTMLSpanElement>) => {
		event.stopPropagation();
		const target = event.target as HTMLSpanElement;
		const { innerText, id } = target;
		setName(prev => ({ ...prev, course: innerText }));
		setDropdown(prev => ({ ...prev, course: false }));
		setFilterState(prev => ({ ...prev, course: Number(id) }));
		searchParams.set('course', id);
		setSearchParams(searchParams);
	};
	const onClickProfessor = (event: React.MouseEvent<HTMLSpanElement>) => {
		const target = event.target as HTMLSpanElement;
		const { innerText, id } = target;
		setName(prev => ({ ...prev, professor: innerText }));
		setDropdown(prev => ({ ...prev, professor: false }));
		setFilterState(prev => ({ ...prev, professor: Number(id) }));
		searchParams.set('professor', id);
		setSearchParams(searchParams);
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
		if (scope && filterState.scope !== null) {
			setCurrentValue(getKeyByValue(scopeObj, filterState.scope));
		} else if (scope && filterState.scope === null) {
			setCurrentValue('범위');
		}
	}, [filterState.scope]);

	useEffect(() => {
		if (category && filterState.category !== null) {
			setCurrentValue(getKeyByValue(categoryObj, filterState.category));
		} else if (category && filterState.category === null) {
			setCurrentValue('유형');
		}
	}, [filterState.category]);

	return (
		<S.Dropdown $showDropdown={showDropdown} $scope={scope} $isCheck={isChecked} ref={dropdownRef}>
			<article className='wrapper' onClick={onClickDropdown}>
				<div className='dropdown-box'>
					{scope && (
						<div className='value'>
							{filterState.scope ? getKeyByValue(scopeObj, filterState.scope) : currentValue}
						</div>
					)}
					{category && (
						<div className='value'>
							{filterState.category
								? getKeyByValue(categoryObj, filterState.category)
								: currentValue}
						</div>
					)}
					{applicant && <div className='value'>{currentValue}</div>}
					<img src={showDropdown ? DropdownArrowUp : DropdownArrow} />
				</div>
				{showDropdown && (
					<>
						<div className='dropdown'>
							{scope && (
								<ul className='menu-container'>
									{data?.map((e: string, index: number) => (
										<React.Fragment key={index}>
											<section className={`menu-scope ${e === '교내' && 'in'}`}>
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
											{currentValue === '교내' && (
												<section className='inside'>
													<section className='intro'>
														<span className='description'>
															수업이신 경우 오른쪽의 “수업” 체크박스를 눌러주세요.
														</span>
													</section>
													<section className='container-checkbox'>
														<input
															type='checkbox'
															id='course'
															onClick={onClickCheckbox}
															className='input-checkbox'
														/>
														<label className='course-label' htmlFor='course'>
															수업
														</label>
													</section>
													<section className='wrapper-inputs' ref={insideRef}>
														<section className='container-inputs'>
															<input
																type='text'
																placeholder='수업명'
																value={name.course}
																disabled={!isChecked ? true : false}
																onChange={onChangeCourse}
																onClick={() => setDropdown({ course: true, professor: false })}
															/>
															{dropdown.course && (
																<section className='dropdown'>
																	{!isLoadingCourse &&
																		dataCourse?.map((keyword: Keyword) => (
																			<span
																				key={keyword.id}
																				onClick={onClickCourse}
																				id={keyword.id.toString()}
																			>
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
																onClick={() => setDropdown({ course: false, professor: true })}
															/>
															{dropdown.professor && (
																<section className='dropdown'>
																	{!isLoadingProfessor &&
																		dataProfessor?.map((keyword: Keyword) => (
																			<span
																				key={keyword.id}
																				onClick={onClickProfessor}
																				id={keyword.id.toString()}
																			>
																				{keyword.name}
																			</span>
																		))}
																</section>
															)}
														</section>
													</section>
												</section>
											)}
										</React.Fragment>
									))}
								</ul>
							)}
							{category && (
								<ul className='menu-container category'>
									{data?.map((e: string, index: number) => (
										<li onClick={onClickList} key={index}>
											{e}
										</li>
									))}
								</ul>
							)}
							{applicant && (
								<ul className='menu-container category'>
									{roleObj?.map(e => (
										<li
											onClick={event => onClickList(event, e.id as number | undefined)}
											key={e.id}
										>
											{e.title}
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
