import React, { useCallback, useState, useEffect } from 'react';
import S from './CustomSelect.styled';
import { useRecoilState } from 'recoil';

export interface ICustomSelect {
	optionData: string[];
	$isMember?: boolean;
	key?: number;
	type?: string;
}

const CustomSelect = ({ optionData, $isMember, type }: ICustomSelect) => {
	const [currentValue, setCurrentValue] = useState('선택');
	const [showOptions, setShowOptions] = useState(false);

	// console.log('hi');
	const handleOnChangeSelectValue = (event: React.MouseEvent<HTMLElement>) => {
		const { innerText } = event.target as HTMLElement;
		setCurrentValue(innerText);
	};

	const onClickhandler = () => {
		setShowOptions(prev => !prev);
	};

	return (
		<S.CustomSelect onClick={onClickhandler} $isMember={$isMember} $show={showOptions}>
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
