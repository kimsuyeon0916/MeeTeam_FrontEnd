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
				<div className='content'>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
				<div>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
				<div>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
				<div>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
			</div>
		</S.ManageMeeTeamPage>
	);
};

export default ManageMeeteamPage;
