import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import DatePicker from 'react-datepicker';
import S from './DateSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { recruitInputState } from '../../atom';
import { simpleDate } from '../../utils';
import { DATE_ICON } from '../../assets';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { MONTH, WEEKDAY } from './dateData';

const DateSelect = ({ type }: { type: string }) => {
	const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const [isClickMonth, setIsClickMonth] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const onChangeHandler = (date: Date | null) => {
		setSelectedDate(date);
		const convertedDate = simpleDate(date);

		if (type === 'start') {
			setFormData(prev => ({ ...prev, proceedingStart: convertedDate }));
		}
		if (type === 'end') {
			setFormData(prev => ({ ...prev, proceedingEnd: convertedDate }));
		}
		setIsClicked(true);
	};

	return (
		<S.DateSelect $isClicked={isClicked}>
			<DatePicker
				formatWeekDay={nameOfDay => WEEKDAY[nameOfDay]}
				showIcon
				selected={
					type === 'start'
						? new Date(formData.proceedingStart as string)
						: new Date(formData.proceedingEnd as string)
				}
				dateFormat='yy년 MM월 dd일'
				onChange={date => onChangeHandler(date)}
				icon={DATE_ICON}
				dayClassName={d =>
					d.getDate() === selectedDate!.getDate() && d.getMonth() === selectedDate!.getMonth()
						? 'selectedDay'
						: 'unselectedDay'
				}
				minDate={type === 'end' ? new Date(formData.proceedingStart as string) : new Date()}
				renderCustomHeader={({
					date,
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
