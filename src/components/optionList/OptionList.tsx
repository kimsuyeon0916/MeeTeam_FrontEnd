import React from 'react';
import S from './OptionList.styled';

interface Option {
	id?: string;
	name: string;
}

interface OptionListProps<T> {
	name: T;
	handleOptionClick: (...rest: T[]) => void;
	optionList: Option[];
}

const OptionList = ({ name, handleOptionClick, optionList }: OptionListProps<string>) => {
	return (
		<S.OptionList>
			{optionList.map(({ name: optionName, id }) => (
				<S.OptionItem
					key={optionName}
					onClick={() =>
						id ? handleOptionClick(name, optionName, id) : handleOptionClick(name, optionName)
					}
				>
					{optionName}
				</S.OptionItem>
			))}
		</S.OptionList>
	);
};

export default OptionList;
