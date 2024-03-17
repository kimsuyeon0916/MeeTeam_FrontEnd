import React, { useState } from 'react';
import S from './InputRole.styled';
import { XBtn } from '../../../assets';
import { useDebounce } from '../../../hooks';

interface InputRole {
	id: string | null;
	role: string;
	count: number;
	skill: string[];
	onDelete: (id: string | null) => void;
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

	const onClickDelete = () => {
		onDelete(id);
	};

	return (
		<S.InputRole>
			<section className='inputs'>
				<input
					className='input-role input'
					type='text'
					value={roleObj.role}
					placeholder='역할'
					disabled
				/>
				<input
					className='input-count input'
					type='number'
					value={roleObj.count}
					placeholder='인원'
					disabled
				/>
				<section className='container-skills'>
					{roleObj.skill.map((tagItem, index) => {
						return (
							<article className='container-tags' key={index}>
								<span>{tagItem}</span>
							</article>
						);
					})}
					<input
						type='text'
						className='skills-input'
						placeholder={roleObj.skill.length ? '' : '태그를 입력하고 엔터를 누르세요.'}
						value={tagItem}
						disabled
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
