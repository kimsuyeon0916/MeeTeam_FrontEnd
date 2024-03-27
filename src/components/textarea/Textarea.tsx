import React from 'react';
import S from './Textarea.styled';
import { FieldValues, UseFormRegister, FormState, Path, RegisterOptions } from 'react-hook-form';

interface Textarea<T extends FieldValues> {
	register: UseFormRegister<T>;
	formState?: FormState<T>;
	name: string;
	validation?: RegisterOptions;
	label?: string;
	placeholder?: string;
}

const Textarea = <T extends FieldValues>({
	register,
	formState,
	name,
	validation,
	label,
	...props
}: Textarea<T>) => {
	const textareaErrorMessage = formState?.errors[name]?.message as string;

	return (
		<S.TextareaLayout>
			<S.TextareaLabel>
				<h6>{label}</h6>
				<S.Textarea {...register(name as Path<T>, validation)} {...props}></S.Textarea>
				{textareaErrorMessage && <small>{textareaErrorMessage}</small>}
			</S.TextareaLabel>
		</S.TextareaLayout>
	);
};

export default Textarea;
