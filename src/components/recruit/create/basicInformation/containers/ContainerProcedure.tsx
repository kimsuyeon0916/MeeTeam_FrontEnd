import React, { useState } from 'react';
import { recruitInputState } from '../../../../../atom';
import { useSetRecoilState } from 'recoil';

const ContainerProcedure = () => {
	const [isSelected, setIsSelected] = useState<string>('');
	const setFormdata = useSetRecoilState(recruitInputState);

	const handleProcedureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const procedure = event.target.value;
		setIsSelected(event.target.value);
		setFormdata(prev => ({ ...prev, proceedType: procedure }));
	};

	return (
		<article className='inputs-procedure'>
			<span className='input-subtitle'>
				진행방식 <span>{'*'}</span>
			</span>
			<section className='radio-btns'>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='offline'
						name='procedure'
						value='오프라인'
						checked={isSelected === '오프라인'}
						onChange={handleProcedureChange}
					/>
					<label htmlFor='offline'>오프라인</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='online'
						name='procedure'
						value='온라인'
						checked={isSelected === '온라인'}
						onChange={handleProcedureChange}
					/>
					<label htmlFor='online'>온라인</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='any'
						name='procedure'
						value='상관없음'
						checked={isSelected === '상관없음'}
						onChange={handleProcedureChange}
					/>
					<label htmlFor='any'>상관없음</label>
				</section>
			</section>
		</article>
	);
};

export default ContainerProcedure;
