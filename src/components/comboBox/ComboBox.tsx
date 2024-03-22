import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import S from './comboBox.styled';
import { OptionList } from '../index';
import { FieldValues, UseFormRegister, UseFormSetValue, FormState, Path } from 'react-hook-form';

interface Option {
	id: string;
	title: string;
}

interface ComboBox<T extends FieldValues> {
	register: UseFormRegister<T>;
	setValue: UseFormSetValue<T> | ((T, ...U) => UseFormSetValue<T>);
	formState?: FormState<T>;
	name: Path<T>;
	label?: string;
	icon?: JSX.Element;
	placeholder?: string;
	optionList?: Option[];
	clickInput?: (T) => void;
	clickOption?: (T) => void;
}

const ComboBox = <T extends FieldValues>({
	register,
	setValue,
	formState,
	name,
	label,
	icon,
	optionList,
	clickInput,
	clickOption,
	...props
}: ComboBox<T>) => {
	const inputErrorMessage = formState?.errors[name]?.message;

	const { ref, ...rest } = register(name);

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

	const handleOptionClick = (name: string, title: string, id?: string) => {
		setValue(name, title);
		id && sessionStorage.setItem(name, id);
		clickOption?.(name);
	};

	return (
		<S.ComboBoxLayout>
			<S.ComboBoxLabel>
				<h6>{label}</h6>
				<S.ComboBoxInput {...rest} {...props} ref={dropdownRef} onClick={handleInputClick} />
				{icon}
			</S.ComboBoxLabel>
			{optionList && isOpen && (
				<OptionList name={name} optionList={optionList} handleOptionClick={handleOptionClick} />
			)}
		</S.ComboBoxLayout>
	);
};

export default ComboBox;
