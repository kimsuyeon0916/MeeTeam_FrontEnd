import React from 'react';
import S from './Radio.styled';

interface Radio {
	name: string;
	id: string;
	handleRadioClick?: React.MouseEventHandler<HTMLInputElement>;
	children?: JSX.Element;
}

const Radio = ({ name, id, handleRadioClick, children }: Radio) => {
	return (
		<S.RadioLabel htmlFor={id}>
			<S.RadioInput type='radio' name={name} id={id} onClick={handleRadioClick} />
			{children}
		</S.RadioLabel>
	);
};

export default Radio;
