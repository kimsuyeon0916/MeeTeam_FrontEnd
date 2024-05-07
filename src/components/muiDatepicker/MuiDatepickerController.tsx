import React from 'react';
import {
	Controller,
	Control,
	FormState,
	FieldValues,
	RegisterOptions,
	FieldErrors,
} from 'react-hook-form';
import MuiDatepicker from './MuiDatepicker';
import S from './MuiDatepickerController.styled';

interface Date {
	name: string;
	control: Control;
	formState?: FormState<FieldValues>;
	rules?: RegisterOptions;
}

const MuiDatepickerController = ({ name, control, formState, rules }: Date) => {
	const errorResult =
		formState &&
		name
			.split('.')
			.map(key => key as string)
			.reduce<FieldErrors<FieldValues>>((errorsObject, key) => {
				if (!errorsObject) return errorsObject;
				return errorsObject[key] as FieldErrors<FieldValues>;
			}, formState.errors);
	const inputError = !!errorResult;
	const inputErrorMessage = (errorResult?.message ?? '') as string;

	return (
		<S.MuiDatepickerControllerLayout>
			<Controller
				control={control}
				name={name}
				rules={rules}
				render={({ field: { onChange, ref, value } }) => (
					<MuiDatepicker
						defaultValue={new Date(value)}
						handleChange={onChange}
						inputRef={ref}
						invalid={!!inputError}
					/>
				)}
			/>
			{inputError && <S.ErrorMessage>{inputErrorMessage}</S.ErrorMessage>}
		</S.MuiDatepickerControllerLayout>
	);
};

export default MuiDatepickerController;
