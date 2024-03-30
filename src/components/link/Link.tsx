import React from 'react';
import S from './Link.styled';
import { AddBtn, ComboBox, DeleteBtn, Input } from '..';
import {
	FieldValues,
	UseFormRegister,
	UseFieldArrayPrepend,
	UseFieldArrayRemove,
	UseFormGetValues,
	UseFormSetValue,
	FormState,
	RegisterOptions,
	Path,
	FieldArray,
	ArrayPath,
} from 'react-hook-form';
import { Icon } from '../input/Input';
import { PROFILE_EDIT_DATA } from '../../pages';

export interface Option {
	id?: string;
	title: string;
}

interface Link<T extends FieldValues> {
	index?: number;
	defaultValue?: string;
	width?: string;
	register: UseFormRegister<T>;
	prepend: UseFieldArrayPrepend<T>;
	remove: UseFieldArrayRemove;
	getValues: UseFormGetValues<T>;
	setValue: UseFormSetValue<T>;
	formState?: FormState<T>;
	validation?: RegisterOptions;
	label?: string;
	icon?: Icon;
	placeholder?: string;
	optionList?: Option[];
	clickInput?: (name: T | string) => void;
	clickOption?: (name: T | string) => void;
	handleInputClick?: React.MouseEventHandler<HTMLInputElement>;
}

const Link = <T extends FieldValues>({
	index,
	width,
	prepend,
	remove,
	getValues,
	setValue,
	optionList,
	clickInput,
	clickOption,
	handleInputClick,
	...props
}: Link<T>) => {
	const addLink = () => {
		console.log(getValues(`links.${index}.url` as Path<T>));
		if (!getValues(`links.${index}.url` as Path<T>)) return;
		prepend({ description: 'Link', url: '' } as FieldArray<T, ArrayPath<T>>);
	};

	const deleteLink = () => {
		remove(index);
	};

	return (
		<S.LinkLayout>
			<ComboBox
				width={width}
				name={`links.${index}.description`}
				setValue={setValue}
				optionList={optionList}
				clickInput={clickInput}
				clickOption={clickOption}
				{...props}
				{...PROFILE_EDIT_DATA.linkDescription}
			/>
			<Input
				name={`links.${index}.url`}
				handleInputClick={handleInputClick}
				{...props}
				{...PROFILE_EDIT_DATA.linkUrl}
			/>
			{index === 0 ? <AddBtn handleClick={addLink} /> : <DeleteBtn handleClick={deleteLink} />}
		</S.LinkLayout>
	);
};

export default Link;
