import React, { useState } from 'react';
import Card from './Card';
import { TbPinnedFilled, TbPinned } from 'react-icons/tb';
import S from './Card.styled';

const PortpolioCard = () => {
	const [isPinned, setIsPinned] = useState<boolean>(false);

	const onClickPin = () => {
		setIsPinned(prev => !prev);
	};
	return (
		<S.PortpolioCard>
			<div className='container-content'>
				<Card />
				<div className='icon-pin' onClick={onClickPin}>
					{isPinned ? <TbPinnedFilled /> : <TbPinned />}
				</div>
			</div>
			<div className='title'>
				[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
			</div>
		</S.PortpolioCard>
	);
};

export default PortpolioCard;
