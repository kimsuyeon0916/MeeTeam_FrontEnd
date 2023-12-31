import React, { useState } from 'react';
import S from './Tag.styled';

const Tag = () => {
	const [tagItem, setTagItem] = useState<string>('');
	const [tagList, setTagList] = useState<string[]>([]);
	const copyTagList = [...tagList];

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.target.value.length !== 0 && event.key === 'Enter') {
			submitTagItem();
		}
	};

	const submitTagItem = () => {
		// let updatedTagList = [...tagList];
		// updatedTagList.push('#' + tagItem);
		// setTagList(updatedTagList);
		// setTagItem('');

		// 이렇게 줄일 수도 있음.
		setTagList(prev => [...prev, '#' + tagItem]);
		setTagItem('');
	};

	const deleteTagItem = (event: any) => {
		const deletedIndex = Number(event.target.id);
		copyTagList.splice(deletedIndex, 1);
		setTagList(copyTagList);
	};

	return (
		<S.Tag>
			<div className='tag__box'>
				{copyTagList.map((tagItem, index) => {
					return (
						<div className='tag__item' key={index}>
							<span>{tagItem}</span>
							<button onClick={deleteTagItem} id={'' + index}>
								X
							</button>
						</div>
					);
				})}
				<input
					type='text'
					placeholder='태그를 입력하고 엔터를 누르세요.'
					tabIndex={2}
					onChange={event => setTagItem(event.target.value)}
					value={tagItem}
					onKeyPress={onKeyPress}
				/>
			</div>
		</S.Tag>
	);
};

export default Tag;
