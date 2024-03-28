import React, { useState } from 'react';
import { Dropdown, Subtitle, RecruitCard, Pagination } from '../../../components';
import S from './RecruitPage.styled';
import { DropdownArrow, SearchIcon } from '../../../assets';

const START_PAGE_NUM = 1;

const RecruitPage = () => {
	const postsNum = 150;
	const [currentPage, setCurrentPage] = useState<number>(START_PAGE_NUM);
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

	return (
		<S.RecruitPage>
			<section>
				<section className='wrapper-title'>
					<h2>분야 전체</h2>
					<div className='sep'> | </div>
					<div className='container-field'>
						<h3>분야를 선택해주세요</h3>
						<img src={DropdownArrow as any} />
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
					</section>
					<section className='container-options__search'>
						<div>
							<img src={SearchIcon as any} />
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
		</S.RecruitPage>
	);
};

export default RecruitPage;
