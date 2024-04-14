import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import S from './MuiDatepicker.styled';
import { GrayCalendar } from '../../assets';
import { format } from 'date-fns';

interface MuiDatepicker {
	handleChange: (value: Date | null) => void;
	defaultValue?: Date;
	value?: Date;
	inputRef?: React.Ref<HTMLInputElement>;
}

const CalendarIcon = () => {
	return <img src={GrayCalendar} alt='calendar' />;
};

const MuiDatepicker = ({ handleChange, defaultValue, value, inputRef }: MuiDatepicker) => {
	const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);

	return (
		<DatePicker
			defaultValue={defaultValue}
			value={value}
			open={datePickerOpen}
			onClose={() => setDatePickerOpen(false)}
			slots={{
				popper: S.StyledPopper,
				textField: S.StyledTextField,
				layout: S.StyledPickersLayout as React.JSXElementConstructor<any>,
				openPickerIcon: CalendarIcon,
			}}
			slotProps={{
				textField: {
					inputProps: { readOnly: true },
					placeholder: format(new Date(), 'yy년 MM월 dd일'),
					onClick: () => {
						if (!datePickerOpen) {
							setDatePickerOpen(true);
						}
					},
				},
			}}
			views={['year', 'month', 'day']}
			format='yy년 MM월 dd일'
			disableHighlightToday={true}
			onChange={handleChange}
			inputRef={inputRef}
		/>
	);
};

export default MuiDatepicker;
