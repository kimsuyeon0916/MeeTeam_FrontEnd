import React, { useState, useRef, useEffect } from 'react';
import S from './Dropdown.styled';
import DropdownArrow from './DropdownArrow';
import { useDebounce } from '../../hooks';
import { useQuery } from '@tanstack/react-query';
import { getCourseKeyword, getProfessorKeyword } from '../../service';

interface IDropdown {
	data: string[];
	initialData?: string;
	$showDropdown?: boolean;
	scope?: boolean;
}

interface Event {
	event: React.MouseEvent<HTMLInputElement> | React.MouseEvent<HTMLLabelElement>;
}

const Dropdown = ({ data, initialData, scope }: IDropdown) => {
	const [currentValue, setCurrentValue] = useState(`${initialData}`);
	const [showDropdown, setShowDropdown] = useState(false);
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
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);
		setShowDropdown(false);
	};

	const onClickRadio = (event: any) => {
		setCurrentValue(event.target.value);
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
	}, [dropdownRef.current, showDropdown, dropdown.course, dropdown.professor, insideRef.current]);

	return (
		<S.Dropdown
			$showDropdown={showDropdown}
			onClick={onClickDropdown}
			ref={dropdownRef}
			scope={scope}
			$isCheck={isChecked}
		>
			<article className='wrapper'>
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
											<section
												key={index}
												className={`menu-scope ${e === '교내' && 'in'}`}
												onClick={onClickRadio}
											>
												<input
													type='radio'
													id={`${index}`}
													name='scope'
													value={e}
													checked={e === currentValue}
												/>
												<label htmlFor={`${index}`}>{e}</label>
											</section>
											{currentValue === '교내' && (
												<section className='inside' ref={insideRef}>
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
													<section className='wrapper-inputs'>
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
