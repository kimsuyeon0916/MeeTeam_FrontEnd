import React, { useState } from 'react';
import {
	DeadlineSelect,
	DateSelect,
	WrapperScopeCategory,
	ContainerProcedure,
	ContainerCourse,
} from '../../../index';
import S from './BasicInformation.styled';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../../atom';
import { useValid } from '../../../../hooks';

const BasicInformation = () => {
	const [formData, setFormData] = useRecoilState(recruitInputState);
	const { validMessage, isValid } = useValid(formData);

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(prev => ({ ...prev, title: event.target.value }));
	};

	return (
		<S.BasicInformation $isTitled={formData.title}>
			<section className='container-basic'>
				<section className='subtitle'>
					<h4>기본 정보</h4>
				</section>
				<section className='container-basic__inputs'>
					<article className='inputs-title'>
						<span className='input-subtitle'>
							구인글 제목 <span>{'*'}</span>
						</span>
						<input
							type='text'
							placeholder='40자 이내로 제목을 작성해주세요.'
							value={formData.title}
							onChange={onChangeTitle}
						/>
						{isValid.isSubmitted && !isValid.isTitle && (
							<p className='valid-msg'>{validMessage.title}</p>
						)}
					</article>
					<article className='inputs-deadline'>
						<span className='input-subtitle'>
							구인글 마감일 <span>{'*'}</span>
						</span>
						<DeadlineSelect />
						{isValid.isSubmitted && !isValid.isDeadline && (
							<p className='valid-msg'>{validMessage.deadline}</p>
						)}
					</article>
					<WrapperScopeCategory />
					<article className='inputs-dates'>
						<span className='input-subtitle'>
							진행 기간 <span>{'*'}</span>
						</span>
						<section className='container-dates'>
							<div className='start-date'>
								<DateSelect type='start' />
							</div>
							<div className='end-date'>
								<DateSelect type='end' />
								{isValid.isSubmitted && !isValid.isEndDate && (
									<p className='valid-msg'>{validMessage.endDate}</p>
								)}
							</div>
						</section>
					</article>
					<ContainerProcedure />
					<ContainerCourse />
				</section>
			</section>
			<hr className='under-info' />
		</S.BasicInformation>
	);
};

export default BasicInformation;
