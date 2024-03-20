import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import S from './DeadlineSelect.styled';
import 'react-datepicker/dist/react-datepicker.css';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../atom';
import { simpleDate } from '../../utils';

interface RecruitmentDeadLine {
	type?: string;
}

const DeadlineSelect = ({ type }: RecruitmentDeadLine) => {
	const [endDate, setEndDate] = useState(new Date());
	const [info, setInfo] = useRecoilState(recruitInputState);

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
				className={!type ? 'date-picker' : 'date-picker date-picker__recruitment-deadline'}
				selected={endDate}
				showPopperArrow={false}
				onChange={onChangeDate}
				minDate={new Date()}
				placeholderText={type && '구인 글 마감일을 선택해주세요.'}
				dateFormat='yy년 MM월 dd일'
				tabIndex={-1}
				icon={
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='21'
						height='19'
						viewBox='0 0 21 19'
						fill='none'
					>
						<g clip-path='url(#clip0_7754_7395)'>
							<path
								d='M1.04688 3.78555C1.04688 2.79555 1.99187 1.98555 3.14687 1.98555H17.8469C18.4038 1.98555 18.938 2.17519 19.3318 2.51275C19.7256 2.85032 19.9469 3.30816 19.9469 3.78555V16.3855C19.9469 16.8629 19.7256 17.3208 19.3318 17.6583C18.938 17.9959 18.4038 18.1855 17.8469 18.1855H3.14687C2.58992 18.1855 2.05578 17.9959 1.66195 17.6583C1.26812 17.3208 1.04688 16.8629 1.04688 16.3855V3.78555ZM3.14687 5.58555V16.3855H17.8469V5.58555H3.14687ZM5.24687 0.185547H7.34687V1.98555H5.24687V0.185547ZM13.6469 0.185547H15.7469V1.98555H13.6469V0.185547ZM5.24687 8.28555H7.34687V10.0855H5.24687V8.28555ZM5.24687 11.8855H7.34687V13.6855H5.24687V11.8855ZM9.44687 8.28555H11.5469V10.0855H9.44687V8.28555ZM9.44687 11.8855H11.5469V13.6855H9.44687V11.8855ZM13.6469 8.28555H15.7469V10.0855H13.6469V8.28555ZM13.6469 11.8855H15.7469V13.6855H13.6469V11.8855Z'
								fill='#8E8E8E'
							/>
						</g>
						<defs>
							<clipPath id='clip0_7754_7395'>
								<rect width='21' height='18' fill='white' transform='translate(0 0.185547)' />
							</clipPath>
						</defs>
					</svg>
				}
			/>
		</S.DeadlineSelect>
	);
};

export default React.memo(DeadlineSelect);
