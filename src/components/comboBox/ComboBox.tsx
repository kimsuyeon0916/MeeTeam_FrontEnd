import React, { useState, useRef, useEffect } from 'react';
import S from './ComboBox.styled';
import { OptionList } from '../index';
import { Icon } from '../input/Input';
import {
	FieldValues,
	UseFormRegister,
	UseFormSetValue,
	FormState,
	Path,
	PathValue,
	RegisterOptions,
	UseFormSetFocus,
	UseFormGetValues,
} from 'react-hook-form';
import { Input } from '../index';
import { Search } from '../../types';

interface Option {
	id?: string;
	name: string;
}

interface ComboBox<T extends FieldValues> {
	defaultValue?: string;
	width?: string;
	register: UseFormRegister<T>;
	setValue: UseFormSetValue<T>;
	getValues?: UseFormGetValues<T>;
	setFocus?: UseFormSetFocus<T>;
	formState?: FormState<T>;
	name: string;
	validation?: RegisterOptions;
	label?: string;
	icon?: Icon;
	placeholder?: string;
	optionList?: Option[] | Search[];
	clickInput?: (name: T | string) => void;
	clickOption?: (name: T | string) => void;
	downKey?: (name?: T | string) => void;
}

const ComboBox = <T extends FieldValues>({
	width,
	register,
	setValue,
	getValues,
	name,
	validation,
	optionList,
	clickInput,
	clickOption,
	downKey,
	...props
}: ComboBox<T>) => {
	const [isOpen, setIsOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const clearInput = () => {
		const inputValue = getValues?.(name as Path<T>);
		if (!optionList?.find(option => option.name === inputValue)) {
			setValue(name as Path<T>, '' as PathValue<T, Path<T>>);
			sessionStorage.removeItem(name);
		}
	};

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			const target = e.target as HTMLDivElement;
			if (isOpen && inputRef.current && !inputRef.current.contains(target)) {
				setIsOpen(false);
				clearInput();
			}
		};

		document.addEventListener('click', handleOutsideClick);
		return () => document.removeEventListener('click', handleOutsideClick);
	}, [isOpen, optionList]);

	const handleInputClick = () => {
		clickInput?.(name);
		setIsOpen(true);
	};

	const handleOptionClick = (name: Path<T>, optionName: PathValue<T, Path<T>>, id?: string) => {
		setValue(name, optionName);
		id && sessionStorage.setItem(name, id);
		clickOption?.(name);
		// setFocus?.(name);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			downKey?.(name);
			// setIsOpen(true);
		}
	};

	return (
		<S.ComboBoxLayout $width={width}>
			<Input
				register={register}
				name={name}
				validation={validation}
				{...props}
				inputRef={inputRef}
				handleInputClick={handleInputClick}
				handleKeyDown={handleKeyDown}
			/>
			{optionList && isOpen && (
				<OptionList
					label={props.label}
					name={name}
					optionList={optionList}
					handleOptionClick={handleOptionClick as VoidFunction}
				/>
			)}
		</S.ComboBoxLayout>
	);
};

export default ComboBox;
