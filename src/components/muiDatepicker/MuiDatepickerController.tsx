import React from 'react';
import { Controller, Control, FormState, FieldValues, RegisterOptions } from 'react-hook-form';
import MuiDatepicker from './MuiDatepicker';
import S from './MuiDatepickerController.styled';

interface Date {
	name: string;
	control: Control;
	formState?: FormState<FieldValues>;
	rules?: RegisterOptions;
}

const MuiDatepickerController = ({ name, control, formState, rules }: Date) => {
	const inputError = formState?.errors[name];
	const inputErrorMessage = formState?.errors[name]?.message as string;

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
