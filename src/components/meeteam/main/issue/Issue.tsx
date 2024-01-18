import React from 'react';
import S from './Issue.styled';
import { issueList, ISSUE_RIGHT_ARROW_ICON } from '../../../index';
import { useSetRecoilState } from 'recoil';
import { contentState } from '../../../../atom';

const Issue = ({ type }: { type: string }) => {
	const setContent = useSetRecoilState(contentState);

	return (
		<S.IssueLayout $type={type}>
			<S.IssueHeader>
				<h2 className='main--big-text'>이슈</h2>
				{type === '대시보드' && (
					<S.IssueButton type='button' onClick={() => setContent('밋팀')}>
						더보기
						{ISSUE_RIGHT_ARROW_ICON}
					</S.IssueButton>
				)}
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
