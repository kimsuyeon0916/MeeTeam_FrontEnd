import React, { useRef } from 'react';
import { OptionList } from '../../../types';
import { useRecoilState } from 'recoil';
import S from './RecruitOptions.styled';
import { recruitInputState } from '../../../atom';

const RecruitOptions = ({ options }: OptionList) => {
	const isClicked = useRef<boolean | null>(null);
	const [info, setInfos] = useRecoilState(recruitInputState);
	const onClickOption = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setInfos({ ...info, scope: innerText });
	};
	return (
		<S.RecruitOptions>
			{options.map((option, index) => (
				<span key={index} className='option' onClick={onClickOption}>
					{option}
				</span>
			))}
		</S.RecruitOptions>
	);
};

export default RecruitOptions;
