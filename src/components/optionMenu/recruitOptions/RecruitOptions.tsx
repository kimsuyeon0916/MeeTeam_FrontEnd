import React, { useState } from 'react';
import { OptionList } from '../../../types';
import S from './RecruitOptions.styled';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';

const RecruitOptions = ({ options, isScope, isCategory }: OptionList) => {
	const optionsArr = Array(options.length).fill(false);
	const [isClickedArr, setIsClickedArr] = useState<boolean[]>(optionsArr);
	const [info, setInfos] = useRecoilState(recruitInputState);
	let newArr = [...optionsArr];

	const onClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
		const index = Number(event.currentTarget.id);
		newArr = optionsArr.map((_, i) => i === index);
		setIsClickedArr(newArr);

		const { innerText } = event.target as HTMLElement;
		if (isScope) {
			setInfos({ ...info, scope: innerText });
		} else if (isCategory) {
			setInfos({ ...info, category: innerText });
		}
	};

	return (
		<S.RecruitOptions>
			{options.map((option, index) => (
				<span
					className={`option ${isClickedArr[index] ? 'highlighted' : ''}`}
					key={index}
					onClick={onClickHandler}
					id={index.toString()}
				>
					{option}
				</span>
			))}
		</S.RecruitOptions>
	);
};

export default RecruitOptions;
