import React, { useState } from 'react';
import { Card, Status } from '../../../components';
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
				<Status status='구인중' $check={isClicked.isRecruit} onClick={onClickHandler} />
				<Status status='진행중' $check={isClicked.isProceed} onClick={onClickHandler} />
				<Status status='진행 완료' $check={isClicked.isDone} onClick={onClickHandler} />
			</div>
			<div className='container-filter'>
				<div className='container-filter_area'>
					<div className='area'>교내</div>
					<div className='area no'>교외</div>
				</div>
				<div className='container-filter_menu'>
					<div className='menu filter'>프로젝트 </div>
					<div className='menu'> | </div>
					<div className='menu filter'> 카테고리</div>
				</div>
			</div>
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
