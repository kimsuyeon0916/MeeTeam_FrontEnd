import React from 'react';
import S from './Skill.styled';

const Skill = ({ name }: { name: string }) => {
	return <S.SkillLayout>{name}</S.SkillLayout>;
};

export default Skill;
