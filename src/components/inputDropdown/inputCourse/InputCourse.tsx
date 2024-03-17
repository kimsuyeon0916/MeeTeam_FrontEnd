import React, { useState } from 'react';
import S from './InputCourse.styled';
import { Subtitle } from '../..';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';

interface InputCourse {
	isChecked: boolean;
	onClickHandler: () => void;
}

const InputCourse = ({ isChecked, onClickHandler }: InputCourse) => {
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [courseName, setCourseName] = useState<string>('');
	const onChangeCourseName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const content = event.target.value;
		setCourseName(content);
		setInfo({
			...info,
			courseTagDto: {
				...info.courseTagDto,
				isCourse: true,
				courseTagName: content,
			},
		});
	};
	return (
		<S.InputCourse>
			<div className='title-info'>
				<article>
					<Subtitle>{'수업'}</Subtitle>
					<span className='description'>수업인 경우에 체크해주세요.</span>
				</article>
				<article>
					<span className='description-check'>수업 선택</span>
					<input type='checkbox' onClick={onClickHandler} />
				</article>
			</div>
			<input
				type='text'
				placeholder='수업명'
				className={!isChecked ? 'disable course' : 'course'}
				disabled={!isChecked ? true : false}
				onChange={onChangeCourseName}
			/>
		</S.InputCourse>
	);
};

export default InputCourse;
