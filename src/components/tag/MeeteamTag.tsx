import React, { useEffect, useRef, useState } from 'react';
import S from './MeeteamTag.styled';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../atom';
import { useDebounce } from '../../hooks';
import { useQuery } from '@tanstack/react-query';
import { getTagKeyword } from '../../service';
import { Search, XBtn } from '../../assets';
import { Keyword } from '../../types';

const MeeteamTag = () => {
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const [tagItem, setTagItem] = useState<string>('');
	const [tagList, setTagList] = useState<string[]>(formData.tags);
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const keywordTag = useDebounce(tagItem, 500);

	const { data, isSuccess } = useQuery({
		queryKey: ['keywordTag', keywordTag],
		queryFn: () => getTagKeyword(keywordTag),
	});

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

	const submitTagItem = () => {
		setTagList(prev => {
			const trimmedTagItem = tagItem.trim();
			if (!prev.includes(trimmedTagItem)) {
				const updatedList = [...prev, trimmedTagItem];
				setFormData(prev => ({ ...prev, tags: updatedList }));
				return updatedList;
			}
			return prev;
		});
		setTagItem('');
		setIsDropdownVisible(true);
	};

	const deleteTagItem = (id: string) => {
		setTagList(prev => {
			const updatedList = prev.filter(elem => elem !== id);
			setFormData(prev => ({ ...prev, tags: updatedList }));
			return updatedList;
		});
	};

	const onClickInput = () => {
		setIsDropdownVisible(true);
	};

	const onClickTagOptions = (selectedTag: string) => {
		if (!tagList.includes(selectedTag) && tagList.length < 6) {
			setTagList(prev => {
				const updatedList = [...prev, selectedTag];
				setFormData(prev => ({ ...prev, tags: updatedList }));
				return updatedList;
			});
			setIsDropdownVisible(false);
			setTagItem('');
		}
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (
				isDropdownVisible &&
				dropdownRef.current &&
				!dropdownRef.current.contains(target as Node)
			) {
				setIsDropdownVisible(false);
				setTagItem('');
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [isDropdownVisible]);

	return (
		<S.MeeteamTag ref={dropdownRef}>
			<div className='tag__box' onClick={onClickInput}>
				{tagList.map((tagItem, _) => {
					return (
						<div className='tag__item' key={tagItem}>
							<span>{tagItem}</span>
							<button type='button' onClick={() => deleteTagItem(tagItem)}>
								<img src={XBtn} />
							</button>
						</div>
					);
				})}
				<input
					type='text'
					placeholder={'태그를 선택하거나 입력해주세요.'}
					tabIndex={2}
					disabled={tagList.length < 20 ? false : true}
					onChange={event => setTagItem(event.target.value)}
					value={tagItem}
					onKeyPress={onKeyPress}
					className='tag-input body1-medium'
				/>
				<img src={Search} className='icon-search' />
				{isDropdownVisible && (
					<div className='tag-dropdown'>
						{isSuccess &&
							data?.map((tag: Keyword) => (
								<div
									className='tag__item option'
									key={tag.id}
									onClick={() => onClickTagOptions(tag.name)}
								>
									{tag.name}
								</div>
							))}
					</div>
				)}
			</div>
		</S.MeeteamTag>
	);
};

export default MeeteamTag;
