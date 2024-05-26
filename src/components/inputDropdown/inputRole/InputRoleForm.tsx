import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle, Ref } from 'react';
import S from './InputRoleForm.styled';
import { useQuery } from '@tanstack/react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isNotNumber } from '../../../utils';
import { recruitInputState, warningModalRoleCountState } from '../../../atom';
import { useDebounce, useValid } from '../../../hooks';
import { BluePlus, GrayDelete, SearchIcon, XBtn } from '../../../assets';
import { RoleForPost, InputState, Keyword } from '../../../types';
import { getRoleKeyword, getSkillKeyword } from '../../../service';

interface InputRoleObj {
	id?: number | null;
	role?: string;
	count?: string | number;
	skills?: Keyword[];
	onDelete?: (id: number | null) => void;
}

const InputRoleForm = forwardRef((props: InputRoleObj, ref: Ref<{ handleAddRole: () => void }>) => {
	const { id, role, count, skills, onDelete } = props;
	const containerRef = useRef<HTMLDivElement>(null);
	const [tagItem, setTagItem] = useState<string>('');
	const [info, setInfos] = useRecoilState(recruitInputState);
	const [dropdown, setDropdown] = useState({
		role: false,
		skill: false,
	});
	const [roleData, setRoleData] = useState<RoleForPost>({
		roleId: id ? id : null,
		count: count ? count : null,
		skillIds: skills ? skills.map(e => e.id) : [],
		roleName: role ? role : '',
		skills: skills ? skills : [],
	});
	const { validMessage, isValid } = useValid(info);
	const [isValidBeforeSubmit, setisValidBeforeSubmit] = useState({
		role: {
			valid: false,
			message: '',
		},
		count: {
			valid: false,
			message: '',
		},
		roleLength: {
			valid: false,
			message: '',
		},
	});

	const keywordRole = useDebounce(roleData.roleName, 500);
	const keywordSkill = useDebounce(tagItem, 500);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const setWarningModalRoleCountState = useSetRecoilState(warningModalRoleCountState);

	const { data: dataRole, isLoading: isLoadingRole } = useQuery({
		queryKey: ['searchRole', keywordRole],
		queryFn: () => getRoleKeyword(keywordRole as string),
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const { data: dataSkill, isLoading: isLoadingSkill } = useQuery({
		queryKey: ['searchSkill', keywordSkill],
		queryFn: () => getSkillKeyword(keywordSkill),
		staleTime: Infinity,
		gcTime: Infinity,
	});

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const deleteTagItem = (deletedId: number) => {
		if (id) {
			setInfos(prev => ({
				...prev,
				recruitmentRoles: prev.recruitmentRoles.map(role =>
					role.roleId === id
						? {
								...role,
								skills: role.skills?.filter(skill => skill.id !== deletedId),
								skillIds: role.skillIds.filter(id => id !== deletedId),
						  }
						: role
				),
			}));
		}
		setRoleData(prevState => ({
			...prevState,
			skills: prevState?.skills?.filter(skill => skill.id !== deletedId),
			skillIds: prevState?.skillIds.filter(id => id !== deletedId),
		}));
	};

	const onClickSkillInput = (event: React.MouseEvent<HTMLInputElement>) => {
		event.stopPropagation();
	};

	const deleteTagHandler = (event: React.MouseEvent<HTMLButtonElement>, deleteId: number) => {
		event.stopPropagation();
		deleteTagItem(deleteId);
	};

	const handleAddRole = () => {
		setInfos(prevState => {
			const hasNullRoleId = prevState.recruitmentRoles.some(role => role.roleId === null);
			if (!hasNullRoleId) {
				return {
					...prevState,
					recruitmentRoles: [
						{ roleName: '', roleId: null, count: null, skillIds: [], skills: [] },
						...prevState.recruitmentRoles,
					],
				};
			}
			return prevState;
		});
	};
	const onChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setRoleData(prev => ({
			...prev,
			roleName: event.target.value,
		}));
		setDropdown(prev => ({ ...prev, role: true }));
	};
	const onChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		let countValue = event.target.value;

		if (!isNotNumber(countValue)) {
			countValue = countValue.replace(/\D/g, '');
		}
		if (id) {
			setRoleData(prev => {
				const updatedRoleData = { ...prev, count: countValue };
				setInfos(prevInfos => ({
					...prevInfos,
					recruitmentRoles: prevInfos.recruitmentRoles.map(role =>
						role.roleId === updatedRoleData.roleId
							? { ...role, count: Number(updatedRoleData.count) }
							: role
					),
				}));
				return updatedRoleData;
			});
		} else {
			setInfos(prev => {
				const recruitmentRoles = prev.recruitmentRoles.map(role => {
					if (role.roleId === null) {
						return { ...role, count: Number(countValue) };
					}
					return role;
				});

				return { ...prev, recruitmentRoles };
			});
		}
	};

	const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setTagItem(event.target.value);
		setDropdown(prev => ({ ...prev, skill: true }));
	};

	const onClickRole = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		if (id) {
			setInfos(prev => ({
				...prev,
				recruitmentRoles: prev.recruitmentRoles.map(role =>
					role.roleId === id ? { ...role, roleName: innerText, roleId: Number(target.id) } : role
				),
			}));
		} else {
			setInfos(prev => {
				const recruitmentRoles = prev.recruitmentRoles.map(role => {
					if (role.roleId === null) {
						return { ...role, roleName: innerText, roleId: Number(target.id) };
					}

					return role;
				});

				return { ...prev, recruitmentRoles };
			});
		}
	};

	const onClickSkill = (event: React.MouseEvent<HTMLSpanElement>) => {
		event.stopPropagation();
		const { innerText } = event.target as HTMLElement;
		const target = event.target as HTMLElement;
		if (
			id &&
			!roleData.skills?.map(e => e.name).includes(innerText) &&
			roleData.skillIds.length < 5
		) {
			setRoleData(prev => {
				const updatedRoleData = {
					...prev,
					skillIds: [...prev.skillIds, Number(target.id)],
					skills: [...(prev.skills as any), { id: Number(target.id), name: innerText }],
				};

				setInfos(prevInfos => ({
					...prevInfos,
					recruitmentRoles: prevInfos.recruitmentRoles.map(role =>
						role.roleId === updatedRoleData.roleId
							? {
									...role,
									skills: [
										...(role.skills?.some(skill => skill.id === Number(target.id))
											? role.skills
											: [...(role.skills || []), { id: Number(target.id), name: innerText }]),
									],
									skillIds: [
										...role.skillIds,
										...(role.skillIds.includes(Number(target.id)) ? [] : [Number(target.id)]),
									],
							  }
							: role
					),
				}));

				return updatedRoleData;
			});
			setTagItem('');
		} else {
			if (!roleData.skills?.map(e => e.name).includes(innerText) && roleData.skillIds.length < 5) {
				setRoleData(prev => ({
					...prev,
					skillIds: [...prev.skillIds, Number(target.id)],
					skills: [...(prev.skills as any), { id: Number(target.id), name: innerText }],
				}));
				setTagItem('');
			}
		}
	};

	const skillInputHandler = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		setDropdown(prev => ({
			...prev,
			skill: !prev.skill,
		}));
	};

	const applyEllipsis = (container: HTMLDivElement) => {
		const children = Array.from(container.children) as HTMLDivElement[];
		let totalWidth = 0;
		const containerWidth = container.clientWidth;

		children.forEach(child => {
			totalWidth += child.offsetWidth;
			if (totalWidth > containerWidth) {
				child.style.display = 'none';
			} else {
				child.style.display = '';
			}
		});

		const existingEllipsis = container.querySelector('.ellipsis');
		if (existingEllipsis) {
			existingEllipsis.remove();
		}

		if (totalWidth > containerWidth) {
			const ellipsis = document.createElement('div');
			ellipsis.classList.add('ellipsis');
			ellipsis.innerText = '...';
			container.appendChild(ellipsis);
		}
	};

	const deleteRoleHandler = () => {
		if (id && onDelete) {
			onDelete(id);
		} else if (onDelete) {
			onDelete(null);
		}
	};

	useImperativeHandle(ref, () => ({
		handleAddRole,
	}));

	useEffect(() => {
		if (containerRef.current) {
			applyEllipsis(containerRef.current);
		}
	}, [roleData.skills, containerRef.current, dropdown.skill, skills]);

	useEffect(() => {
		if (info.recruitmentRoles.length < 10) {
			setisValidBeforeSubmit(prev => ({ ...prev, roleLength: { valid: true, message: '' } }));
		}
	}, [info.recruitmentRoles.length]);

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
			$isRoleName={roleData.roleName !== ''}
			$isCount={roleData.count !== null}
		>
			<article className='wrapper' ref={dropdownRef}>
				<section className='wrapper-role container-input'>
					<input
						type='text'
						placeholder='역할을 검색하세요.'
						className='body1-medium'
						value={roleData.roleName}
						onChange={onChangeRole}
						onKeyDown={onKeyPress}
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
					{!isValidBeforeSubmit.role.valid && (
						<p className='valid-message__role txt4'>{isValidBeforeSubmit.role.message}</p>
					)}
					{isValid.isSubmitted && !isValid.isRole && (
						<p className='valid-message__role txt4'>{validMessage.recruitRole}</p>
					)}
					<img src={SearchIcon} />
				</section>
				<section className='wrapper-count container-input'>
					<input
						type='text'
						placeholder='인원'
						className='body1-medium'
						onChange={onChangeCount}
						onKeyDown={onKeyPress}
						value={roleData.count?.toString()}
					/>
					{!isValidBeforeSubmit.count.valid && (
						<p className='valid-message__count txt4'>{isValidBeforeSubmit.count.message}</p>
					)}
				</section>
				<section className='wrapper-skill container-input' onClick={skillInputHandler}>
					{!dropdown.skill &&
						(!id ? (
							<section className='container-selected__skills outside' ref={containerRef}>
								{roleData.skills &&
									roleData.skills.map((tagItem: Keyword) => {
										return (
											<article className='tags' key={tagItem.id}>
												<span className='txt2'>{tagItem.name}</span>
												<button
													type='button'
													onClick={event => deleteTagHandler(event, tagItem.id)}
													className='btn-delete__tag'
												>
													<img src={XBtn} />
												</button>
											</article>
										);
									})}
							</section>
						) : (
							<section className='container-selected__skills outside' ref={containerRef}>
								{roleData.skills &&
									roleData.skills.map((tagItem: Keyword) => {
										return (
											<article className='tags' key={tagItem.id}>
												<span className='txt2'>{tagItem.name}</span>
												<button
													type='button'
													onClick={event => deleteTagHandler(event, tagItem.id)}
													className='btn-delete__tag'
												>
													<img src={XBtn} />
												</button>
											</article>
										);
									})}
							</section>
						))}
					{!id && (dropdown.skill || roleData.skills?.length === 0) && (
						<input
							type='text'
							placeholder='스킬을 검색하세요. 최대 5개의 스킬을 입력할 수 있습니다.'
							className='body1-medium'
							onChange={onChangeKeyword}
							onKeyDown={onKeyPress}
							value={tagItem}
							onClick={onClickSkillInput}
						/>
					)}
					{id && (dropdown.skill || roleData.skills?.length === 0) && (
						<input
							type='text'
							placeholder='스킬을 검색하세요. 최대 5개의 스킬을 입력할 수 있습니다.'
							className='body1-medium'
							onChange={onChangeKeyword}
							onKeyDown={onKeyPress}
							value={tagItem}
							onClick={onClickSkillInput}
						/>
					)}
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
									<span className='body1-medium subtitle'>보유 스킬</span>
									<section className='container-selected__skills'>
										{!id &&
											roleData.skills &&
											roleData.skills.map((tagItem: Keyword) => {
												return (
													<article className='tags' key={tagItem.id}>
														<span className='txt2'>{tagItem.name}</span>
														<button
															type='button'
															onClick={event => deleteTagHandler(event, tagItem.id)}
															className='btn-delete__tag'
														>
															<img src={XBtn} />
														</button>
													</article>
												);
											})}
										{id &&
											roleData.skills?.map((skill: Keyword) => {
												return (
													<article className='tags' key={skill.id}>
														<span className='txt2'>{skill.name}</span>
														<button
															type='button'
															onClick={event => deleteTagHandler(event, skill.id)}
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
					<img className='icon-search' src={SearchIcon} />
				</section>
				<section>
					<button className='btn-delete' type='button' onClick={deleteRoleHandler}>
						<img src={GrayDelete} />
					</button>
				</section>
			</article>
		</S.InputRoleForm>
	);
});

export default InputRoleForm;
