import React, { useState } from 'react';
import S from './CustomSelect.styled';

export interface CustomSelect {
	optionData: string[];
}

const CustomSelect = ({ optionData }: CustomSelect) => {
	const [currentValue, setCurrentValue] = useState('역할');
	const [showOptions, setShowOptions] = useState(false);

	const handleOnChangeSelectValue = (event: React.MouseEvent<HTMLElement>) => {
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);
	};

	const onClickhandler = () => {
		setShowOptions(prev => !prev);
	};

	return (
		<S.CustomSelect onClick={onClickhandler}>
			<S.Label $isSelected={currentValue}>{currentValue}</S.Label>
			<S.SelectOptions $show={showOptions}>
				{optionData.map((data: string, index: number) => (
					<S.Option key={index} value={data} onClick={handleOnChangeSelectValue}>
						{data}
					</S.Option>
				))}
			</S.SelectOptions>
		</S.CustomSelect>
	);
};

export default React.memo(CustomSelect);
