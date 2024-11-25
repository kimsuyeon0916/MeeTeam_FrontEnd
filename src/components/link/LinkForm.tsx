import React from 'react';
import S from './LinkForm.styled';
import { ComboBox, DeleteBtn, Input } from '..';
import {
	FieldValues,
	UseFormRegister,
	UseFieldArrayRemove,
	UseFormGetValues,
	UseFormSetValue,
	FormState,
	RegisterOptions,
} from 'react-hook-form';
import { Icon } from '../input/Input';
import { PROFILE_EDIT_DATA } from '../../pages';

export interface Option {
	id?: string;
	name: string;
}

interface LinkForm<T extends FieldValues> {
	index?: number;
	defaultValue?: string;
	width?: string;
	register: UseFormRegister<T>;
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

const LINK_DESCRIPTION_LIST = [{ name: 'Link' }, { name: 'Blog' }, { name: 'Github' }];

const LinkForm = <T extends FieldValues>({
	index,
	width,
	remove,
	getValues,
	setValue,
	clickInput,
	clickOption,
	handleInputClick,
	...props
}: LinkForm<T>) => {
	const deleteLink = () => {
		remove(index);
	};

	return (
		<S.LinkFormLayout>
			<ComboBox
				width={width}
				name={`links.${index}.description`}
				setValue={setValue}
				getValues={getValues}
				optionList={LINK_DESCRIPTION_LIST}
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
			<DeleteBtn handleClick={deleteLink} />
		</S.LinkFormLayout>
	);
};

export default LinkForm;
