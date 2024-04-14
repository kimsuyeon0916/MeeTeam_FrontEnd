import React from 'react';
import { Controller, Control } from 'react-hook-form';
import MuiDatepicker from './MuiDatepicker';

interface Date {
	name: string;
	control: Control;
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
