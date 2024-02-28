import React, { useState } from 'react';
import {
	Subtitle,
	DeadlineSelect,
	DateSelect,
	RecruitOptions,
	InputCourse,
	InputProfessor,
} from '../..';
import S from './InputContainer.styled';

const InputContainer = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const onClickHandler = () => {
		setIsChecked(prev => !prev);
	};
	return (
		<S.InputContainer>
			<div className='container__info-select'>
				<article className='select'>
					<Subtitle>범위</Subtitle>
					<RecruitOptions isScope options={['교내', '교외']} />
				</article>
				<article className='select'>
					<Subtitle>마감일</Subtitle>
					<DeadlineSelect />
				</article>
				<article className='select'>
					<InputCourse isChecked={isChecked} onClickHandler={onClickHandler} />
				</article>
			</div>
			<div className='container__info-select'>
				<article className='select'>
					<Subtitle>유형</Subtitle>
					<RecruitOptions isCategory options={['프로젝트', '스터디', '공모전']} />
				</article>
				<article className='select'>
					<Subtitle>진행기간</Subtitle>
					<DateSelect />
				</article>
				<article className='select'>
					<InputProfessor isChecked={isChecked} />
				</article>
			</div>
		</S.InputContainer>
	);
};

export default InputContainer;
