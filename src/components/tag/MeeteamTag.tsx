import React, { useEffect, useRef, useState } from 'react';
import S from './MeeteamTag.styled';
import { useSetRecoilState } from 'recoil';
import { recruitInputState } from '../../atom';

interface IMeeteamTag {
	tags?: string[];
}

const MeeteamTag = ({ tags }: IMeeteamTag) => {
	const setInfos = useSetRecoilState(recruitInputState);
	const [tagItem, setTagItem] = useState<string>('');
	const [tagList, setTagList] = useState<string[]>([]);
	const [isTouched, setIsTouched] = useState<boolean>(false);
	const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
	const options = ['UI/UX', 'GUI', 'CX', 'BI', 'Figma', 'React', 'Spring', 'Node.js'];
	const dropdownRef = useRef<HTMLDivElement | null>(null);

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
			const updatedList = [...prev, tagItem];
			setInfos(prev => ({ ...prev, tag: updatedList }));
			return updatedList;
		});
		setTagItem('');
		setIsDropdownVisible(false);
	};

	const deleteTagItem = (event: any) => {
		const deletedIndex = Number(event.target.id);
		setTagList(prev => {
			const updatedList = [...prev];
			updatedList.splice(deletedIndex, 1);
			setInfos(prev => ({ ...prev, tag: updatedList }));
			return updatedList;
		});
	};

	const onClickInput = () => {
		setIsDropdownVisible(true);
		setIsTouched(true);
	};

	const onClickTagOptions = (selectedTag: string) => {
		if (tagList.length < 20) {
			setTagList([...tagList, selectedTag]);
			setIsDropdownVisible(false);
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
			{!tags ? (
				<div className='tag__box' onClick={onClickInput}>
					{tagList.map((tagItem, index) => {
						return (
							<div className='tag__item' key={index}>
								<span>{tagItem}</span>
								<button type='button' onClick={deleteTagItem} id={'' + index}>
									X
								</button>
							</div>
						);
					})}
					<input
						type='text'
						placeholder={
							isTouched
								? isDropdownVisible
									? tagList.length < 20
										? '태그를 입력하고 엔터를 누르세요.'
										: '태그는 20개까지 선택할 수 있습니다.'
									: ''
								: '태그를 입력하고 엔터를 누르세요.'
						}
						tabIndex={2}
						disabled={tagList.length < 20 ? false : true}
						onChange={event => setTagItem(event.target.value)}
						value={tagItem}
						onKeyPress={onKeyPress}
					/>
					{isDropdownVisible && (
						<div className='tag-dropdown'>
							{options.map((tag, index) => (
								<div
									className='tag__item option'
									key={index}
									onClick={() => onClickTagOptions(tag)}
								>
									{tag}
								</div>
							))}
						</div>
					)}
				</div>
			) : (
				<div className='tag__box'>
					{tags.map((tag, index) => {
						return (
							<div className='tag__item' key={index}>
								<span>{tag}</span>
							</div>
						);
					})}
				</div>
			)}
		</S.MeeteamTag>
	);
};

export default MeeteamTag;
