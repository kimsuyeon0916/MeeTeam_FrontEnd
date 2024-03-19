import React from 'react';
import S from './OptionList.styled';

interface Option {
	id: string;
	title: string;
}

interface OptionListProps {
	name: string;
	handleOptionClick: (name: string, id: string, title: string) => void;
	optionList: Option[];
}

const OptionList = ({ name, handleOptionClick, optionList }: OptionListProps) => {
	return (
		<S.OptionList>
			{optionList.map(({ id, title }) => (
				<S.OptionItem key={id} onClick={() => handleOptionClick(name, id, title)}>
					{title}
				</S.OptionItem>
			))}
		</S.OptionList>
	);
};

export default OptionList;
