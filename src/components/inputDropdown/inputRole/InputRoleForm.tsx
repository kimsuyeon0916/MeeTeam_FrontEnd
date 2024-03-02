import React, { useState } from 'react';
import { Plus, XBtn } from '../../../assets';
import S from './InputRoleForm.styled';

interface Role {
	id: number;
	role: string;
	count: string;
	skill: string[];
}

interface InputRoleForm {
	userRoleList: Role[];
	setUserRoleList: (arr: any) => void;
}

const InputRoleForm = ({ userRoleList, setUserRoleList }: InputRoleForm) => {
	const [tagItem, setTagItem] = useState<string>('');
	const [userRole, setUserRole] = useState<Role>({
		id: 0,
		role: '',
		count: '',
		skill: [],
	});
	const copyTagList = [...userRole.skill];

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
			copyTagList.splice(deletedIndex, 1);
			setUserRole({ ...userRole, skill: copyTagList });
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

	return (
		<S.InputRoleForm>
			<article className='inputs'>
				<input
					className='role-input'
					type='text'
					placeholder='역할'
					value={userRole.role}
					onChange={onChangeRole}
				/>
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
						placeholder={copyTagList.length ? '' : '태그를 입력하고 엔터를 누르세요.'}
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
