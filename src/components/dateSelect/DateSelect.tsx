import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = () => {
	const [date, setDate] = useState([new Date(), new Date()]);
	const [startDate, endDate] = date;

	return (
		<S.DateSelect>
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				dateFormat='yyyy년 MM월 dd일'
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
