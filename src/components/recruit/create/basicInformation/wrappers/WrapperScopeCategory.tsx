import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../../../atom';
import { useValid } from '../../../../../hooks';
import { ContainerCategory, ContainerScope } from '../../../../index';

const WrapperScopeCategory = () => {
	const [isSelected, setIsSelected] = useState<string>('');
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(formData);
	return (
		<article className='inputs-scope-category'>
			<ContainerScope />
			<ContainerCategory />
		</article>
	);
};

export default WrapperScopeCategory;
