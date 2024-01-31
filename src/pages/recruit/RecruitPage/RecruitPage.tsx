import React, { useState } from 'react';
import { Dropdown, Tag } from '../../../components';
import S from './RecruitPage.styled';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '../../../assets';

const RecruitPage = () => {
	const navigate = useNavigate();
	const [isFiltered, setIsFiltered] = useState({
		isInside: true,
		isOutside: false,
	});

	const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.currentTarget;
		if (target.innerText === '교내') {
			setIsFiltered({ isInside: true, isOutside: false });
		}
		if (target.innerText === '교외') {
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
					<div className={`area ${isFiltered.isOutside ? 'out' : 'no'}`} onClick={onClickHandler}>
						교외
					</div>
				</div>
				<div className='container-filter_menu'>
					<Dropdown
						data={['프로젝트', '스터디', '동아리', '공모전']}
						initialData='프로젝트'
						$arrowNeed={true}
					/>
					<Dropdown data={['개발']} initialData='카테고리' $arrowNeed={true} />
					<div className='dropdown-spec'>
						<Dropdown
							data={['React', 'JavaScript', 'Node.js', 'Spring', 'Figma']}
							initialData='기술 스택'
							$arrowNeed={true}
						/>
						<Dropdown
							data={['기획', '디자인', '프론트엔드', '백엔드']}
							initialData='👤 포지션'
							$arrowNeed={true}
						/>
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
							<img src={SearchIcon} />
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
									<div>🚨 마감 1일 전</div>
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
									<div>마감 7일 전</div>
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
									<div>마감 7일 전</div>
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
									<div>마감 7일 전</div>
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
									<div>마감 7일 전</div>
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
									<div>마감 7일 전</div>
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
									<div>마감 7일 전</div>
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
									<div>마감 7일 전</div>
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
