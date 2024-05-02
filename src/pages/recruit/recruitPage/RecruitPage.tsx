<<<<<<< HEAD
import React, { useState } from 'react';
import { Dropdown, Subtitle, RecruitCard, Pagination } from '../../../components';
import S from './RecruitPage.styled';
import { SearchIcon } from '../../../assets';
=======
import React, { useEffect, useRef, useState } from 'react';
import { Dropdown, RecruitCard, Pagination, DetailedInput, NeedLogin } from '../../../components';
import S from './RecruitPage.styled';
import {
	CancelWhite,
	Clear,
	Create,
	DropdownArrow,
	DropdownArrowUp,
	FilledBookmark,
	PlusWhite,
	Portpolio,
	Profile,
	SearchIcon,
	XBtn,
} from '../../../assets';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { detailedFilterState, needLoginModalState, recruitFilterState } from '../../../atom';
import { getPostList } from '../../../service/recruit/board';
import { useQuery } from '@tanstack/react-query';
import { useLogin } from '../../../hooks';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
>>>>>>> release-1.0

const START_PAGE_NUM = 1;

const RecruitPage = () => {
<<<<<<< HEAD
	const postsNum = 150;
	const [currentPage, setCurrentPage] = useState<number>(START_PAGE_NUM);
	const [isFiltered, setIsFiltered] = useState({
		isInside: true,
		isOutside: false,
	});
	console.log(currentPage);
	const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.currentTarget;
		if (target.innerText === '교내') {
			setIsFiltered({ isInside: true, isOutside: false });
		}
		if (target.innerText === '교외') {
			setIsFiltered({ isInside: false, isOutside: true });
		}
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
						<div className='filter bookmark'>☑️ 수업만 보기</div>
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
						<div className='container-subtitle'>
							<div className='subtitle'>👀 내가 관심 있을 만한 구인 글</div>
							<div className='container-sort'>
								<select name='sorted-by'>
									<option value='recent'>최신순</option>
									<option value='deadline'>마감일순</option>
									<option value='bookmark'>북마크순</option>
								</select>
							</div>
						</div>
						<div className='contents'>
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
						</div>
					</div>
					<div>
						<Subtitle>전체 구인 글</Subtitle>
						<div className='container-contents__grid'>
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
							<RecruitCard />
						</div>
					</div>
				</div>
			</div>
			<div className='container-pagination'>
				<Pagination
					postsNum={postsNum}
					postsPerPage={20}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</div>
=======
	const navigate = useNavigate();
	const location = useLocation();
	const fieldRef = useRef<HTMLDivElement | null>(null);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const [searchKeyword, setSearchKeyword] = useState<string>('');
	const [isFloatingOpen, setIsFloatingOpen] = useState<boolean>(false);
	const [fieldValue, setFieldValue] = useState({
		applied: false,
		value: {
			id: null as number | null,
			value: '분야를 선택해주세요',
		},
	});
	const [page, setPage] = useState<number>(START_PAGE_NUM);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isFieldOpen, setIsFieldOpen] = useState<boolean>(false);
	const [filterState, setFilterState] = useRecoilState(recruitFilterState);
	const setDetailedFilterState = useSetRecoilState(detailedFilterState);
	const [isOpenDetail, setIsOpenDetail] = useState({
		skill: true,
		role: false,
		tag: false,
		message: '기술',
	});
	const [searchParams, setSearchParams] = useSearchParams();

	const [needLoginModal, setNeedLoginModal] = useRecoilState(needLoginModalState);
	const { isLoggedIn } = useLogin();
	const { data, isLoading } = useQuery({
		queryKey: ['recruit_board', { filterState, isLoggedIn, page }],
		queryFn: () => getPostList({ filterState, isLoggedIn, page }),
	});

	const onClickDetailed = (event: React.MouseEvent) => {
		event.stopPropagation();
		setIsOpen(prev => !prev);
	};

	const onClickField = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		setFieldValue({
			applied: false,
			value: { id: Number(event.currentTarget.id), value: innerText },
		});
	};

	const submitField = () => {
		setFieldValue(prev => ({ ...prev, applied: true }));
		setFilterState(prev => ({ ...prev, field: fieldValue.value.id }));
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
			course: null,
			professor: null,
		});
		setSearchKeyword('');
		setDetailedFilterState({ skill: [], role: [], tag: [] });
		searchParams.delete('scope');
		searchParams.delete('category');
		setSearchParams(searchParams);
		setIsOpenDetail({ skill: true, role: false, tag: false, message: '기술' });
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

	const onClickClearField = () => {
		setFilterState(prev => ({ ...prev, field: null }));
		setFieldValue({ applied: false, value: { id: null, value: '분야를 선택해주세요' } });
	};

	const onClickDeleteKeyword = () => {
		setFilterState(prev => ({ ...prev, keyword: '' }));
		setSearchKeyword('');
	};

	const submitTagItem = () => {
		setFilterState(prev => ({ ...prev, keyword: searchKeyword }));
	};

	const recruitCreateHandler = () => {
		if (isLoggedIn) {
			navigate('/recruitment/postings');
		} else {
			setNeedLoginModal({ isOpen: true, type: 'RECRUIT_CREATE' });
		}
	};

	const profileCreateHandler = () => {
		if (isLoggedIn) {
			// 프로필 작성 페이지 연결 필요
		} else {
			setNeedLoginModal({ isOpen: true, type: 'PROFILE_CREATE' });
		}
	};

	const portfolioCreateHandler = () => {
		if (isLoggedIn) {
			// 포트폴리오 작성 페이지 연결 필요
		} else {
			setNeedLoginModal({ isOpen: true, type: 'PORTFOLIO_CREATE' });
		}
	};

	const handlerChildDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	useEffect(() => {
		const outsideClick = (event: MouseEvent) => {
			const { target } = event;
			if (isOpen && dropdownRef.current && !dropdownRef.current.contains(target as Node)) {
				setIsOpen(false);
			}
			if (isFieldOpen && fieldRef.current && !fieldRef.current.contains(target as Node)) {
				setIsFieldOpen(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, isOpen, fieldRef.current, isFieldOpen]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	return (
		<S.RecruitPage
			$isFieldClick={fieldValue.value.value !== '분야를 선택해주세요'}
			$isDetailedClick={isOpen}
		>
			<>
				<section>
					<section className='wrapper-title' ref={fieldRef}>
						<h2>분야 전체</h2>
						<div className='sep'> | </div>
						<div className='container-field' onClick={() => setIsFieldOpen(prev => !prev)}>
							<h3>{fieldValue.applied ? fieldValue.value.value : '분야를 선택해주세요'}</h3>
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
									<section className='clear' onClick={onClickClearField}>
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
								<Dropdown data={['전체 보기', '교내', '교외']} initialData='범위' scope />
							)}
							<Dropdown
								data={['전체', '프로젝트', '스터디', '공모전']}
								initialData='유형'
								category
							/>
							<article className='dropdown-detailed' onClick={onClickDetailed} ref={dropdownRef}>
								<section className='dropdown-box'>
									<label>{'상세정보'}</label>
									<img src={isOpen ? DropdownArrowUp : DropdownArrow} />
								</section>
								{isOpen && (
									<section className='container-dropdown' onClick={handlerChildDropdown}>
										<section className='sidebar'>
											<span
												className={`body1 sidebar-elem ${isOpenDetail.skill ? 'active' : ''}`}
												onClick={onClickDetails}
											>
												기술
											</span>
											<span
												className={`body1 sidebar-elem ${isOpenDetail.role ? 'active' : ''}`}
												onClick={onClickDetails}
											>
												역할
											</span>
											<span
												className={`body1 sidebar-elem ${isOpenDetail.tag ? 'active' : ''}`}
												onClick={onClickDetails}
											>
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
							<div className='search-bar'>
								<input
									placeholder='제목을 검색해보세요.'
									type='text'
									onChange={event => setSearchKeyword(event.target.value)}
									value={searchKeyword}
									onKeyPress={onKeyPress}
								/>
							</div>
							{searchKeyword && (
								<img className='clear-keyword' src={XBtn} onClick={onClickDeleteKeyword} />
							)}
						</section>
					</section>
				</section>
				<hr />
				<section>
					<section className='container-contents'>
						<div>
							<article className='bookmark-intro'>
								<img src={FilledBookmark} />
								<span className='body2'>북마크 모아보기 {'❯'}</span>
							</article>
							{isLoading ? (
								<section></section>
							) : (
								data && (
									<section className='container-contents__grid'>
										{data.posts.map(post => (
											<RecruitCard {...post} key={post.id} />
										))}
									</section>
								)
							)}
							{data && data.posts.length === 0 && (
								<section className='no-results'>
									<span>일치하는 결과가 없습니다.</span>
								</section>
							)}
						</div>
					</section>
				</section>
				<article className='container-pagination'>
					{data && (
						<Pagination
							postsNum={data.pageInfo.totalContents}
							postsPerPage={data.pageInfo.size}
							currentPage={page}
							setCurrentPage={setPage}
						/>
					)}
				</article>
				<article className='btn-floating' onClick={() => setIsFloatingOpen(prev => !prev)}>
					{isFloatingOpen && (
						<section className='floating-menu'>
							<article className='container-menu'>
								<span className='nav-info'>내 프로필 작성</span>
								<section className='menu floating' onClick={profileCreateHandler}>
									<img src={Profile} />
								</section>
							</article>
							<article className='container-menu'>
								<span className='nav-info'>구인글 작성</span>
								<section className='menu floating' onClick={recruitCreateHandler}>
									<img src={Create} />
								</section>
							</article>
							<article className='container-menu'>
								<span className='nav-info'>포트폴리오 등록</span>
								<section className='menu floating' onClick={portfolioCreateHandler}>
									<img src={Portpolio} />
								</section>
							</article>
						</section>
					)}
					<section className='container-btn floating'>
						<img src={isFloatingOpen ? CancelWhite : PlusWhite} />
					</section>
				</article>
			</>
			{needLoginModal.isOpen && (
				<section className='modal-background'>
					<NeedLogin type={needLoginModal.type} />
				</section>
			)}
>>>>>>> release-1.0
		</S.RecruitPage>
	);
};

export default RecruitPage;
