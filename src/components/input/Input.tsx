import React from 'react';
import S from './Input.styled';
import { FieldValues, UseFormRegister, FormState, Path, RegisterOptions } from 'react-hook-form';

export interface Icon {
	default: string;
	focus?: string;
	arrow: string;
}

interface Input<T extends FieldValues> {
	width?: string;
	defaultValue?: string;
	register: UseFormRegister<T>;
	formState?: FormState<T>;
	name: string;
	validation?: RegisterOptions;
	label?: string;
	icon?: Icon;
	placeholder?: string;
	inputRef?: React.MutableRefObject<HTMLInputElement | null>; // RefObject
	handleInputClick?: React.MouseEventHandler<HTMLInputElement>;
}

const Input = <T extends FieldValues>({
	defaultValue,
	width,
	register,
	formState,
	name,
	validation,
	label,
	icon,
	inputRef,
	handleInputClick,
	...props
}: Input<T>) => {
	const inputErrorMessage = formState?.errors[name]?.message as string;

	const { ref, ...rest } = register(name as Path<T>, validation);

	return (
		<S.InputLabel $width={width}>
			{label && <h6>{label}</h6>}
			<S.Input
				{...rest}
				{...props}
				{...icon}
				defaultValue={defaultValue}
				ref={e => {
					ref(e);
					if (inputRef) inputRef.current = e;
				}}
				onClick={handleInputClick}
			/>
			{inputErrorMessage && <small>{inputErrorMessage}</small>}
		</S.InputLabel>
	);
};

export default Input;
