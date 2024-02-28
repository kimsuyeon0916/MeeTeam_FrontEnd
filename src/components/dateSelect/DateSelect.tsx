import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { recruitInputState } from '../../atom';
import { simpleDate } from '../../utils';

const DateSelect = () => {
	const [date, setDate] = useState([new Date(), new Date()]);
	const [startDate, endDate] = date;
	const [info, setInfo] = useRecoilState(recruitInputState);

	const onChangeHandler = (update: any) => {
		setDate(update);
		const startDate = simpleDate(update[0]);
		const endDate = simpleDate(update[1]);
		setInfo({ ...info, period: [startDate, endDate] });
	};

	return (
		<S.DateSelect>
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				dateFormat='yyyy년 MM월 dd일'
				showPopperArrow={false}
				endDate={endDate}
				onChange={update => onChangeHandler(update)}
				isClearable={true}
				className='date-picker'
				tabIndex={-1}
			/>
		</S.DateSelect>
	);
};

export default React.memo(DateSelect);
