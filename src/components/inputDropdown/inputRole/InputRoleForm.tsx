import React, { useState, useRef, useEffect } from 'react';
import { Plus, XBtn } from '../../../assets';
import S from './InputRoleForm.styled';
import { Role, InputRoleForm } from '../../../types';
import { useDebounce } from '../../../hooks';

const InputRoleForm = ({ userRoleList, setUserRoleList }: InputRoleForm) => {
	const [tagItem, setTagItem] = useState<string>('');
	const [userRole, setUserRole] = useState<Role>({
		id: 0,
		role: '',
		count: '',
		skill: [],
	});
	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const { data, isLoading } = useDebounce(userRole.role, 500);

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
		setUserRoleList([...userRoleList, userRole]);
		setUserRole({
			id: userRoleList.length,
			role: '',
			count: '',
			skill: [],
		});
	};

	const onChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserRole({
			...userRole,
			role: event.target.value,
		});
	};

	const onChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserRole({
			...userRole,
			count: event.target.value,
		});
	};

	const onClickKeyword = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setUserRole(prev => ({ ...prev, role: innerText }));
		setShowDropdown(false);
	};

	useEffect(() => {
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
	}, [dropdownRef.current, showDropdown]);

	return (
		<S.InputRoleForm $isClicked={showDropdown}>
			<article className='inputs' ref={dropdownRef}>
				<input
					className='role-input'
					type='text'
					placeholder='역할'
					value={userRole.role}
					onChange={onChangeRole}
					onClick={() => setShowDropdown(prev => !prev)}
				/>
				{showDropdown && (
					<section className='dropdown'>
						{!isLoading &&
							data.map((keyword: any, index: number) => (
								<span key={index} onClick={onClickKeyword}>
									{keyword.name}
								</span>
							))}
					</section>
				)}
				<input
					className='count-input'
					type='number'
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
						placeholder={userRole.skill.length ? '' : '태그를 입력하고 엔터를 누르세요.'}
						value={tagItem}
						onChange={event => setTagItem(event.target.value)}
						onKeyPress={onKeyPress}
					/>
				</section>
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
