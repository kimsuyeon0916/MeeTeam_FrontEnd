import React from 'react';
import S from './OptionList.styled';

interface Option {
	id?: string;
	title: string;
}

interface OptionListProps {
	name: string;
	handleOptionClick: (T, ...U) => void;
	optionList: Option[];
}

const OptionList = ({ name, handleOptionClick, optionList }: OptionListProps) => {
	return (
		<S.OptionList>
			{optionList.map(({ title, id }) => (
				<S.OptionItem key={title} onClick={() => handleOptionClick(name, title, id)}>
					{title}
				</S.OptionItem>
			))}
		</S.OptionList>
	);
};

export default OptionList;
