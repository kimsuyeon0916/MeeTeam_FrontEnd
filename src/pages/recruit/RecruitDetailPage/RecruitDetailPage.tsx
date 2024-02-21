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
import { ComponentProps } from '../../../types';

let addedCmtId;

const RecruitDetailPage = () => {
	const navigate = useNavigate();
	const [isReply, setIsReply] = useState<boolean>(false);
	const [commentsList, setCommentsList] = useState<Comment[]>([]);
	const [contents, setContents] = useState<string>('');
	const isLogin = true; // 임시 코드
	const step = useRecoilValue(applyStepState);

	const stepLists: ComponentProps = {
		0: <ApplyInfomation />,
		1: <ApplyInput />,
		2: <ApplySubmit />,
	};

	const isRound = (title: string) => {
		const roundTitles = ['유형', '진행'];

		if (roundTitles.includes(title)) {
			return false;
		}
		return true;
	};

	const addComment = () => {
		if (contents !== '') {
			if (commentsList.length === 0) {
				addedCmtId = 0;
			} else {
				const lastCmtIndex = commentsList.length - 1;
				addedCmtId = commentsList[lastCmtIndex].id + 1;
			}
			const newComment = {
				id: addedCmtId,
				username: 'yeom',
				content: contents,
			};
			setCommentsList([...commentsList, newComment]);
			setContents('');
		}
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
			// 로그인 페이지로 이동
			// navigate('/login');
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
					{commentsList.map(comment => {
						return (
							<Comment
								key={comment.id}
								id={comment.id}
								username={comment.username}
								content={comment.content}
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
	);
};

export default RecruitDetailPage;
