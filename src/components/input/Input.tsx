import React from 'react';
import S from './Input.styled';
import {
	FieldValues,
	UseFormRegister,
	FormState,
	Path,
	RegisterOptions,
	UseFormWatch,
	FieldErrors,
} from 'react-hook-form';

export interface Icon {
	$default: string;
	$focus?: string;
	$arrow: string;
}

interface Input<T extends FieldValues> {
	width?: string;
	defaultValue?: string;
	register: UseFormRegister<T>;
	watch?: UseFormWatch<T>;
	formState?: FormState<T>;
	name: string;
	validation?: RegisterOptions;
	label?: string;
	icon?: Icon;
	maxLength?: number;
	duplicated?: boolean;
	duplicatedMessage?: string;
	placeholder?: string;
	inputRef?: React.MutableRefObject<HTMLInputElement | null>; // RefObject
	handleInputClick?: React.MouseEventHandler<HTMLInputElement>;
	handleKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input = <T extends FieldValues>({
	width,
	register,
	watch,
	formState,
	name,
	validation,
	label,
	icon,
	inputRef,
	handleInputClick,
	handleKeyDown,
	...props
}: Input<T>) => {
	const errorResult =
		formState &&
		name
			.split('.')
			.map(key => key as string)
			.reduce<FieldErrors<T>>((errorsObject, key) => {
				if (!errorsObject) return errorsObject;
				return errorsObject[key] as FieldErrors<T>;
			}, formState.errors);

	const inputError = (errorResult || props?.duplicated) as boolean;
	const inputErrorMessage = (errorResult?.message ?? props?.duplicatedMessage) as string;
	const inputValue = watch?.(name as Path<T>);

	const { ref, ...rest } = register(name as Path<T>, validation?.disabled ? undefined : validation);

	return (
		<S.InputLayout $width={width}>
			{label && (
				<S.InputLabel $required={validation?.required ? true : false}>{label}</S.InputLabel>
			)}
			<S.InputContainer>
				<S.Input
					disabled={validation?.disabled}
					{...rest}
					{...props}
					{...icon}
					invalid={inputError}
					ref={(e: HTMLInputElement) => {
						ref(e);
						if (inputRef) inputRef.current = e;
					}}
					onClick={handleInputClick}
					onKeyDown={handleKeyDown}
				/>
				<S.InputErrorMessage invalid={inputError}>{inputErrorMessage}</S.InputErrorMessage>
				{props?.maxLength && (
					<span>
						{inputValue?.length ?? 0}/{props.maxLength}
					</span>
				)}
			</S.InputContainer>
		</S.InputLayout>
	);
};

export default Input;
