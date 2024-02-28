import React, { useState } from 'react';
import { OptionList } from '../../../types';
import S from './RecruitOptions.styled';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';

const RecruitOptions = ({ options, isScope, isCategory }: OptionList) => {
	const optionsArr = Array(options.length).fill(false);
	const [isClicked, setIsClicked] = useState<boolean[]>(optionsArr);
	const [info, setInfos] = useRecoilState(recruitInputState);

	const onClickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
		const index = Number(event.currentTarget.id);
		const newArr = optionsArr.map((_, i) => i === index);
		setIsClicked(newArr);

		const { innerText } = event.target as HTMLElement;
		if (isScope) {
			setInfos({ ...info, scope: innerText });
		} else if (isCategory) {
			setInfos({ ...info, category: innerText });
		}
		// console.log(isClicked);
	};

	return (
		<S.RecruitOptions>
			{options.map((option, index) => (
				<span className='option' key={index} onClick={onClickHandler} id={index.toString()}>
					{option}
				</span>
			))}
		</S.RecruitOptions>
	);
};

export default RecruitOptions;
