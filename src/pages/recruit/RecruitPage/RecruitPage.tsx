import React, { useEffect, useState } from 'react';
import { Dropdown, RecruitCard, Pagination, DetailedInput } from '../../../components';
import S from './RecruitPage.styled';
import { Clear, DropdownArrow, FilledBookmark, SearchIcon } from '../../../assets';
import { useRecoilState } from 'recoil';
import { recruitFilterState } from '../../../atom';
import { getPostList } from '../../../service/recruit/board';
import { useQuery } from '@tanstack/react-query';
import { useLogin } from '../../../hooks';

const START_PAGE_NUM = 1;

const RecruitPage = () => {
	const [searchKeyword, setSearchKeyword] = useState<string>('');
	const [fieldValue, setFieldValue] = useState({
		applied: false,
		value: '분야를 선택해주세요',
	});
	const [currentPage, setCurrentPage] = useState<number>(START_PAGE_NUM);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isFieldOpen, setIsFieldOpen] = useState<boolean>(false);
	const [filterState, setFilterState] = useRecoilState(recruitFilterState);
	const [isOpenDetail, setIsOpenDetail] = useState({
		skill: false,
		role: false,
		tag: false,
		message: '기술',
	});

	const { isLoggedIn } = useLogin();

	const { data, isSuccess, refetch, isFetchedAfterMount } = useQuery({
		queryKey: ['recruit_board', { filterState, isLoggedIn }],
		queryFn: () => getPostList({ filterState, isLoggedIn }),
		staleTime: 5 * 60 * 1000,
		gcTime: 10 * 60 * 1000,
	});

	const onClickDetailed = () => {
		setIsOpen(prev => !prev);
	};

	const onClickField = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setFieldValue(prev => ({ ...prev, value: innerText }));
		setFilterState(prev => ({ ...prev, field: Number(event.currentTarget.id) }));
	};

	const submitField = () => {
		setFieldValue(prev => ({ ...prev, applied: true }));
		setIsFieldOpen(false);
	};

	const onClickClear = () => {
		setFilterState({
			scope: null,
			category: null,
			field: null,
			skill: [],
			role: [],
			tag: [],
			keyword: '',
		});
	};

	const onClickDetails = (event: React.MouseEvent<HTMLSpanElement>) => {
		event.stopPropagation();
		const { innerText } = event.target as HTMLElement;
		if (innerText === '기술') {
			setIsOpenDetail({ skill: true, role: false, tag: false, message: innerText });
		} else if (innerText === '역할') {
			setIsOpenDetail({ skill: false, role: true, tag: false, message: innerText });
		} else if (innerText === '태그') {
			setIsOpenDetail({ skill: false, role: false, tag: true, message: innerText });
		}
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			submitTagItem();
		}
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const submitTagItem = () => {
		setFilterState(prev => ({ ...prev, keyword: searchKeyword }));
	};

	useEffect(() => {
		refetch();
	}, [filterState]);

	return (
		<S.RecruitPage>
			<section>
				<section className='wrapper-title'>
					<h2>분야 전체</h2>
					<div className='sep'> | </div>
					<div className='container-field' onClick={() => setIsFieldOpen(prev => !prev)}>
						<h3>{fieldValue.applied ? fieldValue.value : '분야를 선택해주세요'}</h3>
						<img src={DropdownArrow} />
					</div>
					{isFieldOpen && (
						<article className='dropdown-field'>
							<section className='container-keys'>
								<span className='field-key' id={'1'} onClick={onClickField}>
									개발
								</span>
							</section>
							<article className='container-btns'>
								<section className='clear'>
									<img src={Clear} />
									<span>초기화</span>
								</section>
								<button type='button' onClick={submitField}>
									적용
								</button>
							</article>
						</article>
					)}
				</section>
				<section className='wrapper-filters'>
					<section className='container-filters'>
						{isLoggedIn && (
							<Dropdown data={['전체 보기', '교내', '교외']} initialData='범위' scope={true} />
						)}
						<Dropdown
							data={['전체', '프로젝트', '스터디', '공모전']}
							initialData='유형'
							scope={false}
						/>
						<article className='dropdown-detailed' onClick={onClickDetailed}>
							<section className='dropdown-box'>
								<label>{'상세정보'}</label>
								<img src={DropdownArrow} />
							</section>
							{isOpen && (
								<section className='container-dropdown'>
									<section className='sidebar'>
										<span className='body1 sidebar-elem' onClick={onClickDetails}>
											기술
										</span>
										<span className='body1 sidebar-elem' onClick={onClickDetails}>
											역할
										</span>
										<span className='body1 sidebar-elem' onClick={onClickDetails}>
											태그
										</span>
									</section>
									<DetailedInput type={isOpenDetail.message} />
								</section>
							)}
						</article>
						<article className='clear' onClick={onClickClear}>
							<img src={Clear} />
							<span>초기화</span>
						</article>
					</section>
					<section className='container-options__search'>
						<div>
							<img src={SearchIcon} />
						</div>
						<div>
							<input
								placeholder='제목, 글, 내용으로 검색해보세요.'
								type='text'
								onChange={event => setSearchKeyword(event.target.value)}
								value={searchKeyword}
								onKeyPress={onKeyPress}
							/>
						</div>
					</section>
				</section>
			</section>
			<hr />
			<section>
				<div className='container-contents'>
					<div>
						<article className='bookmark-intro'>
							<img src={FilledBookmark} />
							<span className='body2'>북마크 모아보기 {'❯'}</span>
						</article>
						{isSuccess && data && (
							<section className='container-contents__grid'>
								{isFetchedAfterMount &&
									data.posts.map(post => (
										<RecruitCard
											id={post.id}
											title={post.title}
											category={post.category}
											writerNickname={post.writerNickname}
											writerProfileImg={post.writerProfileImg}
											deadline={post.deadline}
											scope={post.scope}
											isBookmarked={post.isBookmarked}
											key={post.id}
										/>
									))}
							</section>
						)}
						{data?.posts.length === 0 && (
							<section className='no-results'>
								<span>일치하는 결과가 없습니다.</span>
							</section>
						)}
					</div>
				</div>
			</section>
			<article className='container-pagination'>
				{data && (
					<Pagination
						postsNum={data.pageInfo.totalContents + 100}
						postsPerPage={data.pageInfo.size}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</article>
		</S.RecruitPage>
	);
};

export default RecruitPage;
