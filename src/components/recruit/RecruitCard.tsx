import { useState } from 'react';
import { Alarm } from '../../assets';
import { Tag } from '..';
import S from './RecruitCard.styled';

export interface IRecruitCard {
	title: string;
	type: string;
	$recruit?: boolean;
	$proceed?: boolean;
}

const RecruitCard = ({ title, type, $recruit, $proceed }: IRecruitCard) => {
	const [isOn, setIsOn] = useState<boolean>(false);
	const toggleHandler = () => {
		setIsOn(prev => !prev);
	};
	return (
		<S.RecruitCard>
			<div className='container-recruits__info'>
				<div className='container-tags'>
					<Tag type={type} />
					<Tag type={type} $recruit={$recruit} $proceed={$proceed} />
				</div>
				<div className='container-title'>
					<h1>{title}</h1>
				</div>
			</div>
			<div className='container-recruits__options'>
				<div className='info'>{isOn ? '공개' : '비공개'}</div>
				<div className='toggle' onClick={toggleHandler}>
					<div className={`toggle-container ${isOn ? 'toggle-checked' : ''}`}></div>
					<div className={`toggle-circle ${isOn ? 'toggle-checked' : ''}`}></div>
				</div>
				<div className='alarm'>
					<img src={Alarm} />
				</div>
			</div>
		</S.RecruitCard>
	);
};

export default RecruitCard;
