import React, { useState } from 'react';
import S from './InputRole.styled';
import { XBtn } from '../../../assets';
import { useDebounce } from '../../../hooks';

interface InputRole {
	id: number | null;
	role: string;
	count: number;
	skill: string[];
	onDelete: (id: number) => void;
}

const InputRole = ({ id, role, count, skill, onDelete }: InputRole) => {
	const [tagItem, setTagItem] = useState<string>('');
	const [roleObj, setRoleObj] = useState<InputRole>({
		id: id,
		role: role,
		count: count,
		skill: skill,
		onDelete: onDelete,
	});
	const keyword = useDebounce(roleObj.role, 500);

	const onChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRoleObj({ ...roleObj, count: Number(event.target.value) });
	};

	const onChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRoleObj({ ...roleObj, role: event.target.value });
	};

	const deleteTagItem = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (event.target instanceof Element) {
			const deletedIndex = Number(event.target.id);
			setRoleObj(prevState => ({
				...prevState,
				skill: prevState.skill.filter((_, index) => index !== deletedIndex),
			}));
		}
	};

	const submitTagItem = () => {
		setRoleObj(prevState => ({ ...prevState, skill: [...prevState.skill, tagItem] }));
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

	const onClickDelete = () => {
		if (id || id === 0) {
			onDelete(id);
		}
	};

	return (
		<S.InputRole>
			<section className='inputs'>
				<input
					className='input-role input'
					type='text'
					value={roleObj.role}
					onChange={onChangeRole}
					placeholder='역할'
				/>
				<input
					className='input-count input'
					type='number'
					value={roleObj.count}
					onChange={onChangeCount}
					placeholder='인원'
				/>
				<section className='container-skills'>
					{roleObj.skill.map((tagItem, index) => {
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
						placeholder={roleObj.skill.length ? '' : '태그를 입력하고 엔터를 누르세요.'}
						value={tagItem}
						onChange={event => setTagItem(event.target.value)}
						onKeyPress={onKeyPress}
					/>
				</section>
			</section>
			<article className='add-btn'>
				<button type='button' onClick={onClickDelete}>
					<img src={XBtn} />
				</button>
			</article>
		</S.InputRole>
	);
};

export default InputRole;
