import React, { useState } from 'react';
import S from './RecruitDetailPage.styled';
import { RadiusProfile, CommentInput, Comment } from '../../../components';
import { tempData, tempTags } from './data';
import { simpleDate } from '../../../utils';
import { Comment as CommentForm } from '../../../types';

const RecruitDetailPage = () => {
	const [contents, setContents] = useState<string>('');
	const [commentsList, setCommentsList] = useState<CommentForm[]>(tempData.comments);
	const username = 'yeom';
	const createAt = simpleDate(new Date());

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
				<article>
					<section className='container-header'>
						<section className='container-header__profile'>
							<RadiusProfile size='3.3075rem' url='' />
							<span>{'Minji_98'}</span>
						</section>
						<span className='bubble first'>응답률 {'78%'}</span>
						<span className='bubble'>평점 {'B+'}</span>
						<span className='date'>{'2023-10-04'}</span>
					</section>
					<h1>응용소프트웨어실습ㅇ프론트엔드ㅇ백엔드ㅇ게임ㅇ분야ㅇ개발자ㅇ구합니다ㅇ글씨확인용</h1>
				</article>
				<article className='wrapper-info'>
					<section className='container-info'>
						<section className='subtitles'>
							<span>구인마감</span>
							<span>범위</span>
							<span>진행기간</span>
							<span>수업명</span>
						</section>
						<section className='values'>
							<section>
								<span>{'2024년 02월 29일'}</span>
								<span>{'마감 13일 전'}</span>
							</section>
							<span>{'교내'}</span>
							<span>{'23년 11월 02일 - 24년 03월 15일'}</span>
							<span>{'응용소프트웨어실습'}</span>
						</section>
					</section>
					<section className='container-info'>
						<section className='subtitles'>
							<span>유형</span>
							<span>진행방식</span>
							<span>교수명</span>
						</section>
						<section className='values'>
							<span>{'프로젝트'}</span>
							<span>{'오프라인'}</span>
							<span>{'-'}</span>
						</section>
					</section>
				</article>
				<article className='wrapper-description'>
					<h3>상세내용</h3>
					<hr />
					<section>
						<p>
							밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team, 만남을 의미하는 Meet이
							합쳐진 단어입니다. 대학생들의 보다 원활한 팀프로젝트를 위해 기획하게 되었으며, 그 외에
							포토폴리오로서의 기능까지 생각하고 있습니다! 이를 위해 함께 멋진 서비스를 완성할 웹
							디자이너를 찾고 있어요! 밋팀(Meeteam)은 나 자신을 의미하는 Me, 팀을 의미하는 Team,
							만남을 의미하는 Meet이 합쳐진 단어입니다. 대학생들의 보다 원활한 팀프로젝트를 위해
							기획하게 되었으며, 그 외에 포토폴리오로서의 기능까지 생각하고 있습니다! 이를 위해 함께
							멋진 서비스를 완성할 웹 디자이너를 찾고 있어요! 밋팀(Meeteam)은 나 자신을 의미하는 Me,
							팀을 의미하는 Team, 만남을 의미하는 Meet이 합쳐진 단어입니다. 대학생들의 보다 원활한
							팀프로젝트를 위해 기획하게 되었으며, 그 외에 포토폴리오로서의 기능까지 생각하고
							있습니다! 이를 위해 함께 멋진 서비스를 완성할 웹 디자이너를 찾고
							있어요!이어서작성하기이어서작성하기 우왁우왁 우와아아아악 우왁우왁 집인데 집에 가고
							싶은 이 기분은 도대체 무엇일까요옹??임시로 작성중입니다. 이 내용은 신경쓰지
							말아주시죠. 그러는 순간 당신은 이 글이 신경 쓰이게 될 것이고 어쩌고 저쩌고 솰라솰라
							얄리얄리 얄라셩 얄라리 얄라 히히 진짜 제정신 아닌거같아 보인다 무슨일이니 세상에...
						</p>
					</section>
				</article>
				<article className='wrapper-roles'>
					<h3>모집역할</h3>
					<section className='scroll'>
						<section className='container-roles'>
							<article className='wrapper-card'>
								<section className='container-role_info'>
									<h4>프론트엔드</h4>
									<section>
										<span className='tag'>React.js</span>
										<span className='tag'>JavaScript</span>
										<span className='tag'>jQuery</span>
										<span className='tag'>TailwindCSS</span>
										<span className='tag'>HTML/CSS</span>
									</section>
								</section>
								<hr />
								<section>
									<h4>현황</h4>
									<section className='apply-info'>
										<section className='people'>
											<span>모집인원</span>
											<span>N</span>
										</section>
										<section className='people'>
											<span>지원자 수</span>
											<span>M</span>
										</section>
									</section>
									<section className='progress-bar'>
										<div>아무튼 현황바임</div>
										<span>현재 N명 중 X명이 모였습니다!</span>
									</section>
								</section>
							</article>
							<article className='wrapper-card'>
								<section className='container-role_info'>
									<h4>프론트엔드</h4>
									<section>
										<span className='tag'>React.js</span>
										<span className='tag'>JavaScript</span>
										<span className='tag'>jQuery</span>
										<span className='tag'>TailwindCSS</span>
										<span className='tag'>HTML/CSS</span>
									</section>
								</section>
								<hr />
								<section>
									<h4>현황</h4>
									<section className='apply-info'>
										<section className='people'>
											<span>모집인원</span>
											<span>N</span>
										</section>
										<section className='people'>
											<span>지원자 수</span>
											<span>M</span>
										</section>
									</section>
									<section className='progress-bar'>
										<div>아무튼 현황바임</div>
										<span>현재 N명 중 X명이 모였습니다!</span>
									</section>
								</section>
							</article>
							<article className='wrapper-card'>
								<section className='container-role_info'>
									<h4>프론트엔드</h4>
									<section>
										<span className='tag'>React.js</span>
										<span className='tag'>JavaScript</span>
										<span className='tag'>jQuery</span>
										<span className='tag'>TailwindCSS</span>
										<span className='tag'>HTML/CSS</span>
									</section>
								</section>
								<hr />
								<section>
									<h4>현황</h4>
									<section className='apply-info'>
										<section className='people'>
											<span>모집인원</span>
											<span>N</span>
										</section>
										<section className='people'>
											<span>지원자 수</span>
											<span>M</span>
										</section>
									</section>
									<section className='progress-bar'>
										<div>아무튼 현황바임</div>
										<span>현재 N명 중 X명이 모였습니다!</span>
									</section>
								</section>
							</article>
							<article className='wrapper-card'>
								<section className='container-role_info'>
									<h4>프론트엔드</h4>
									<section>
										<span className='tag'>React.js</span>
										<span className='tag'>JavaScript</span>
										<span className='tag'>jQuery</span>
										<span className='tag'>TailwindCSS</span>
										<span className='tag'>HTML/CSS</span>
									</section>
								</section>
								<hr />
								<section>
									<h4>현황</h4>
									<section className='apply-info'>
										<section className='people'>
											<span>모집인원</span>
											<span>N</span>
										</section>
										<section className='people'>
											<span>지원자 수</span>
											<span>M</span>
										</section>
									</section>
									<section className='progress-bar'>
										<div>아무튼 현황바임</div>
										<span>현재 N명 중 X명이 모였습니다!</span>
									</section>
								</section>
							</article>
						</section>
					</section>
				</article>
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
					<button type='button'>마감하기</button>
				</section>
			</S.Footer>
		</>
	);
};

export default RecruitDetailPage;
