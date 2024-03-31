import React, { useState, useEffect } from 'react';
import { Search, XBtn, Clear } from '../../../../assets';
import { useQuery } from '@tanstack/react-query';
import { getRoleKeyword, getSkillKeyword, getTagKeyword } from '../../../../service';
import { useDebounce } from '../../../../hooks';
import { Keyword } from '../../../../types';
import { useSetRecoilState } from 'recoil';
import { recruitFilterState } from '../../../../atom';

const skillMessageObj = {
	intro: '보유하신 기술 스택을 검색해보세요. 기술 스택은 최대 5개까지 선택 가능합니다.',
	message: '기술 스택을 검색하세요.',
};

const roleMessageObj = {
	intro: '원하는 역할을 검색해보세요. 역할은 최대 5개까지 선택 가능합니다.',
	message: '역할을 검색하세요.',
};

const tagMessageObj = {
	intro: '알아보고 싶은 내용을 태그로 검색해보세요. 태그는 최대 5개까지 선택 가능합니다.',
	message: '태그를 검색하세요.',
};

interface DetailedInfo {
	type: string;
	onSubmit: () => void;
}

interface Array {
	skill: string[];
	role: string[];
	tag: string[];
}

const DetailedInput = ({ type, onSubmit }: DetailedInfo) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [message, setMessage] = useState({
		intro: skillMessageObj.intro,
		message: skillMessageObj.message,
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

	const onClickItem = (item: Keyword) => {
		if (type === '기술') {
			if (!array.skill.includes(item.name) && array.skill.length < 6) {
				setArray(prev => ({ ...prev, skill: [...prev.skill, item.name] }));
				setFilterState(prev => ({ ...prev, skill: [...prev.skill, item.id] }));
			}
		} else if (type === '역할') {
			if (!array.role.includes(item.name) && array.role.length < 6) {
				setArray(prev => ({ ...prev, role: [...prev.role, item.name] }));
				setFilterState(prev => ({ ...prev, role: [...prev.role, item.id] }));
			}
		} else if (type === '태그') {
			if (!array.tag.includes(item.name) && array.tag.length < 6) {
				setArray(prev => ({ ...prev, tag: [...prev.tag, item.name] }));
				setFilterState(prev => ({ ...prev, tag: [...prev.tag, item.id] }));
			}
		}
		setIsOpen(false);
		setTagItem('');
	};

	const onClickApply = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		onSubmit();
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

	useEffect(() => {
		if (type === '기술') {
			setMessage({ intro: skillMessageObj.intro, message: skillMessageObj.message });
		} else if (type === '역할') {
			setMessage({ intro: roleMessageObj.intro, message: roleMessageObj.message });
		} else if (type === '태그') {
			setMessage({ intro: tagMessageObj.intro, message: tagMessageObj.message });
		}
	}, [type]);

	return (
		<section className='dropdown-search'>
			<span className='body1'>{message.intro}</span>
			<article className='search' onClick={() => setIsOpen(prev => !prev)}>
				<input type='text' placeholder={message.message} value={tagItem} onChange={onChangeInput} />
				<img src={Search} />
			</article>
			{isOpen && (
				<section className='role-menu'>
					<ul>
						{type === '기술' &&
							!isLoadingSkill &&
							dataSkill?.map((item: Keyword) => (
								<li className='body1' key={item.id} onClick={() => onClickItem(item)}>
									{item.name}
								</li>
							))}
						{type === '역할' &&
							!isLoadingRole &&
							dataRole?.map((item: Keyword) => (
								<li className='body1' key={item.id} onClick={() => onClickItem(item)}>
									{item.name}
								</li>
							))}
						{type === '태그' &&
							!isLoadingTag &&
							dataTag?.map((item: Keyword) => (
								<li className='body1' key={item.id} onClick={() => onClickItem(item)}>
									{item.name}
								</li>
							))}
					</ul>
				</section>
			)}
			<article className='container-tag'>
				{type === '기술' &&
					array.skill.map(elem => (
						<article className='tags'>
							<span>{elem}</span>
							<button type='button'>
								<img src={XBtn} />
							</button>
						</article>
					))}
				{type === '역할' &&
					array.role.map(elem => (
						<article className='tags'>
							<span>{elem}</span>
							<button type='button'>
								<img src={XBtn} />
							</button>
						</article>
					))}
				{type === '태그' &&
					array.tag.map(elem => (
						<article className='tags'>
							<span>{elem}</span>
							<button type='button'>
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
