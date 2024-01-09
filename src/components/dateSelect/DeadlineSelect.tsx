import { useState } from 'react';
import DatePicker from 'react-datepicker';
import S from './DeadlineSelect.styled';

const DeadlineSelect = () => {
	const [endDate, setEndDate] = useState(new Date());
	return (
		<S.DeadlineSelect>
			<DatePicker selected={endDate} onChange={date => setEndDate(date as any)} />
		</S.DeadlineSelect>
	);
};

export default DeadlineSelect;
