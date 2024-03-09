import React, { useState } from 'react';
import S from './RecruitDetailPage.styled';
import {
	CommentInput,
	Comment,
	TitleInfo,
	RecruitInfo,
	RecruitDescription,
	RecruitRoles,
} from '../../../components';
import { tempData, tempTags } from './data';
import { simpleDate } from '../../../utils';
import { Comment as CommentForm } from '../../../types';

const RecruitDetailPage = () => {
	const [contents, setContents] = useState<string>('');
	const [commentsList, setCommentsList] = useState<CommentForm[]>(tempData.comments);
	const username = 'yeom';
	const createAt = simpleDate(new Date());
	const period = tempData.proceedingStart + '-' + tempData.proceedingEnd;
	const diffDate = Math.ceil(
		Math.abs((new Date(tempData.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
	).toString();

	const addComment = () => {
		if (contents !== '' && contents.trim() !== '') {
			const newComment = {
				id: tempData.comments.length + 1,
				nickname: 'yeom',
				content: contents,
				replies: [],
				isWriter: true,
				createAt: createAt?.toString(),
				profileImg: '',
			};
			setCommentsList([...commentsList, newComment]);
			setContents('');
		}
	};

	const deleteComment = (id: number) => {
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

	const onClickInput = () => {};

	return (
		<>
			<S.RecruitDetailPage>
				<TitleInfo
					nickname={'Minji_98'}
					responseRate={78}
					score={4.5}
					createdAt={'2023-10-04'}
					title={'응용소프트웨어실습 프론트엔드, 백엔드, 게임분야 개발자 구합니다'}
				/>
				<RecruitInfo
					deadline={tempData.deadline}
					period={period}
					scope={tempData.scope}
					courseName={tempData.courseName}
					category={tempData.category}
					proceedType={tempData.proceedType}
					courseProfessor={tempData.courseProfessor}
					dDay={diffDate}
				/>
				<RecruitDescription content={tempData.content} />
				<RecruitRoles roles={tempData.recruitmentRoles} />
				<article className='wrapper-tags'>
					<h3>태그</h3>
					<section className='container-tags'>
						{tempTags.map(tag => (
							<span className='tag'>{tag}</span>
						))}
					</section>
				</article>
				<article className='wrapper-btn'>
					<button>목록보기</button>
				</article>
				<article className='wrapper-comments'>
					<section className='container-title'>
						<h3>댓글</h3>
						<span>{'4'}</span>
					</section>
					<hr />
					<section className='container-comments'>
						<ul className='container-comments__lists'>
							{commentsList.map((comment, _) => {
								return (
									<Comment
										key={comment.id}
										id={comment.id}
										nickname={comment.nickname}
										content={comment.content}
										replies={comment.replies}
										isWriter={comment.nickname === username}
										createAt={comment.createAt}
										profileImg={comment.profileImg}
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
					</section>
				</article>
			</S.RecruitDetailPage>
			<S.Footer>
				<section className='container-btn'>
					<button type='button'>편집하기</button>
					<button type='button' className='apply'>
						신청하기
					</button>
				</section>
			</S.Footer>
		</>
	);
};

export default RecruitDetailPage;
