<<<<<<< HEAD
import React, { useState } from 'react';
import S from './RecruitDetailPage.styled';
import {
	Tag,
	ApplyInfomation,
	ApplyInput,
	ApplySubmit,
	informationList,
	role,
	CONTENT,
	Comment,
	CommentInput,
} from '../../../components';
import ColorMatching from '../../../utils/ColorMatching';
import { useRecoilValue } from 'recoil';
import { applyStepState } from '../../../atom';
import { useNavigate } from 'react-router-dom';
import { JsxElementComponentProps } from '../../../types';
import { commentsData } from './data';

const stepLists: JsxElementComponentProps = {
	0: <ApplyInfomation />,
	1: <ApplyInput />,
	2: <ApplySubmit />,
};

const RecruitDetailPage = () => {
	const navigate = useNavigate();
	const [commentsList, setCommentsList] = useState<Comment[]>(commentsData);
	const [contents, setContents] = useState<string>('');
	const isLogin = true; // 임시 코드
	const step = useRecoilValue(applyStepState);

	const isRound = (title: string) => {
		const roundTitles = ['유형', '진행'];

		if (roundTitles.includes(title)) {
			return false;
		}
		return true;
	};

	const addComment = () => {
		if (contents !== '' && contents.trim() !== '') {
			const newComment = {
				id: commentsData.length.toString(),
				username: 'yeom',
				content: contents,
				replies: [],
			};
			setCommentsList([...commentsList, newComment]);
			setContents('');
		}
	};

	const deleteComment = (id: string) => {
		setCommentsList(prevComments => prevComments.filter(v => v.id !== id));
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			addComment();
		}
	};

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContents(event.target.value);
	};

	const onClickInput = () => {
		if (!isLogin) {
			navigate('/signin');
		}
	};

	return (
		<S.RecruitDetailPage>
			<div className='container'>
				<div className='container-left'>
					<div className='container-info'>
						<div>
							<div className='container-info__title'>
								<h1>[커뮤니티 웹 서비스 프로젝트] 디자이너 모집</h1>
								<Tag $recruit={true} $proceed={false} />
							</div>
							<div className='container-info__writer'>
								<picture className='profile-img'>
									<img src='https://i.pinimg.com/236x/90/c7/f7/90c7f7afa68ea9b875eafbe887f454e8.jpg' />
								</picture>
								<div>{'김민지'}</div>
							</div>
						</div>
						<div className='container-required__info'>
							{informationList.map((information, index) => (
								<S.RequiredInformationItem key={index}>
									<S.RequiredInformationHead>{information.title}</S.RequiredInformationHead>
									<div className='required-information__row'>
										{information.content.split(',').map((content, index) => (
											<S.RequiredInformationSpan
												$isRound={isRound(information.title)}
												$color={ColorMatching(content)}
												key={index}
											>
												{content}
											</S.RequiredInformationSpan>
										))}
									</div>
								</S.RequiredInformationItem>
							))}
						</div>
						<div className='container-introduction'>
							<h4>구인 글</h4>
							<p>{CONTENT}</p>
						</div>
					</div>
					<div className='container-current'>
						<span className='container-current__title'>구인 현황</span>
						<div className='container-current__roles'>
							{role.map((e, index) => (
								<div className='container-current__roles--element' key={index}>
									<div className='roles-info'>
										<div className='roles-info__role'>
											<div className='role'>
												{e.role} ({e.current.length} / {e.max})
											</div>
										</div>
										<div className='roles-info__spec'>
											{e.specs.map((spec, j) => (
												<div className='spec' key={j}>
													{spec}
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className='container-right'>
					<form>
						<div className='container-apply'>{stepLists[step]}</div>
					</form>
					<div className='container-recommend'>
						<div>
							<span className='title'>비슷한 구인 글</span>
						</div>
						<div className='content'>
							<div className='content-tags'>
								<div className='tags'>
									<div>교외</div>
									<div>프로젝트</div>
								</div>
							</div>
							<div className='content-title'>
								[반려 동물을 위한 앱 서비스] 프론트엔드/백엔드 개발자를 모집합니다.
							</div>
							<div className='content-info'>
								<div>마감 7일 전</div>
								<div>조회수 101회</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='container-comments'>
				<span className='container-comments__title'>댓글</span>
				<ul className='container-comments__lists'>
					{commentsList.map((comment, index) => {
						return (
							<Comment
								key={index}
								id={comment.id}
								username={comment.username}
								content={comment.content}
								replies={comment.replies}
								deleteComment={() => deleteComment(comment.id)}
							/>
						);
					})}
				</ul>
				<CommentInput
					contents={contents}
					addComment={addComment}
					onKeyPress={onKeyPress}
					onChangeHandler={onChangeHandler}
					onClickInput={onClickInput}
				/>
			</div>
		</S.RecruitDetailPage>
=======
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
import { JsxElementComponentProps, RoleInfo, RoleForPost } from '../../../types';
import { useQuery } from '@tanstack/react-query';
import { getPostingData } from '../../../service';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
	applyCancelModalState,
	applyCloseModalState,
	applyModalState,
	applyStepState,
	commentDeleteModalState,
	needLoginModalState,
	recruitInputState,
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
	const diffDate = detailedData && calculateDate(detailedData.deadline);
	const totalCommentsCount = useMemo(() => {
		if (detailedData) {
			return detailedData.comments.reduce((total, comment) => {
				return total + 1 + (comment.replies ? comment.replies.length : 0);
			}, 0);
		}
	}, [detailedData?.comments]);

	const convertRoleInfo = (roleInfo: RoleInfo): RoleForPost => {
		return {
			roleId: roleInfo.roleId,
			count: roleInfo.recruitCount,
			skillIds: roleInfo.skills.map(e => e.id),
			skills: roleInfo.skills,
			roleName: roleInfo.roleName,
		};
	};

	const onClickEditPage = async () => {
		const transformedRoles = detailedData?.recruitmentRoles.map(convertRoleInfo);
		if (detailedData && transformedRoles) {
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
				recruitmentRoles: transformedRoles,
				tags: detailedData.tags.map(e => e.name),
				title: detailedData.title,
				content: detailedData.content,
			});
		}
		navigate('/edit/recruit');
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
							<ApplyCancel />
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
							<WriterFooter onClickEditPage={onClickEditPage} pageNum={pageNum} />
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
>>>>>>> release-1.0
	);
};

export default RecruitDetailPage;
