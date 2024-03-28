import React, { useState } from 'react';
import { Dropdown, Subtitle, RecruitCard, Pagination } from '../../../components';
import S from './RecruitPage.styled';
import {
	BookmarkRight,
	Clear,
	DropdownArrow,
	FilledBookmark,
	Search,
	SearchIcon,
	XBtn,
} from '../../../assets';

const START_PAGE_NUM = 1;

const RecruitPage = () => {
	const postsNum = 150;
	const [tagItem, setTagItem] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(START_PAGE_NUM);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isRoleOpen, setIsRoleOpen] = useState<boolean>(false);

	const onClickDetailed = () => {
		setIsOpen(true);
	};

	return (
		<S.RecruitPage>
			<section>
				<section className='wrapper-title'>
					<h2>분야 전체</h2>
					<div className='sep'> | </div>
					<div className='container-field'>
						<h3>분야를 선택해주세요</h3>
						<img src={DropdownArrow} />
					</div>
				</section>
				<section className='wrapper-filters'>
					<section className='container-filters'>
						<Dropdown data={['전체 보기', '교내', '교외']} initialData='범위' scope={true} />
						<Dropdown
							data={['전체', '프로젝트', '공모전', '스터디']}
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
										<span className='body1 sidebar-elem'>기술</span>
										<span className='body1 sidebar-elem'>역할</span>
										<span className='body1 sidebar-elem'>태그</span>
									</section>
									<section className='dropdown-search'>
										<span className='body1'>
											원하는 역할을 검색해보세요. 역할은 최대 n개까지 선택 가능합니다.
										</span>
										<article className='search' onClick={() => setIsRoleOpen(prev => !prev)}>
											<input type='text' placeholder='역할을 검색하세요.' />
											<img src={Search} />
										</article>
										{isRoleOpen && (
											<section className='role-menu'>
												<ul>
													<li className='body1'>역1</li>
													<li className='body1'>역2</li>
													<li className='body1'>역3</li>
													<li className='body1'>역4</li>
												</ul>
											</section>
										)}
										<article className='container-tag'>
											<article className='tags'>
												<span>{'tagItem'}</span>
												<button type='button'>
													<img src={XBtn} />
												</button>
											</article>
										</article>
										<article className='container-btns'>
											<section className='clear'>
												<img src={Clear} />
												<span>초기화</span>
											</section>
											<button>적용</button>
										</article>
									</section>
								</section>
							)}
						</article>
					</section>
					<section className='container-options__search'>
						<div>
							<img src={SearchIcon} />
						</div>
						<div>
							<input placeholder='제목, 글, 내용으로 검색해보세요.' />
						</div>
					</section>
				</section>
			</section>
			<hr />
			<div>
				<div className='container-contents'>
					<div>
						<article className='bookmark-intro'>
							<img src={FilledBookmark} />
							<span className='body2'>북마크 모아보기 {'❯'}</span>
						</article>
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
		</S.RecruitPage>
	);
};

export default RecruitPage;
