import React, { useState, useRef, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { DropdownArrow, Search, XBtn } from '../../../assets';
import S from './InputRoleForm.styled';
import { RoleForPost, InputState, Keyword } from '../../../types';
import { useDebounce } from '../../../hooks';
import { getRoleKeyword, getSkillKeyword } from '../../../service';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';
import { isNotNumber } from '../../../utils';

const InputRoleForm = () => {
	const [tagItem, setTagItem] = useState<string>('');
	const [info, setInfos] = useRecoilState(recruitInputState);
	const [dropdown, setDropdown] = useState({
		role: false,
		skill: false,
	});
	const [roleData, setRoleData] = useState<RoleForPost>({
		roleId: null,
		count: null,
		skillIds: [],
		roleName: '',
		skills: [],
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

	const keywordRole = useDebounce(roleData.roleName, 500);
	const keywordSkill = useDebounce(tagItem, 500);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const { data: dataRole, isLoading: isLoadingRole } = useQuery({
		queryKey: ['searchRole', keywordRole],
		queryFn: () => getRoleKeyword(keywordRole as string),
		staleTime: 10000,
	});

	const { data: dataSkill, isLoading: isLoadingSkill } = useQuery({
		queryKey: ['searchSkill', keywordSkill],
		queryFn: () => getSkillKeyword(keywordSkill),
	});

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
		}
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const deleteTagItem = (deletedId: number) => {
		setRoleData(prevState => ({
			...prevState,
			skills: prevState?.skills?.filter(skill => skill.id !== deletedId),
			skillIds: prevState?.skillIds.filter(id => id !== deletedId),
		}));
	};

	const onClickHandler = () => {
		if (
			roleData.roleId !== null &&
			roleData.count &&
			!info.recruitmentRoles.some(obj => obj.roleId === roleData.roleId)
		) {
			setIsValid({
				role: { valid: true, message: '' },
				count: { valid: true, message: '' },
			});

			setInfos((prev: InputState) => ({
				...prev,
				recruitmentRoles: [...prev.recruitmentRoles, roleData],
			}));
			setRoleData({
				roleName: '',
				roleId: null,
				count: '',
				skillIds: [],
				skills: [],
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
		setRoleData(prev => ({
			...prev,
			roleName: event.target.value,
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
			setRoleData(prev => ({
				...prev,
				count: Number(countValue),
			}));
		} else {
			setRoleData(prev => ({ ...prev, count: Number(countValue.replace(/\D/g, '')) }));
		}
	};

	const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTagItem(event.target.value);
	};

	const onClickRole = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		setDropdown(prev => ({
			...prev,
			role: false,
		}));
		setRoleData(prev => ({
			...prev,
			roleId: Number(target.id),
			roleName: innerText,
		}));
		setIsValid(prev => ({
			...prev,
			role: { valid: true, message: '' },
		}));
	};

	const onClickSkill = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		if (!roleData.skills?.map(e => e.name).includes(innerText) && roleData.skillIds.length < 5) {
			setRoleData(prev => ({
				...prev,
				skillIds: [...prev.skillIds, Number(target.id)],
				skills: [...(prev.skills as any), { id: Number(target.id), name: innerText }],
			}));
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
		<S.InputRoleForm
			$isRoleClicked={dropdown.role}
			$isSkillClicked={dropdown.skill}
			$isNotValid
			$isRoleName={roleData.roleName !== ''}
			$isCount={roleData.count !== null}
		>
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
							value={roleData.roleName}
							onChange={onChangeRole}
							onClick={() => setDropdown(prev => ({ ...prev, role: true }))}
						/>
						{dropdown.role && (
							<section className='dropdown'>
								{!isLoadingRole &&
									dataRole?.map((keyword: any) => (
										<span key={keyword.id} onClick={onClickRole} id={keyword.id} className='option'>
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
						value={roleData.count?.toString()}
						onChange={onChangeCount}
					/>
					{!isValid.count.valid && (
						<p className='valid-message__count txt4'>{isValid.count.message}</p>
					)}
				</section>
				<section className='inputs-bottom'>
					<section
						className='container-skills'
						onClick={() => setDropdown(prev => ({ ...prev, skill: true }))}
					>
						<input
							type='text'
							className='skills-input body1-medium'
							placeholder={'스킬을 검색해주세요.'}
							value={tagItem}
							onChange={onChangeKeyword}
							onKeyPress={onKeyPress}
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
											className='skill-element body1-medium option'
											id={elem.id.toString()}
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
										{roleData.skills &&
											roleData.skills.map((tagItem: Keyword) => {
												return (
													<article className='tags' key={tagItem.id}>
														<span className='txt2'>{tagItem.name}</span>
														<button
															type='button'
															onClick={() => deleteTagItem(tagItem.id)}
															className='btn-delete__tag'
														>
															<img src={XBtn} />
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
