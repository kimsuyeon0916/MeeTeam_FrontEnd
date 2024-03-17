import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Plus, XBtn } from '../../../assets';
import S from './InputRoleForm.styled';
import { Role, InputRoleForm, TempRole, InputState } from '../../../types';
import { useDebounce } from '../../../hooks';
import { getRoleKeyword, getSkillKeyword } from '../../../api';
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
	const [showDropdown, setShowDropdown] = useState({
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

	const [temp, setTemp] = useState<TempRole>({
		id: 0,
		role: null,
		count: null,
		skill: [],
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
			temp.role !== null &&
			temp.skill.length === userRole.skill.length &&
			!info.recruitmentRoleDto.some(obj => obj.role === temp.role)
		) {
			setUserRoleList((prev: any) => [...prev, userRole]);
			if (temp.count === null) {
				temp.count = 0;
			}
			setInfos((prev: InputState) => ({
				...prev,
				recruitmentRoleDto: [...prev.recruitmentRoleDto, temp],
			}));
			setUserRole({
				id: userRoleList.length + 1,
				role: { id: null, name: '' },
				count: '',
				skill: [],
			});
			setTemp({
				id: userRoleList.length + 1,
				role: null,
				count: null,
				skill: [],
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
			setTemp(prev => ({
				...prev,
				count: Number(countValue),
			}));
		} else {
			setUserRole(prev => ({ ...prev, count: countValue.replace(/\D/g, '') }));
			setTemp(prev => ({ ...prev, count: Number(countValue.replace(/\D/g, '')) }));
		}
	};

	const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTagItem(event.target.value);
	};

	const onClickRole = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		setUserRole(prev => ({ ...prev, role: { id: Number(target.id), name: innerText } }));
		setShowDropdown(prev => ({
			...prev,
			role: false,
		}));
		setTemp(prev => ({
			...prev,
			role: Number(target.id),
		}));
	};

	const onClickSkill = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		if (!userRole.skill.includes(innerText) && userRole.skill.length < 6) {
			setUserRole(prev => ({ ...prev, skill: [...prev.skill, innerText] }));
			setTemp(prev => ({ ...prev, skill: [...prev.skill, Number(target.id)] }));
			setShowDropdown(prev => ({
				...prev,
				skill: false,
			}));
			setTagItem('');
		}
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				showDropdown.role &&
				dropdownRef.current &&
				!dropdownRef.current.contains(target as Node)
			) {
				setShowDropdown(prev => ({
					...prev,
					role: false,
				}));
			}
			if (
				showDropdown.skill &&
				dropdownRef.current &&
				!dropdownRef.current.contains(target as Node)
			) {
				setShowDropdown(prev => ({
					...prev,
					skill: false,
				}));
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, showDropdown.role, showDropdown.skill]);

	return (
		<S.InputRoleForm $isRoleClicked={showDropdown.role} $isSkillClicked={showDropdown.skill}>
			<article className='inputs' ref={dropdownRef}>
				<input
					className='role-input'
					type='text'
					placeholder='역할'
					value={userRole.role.name}
					onChange={onChangeRole}
					onClick={() => setShowDropdown(prev => ({ ...prev, role: !prev.role }))}
				/>
				{showDropdown.role && (
					<section className='dropdown'>
						{!isLoadingRole &&
							dataRole?.map((keyword: any, index: number) => (
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
							<article className='container-tags' key={index}>
								<span>{tagItem}</span>
								<button type='button' onClick={deleteTagItem}>
									<img src={XBtn} id={index.toString()} />
								</button>
							</article>
						);
					})}
					<input
						type='text'
						className='skills-input'
						placeholder={userRole.skill.length ? '' : '태그를 검색하고 선택하세요.'}
						value={tagItem}
						onChange={onChangeKeyword}
						onKeyPress={onKeyPress}
						onClick={() => setShowDropdown(prev => ({ ...prev, skill: !prev.skill }))}
					/>
				</section>
				{showDropdown.skill && (
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
					<img src={Plus} />
				</button>
			</article>
		</S.InputRoleForm>
	);
};

export default InputRoleForm;
