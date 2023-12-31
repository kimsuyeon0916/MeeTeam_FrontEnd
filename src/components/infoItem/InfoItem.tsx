import { Dot, CustomSelect, Subtitle } from '..';
import DateSelect from '../dateSelect/DateSelect';
import S from './InfoItem.styled';

interface IInfoItem {
	isDot: string;
	title: string;
	optionData: string[];
	type?: string;
}

const InfoItem = (props: IInfoItem) => {
	return (
		<S.InfoItem>
			<Subtitle>{props.title}</Subtitle>
			{props.isDot === 'true' && <Dot />}
			{props.title === '밋팀 기간' ? (
				<DateSelect />
			) : (
				<CustomSelect optionData={props.optionData} type={props.type} />
			)}
		</S.InfoItem>
	);
};

export default InfoItem;
