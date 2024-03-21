import React, { useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { recruitInputState } from '../../atom';
import { simpleDate } from '../../utils';
import { DATE_ICON } from '../../assets';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const MONTH = [
	'1월',
	'2월',
	'3월',
	'4월',
	'5월',
	'6월',
	'7월',
	'8월',
	'9월',
	'10월',
	'11월',
	'12월',
];

const WEEKDAY = {
	Sunday: '일',
	Monday: '월',
	Tuesday: '화',
	Wednesday: '수',
	Thursday: '목',
	Friday: '금',
	Saturday: '토',
};

const DateSelect = ({ type }: { type: string }) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	const setFormdata = useSetRecoilState(recruitInputState);
	const [isClickMonth, setIsClickMonth] = useState(false);

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
				formatWeekDay={nameOfDay => WEEKDAY[nameOfDay]}
				showIcon
				selected={selectedDate}
				dateFormat='yy년 MM월 dd일'
				onChange={date => onChangeHandler(date)}
				icon={DATE_ICON}
				dayClassName={d =>
					d.getDate() === selectedDate!.getDate() ? 'selectedDay' : 'unselectedDay'
				}
				renderCustomHeader={({
					date,
					changeYear,
					changeMonth,
					decreaseMonth,
					increaseMonth,
					prevMonthButtonDisabled,
					nextMonthButtonDisabled,
				}) => (
					<article className='container-header'>
						<section className='header-month'>
							<span onClick={() => setIsClickMonth(prev => !prev)}>{date.getFullYear()}</span>
							<span>{MONTH[date.getMonth()]}</span>
						</section>
						<section className='header-btns'>
							<button
								type='button'
								onClick={decreaseMonth}
								className='month-btn'
								disabled={prevMonthButtonDisabled}
							>
								<SlArrowLeft />
							</button>
							<button
								type='button'
								onClick={increaseMonth}
								className='month-btn'
								disabled={nextMonthButtonDisabled}
							>
								<SlArrowRight />
							</button>
						</section>
					</article>
				)}
			/>
		</S.DateSelect>
	);
};

export default React.memo(DateSelect);
