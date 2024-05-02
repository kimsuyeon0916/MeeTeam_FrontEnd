import React from 'react';
import S from './Radio.styled';

interface Radio {
	name: string;
	id: string;
	state?: boolean;
	handleClick?: (id: string) => void;
	children?: JSX.Element;
}

const Radio = ({ name, id, state, handleClick, children }: Radio) => {
	return (
		<S.RadioLabel htmlFor={id}>
			<S.RadioInput
				type='radio'
				name={name}
				id={id}
				defaultChecked={state}
				onClick={() => handleClick?.(id)}
			/>
			{children}
		</S.RadioLabel>
	);
};

export default Radio;
