import { useState, useEffect } from 'react';
import S from './CustomSelect.styled';

interface ICustomSelect {
	optionData: string[];
	isMember?: boolean;
}

const CustomSelect = ({ optionData, isMember }: ICustomSelect) => {
	const [currentValue, setCurrentValue] = useState('선택');
	const [showOptions, setShowOptions] = useState(false);

	const handleOnChangeSelectValue = (e: React.MouseEvent<HTMLElement>) => {
		const { innerText } = e.target as HTMLElement;
		setCurrentValue(innerText);
	};

	useEffect(() => {
		// isMember 값이 변경될 때마다 초기화
		setCurrentValue('선택');
		setShowOptions(false);
	}, [isMember]);

	return (
		<S.CustomSelect onClick={() => setShowOptions(prev => !prev)} isMember={isMember}>
			<S.Label $isSelected={currentValue}>{currentValue}</S.Label>
			<S.SelectOptions $show={showOptions}>
				{optionData.map((data: any, index: number) => (
					<S.Option key={index} value={data} onClick={handleOnChangeSelectValue}>
						{data}
					</S.Option>
				))}
			</S.SelectOptions>
		</S.CustomSelect>
	);
};

export default CustomSelect;
