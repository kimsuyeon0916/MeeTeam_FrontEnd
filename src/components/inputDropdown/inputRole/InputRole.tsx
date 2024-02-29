import React, { useState } from 'react';
import S from './InputRole.styled';
import { XBtn } from '../../../assets';

interface InputRole {
	role: string;
	count: number;
	skill: string[];
}

const InputRole = ({ role, count, skill }: InputRole) => {
	const [tagItem, setTagItem] = useState<string>('');
	const [tagList, setTagList] = useState<string[]>([]);
	const copyTagList = [...tagList];
	const [roleObj, setRoleObj] = useState<InputRole>({
		role: role,
		count: count,
		skill: skill,
	});

	const onChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRoleObj({ ...roleObj, count: Number(event.target.value) });
	};

	const onChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRoleObj({ ...roleObj, role: event.target.value });
	};

	const deleteTagItem = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (event.target instanceof Element) {
			const deletedIndex = Number(event.target.id);
			copyTagList.splice(deletedIndex, 1);
			setTagList(copyTagList);
		}
	};

	const submitTagItem = () => {
		setTagList([...tagList, tagItem]);
		setRoleObj({ ...roleObj, skill: tagList });
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

	const onClickDelete = () => {};

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
					{copyTagList.map((tagItem, index) => {
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
