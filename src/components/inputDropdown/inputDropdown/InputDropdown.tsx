import React from 'react';
import { Dot, CustomSelect, Subtitle, DeadlineSelect } from '../..';
import DateSelect from '../../dateSelect/DateSelect';
import S from './InputDropdown.styled';

interface Information {
	isDot: string;
	title: string;
	optionData: string[];
	type?: string;
}

const InputDropdown = (props: Information) => {
	return (
		<S.InputDropdown>
			<Subtitle>{props.title}</Subtitle>
			{props.isDot === 'true' && <Dot />}
			{props.title === '기간' ? (
				<DateSelect />
			) : props.title === '구인 마감일' ? (
				<DeadlineSelect />
			) : (
				<CustomSelect optionData={props.optionData} type={props.type} />
			)}
		</S.InputDropdown>
	);
};

export default React.memo(InputDropdown);
