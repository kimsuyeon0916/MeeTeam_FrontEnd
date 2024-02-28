import React, { useState } from 'react';
import S from './RecruitOptions.styled';
import { useRecoilState } from 'recoil';
import { recruitInputState } from '../../../atom';
import { Option } from '../../../types';

const Option = ({ children, isScope, isCategory }: Option) => {
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const [info, setInfos] = useRecoilState(recruitInputState);
	const onClickOption = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		if (isScope) {
			setInfos({ ...info, scope: innerText });
		} else if (isCategory) {
			setInfos({ ...info, category: innerText });
		}
		setIsClicked(prev => !prev);
	};
	return (
		<S.Option $isClicked={isClicked} onClick={onClickOption}>
			{children}
		</S.Option>
	);
};

export default Option;
