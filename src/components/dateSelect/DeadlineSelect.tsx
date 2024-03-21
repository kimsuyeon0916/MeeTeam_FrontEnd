import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import S from './DeadlineSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../atom';
import { simpleDate } from '../../utils';
import { DATE_ICON } from '../../assets';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

interface RecruitmentDeadLine {
	type?: string;
}

const YEARS = Array.from(
	{ length: new Date().getFullYear() + 1 - 2000 },
	(_, i) => new Date().getFullYear() - i
);

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

const DeadlineSelect = ({ type }: RecruitmentDeadLine) => {
	const [endDate, setEndDate] = useState(new Date());
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [isClickMonth, setIsClickMonth] = useState(false);

	const onChangeDate = (date: Date) => {
		if (date) {
			setEndDate(() => {
				const result = simpleDate(date);
				setInfo(prevInfo => ({ ...prevInfo, deadline: result }));
				return date;
			});
		}
	};
	return (
		<S.DeadlineSelect>
			<DatePicker
				formatWeekDay={nameOfDay => WEEKDAY[nameOfDay]}
				className={!type ? 'date-picker' : 'date-picker date-picker__recruitment-deadline'}
				selected={endDate}
				showPopperArrow={false}
				onChange={onChangeDate}
				minDate={new Date()}
				placeholderText={type && '구인 글 마감일을 선택해주세요.'}
				dateFormat='yy년 MM월 dd일'
				tabIndex={-1}
				icon={DATE_ICON}
				dayClassName={d => (d.getDate() === endDate!.getDate() ? 'selectedDay' : 'unselectedDay')}
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
		</S.DeadlineSelect>
	);
};

export default React.memo(DeadlineSelect);
