import React, { useEffect, useMemo, useState } from 'react';
import S from './RecruitDetailPage.styled';
import {
	CommentInput,
	Comment,
	TitleInfo,
	RecruitInfo,
	RecruitDescription,
	RecruitRoles,
	RecruitTag,
	LinkToList,
	WriterFooter,
	ApplierFooter,
	ApplyModal,
	ConfirmModal,
	FinalModal,
	ClosedFooter,
} from '../../../components';
import { fixModalBackground } from '../../../utils';
import { JsxElementComponentProps } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { getPostingData } from '../../../service';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { applyModalState, applyStepState, recruitInputState } from '../../../atom';
import { useParams, useNavigate } from 'react-router-dom';
import { useLogin } from '../../../hooks';

const RecruitDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const pageNum = Number(id);
	const isModal = useRecoilValue(applyModalState);
	const step = useRecoilValue(applyStepState);
	const setFormData = useSetRecoilState(recruitInputState);
	const stepLists: JsxElementComponentProps = {
		0: <ApplyModal />,
		1: <ConfirmModal />,
		2: <FinalModal />,
	};
	const { isLoggedIn } = useLogin();

	const { data: detailedData, isSuccess } = useQuery({
		queryKey: ['detailedPage', { pageNum, isLoggedIn }],
		queryFn: () => getPostingData({ pageNum, isLoggedIn }),
	});
	const period = detailedData?.proceedingStart + ' ~ ' + detailedData?.proceedingEnd;

	// 함수로 변경 후 -> useMemo 사용하기
	const diffDate = Math.ceil(
		Math.abs(
			(new Date(detailedData?.deadline as any).getTime() - new Date().getTime()) /
				(1000 * 60 * 60 * 24)
		)
	).toString();

	const totalCommentsCount = useMemo(() => {
		if (detailedData) {
			let count = detailedData?.comments.length;
			detailedData?.comments.forEach(comment => {
				if (comment.replies) {
					count += comment.replies.length;
				}
			});
			return count;
		}
	}, [detailedData?.comments]);

	const onClickEditPage = async () => {
		if (detailedData) {
			setFormData({
				pageNum: pageNum,
				scope: detailedData.scope,
				category: detailedData.category,
				deadline: detailedData.deadline,
				proceedingStart: detailedData.proceedingStart,
				proceedingEnd: detailedData.proceedingEnd,
				fieldId: 1,
				proceedType: detailedData.proceedType,
				courseTag: {
					courseTagName: detailedData.courseName,
					courseProfessor: detailedData.courseProfessor,
					isCourse: detailedData.courseName || detailedData.courseProfessor ? true : false,
				},
				recruitmentRoles: [],
				tags: detailedData.tags.map(e => e.name),
				title: detailedData.title,
				content: detailedData.content,
			});
		}
		navigate('/edit/recruit');
	};

	useEffect(() => {
		fixModalBackground(isModal);
	}, [isModal]);

	return (
		<>
			{isSuccess && detailedData && (
				<S.RecruitDetailPage>
					<TitleInfo
						nickname={detailedData.writerNickname}
						writerId={detailedData.writerId}
						responseRate={detailedData.responseRate}
						score={detailedData.writerScore}
						createdAt={detailedData.createdAt.slice(0, -9)}
						title={detailedData.title}
						writerProfileImg={detailedData.writerProfileImg}
						bookmarkCount={detailedData.bookmarkCount}
						isBookmarked={detailedData.isBookmarked}
						writerScore={detailedData.writerScore}
					/>
					<RecruitInfo
						deadline={detailedData.deadline}
						period={period}
						scope={detailedData.scope}
						courseName={detailedData.courseName}
						category={detailedData.category}
						proceedType={detailedData.proceedType}
						courseProfessor={detailedData.courseProfessor}
						dDay={diffDate}
					/>
					<RecruitDescription content={detailedData.content} />
					<RecruitRoles roles={detailedData.recruitmentRoles} />
					<RecruitTag tags={detailedData.tags} />
					<LinkToList />
					<article className='wrapper-comments'>
						<section className='container-title'>
							<h3>댓글</h3>
							<span>{totalCommentsCount}</span>
						</section>
						<hr />
						<section className='container-comments'>
							<ul className='container-comments__lists'>
								{isSuccess &&
									detailedData.comments.map((comment, _) => {
										return (
											<Comment
												key={comment.id}
												id={comment.id}
												userId={comment.userId}
												nickname={comment.nickname}
												content={comment.content}
												replies={comment.replies}
												isWriter={comment.isWriter}
												createAt={comment.createAt}
												profileImg={comment.profileImg}
												groupNumber={comment.groupNumber}
												groupOrder={comment.groupOrder}
											/>
										);
									})}
							</ul>
							<CommentInput />
						</section>
					</article>
					{isModal && (
						<form>
							<section className='modal-background'>{stepLists[step]}</section>
						</form>
					)}
				</S.RecruitDetailPage>
			)}
			<S.Footer>
				{detailedData && (
					<section className='container-btn'>
						{detailedData.isWriter && !detailedData.isClosed && (
							<WriterFooter onClickEditPage={onClickEditPage} />
						)}
						{!detailedData.isWriter && <ApplierFooter deadline={detailedData.deadline} />}
						{detailedData.isClosed && <ClosedFooter />}
					</section>
				)}
			</S.Footer>
		</>
	);
};

export default RecruitDetailPage;
