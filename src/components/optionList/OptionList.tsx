import React from 'react';
import S from './OptionList.styled';

interface Option {
	id?: string;
	title: string;
}

interface OptionListProps<T> {
	name: T;
	handleOptionClick: (...rest: T[]) => void;
	optionList: Option[];
}

const OptionList = ({ name, handleOptionClick, optionList }: OptionListProps<string>) => {
	return (
		<S.OptionList>
			{optionList.map(({ title, id }) => (
				<S.OptionItem
					key={title}
					onClick={() => (id ? handleOptionClick(name, title, id) : handleOptionClick(name, title))}
				>
					{title}
				</S.OptionItem>
			))}
		</S.OptionList>
	);
};

export default OptionList;
