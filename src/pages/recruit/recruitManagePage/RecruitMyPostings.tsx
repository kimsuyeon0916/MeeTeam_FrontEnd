import React, { useState, useEffect } from 'react';
import S from './RecruitManagePage.styled';
import { RecruitCard, Pagination } from '../../../components';
import { useQuery } from '@tanstack/react-query';
import { getManagementMyPost } from '../../../service/management/recruit';
import { useNavigate } from 'react-router-dom';

const RecruitMyPostings = () => {
	const navigate = useNavigate();
	const [page, setPage] = useState<number>(1);
	const [menuState, setMenuState] = useState({
		all: true,
		doing: false,
		done: false,
	});
	const [isClosed, setIsClosed] = useState<boolean | null>(null);

	const { data, isSuccess, refetch } = useQuery({
		queryKey: ['managementMyPost'],
		queryFn: () => getManagementMyPost({ page, isClosed }),
	});

	const onClickMenu = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		if (innerText === '전체') {
			setMenuState({ all: true, doing: false, done: false });
			setIsClosed(null);
		} else if (innerText === '구인중') {
			setMenuState({ all: false, doing: true, done: false });
			setIsClosed(false);
		} else if (innerText === '마감') {
			setMenuState({ all: false, doing: false, done: true });
			setIsClosed(true);
		}
	};

	useEffect(() => {
		refetch();
	}, [isClosed, page]);
	return (
		<S.RecruitManage>
			<article>
				<h2>내가 작성한 구인글</h2>
			</article>
			<article className='wrapper'>
				<section className='container-menu'>
					<span className={`menu body1 ${menuState.all && 'active'}`} onClick={onClickMenu}>
						전체
					</span>
					<span className={`menu body1 ${menuState.doing && 'active'}`} onClick={onClickMenu}>
						구인중
					</span>
					<span className={`menu body1 ${menuState.done && 'active'}`} onClick={onClickMenu}>
						마감
					</span>
				</section>
				{data && (
					<section className='container-contents'>
						{data.data.map((element, index) => (
							<RecruitCard key={index} {...element} />
						))}
					</section>
				)}
				{data && isSuccess && data.data.length === 0 && page === 1 && (
					<section className='container-none'>
						{menuState.all && <h3>아직 작성한 구인글이 없어요.</h3>}
						{menuState.doing && <h3>진행중인 구인글이 없어요.</h3>}
						{menuState.done && <h3>마감한 구인글이 없어요.</h3>}
						{(menuState.all || menuState.doing) && (
							<button type='button' className='btn-navigate txt-big' onClick={() => navigate('/')}>
								구인글 보러가기
							</button>
						)}
					</section>
				)}
			</article>
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
		</S.RecruitManage>
	);
};

export default RecruitMyPostings;
