import React, { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DropdownArrow, Search, XBtn } from '../../../assets';
import S from './InputRoleForm.styled';
import { Role, InputUserRoleForm, RoleForPost, InputState } from '../../../types';
import { useDebounce } from '../../../hooks';
import { getRoleKeyword, getSkillKeyword } from '../../../service';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';
import { isNotNumber } from '../../../utils';

const InputRoleForm = ({ userRoleList, setUserRoleList }: InputUserRoleForm) => {
	const [tagItem, setTagItem] = useState<string>('');
	const [info, setInfos] = useRecoilState(recruitInputState);
	const [dropdown, setDropdown] = useState({
		role: false,
		skill: false,
	});
	const [userRole, setUserRole] = useState<Role>({
		id: 0,
		role: {
			id: null,
			name: '',
		},
		count: '',
		skill: [],
	});
	const [roleData, setRoleData] = useState<RoleForPost>({
		roleId: null,
		count: null,
		skillIds: [],
	});

	const [isValid, setIsValid] = useState({
		role: {
			valid: false,
			message: '',
		},
		count: {
			valid: false,
			message: '',
		},
	});

	const keywordRole = useDebounce(userRole.role.name, 500);
	const keywordSkill = useDebounce(tagItem, 500);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const { data: dataRole, isLoading: isLoadingRole } = useQuery({
		queryKey: ['searchRole', keywordRole],
		queryFn: () => getRoleKeyword(keywordRole),
		staleTime: 10000,
	});

	const { data: dataSkill, isLoading: isLoadingSkill } = useQuery({
		queryKey: ['searchSkill', keywordSkill],
		queryFn: () => getSkillKeyword(keywordSkill),
	});

	const submitTagItem = () => {
		setUserRole(prevState => ({
			...prevState,
			skill: [...prevState.skill, tagItem],
		}));
		setTagItem('');
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			submitTagItem();
		}
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const deleteTagItem = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (event.target instanceof Element) {
			const deletedIndex = Number(event.target.id);
			setUserRole(prevState => ({
				...prevState,
				skill: prevState.skill.filter((_, index) => index !== deletedIndex),
			}));
		}
	};

	const onClickHandler = () => {
		if (
			roleData.roleId !== null &&
			roleData.count &&
			roleData.skillIds.length === userRole.skill.length &&
			!info.recruitmentRoles.some(obj => obj.roleId === roleData.roleId)
		) {
			setUserRoleList((prev: RoleForPost[]) => [...prev, userRole]);
			setIsValid({
				role: { valid: true, message: '' },
				count: { valid: true, message: '' },
			});

			setInfos((prev: InputState) => ({
				...prev,
				recruitmentRoles: [...prev.recruitmentRoles, roleData],
			}));
			setUserRole({
				id: userRoleList.length + 1,
				role: { id: null, name: '' },
				count: '',
				skill: [],
			});
			setRoleData({
				roleId: null,
				count: null,
				skillIds: [],
			});
			setTagItem('');
			setDropdown(prev => ({
				...prev,
				skill: false,
			}));
		} else if (!roleData.roleId && roleData.count) {
			setIsValid({
				role: { valid: false, message: '해당 역할명을 입력해주세요.' },
				count: { valid: true, message: '' },
			});
		} else if (!roleData.roleId && !roleData.count) {
			setIsValid({
				role: { valid: false, message: '모집하는 역할을 입력해주세요.' },
				count: { valid: true, message: '' },
			});
		} else if (roleData.roleId && !roleData.count) {
			setIsValid({
				role: { valid: true, message: '' },
				count: { valid: false, message: '모집 인원 수를 입력해주세요.' },
			});
		}
	};
	const onChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setUserRole(prev => ({
			...prev,
			role: { ...prev.role, name: event.target.value },
		}));
	};

	const onChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
		const countValue = event.target.value;

		if (countValue.length) {
			setIsValid(prev => ({
				...prev,
				count: { valid: true, message: '' },
			}));
		}

		if (isNotNumber(countValue)) {
			setUserRole(prev => ({
				...prev,
				count: countValue,
			}));
			setRoleData(prev => ({
				...prev,
				count: Number(countValue),
			}));
		} else {
			setUserRole(prev => ({ ...prev, count: countValue.replace(/\D/g, '') }));
			setRoleData(prev => ({ ...prev, count: Number(countValue.replace(/\D/g, '')) }));
		}
	};

	const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTagItem(event.target.value);
	};

	const onClickRole = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		setUserRole(prev => ({ ...prev, role: { id: Number(target.id), name: innerText } }));
		setDropdown(prev => ({
			...prev,
			role: false,
		}));
		setRoleData(prev => ({
			...prev,
			roleId: Number(target.id),
		}));
		setIsValid(prev => ({
			...prev,
			role: { valid: true, message: '' },
		}));
	};

	const onClickSkill = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		if (!userRole.skill.includes(innerText) && userRole.skill.length < 6) {
			setUserRole(prev => ({ ...prev, skill: [...prev.skill, innerText] }));
			setRoleData(prev => ({ ...prev, skillIds: [...prev.skillIds, Number(target.id)] }));

			setTagItem('');
		}
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (dropdown.role && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setDropdown(prev => ({
					...prev,
					role: false,
				}));
			}
			if (dropdown.skill && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setDropdown(prev => ({
					...prev,
					skill: false,
				}));
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, dropdown.role, dropdown.skill]);

	return (
		<S.InputRoleForm $isRoleClicked={dropdown.role} $isSkillClicked={dropdown.skill} $isNotValid>
			<article className='inputs' ref={dropdownRef}>
				<span className='inputs-subtitle body2-semibold'>
					역할 입력 <span className='dot'> *</span>
				</span>
				<section className='inputs-top'>
					<section className='container-role__input'>
						<input
							className='role-input body1-medium'
							type='text'
							placeholder='역할'
							value={userRole.role.name}
							onChange={onChangeRole}
							onClick={() => setDropdown(prev => ({ ...prev, role: true }))}
						/>
						{dropdown.role && (
							<section className='dropdown'>
								{!isLoadingRole &&
									dataRole?.map((keyword: any) => (
										<span key={keyword.id} onClick={onClickRole} id={keyword.id}>
											{keyword.name}
										</span>
									))}
							</section>
						)}
						<img src={DropdownArrow} />
					</section>
					{!isValid.role.valid && (
						<p className='valid-message__role txt4'>{isValid.role.message}</p>
					)}
					<input
						className='count-input body1-medium'
						type='text'
						placeholder='인원'
						value={userRole.count}
						onChange={onChangeCount}
					/>
					{!isValid.count.valid && (
						<p className='valid-message__count txt4'>{isValid.count.message}</p>
					)}
				</section>
				<section className='inputs-bottom'>
					<section className='container-skills'>
						<input
							type='text'
							className='skills-input body1-medium'
							placeholder={'스킬을 검색해주세요.'}
							value={tagItem}
							onChange={onChangeKeyword}
							onKeyPress={onKeyPress}
							onClick={() => setDropdown(prev => ({ ...prev, skill: true }))}
						/>
						<img src={Search} className='icon-search' />
					</section>
					{dropdown.skill && (
						<section className='dropdown-skill'>
							<section className='list-skill'>
								{!isLoadingSkill &&
									dataSkill?.map((elem, _) => (
										<span
											key={elem.id}
											className='skill-element body1-medium'
											onClick={onClickSkill}
										>
											{elem.name}
										</span>
									))}
								{!isLoadingSkill && dataSkill?.length === 0 && (
									<section className='no-result'>
										<span className='body1-medium'>검색 결과가 없습니다.</span>
									</section>
								)}
							</section>
							<hr />
							<section className='list-selected'>
								<section className='wrapper-selected__skills'>
									<span className='body1-medium'>보유 스킬</span>
									<section className='container-selected__skills'>
										{userRole.skill.map((tagItem, index) => {
											return (
												<article className='tags' key={index}>
													<span className='txt2'>{tagItem}</span>
													<button type='button' onClick={deleteTagItem} className='btn-delete__tag'>
														<img src={XBtn} id={index.toString()} />
													</button>
												</article>
											);
										})}
									</section>
								</section>
								<p className='txt4 mention'>보유 스킬은 최대 5개까지 입력 가능합니다.</p>
							</section>
						</section>
					)}
					<article className='add-btn'>
						<button type='button' className='txt-big' onClick={onClickHandler}>
							추가
						</button>
					</article>
				</section>
			</article>
		</S.InputRoleForm>
	);
};

export default InputRoleForm;
