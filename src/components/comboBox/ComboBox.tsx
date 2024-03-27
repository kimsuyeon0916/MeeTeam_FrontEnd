import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
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
} from 'react-hook-form';
import { Input } from '../index';

interface Option {
	id?: string;
	title: string;
}

interface ComboBox<T extends FieldValues> {
	width?: string;
	register: UseFormRegister<T>;
	setValue: UseFormSetValue<T>;
	formState?: FormState<T>;
	name: string;
	validation?: RegisterOptions;
	label?: string;
	icon?: Icon;
	placeholder?: string;
	optionList?: Option[];
	clickInput?: (name: T | string) => void;
	clickOption?: (name: T | string) => void;
}

const ComboBox = <T extends FieldValues>({
	width,
	register,
	setValue,
	name,
	validation,
	optionList,
	clickInput,
	clickOption,
	...props
}: ComboBox<T>) => {
	const { ref, ...rest } = register(name as Path<T>, validation);

	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLInputElement>(null);

	useImperativeHandle(ref, () => dropdownRef.current);

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
	};

	return (
		<S.ComboBoxLayout>
			<Input
				width={width}
				register={register}
				name={name}
				validation={validation}
				{...props}
				inputRef={dropdownRef}
				handleInputClick={handleInputClick}
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
