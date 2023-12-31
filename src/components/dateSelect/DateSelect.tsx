import { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { dateState } from '../../atom';
import DatePicker from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = () => {
	const [dateRange, setDateRange] = useState([new Date(), new Date()]);
	const [startDate, endDate] = dateRange;
	const [date, setDate] = useRecoilState(dateState);

	// 더 좋은 방법이 있을 것 같음.
	useEffect(() => {
		setDate(dateRange);
	}, [dateRange]);

	return (
		<S.DateSelect>
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				onChange={update => {
					setDateRange(update as any);
				}}
				isClearable={true}
				className='date-picker'
			/>
		</S.DateSelect>
	);
};

export default DateSelect;
