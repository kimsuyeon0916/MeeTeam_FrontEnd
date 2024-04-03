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
} from 'react-hook-form';
import { Input } from '../index';

interface Option {
	id?: string;
	title: string;
}

interface ComboBox<T extends FieldValues> {
	defaultValue?: string;
	width?: string;
	register: UseFormRegister<T>;
	setValue: UseFormSetValue<T>;
	setFocus?: UseFormSetFocus<T>;
	formState?: FormState<T>;
	name: string;
	validation?: RegisterOptions;
	label?: string;
	icon?: Icon;
	placeholder?: string;
	optionList?: Option[];
	clickInput?: (name: T | string) => void;
	clickOption?: (name: T | string) => void;
	downKey?: (name?: T | string) => void;
}

const ComboBox = <T extends FieldValues>({
	width,
	register,
	setValue,
	setFocus,
	name,
	validation,
	optionList,
	clickInput,
	clickOption,
	downKey,
	...props
}: ComboBox<T>) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			const target = e.target as HTMLDivElement;
			if (isOpen && dropdownRef.current && !dropdownRef.current.contains(target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);
		return () => document.removeEventListener('click', handleOutsideClick);
	}, [isOpen]);

	const handleInputClick = () => {
		clickInput?.(name);
		setIsOpen(true);
	};

	const handleOptionClick = (name: Path<T>, title: PathValue<T, Path<T>>, id?: string) => {
		setValue(name, title);
		id && sessionStorage.setItem(name, id);
		clickOption?.(name);
		setFocus?.(name);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			downKey?.(name);
			setIsOpen(true);
		}
	};

	return (
		<S.ComboBoxLayout $width={width}>
			<Input
				register={register}
				name={name}
				validation={validation}
				{...props}
				inputRef={dropdownRef}
				handleInputClick={handleInputClick}
				handleKeyDown={handleKeyDown}
			/>
			{optionList && isOpen && (
				<OptionList
					name={name}
					optionList={optionList}
					handleOptionClick={handleOptionClick as VoidFunction}
				/>
			)}
		</S.ComboBoxLayout>
	);
};

export default ComboBox;
