import React, { useState } from 'react';
import { recruitInputState } from '../../../../../atom';
import { useSetRecoilState } from 'recoil';

const ContainerScope = () => {
	const [isSelected, setIsSelected] = useState<string>('');
	const setFormdata = useSetRecoilState(recruitInputState);

	const handleScopeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const scope = event.target.value;
		setIsSelected(scope);
		setFormdata(prev => ({ ...prev, scope: scope }));
	};

	return (
		<section className='container-scope'>
			<span className='input-subtitle'>
				범위 <span>{'*'}</span>
			</span>
			<section className='radio-btns'>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='inside'
						name='scope'
						value='교내'
						checked={isSelected === '교내'}
						onChange={handleScopeChange}
					/>
					<label htmlFor='inside'>교내</label>
				</section>
				<section className='radio-btn'>
					<input
						className='radio-input'
						type='radio'
						id='outside'
						name='scope'
						value='교외'
						checked={isSelected === '교외'}
						onChange={handleScopeChange}
					/>
					<label htmlFor='outside'>교외</label>
				</section>
			</section>
		</section>
	);
};

export default ContainerScope;
