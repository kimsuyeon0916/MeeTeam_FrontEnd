import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import S from './DeadlineSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';

interface RecruitmentDeadLine {
	type?: string;
}

const DeadlineSelect = ({ type }: RecruitmentDeadLine) => {
	const [endDate, setEndDate] = useState(new Date());
	return (
		<S.DeadlineSelect>
			<DatePicker
				className={!type ? 'date-picker' : 'date-picker date-picker__recruitment-deadline'}
				selected={endDate}
				showPopperArrow={false}
				isClearable={!type ? true : false}
				onChange={date => date && setEndDate(date)}
				minDate={new Date()}
				placeholderText={type && '구인 글 마감일을 선택해주세요.'}
				dateFormat='yyyy년 MM월 dd일'
			/>
		</S.DeadlineSelect>
	);
};

export default React.memo(DeadlineSelect);
