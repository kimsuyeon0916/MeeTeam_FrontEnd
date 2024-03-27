import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../../../atom';
import { useValid } from '../../../../../hooks';

const ContainerScope = () => {
	const [isSelected, setIsSelected] = useState<string>('');
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(formData);

	const handleScopeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const scope = event.target.value;
		setIsSelected(scope);
		setFormData(prev => ({ ...prev, scope: scope }));
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
			{isValid.isSubmitted && !isValid.isScope && <p className='valid-msg'>{validMessage.scope}</p>}
		</section>
	);
};

export default ContainerScope;
