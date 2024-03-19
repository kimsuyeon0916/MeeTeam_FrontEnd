import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import S from './comboBox.styled';
import { OptionList } from '../index';
import { useForm, FieldValues } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

interface Option {
	id: string;
	title: string;
}

interface ComboBox {
	name: string;
	label?: string;
	icon?: JSX.Element;
	placeholder?: string;
	optionList: Option[];
	isOpen?: boolean;
}

const ComboBox = ({ name, label, icon, optionList, ...props }: ComboBox) => {
	const { register, setValue, control } = useForm<FieldValues>();
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
		setIsOpen(true);
	};

	const handleOptionClick = (name: string, id: string, title: string) => {
		setValue(name, title);
		// 해당 title의 id를 payload로 설정
	};

	return (
		<S.ComboBoxLayout>
			<S.ComboBoxLabel>
				<h6>{label}</h6>
				<S.ComboBoxInput {...rest} {...props} ref={dropdownRef} onClick={handleInputClick} />
				{icon}
			</S.ComboBoxLabel>
			{isOpen && (
				<OptionList name={name} optionList={optionList} handleOptionClick={handleOptionClick} />
			)}
			<DevTool control={control} />
		</S.ComboBoxLayout>
	);
};

export default ComboBox;
