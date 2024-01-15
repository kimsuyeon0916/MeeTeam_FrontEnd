import React, { useCallback, useState } from 'react';
import { Card, Status, Filter } from '../../../components';
import S from './ManageMeeteamPage.styled';

const ManageMeeteamPage = () => {
	const [isClicked, setIsClicked] = useState({
		isProceed: true,
		isDone: false,
	});

	const onClickHandler = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target.innerText === '진행중') {
			setIsClicked({ isProceed: true, isDone: false });
		}
		if (event.target.innerText === '진행 완료') {
			setIsClicked({ isProceed: false, isDone: true });
		}
	}, []);

	return (
		<S.ManageMeeTeamPage>
			<div className='container-status'>
				<div
					className={`status ${isClicked.isProceed ? 'current' : 'not_current'}`}
					onClick={onClickHandler}
				>
					진행중
				</div>
				<div
					className={`status ${isClicked.isDone ? 'current' : 'not_current'}`}
					onClick={onClickHandler}
				>
					진행 완료
				</div>
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
