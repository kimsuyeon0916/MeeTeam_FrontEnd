import React, { useState } from 'react';
import { Card, Status, Filter } from '../../../components';
import S from './ManageMeeteamPage.styled';

const ManageMeeteamPage = () => {
	const [isClicked, setIsClicked] = useState({
		isRecruit: true,
		isProceed: false,
		isDone: false,
	});

	const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target.innerText === '구인중') {
			setIsClicked({ isRecruit: true, isProceed: false, isDone: false });
		}
		if (event.target.innerText === '진행중') {
			setIsClicked({ isRecruit: false, isProceed: true, isDone: false });
		}
		if (event.target.innerText === '진행 완료') {
			setIsClicked({ isRecruit: false, isProceed: false, isDone: true });
		}
	};

	return (
		<S.ManageMeeTeamPage>
			<div className='container-status'>
				<div className='status current'>진행중</div>
				<div className='status'>진행 완료</div>
			</div>
			<Filter />
			<div className='container-contents'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</S.ManageMeeTeamPage>
	);
};

export default ManageMeeteamPage;
