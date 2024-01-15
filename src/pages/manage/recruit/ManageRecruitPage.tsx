import { useState, useCallback } from 'react';
import { RecruitCard } from '../../../components';
import S from './ManageRecruitPage.styled';
import { IRecruitCard } from '../../../components/recruit/RecruitCard';

const ManageRecruitPage = () => {
	const data: IRecruitCard[] = [
		{
			title: '[커뮤니티 웹 서비스 프로젝트] 디자이너 모집',
			type: '프로젝트',
			$recruit: true,
			$proceed: false,
		},
		{
			title: '[중고차 거래 서비스 프로젝트] 웹 개발자 모집',
			type: '프로젝트',
			$recruit: true,
			$proceed: false,
		},
		{
			title: '[자바스크립트 스터디] 스터디 인원 모집',
			type: '스터디',
			$recruit: false,
			$proceed: true,
		},
	];

	const data2: IRecruitCard[] = [
		{
			title: '[중고차 거래 서비스 프로젝트] 웹 개발자 모집',
			type: '프로젝트',
			$recruit: true,
			$proceed: false,
		},
		{
			title: '[커뮤니티 웹 서비스 프로젝트] 디자이너 모집',
			type: '프로젝트',
			$recruit: true,
			$proceed: false,
		},
		{
			title: '[자바스크립트 스터디] 스터디 인원 모집',
			type: '스터디',
			$recruit: false,
			$proceed: true,
		},
	];

	const [isClicked, setIsClicked] = useState({
		isApply: true,
		isMine: false,
	});

	const onClickHandler = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.currentTarget;
		if (target.innerText === '신청글') {
			setIsClicked({ isApply: true, isMine: false });
		}
		if (target.innerText === '내 구인글') {
			setIsClicked({ isApply: false, isMine: true });
		}
	}, []);

	return (
		<S.ManageRecruitPage>
			<div className='container-status'>
				<div
					className={`status ${isClicked.isApply ? 'current' : 'not_current'}`}
					onClick={onClickHandler}
				>
					신청글
				</div>
				<div
					className={`status ${isClicked.isMine ? 'current' : 'not_current'}`}
					onClick={onClickHandler}
				>
					내 구인글
				</div>
			</div>
			{isClicked.isApply ? (
				<div className='container'>
					{data.map((e, index) => (
						<RecruitCard
							title={e.title}
							type={e.type}
							$recruit={e.$recruit}
							$proceed={e.$proceed}
							key={index}
						/>
					))}
				</div>
			) : (
				<div className='container'>
					{data2.map((e, index) => (
						<RecruitCard
							title={e.title}
							type={e.type}
							$recruit={e.$recruit}
							$proceed={e.$proceed}
							key={index}
						/>
					))}
				</div>
			)}
		</S.ManageRecruitPage>
	);
};

export default ManageRecruitPage;
