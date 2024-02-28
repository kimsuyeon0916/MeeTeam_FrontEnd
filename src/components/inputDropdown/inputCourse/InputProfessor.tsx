import React, { useState } from 'react';
import S from './InputCourse.styled';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';

const InputProfessor = ({ isChecked }: { isChecked: boolean }) => {
	const [info, setInfo] = useRecoilState(recruitInputState);
	const [professor, setProfessor] = useState<string>('');
	const onChangeProfessor = (event: React.ChangeEvent<HTMLInputElement>) => {
		const content = event.target.value;
		setProfessor(content);
		setInfo({
			...info,
			courseTagDto: {
				...info.courseTagDto,
				courseTagProfessor: content,
			},
		});
	};
	return (
		<S.InputProfessor>
			<div className='temp'></div>
			<input
				type='text'
				placeholder='교수명'
				className={!isChecked ? 'disable course' : 'course'}
				disabled={!isChecked ? true : false}
				onChange={onChangeProfessor}
			/>
		</S.InputProfessor>
	);
};

export default InputProfessor;
