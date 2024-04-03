import React from 'react';
import S from './SkillTag.styled';
import { Close } from '../../assets';

interface SkillTag {
	name: string;
	isEditable?: boolean;
	handleClick?: React.MouseEventHandler<HTMLElement>;
}

const SkillTag = ({ name, isEditable, handleClick }: SkillTag) => {
	return (
		<S.SkillTagLayout>
			{name}
			{isEditable && <img onClick={handleClick} src={Close} alt='제거버튼' />}
		</S.SkillTagLayout>
	);
};

export default SkillTag;
