import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus, Search, XBtn } from '../../../assets';
import S from './InputRoleForm.styled';
import { Role, InputUserRoleForm, RoleForPost, InputState, Keyword } from '../../../types';
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
			roleData.skillIds.length === userRole.skill.length &&
			!info.recruitmentRoles.some(obj => obj.roleId === roleData.roleId)
		) {
			setUserRoleList((prev: any) => [...prev, userRole]);
			if (roleData.count === null) {
				roleData.count = 0;
			}
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
	};

	const onClickSkill = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		if (!userRole.skill.includes(innerText) && userRole.skill.length < 6) {
			setUserRole(prev => ({ ...prev, skill: [...prev.skill, innerText] }));
			setRoleData(prev => ({ ...prev, skillIds: [...prev.skillIds, Number(target.id)] }));
			setDropdown(prev => ({
				...prev,
				skill: false,
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
		<S.InputRoleForm $isRoleClicked={dropdown.role} $isSkillClicked={dropdown.skill}>
			<article className='inputs' ref={dropdownRef}>
				<section className='inputs-top'>
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
					<input
						className='count-input body1-medium'
						type='text'
						placeholder='인원'
						value={userRole.count}
						onChange={onChangeCount}
					/>
				</section>
				<section className='inputs-bottom'>
					<section className='container-skills'>
						{userRole.skill.map((tagItem, index) => {
							return (
								<article className='tags' key={index}>
									<span>{tagItem}</span>
									<button type='button' onClick={deleteTagItem}>
										<img src={XBtn} id={index.toString()} />
									</button>
								</article>
							);
						})}
						{userRole.skill.length !== 5 && (
							<input
								type='text'
								className='skills-input body1-medium'
								placeholder={'스킬을 검색해주세요.'}
								value={tagItem}
								onChange={onChangeKeyword}
								onKeyPress={onKeyPress}
								onClick={() => setDropdown(prev => ({ ...prev, skill: true }))}
							/>
						)}
						{userRole.skill.length === 0 && <img src={Search} className='icon-search' />}
					</section>
					{dropdown.skill && (
						<section className='dropdown skill'>
							{!isLoadingSkill &&
								dataSkill?.map((keyword: Keyword) => (
									<span key={keyword.id} onClick={onClickSkill} id={keyword.id.toString()}>
										{keyword.name}
									</span>
								))}
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
