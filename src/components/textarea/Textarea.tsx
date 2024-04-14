import React from 'react';
import S from './Textarea.styled';
import {
	FieldValues,
	UseFormRegister,
	Path,
	RegisterOptions,
	FormState,
	UseFormWatch,
} from 'react-hook-form';

interface Textarea<T extends FieldValues> {
	defaultValue?: string;
	register: UseFormRegister<T>;
	watch?: UseFormWatch<T>;
	formState?: FormState<T>;
	name: string;
	validation?: RegisterOptions;
	label?: string;
	placeholder?: string;
	maxLength?: number;
}

const Textarea = <T extends FieldValues>({
	register,
	watch,
	formState,
	name,
	validation,
	label,
	...props
}: Textarea<T>) => {
	const textareaErrorMessage = formState?.errors[name]?.message as string;
	const textareaValue = watch?.(name as Path<T>);

	return (
		<S.TextareaLabel>
			{label && <h6>{label}</h6>}
			<S.TextareaContainer>
				<S.Textarea {...register(name as Path<T>, validation)} {...props}></S.Textarea>
				<small>{textareaErrorMessage}</small>
				{props?.maxLength && (
					<span>
						{textareaValue?.length ?? 0}/{props.maxLength}
					</span>
				)}
			</S.TextareaContainer>
		</S.TextareaLabel>
	);
};

export default Textarea;
