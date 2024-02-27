import React from 'react';
import { OptionList } from '../../../types';
import S from './RecruitOptions.styled';

const RecruitOptions = ({ options }: OptionList) => {
	return (
		<S.RecruitOptions>
			{options.map((option, index) => (
				<span key={index} className='option'>
					{option}
				</span>
			))}
		</S.RecruitOptions>
	);
};

export default RecruitOptions;
