import React, { useState } from 'react';
import { Subtitle, DeadlineSelect, DateSelect, RecruitOptions } from '../..';

import S from './InputContainer.styled';

const InputContainer = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	return (
		<S.InputContainer>
			<div className='container__info-select'>
				<article className='select'>
					<Subtitle>범위</Subtitle>
					<RecruitOptions options={['교내', '교외']} />
				</article>
				<article className='select'>
					<Subtitle>마감일</Subtitle>
					<DeadlineSelect />
				</article>
				<article className='select'>
					<div className='title-info'>
						<article>
							<Subtitle>{'수업'}</Subtitle>
							<span className='description'>수업인 경우에 체크해주세요.</span>
						</article>
						<article>
							<span className='description-check'>수업 선택</span>
							<input type='checkbox' onClick={() => setIsChecked(prev => !prev)} />
						</article>
					</div>
					<input
						type='text'
						placeholder='수업명'
						className={!isChecked ? 'disable course' : 'course'}
						disabled={!isChecked ? true : false}
					/>
				</article>
			</div>
			<div className='container__info-select'>
				<article className='select'>
					<Subtitle>유형</Subtitle>
					<RecruitOptions options={['프로젝트', '스터디', '공모전']} />
				</article>
				<article className='select'>
					<Subtitle>진행기간</Subtitle>
					<DateSelect />
				</article>
				<article className='select'>
					<div className='temp'></div>
					<input
						type='text'
						placeholder='교수명'
						className={!isChecked ? 'disable course' : 'course'}
						disabled={!isChecked ? true : false}
					/>
				</article>
			</div>
		</S.InputContainer>
	);
};

export default InputContainer;
