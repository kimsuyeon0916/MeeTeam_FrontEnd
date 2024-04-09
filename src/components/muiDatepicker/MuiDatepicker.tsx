import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import S from './MuiDatepicker.styled';
import { GrayCalendar } from '../../assets';
import { format } from 'date-fns';

interface Date {
	name: string;
	control: Control;
}

const CalendarIcon = () => {
	return <img src={GrayCalendar} alt='calendar' />;
};

const MuiDatepicker = ({ name, control }: Date) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, ref, value } }) => (
				<DatePicker
					defaultValue={new Date(value)}
					slots={{
						popper: S.StyledPopper,
						textField: S.StyledTextField,
						layout: S.StyledPickersLayout as React.JSXElementConstructor<any>,
						openPickerIcon: CalendarIcon,
					}}
					slotProps={{
						textField: {
							placeholder: format(new Date(), 'yy년 MM월 dd일'),
						},
					}}
					views={['year', 'month', 'day']}
					format='yy년 MM월 dd일'
					disableHighlightToday={true}
					onChange={onChange}
					inputRef={ref}
				/>
			)}
		/>
	);
};

export default MuiDatepicker;
