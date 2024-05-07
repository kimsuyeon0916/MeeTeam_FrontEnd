import React from 'react';
import { Controller, Control, FormState, FieldValues, RegisterOptions } from 'react-hook-form';
import MuiDatepicker from './MuiDatepicker';

interface Date {
	name: string;
	control: Control;
	formState?: FormState<FieldValues>;
	rules?: RegisterOptions;
}

const MuiDatepickerController = ({ name, control }: Date) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, ref, value } }) => (
				<MuiDatepicker defaultValue={new Date(value)} handleChange={onChange} inputRef={ref} />
			)}
		/>
	);
};

export default MuiDatepickerController;
