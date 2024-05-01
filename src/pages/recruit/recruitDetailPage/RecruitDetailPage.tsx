import React, { useEffect, useMemo } from 'react';
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
	ApplyCancel,
	ApplyClose,
} from '../../../components';
import { calculateDate, fixModalBackground } from '../../../utils';
import { JsxElementComponentProps } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { getPostingData } from '../../../service';
import { useRecoilValue } from 'recoil';
import {
	applyCancelModalState,
	applyCloseModalState,
	applyModalState,
	applyStepState,
	commentDeleteModalState,
	needLoginModalState,
} from '../../../atom';
import { useParams, useNavigate } from 'react-router-dom';
import { useLogin } from '../../../hooks';

const RecruitDetailPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const pageNum = Number(id);
	const isModal = useRecoilValue(applyModalState);
	const isCancel = useRecoilValue(applyCancelModalState);
	const isClose = useRecoilValue(applyCloseModalState);
	const isDelete = useRecoilValue(commentDeleteModalState);
	const isNeedLogin = useRecoilValue(needLoginModalState);
	const step = useRecoilValue(applyStepState);

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
	const diffDate = detailedData && calculateDate(detailedData.deadline);
	const totalCommentsCount = useMemo(() => {
		if (detailedData) {
			return detailedData.comments.reduce((total, comment) => {
				return total + 1 + (comment.replies ? comment.replies.length : 0);
			}, 0);
		}
	}, [detailedData?.comments]);

	const onClickEditPage = async () => {
		navigate(`/recruitment/postings/edit/${pageNum}`);
	};

	useEffect(() => {
		fixModalBackground(isModal || isCancel || isClose || isDelete.isDelete || isNeedLogin.isOpen);
	}, [isModal, isCancel, isClose, isDelete, isNeedLogin.isOpen]);

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
						isClosed={detailedData.isClosed}
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
										return <Comment key={comment.id} {...comment} />;
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
					{isCancel && (
						<section className='modal-background'>
							<ApplyCancel pageNum={pageNum} />
						</section>
					)}
					{isClose && (
						<section className='modal-background'>
							<ApplyClose />
						</section>
					)}
				</S.RecruitDetailPage>
			)}
			<S.Footer>
				{detailedData && (
					<section className='container-btn'>
						{detailedData.isWriter && !detailedData.isClosed && (
							<WriterFooter
								writerId={detailedData.writerId}
								onClickEditPage={onClickEditPage}
								pageNum={pageNum}
							/>
						)}
						{!detailedData.isWriter && !detailedData.isClosed && (
							<ApplierFooter
								deadline={detailedData.deadline}
								isApplied={detailedData.isApplied}
								isBookmarked={detailedData.isBookmarked}
							/>
						)}
						{detailedData.isClosed && <ClosedFooter />}
					</section>
				)}
			</S.Footer>
		</>
	);
};

export default RecruitDetailPage;
