import React from 'react';
import S from './Radio.styled';
import { UseFormRegister, FieldValues, RegisterOptions } from 'react-hook-form';

interface Radio {
	register: UseFormRegister<FieldValues>;
	name: string;
	id: string;
	validation?: RegisterOptions;
	state?: boolean;
	handleClick?: (id: string) => void;
	children?: JSX.Element;
}

const Radio = ({ register, name, id, validation, state, handleClick, children }: Radio) => {
	return (
		<S.RadioLabel htmlFor={id}>
			<S.RadioInput
				{...register(name, validation)}
				type='radio'
				name={name}
				id={id}
				checked={state}
				value={id}
				onClick={() => handleClick?.(id)}
			/>
			{children}
		</S.RadioLabel>
	);
};

export default Radio;
