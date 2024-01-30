import React from 'react';
import { useRecoilState } from 'recoil';
import { dateState } from '../../atom';
import DatePicker from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = () => {
	const [date, setDate] = useRecoilState(dateState);
	const [startDate, endDate] = date;

	// const startYear = startDate.getFullYear().toString();
	// const startMonth = (startDate.getMonth() + 1).toString();
	// const startDay = startDate.getDate().toString();
	// const startStr = startYear + '-' + startMonth + '-' + startDay;
	// console.log(startStr);

	// const endYear = endDate.getFullYear().toString();
	// const endMonth = (endDate.getMonth() + 1).toString();
	// const endDay = endDate.getDate().toString();
	// const endStr = endYear + '-' + endMonth + '-' + endDay;
	// console.log(endStr);

	return (
		<S.DateSelect>
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				showPopperArrow={false}
				endDate={endDate}
				onChange={update => {
					setDate(update as any);
				}}
				isClearable={true}
				className='date-picker'
			/>
		</S.DateSelect>
	);
};

export default React.memo(DateSelect);
