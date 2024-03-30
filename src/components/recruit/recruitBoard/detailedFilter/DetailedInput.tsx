import React, { useState } from 'react';
import { Search, XBtn, Clear } from '../../../../assets';

interface DetailedInfo {
	subtitle: string;
	placeholder: string;
	type: string;
}

const DetailedInput = ({ subtitle, placeholder, type }: DetailedInfo) => {
	const [isRoleOpen, setIsRoleOpen] = useState<boolean>(false);
	return (
		<section className='dropdown-search'>
			<span className='body1'>
				원하는 역할을 검색해보세요. 역할은 최대 n개까지 선택 가능합니다.
			</span>
			<article className='search' onClick={() => setIsRoleOpen(prev => !prev)}>
				<input type='text' placeholder='역할을 검색하세요.' />
				<img src={Search} />
			</article>
			{isRoleOpen && (
				<section className='role-menu'>
					<ul>
						<li className='body1'>역1</li>
						<li className='body1'>역2</li>
						<li className='body1'>역3</li>
						<li className='body1'>역4</li>
					</ul>
				</section>
			)}
			<article className='container-tag'>
				<article className='tags'>
					<span>{'tagItem'}</span>
					<button type='button'>
						<img src={XBtn} />
					</button>
				</article>
			</article>
			<article className='container-btns'>
				<section className='clear'>
					<img src={Clear} />
					<span>초기화</span>
				</section>
				<button>적용</button>
			</article>
		</section>
	);
};

export default DetailedInput;
