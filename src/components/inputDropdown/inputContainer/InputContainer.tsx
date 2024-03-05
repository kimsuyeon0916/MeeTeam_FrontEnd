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
import { useRecoilValue } from 'recoil';
import { recruitInputState } from '../../../atom';
import { useValid } from '../../../hooks';

const InputContainer = () => {
	const formData = useRecoilValue(recruitInputState);
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const { validMessage, isValid } = useValid(formData);
	const isShow = isValid.isSubmitted;
	const onClickHandler = () => {
		setIsChecked(prev => !prev);
	};

	return (
		<S.InputContainer>
			<section className='container__info-select'>
				<article className='select'>
					<Subtitle>범위</Subtitle>
					<RecruitOptions isScope options={['교내', '교외']} />
					{isShow && !isValid.isScope && <p>{validMessage.scope}</p>}
				</article>
				<article className='select'>
					<Subtitle>마감일</Subtitle>
					<DeadlineSelect />
					{!isValid.isDeadline && <p>{validMessage.deadline}</p>}
				</article>
				<article className='select'>
					<InputCourse isChecked={isChecked} onClickHandler={onClickHandler} />
					{/* {!isValid.isCourseTagDto.courseTagName && <p>{validMessage.scope}</p>} */}
				</article>
			</section>
			<section className='container__info-select'>
				<article className='select'>
					<Subtitle>유형</Subtitle>
					<RecruitOptions isCategory options={['프로젝트', '스터디', '공모전']} />
					{isShow && !isValid.isCategory && <p>{validMessage.category}</p>}
				</article>
				<article className='select'>
					<Subtitle>진행기간</Subtitle>
					<DateSelect />
					{/* {!isValid.isEndDate && <p>{validMessage.scope}</p>} */}
				</article>
				<article className='select'>
					<InputProfessor isChecked={isChecked} />
					{/* {!isValid.isCourseTagDto.courseTagProfessor && <p>{validMessage.scope}</p>} */}
				</article>
			</section>
		</S.InputContainer>
	);
};

export default InputContainer;
