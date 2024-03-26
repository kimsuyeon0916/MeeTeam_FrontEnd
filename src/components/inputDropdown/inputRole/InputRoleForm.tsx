import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus, Search, XBtn } from '../../../assets';
import S from './InputRoleForm.styled';
import { Role, InputRoleForm, RoleForPost, InputState } from '../../../types';
import { useDebounce } from '../../../hooks';
import { getRoleKeyword, getSkillKeyword } from '../../../service';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';
import { isNotNumber } from '../../../utils';

/**
 * 역할 입력 폼 컴포넌트에서 다루는 상태와 백엔드로 보내기 위한 상태를 분리한다.
 * => 타입과 데이터 구조가 다르기 때문
 *
 * 체크사항
 *  - 역할 이름 입력(없는 경우 id=null => 유효성 검사를 통해 부적절한 역할 명시) ✅
 *  - 역할 선택 시(info 상태(전역)에 id 저장) ✅
 *  - 역할 인원 숫자만 입력(한글, 영어, 특수문자, 지수 e 등 불가) ✅
 *  - 입력하지 않았을 경우 0 할당 ✅
 *  - 스킬 모두 숫자 배열로 저장 ✅
 *  - 올바른 데이터 구조로 전역상태에 저장 ✅
 *  - 역할 삭제 버그 수정 및 전역상태에 반영 ✅
 *
 * @param 역할 목록, 역할 목록 setState 함수
 *
 * @returns 역할 폼
 */

const InputRoleForm = ({ userRoleList, setUserRoleList }: InputRoleForm) => {
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

	const {
		data: dataRole,
		isLoading: isLoadingRole,
		refetch: refetchRole,
	} = useQuery({
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
				<input
					className='role-input'
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
					className='count-input'
					type='text'
					placeholder='인원'
					value={userRole.count}
					onChange={onChangeCount}
				/>
				<section className='container-skills'>
					{userRole.skill.map((tagItem, index) => {
						return (
							<article className='tags' key={index}>
								<span>{tagItem}</span>
								<button type='button' onClick={deleteTagItem}>
									<img src={XBtn as any} id={index.toString()} />
								</button>
							</article>
						);
					})}
					{userRole.skill.length !== 5 && (
						<input
							type='text'
							className='skills-input'
							placeholder={'스킬을 검색해주세요.'}
							value={tagItem}
							onChange={onChangeKeyword}
							onKeyPress={onKeyPress}
							onClick={() => setDropdown(prev => ({ ...prev, skill: true }))}
						/>
					)}
					{userRole.skill.length === 0 && <img src={Search as any} className='icon-search' />}
				</section>
				{dropdown.skill && (
					<section className='dropdown skill'>
						{!isLoadingSkill &&
							dataSkill?.map((keyword: any) => (
								<span key={keyword.id} onClick={onClickSkill} id={keyword.id}>
									{keyword.name}
								</span>
							))}
					</section>
				)}
			</article>
			<article className='add-btn'>
				<button type='button' onClick={onClickHandler}>
					<img src={Plus as any} />
				</button>
			</article>
		</S.InputRoleForm>
	);
};

export default InputRoleForm;
