import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { recruitInputState } from '../../atom';
import { simpleDate } from '../../utils';

const DateSelect = () => {
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(new Date());
	const [info, setInfo] = useRecoilState(recruitInputState);

	const onChangeHandler = (dates: [Date | null, Date | null]) => {
		const [start, end] = dates;
		setStartDate(prevStartDate => {
			setEndDate(prevEndDate => {
				const startDateFormatted = simpleDate(start);
				const endDateFormatted = simpleDate(end);

				if (startDateFormatted && endDateFormatted) {
					setInfo(prevInfo => ({ ...prevInfo, period: [startDateFormatted, endDateFormatted] }));
				}
				return end;
			});
			return start;
		});
	};

	return (
		<S.DateSelect>
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				dateFormat='yyyy년 MM월 dd일'
				showPopperArrow={false}
				endDate={endDate}
				onChange={onChangeHandler}
				isClearable={true}
				className='date-picker'
				tabIndex={-1}
				shouldCloseOnSelect={false}
			/>
		</S.DateSelect>
	);
};

export default React.memo(DateSelect);
