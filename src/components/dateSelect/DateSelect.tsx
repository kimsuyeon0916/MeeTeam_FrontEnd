import React, { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { recruitInputState } from '../../atom';
import { simpleDate } from '../../utils';
import { DATE_ICON } from '../../assets';

const DateSelect = ({ type }: { type: string }) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	const setFormdata = useSetRecoilState(recruitInputState);

	const onChangeHandler = (date: Date | null) => {
		setSelectedDate(date);
		const convertedDate = simpleDate(date);
		if (type === 'start') {
			setFormdata(prev => ({ ...prev, startDate: convertedDate }));
		}
		if (type === 'end') {
			setFormdata(prev => ({ ...prev, endDate: convertedDate }));
		}
	};

	return (
		<S.DateSelect>
			<DatePicker
				showIcon
				selected={selectedDate}
				dateFormat='yy년 MM월 dd일'
				onChange={date => onChangeHandler(date)}
				icon={DATE_ICON}
			/>
		</S.DateSelect>
	);
};

export default React.memo(DateSelect);
