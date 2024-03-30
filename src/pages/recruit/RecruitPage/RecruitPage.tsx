import React, { useState } from 'react';
import { Dropdown, RecruitCard, Pagination, DetailedInput } from '../../../components';
import S from './RecruitPage.styled';
import { Clear, DropdownArrow, FilledBookmark, Search, SearchIcon, XBtn } from '../../../assets';
import { useRecoilState } from 'recoil';
import { recruitFilterState } from '../../../atom';

const START_PAGE_NUM = 1;

const RecruitPage = () => {
	const postsNum = 150;
	const [fieldValue, setFieldValue] = useState({
		applied: false,
		value: '분야를 선택해주세요',
	});
	const [tagItem, setTagItem] = useState<string>('');
	const [currentPage, setCurrentPage] = useState<number>(START_PAGE_NUM);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isRoleOpen, setIsRoleOpen] = useState<boolean>(false);
	const [isFieldOpen, setIsFieldOpen] = useState<boolean>(false);
	const [filterState, setFilterState] = useRecoilState(recruitFilterState);

	const onClickDetailed = () => {
		setIsOpen(true);
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

	// console.log(filterState);

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
						<Dropdown data={['전체 보기', '교내', '교외']} initialData='범위' scope={true} />
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
										<span className='body1 sidebar-elem'>기술</span>
										<span className='body1 sidebar-elem'>역할</span>
										<span className='body1 sidebar-elem'>태그</span>
									</section>
									{/* <DetailedInput /> */}
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
