import React, { useState, useEffect } from 'react';
import { Search, XBtn, Clear } from '../../../../assets';
import { useQuery } from '@tanstack/react-query';
import { getRoleKeyword, getSkillKeyword, getTagKeyword } from '../../../../service';
import { useDebounce } from '../../../../hooks';
import { Keyword, DetailedInfo, Array } from '../../../../types';
import { useSetRecoilState } from 'recoil';
import { recruitFilterState } from '../../../../atom';

const MESSAGE = {
	SKILL: {
		INTRO: '보유하신 기술 스택을 검색해보세요. 기술 스택은 최대 5개까지 선택 가능합니다.',
		MESSAGE: '기술 스택을 검색하세요.',
	},
	ROLE: {
		INTRO: '원하는 역할을 검색해보세요. 역할은 최대 5개까지 선택 가능합니다.',
		MESSAGE: '역할을 검색하세요.',
	},
	TAG: {
		INTRO: '알아보고 싶은 내용을 태그로 검색해보세요. 태그는 최대 5개까지 선택 가능합니다.',
		MESSAGE: '태그를 검색하세요.',
	},
};

const DetailedInput = ({ type }: DetailedInfo) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [message, setMessage] = useState({
		intro: MESSAGE.SKILL.INTRO,
		message: MESSAGE.SKILL.MESSAGE,
	});
	const [array, setArray] = useState<Array>({
		skill: [],
		role: [],
		tag: [],
	});
	const [tagItem, setTagItem] = useState('');
	const setFilterState = useSetRecoilState(recruitFilterState);
	const keyword = useDebounce(tagItem);

	const { data: dataRole, isLoading: isLoadingRole } = useQuery({
		queryKey: ['searchRole', keyword],
		queryFn: () => getRoleKeyword(keyword),
	});

	const { data: dataSkill, isLoading: isLoadingSkill } = useQuery({
		queryKey: ['searchSkill', keyword],
		queryFn: () => getSkillKeyword(keyword),
	});

	const { data: dataTag, isLoading: isLoadingTag } = useQuery({
		queryKey: ['searchTag', keyword],
		queryFn: () => getTagKeyword(keyword),
	});

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTagItem(event.target.value);
	};

	const onClickItem = (event: React.MouseEvent<HTMLLIElement>, item: Keyword) => {
		event.stopPropagation();
		if (type === '기술') {
			if (!array.skill.includes(item) && array.skill.length < 6) {
				setArray(prev => ({ ...prev, skill: [...prev.skill, { id: item.id, name: item.name }] }));
			}
		} else if (type === '역할') {
			if (!array.role.includes(item) && array.role.length < 6) {
				setArray(prev => ({ ...prev, role: [...prev.role, { id: item.id, name: item.name }] }));
			}
		} else if (type === '태그') {
			if (!array.tag.includes(item) && array.tag.length < 6) {
				setArray(prev => ({ ...prev, tag: [...prev.tag, { id: item.id, name: item.name }] }));
			}
		}
		setIsOpen(false);
		setTagItem('');
	};

	const onClickApply = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		if (type === '기술') {
			const skillIds = array.skill.map(skill => skill.id);
			setFilterState(prev => ({
				...prev,
				skill: skillIds,
			}));
		} else if (type === '역할') {
			const roleIds = array.role.map(role => role.id);
			setFilterState(prev => ({
				...prev,
				role: roleIds,
			}));
		} else if (type === '태그') {
			const tagIds = array.tag.map(tag => tag.id);
			setFilterState(prev => ({
				...prev,
				tag: tagIds,
			}));
		}
	};

	const onClickSearchBar = (event: React.MouseEvent<HTMLInputElement>) => {
		event.stopPropagation();
		setIsOpen(prev => !prev);
	};

	const onClickErase = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		if (type === '기술') {
			setArray(prev => ({ ...prev, skill: [] }));
		} else if (type === '역할') {
			setArray(prev => ({ ...prev, role: [] }));
		} else if (type === '태그') {
			setArray(prev => ({ ...prev, tag: [] }));
		}
	};

	const onClickDelete = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
		event.stopPropagation();
		if (type === '기술') {
			setArray(prev => ({ ...prev, skill: array.skill.filter(elem => elem.id != id) }));
		} else if (type === '역할') {
			setArray(prev => ({ ...prev, role: array.role.filter(elem => elem.id != id) }));
		} else if (type === '태그') {
			setArray(prev => ({ ...prev, tag: array.tag.filter(elem => elem.id != id) }));
		}
	};

	useEffect(() => {
		if (type === '기술') {
			setMessage({ intro: MESSAGE.SKILL.INTRO, message: MESSAGE.SKILL.MESSAGE });
		} else if (type === '역할') {
			setMessage({ intro: MESSAGE.ROLE.INTRO, message: MESSAGE.ROLE.MESSAGE });
		} else if (type === '태그') {
			setMessage({ intro: MESSAGE.TAG.INTRO, message: MESSAGE.TAG.MESSAGE });
		}
	}, [type]);

	return (
		<section className='dropdown-search'>
			<span className='body1'>{message.intro}</span>
			<article className='search' onClick={onClickSearchBar}>
				<input type='text' placeholder={message.message} value={tagItem} onChange={onChangeInput} />
				<img src={Search} />
			</article>
			{isOpen && (
				<section className='role-menu'>
					<ul>
						{type === '기술' &&
							!isLoadingSkill &&
							dataSkill?.map((item: Keyword) => (
								<li className='body1' key={item.id} onClick={event => onClickItem(event, item)}>
									{item.name}
								</li>
							))}
						{type === '역할' &&
							!isLoadingRole &&
							dataRole?.map((item: Keyword) => (
								<li className='body1' key={item.id} onClick={event => onClickItem(event, item)}>
									{item.name}
								</li>
							))}
						{type === '태그' &&
							!isLoadingTag &&
							dataTag?.map((item: Keyword) => (
								<li className='body1' key={item.id} onClick={event => onClickItem(event, item)}>
									{item.name}
								</li>
							))}
					</ul>
				</section>
			)}
			<article className='container-tag'>
				{type === '기술' &&
					array.skill.map(elem => (
						<article className='tags' key={elem.id}>
							<span>{elem.name}</span>
							<button type='button' onClick={event => onClickDelete(event, elem.id)}>
								<img src={XBtn} />
							</button>
						</article>
					))}
				{type === '역할' &&
					array.role.map(elem => (
						<article className='tags' key={elem.id}>
							<span>{elem.name}</span>
							<button type='button' onClick={event => onClickDelete(event, elem.id)}>
								<img src={XBtn} />
							</button>
						</article>
					))}
				{type === '태그' &&
					array.tag.map(elem => (
						<article className='tags' key={elem.id}>
							<span>{elem.name}</span>
							<button type='button' onClick={event => onClickDelete(event, elem.id)}>
								<img src={XBtn} />
							</button>
						</article>
					))}
			</article>
			<article className='container-btns'>
				<section className='clear' onClick={onClickErase}>
					<img src={Clear} />
					<span>초기화</span>
				</section>
				<button type='button' onClick={onClickApply}>
					적용
				</button>
			</article>
		</section>
	);
};

export default DetailedInput;
