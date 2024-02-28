import React from 'react';
import { OptionList } from '../../../types';
import S from './RecruitOptions.styled';
import Option from './Option';

const RecruitOptions = ({ options, isScope, isCategory }: OptionList) => {
	return (
		<S.RecruitOptions>
			{options.map((option, index) => (
				<Option isScope={isScope} isCategory={isCategory} key={index}>
					{option}
				</Option>
			))}
		</S.RecruitOptions>
	);
};

export default RecruitOptions;
