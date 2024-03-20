import React, { useState } from 'react';
import { recruitInputState } from '../../../../../atom';
import { useSetRecoilState } from 'recoil';

const ContainerCategory = () => {
	const [isSelected, setIsSelected] = useState<string>('');
	const setFormdata = useSetRecoilState(recruitInputState);

	const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const category = event.target.value;
		setIsSelected(category);
		setFormdata(prev => ({ ...prev, category: category }));
	};
	return (
		<section className='container-category'>
			<span className='input-subtitle'>
				유형 <span>{'*'}</span>
			</span>
			<section className='radio-btns'>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='project'
						name='category'
						value='프로젝트'
						checked={isSelected === '프로젝트'}
						onChange={handleCategoryChange}
					/>
					<label htmlFor='project'>프로젝트</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='study'
						name='category'
						value='스터디'
						checked={isSelected === '스터디'}
						onChange={handleCategoryChange}
					/>
					<label htmlFor='study'>스터디</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='contest'
						name='category'
						value='공모전'
						checked={isSelected === '공모전'}
						onChange={handleCategoryChange}
					/>
					<label htmlFor='contest'>공모전</label>
				</section>
			</section>
		</section>
	);
};

export default ContainerCategory;
