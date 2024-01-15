import React, { useState } from 'react';
import { Dropdown, Tag } from '../../components';
import S from './RecruitPage.styled';
import { useNavigate } from 'react-router-dom';

const RecruitPage = () => {
	const navigate = useNavigate();
	const [isFiltered, setIsFiltered] = useState({
		isInside: true,
		isOutside: false,
	});

	const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target.innerText === '교내') {
			setIsFiltered({ isInside: true, isOutside: false });
		}
		if (event.target.innerText === '교외') {
			setIsFiltered({ isInside: false, isOutside: true });
		}
	};

	const onClickContent = () => {
		navigate('/recruit/1');
	};
	return (
		<S.RecruitPage>
			<div>
				<div className='container-filter_area'>
					<div className={`area ${isFiltered.isInside ? '' : 'no'}`} onClick={onClickHandler}>
						교내
					</div>
					<div className={`area ${isFiltered.isOutside ? '' : 'no'}`} onClick={onClickHandler}>
						교외
					</div>
				</div>
				<div className='container-filter_menu'>
					<Dropdown
						data={['프로젝트', '스터디', '동아리', '공모전']}
						initialData='프로젝트'
						allowNeed={true}
					/>
					<div className='sep'></div>
					<Dropdown data={['개발']} initialData='카테고리' allowNeed={true} />
					<div className='dropdown-spec'>
						<Dropdown data={['개발']} initialData='🔗 기술 스택' allowNeed={true} />
						<Dropdown data={['개발']} initialData='👤 포지션' allowNeed={true} />
					</div>
				</div>
			</div>
			<hr />
			<div>
				<div className='container-options'>
					<div className='container-options__filters'>
						<div className='filter'>👀 모집중만 보기</div>
						<div className='filter bookmark'>☑️ 북마크만 보기</div>
					</div>
					<div className='container-options__search'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
							>
								<path
									d='M19.25 19.125L14.9069 14.7819M14.9069 14.7819C16.3546 13.3341 17.25 11.3341 17.25 9.125C17.25 4.70672 13.6683 1.125 9.25 1.125C4.83172 1.125 1.25 4.70672 1.25 9.125C1.25 13.5433 4.83172 17.125 9.25 17.125C11.4591 17.125 13.4591 16.2296 14.9069 14.7819Z'
									stroke='#121212'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</div>
						<div>
							<input placeholder='제목, 글, 내용으로 검색해보세요.' />
						</div>
					</div>
				</div>
				<div className='container-contents'>
					<div className='container-contents__row'>
						<div className='subtitle'>👀 내가 관심 있을 만한 프로젝트</div>
						<div className='contents'>
							<div className='content' onClick={onClickContent}>
								<div className='content-tags'>
									<div className='tags'>
										<div>교외</div>
										<div>프로젝트</div>
									</div>
									<Tag $recruit={true} $proceed={false}></Tag>
								</div>
								<div className='content-title'>
									[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
								</div>
								<div className='content-info'>
									<div>🚨 마감 7일 전</div>
									<div>조회수 101회</div>
								</div>
							</div>
							<div className='content'>
								<div className='content-tags'>
									<div className='tags'>
										<div>교외</div>
										<div>프로젝트</div>
									</div>
									<Tag $recruit={true} $proceed={false}></Tag>
								</div>
								<div className='content-title'>
									[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
								</div>
								<div className='content-info'>
									<div>🚨 마감 7일 전</div>
									<div>조회수 101회</div>
								</div>
							</div>
							<div className='content'>
								<div className='content-tags'>
									<div className='tags'>
										<div>교외</div>
										<div>프로젝트</div>
									</div>
									<Tag $recruit={true} $proceed={false}></Tag>
								</div>
								<div className='content-title'>
									[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
								</div>
								<div className='content-info'>
									<div>🚨 마감 7일 전</div>
									<div>조회수 101회</div>
								</div>
							</div>
							<div className='content'>
								<div className='content-tags'>
									<div className='tags'>
										<div>교외</div>
										<div>프로젝트</div>
									</div>
									<Tag $recruit={true} $proceed={false}></Tag>
								</div>
								<div className='content-title'>
									[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
								</div>
								<div className='content-info'>
									<div>🚨 마감 7일 전</div>
									<div>조회수 101회</div>
								</div>
							</div>
						</div>
					</div>
					<div className='container-contents__row'>
						<div className='subtitle'>👀 내가 관심 있을 만한 프로젝트</div>
						<div className='contents'>
							<div className='content'>
								<div className='content-tags'>
									<div className='tags'>
										<div>교외</div>
										<div>프로젝트</div>
									</div>
									<Tag $recruit={true} $proceed={false}></Tag>
								</div>
								<div className='content-title'>
									[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
								</div>
								<div className='content-info'>
									<div>🚨 마감 7일 전</div>
									<div>조회수 101회</div>
								</div>
							</div>
							<div className='content'>
								<div className='content-tags'>
									<div className='tags'>
										<div>교외</div>
										<div>프로젝트</div>
									</div>
									<Tag $recruit={true} $proceed={false}></Tag>
								</div>
								<div className='content-title'>
									[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
								</div>
								<div className='content-info'>
									<div>🚨 마감 7일 전</div>
									<div>조회수 101회</div>
								</div>
							</div>
							<div className='content'>
								<div className='content-tags'>
									<div className='tags'>
										<div>교외</div>
										<div>프로젝트</div>
									</div>
									<Tag $recruit={true} $proceed={false}></Tag>
								</div>
								<div className='content-title'>
									[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
								</div>
								<div className='content-info'>
									<div>🚨 마감 7일 전</div>
									<div>조회수 101회</div>
								</div>
							</div>
							<div className='content'>
								<div className='content-tags'>
									<div className='tags'>
										<div>교외</div>
										<div>프로젝트</div>
									</div>
									<Tag $recruit={true} $proceed={false}></Tag>
								</div>
								<div className='content-title'>
									[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
								</div>
								<div className='content-info'>
									<div>🚨 마감 7일 전</div>
									<div>조회수 101회</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</S.RecruitPage>
	);
};

export default RecruitPage;
