import { useState } from 'react';
import { Tag } from '..';
import S from './ManageRecruitCard.styled';

export interface RecruitInformation {
	title: string;
	type: string;
	$recruit?: boolean;
	$proceed?: boolean;
	isMine?: boolean;
}

const ManageRecruitCard = ({ title, type, $recruit, $proceed, isMine }: RecruitInformation) => {
	const [isOn, setIsOn] = useState<boolean>(false);
	const toggleHandler = () => {
		setIsOn(prev => !prev);
	};
	return (
		<S.ManageRecruitCard>
			<div className='container-recruits__info'>
				<div className='container-tags'>
					<Tag type={type} />
				</div>
				<div className='container-title'>
					<h1>{title}</h1>
				</div>
			</div>
		</S.ManageRecruitCard>
	);
};

export default ManageRecruitCard;
