import React from 'react';
import S from './DashBoard.styled';
import {
	Issue,
	ProgressStatus,
	DashBoardLink,
	meeteamInformation,
	recruitmentInformation,
	STATUS_RIGHT_ARROW_ICON,
} from '../../..';
import { useRecoilState } from 'recoil';
import { contentState } from '../../../../atom';
import DashBoardMember from './dashBoardMember/DashBoardMember';

const DashBoard = () => {
	const [content, setContent] = useRecoilState(contentState);

	interface statusProps {
		done: boolean;
		information?: string;
		content: string;
	}

	type dashBoardProps = {
		[key: string]: statusProps;
	};

	const dashBoardList: dashBoardProps = {
		밋팀: {
			done: true,
			content: `나의 밋팀을 소개해 보는 건 어떨까요?\n나의 밋팀에 대해 작성해 보세요!`,
		},
		구인: {
			done: false,
			content: `아직까지 함께 할 사람들을 못찾았다면?\n함께 할 사람들을 찾을 수 있습니다!`,
		},
		링크: {
			done: true,
			content: `멤버들과 연락할 수 있는\n연락 수단의 링크를 등록해주세요!`,
		},
		산출물: {
			done: false,
			content: `산출물을 등록하고 밋팀을 포트폴리오로 게시해봐요!`,
		},
	};

	return (
		<S.DashBoardLayout>
			<ProgressStatus />
			<div className='dash-board__grid'>
				<S.DashBoardArticle className='dash-board--middle-height'>
					<h2 className='main--big-text'>밋팀</h2>
					<div className='main__row'>
						{dashBoardList['밋팀'].done ? (
							<S.DashBoardMeeTeamButton
								className='main--middle-text'
								type='button'
								onClick={() => setContent('밋팀')}
							>
								{meeteamInformation.title}
							</S.DashBoardMeeTeamButton>
						) : (
							<>
								<pre className='main--small-text'>{dashBoardList['밋팀'].content}</pre>
								<S.DashBoardDefaultButton type='button' onClick={() => setContent('밋팀')}>
									밋팀 정보 등록하기
									{STATUS_RIGHT_ARROW_ICON}
								</S.DashBoardDefaultButton>
							</>
						)}
					</div>
				</S.DashBoardArticle>
				<S.DashBoardArticle className='dash-board--middle-height'>
					<h2 className='main--big-text'>구인</h2>
					<div className='main__row'>
						{dashBoardList['구인'].done ? (
							<S.DashBoardMeeTeamButton
								className='main--middle-text'
								type='button'
								onClick={() => setContent('구인 현황')}
							>
								{recruitmentInformation.title}
							</S.DashBoardMeeTeamButton>
						) : (
							<pre className='main--small-text'>{dashBoardList['구인'].content}</pre>
						)}
						<S.DashBoardGradationButton
							type='button'
							onClick={() => setContent('구인 현황')}
							$done={dashBoardList['구인'].done}
						>
							{dashBoardList['구인'].done ? '구인 종료' : '구인 하기'}
						</S.DashBoardGradationButton>
					</div>
				</S.DashBoardArticle>
				<Issue type={`대시보드`} />
				<div className='dash-board__grid'>
					<DashBoardLink />
					<DashBoardMember />
				</div>
			</div>
			<S.DashBoardArticle className='dash-board--short-height'>
				<h2 className='main--big-text'>산출물</h2>
				<div className='main--middle-text'>
					{dashBoardList['산출물'].done
						? '완료된 산출물을 확인할 수 있어요!'
						: dashBoardList['산출물'].content}
				</div>
				<S.DashBoardDefaultButton $done={dashBoardList['산출물'].done}>
					{dashBoardList['산출물'].done ? '산출물 보러가기' : '산출물 등록하기'}
				</S.DashBoardDefaultButton>
			</S.DashBoardArticle>
		</S.DashBoardLayout>
	);
};

export default DashBoard;
