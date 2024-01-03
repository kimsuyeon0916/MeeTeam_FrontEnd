import React from 'react';
import S from './Issue.styled';

const Issue = (props: { type: string }) => {
	interface statusProps {
		title: string;
		timeStamp: string;
		content: string;
	}

	const issueList: issueProps[] = [
		{
			title: '알림',
			timeStamp: '23.12.25',
			content: '수연님이 구인글을 수정했습니다.',
		},
		{
			title: '알림',
			timeStamp: '23.12.25',
			content: '승준님이 구인글을 수정했습니다.',
		},
		{
			title: '알림',
			timeStamp: '23.12.25',
			content: '부겸님이 밋팀 정보를 수정했습니다.',
		},
		{
			title: '알림',
			timeStamp: '23.12.25',
			content: '민규님이 밋팀 정보를 수정했습니다.',
		},
		{
			title: '알림',
			timeStamp: '23.12.25',
			content: '지원님이 밋팀 정보를 수정했습니다.',
		},
	];

	return (
		<S.IssueLayout $type={props.type}>
			<S.IssueHeader>
				<h2 className='main--big-text'>이슈</h2>
				{props.type === '대시보드' && <S.IssueButton>더보기</S.IssueButton>}
			</S.IssueHeader>
			<ul className='issue__list'>
				{issueList.map((issue, index) => (
					<S.IssueItem className='main__column' key={index}>
						<div className='main__row'>
							<h3 className='issue__alarm-title'>{issue.title}</h3>
							<span className='issue__time-stamp'>{issue.timeStamp}</span>
						</div>
						<div className='main--small-text'>{issue.content}</div>
					</S.IssueItem>
				))}
			</ul>
		</S.IssueLayout>
	);
};

export default Issue;
