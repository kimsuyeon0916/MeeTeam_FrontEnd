import React, { useEffect, useState } from 'react';
import S from './RecruitManagePage.styled';
import { RecruitCard, Pagination } from '../../../components';
import { useQuery } from '@tanstack/react-query';
import { getManagementApplied } from '../../../service/management/recruit';

const RecruitPostingApply = () => {
	const [page, setPage] = useState<number>(1);
	const [menuState, setMenuState] = useState({
		all: true,
		doing: false,
		done: false,
	});
	const [isClosed, setIsClosed] = useState<boolean | null>(null);

	const { data, isSuccess, refetch } = useQuery({
		queryKey: ['managementApplied'],
		queryFn: () => getManagementApplied({ page, isClosed }),
	});

	console.log(data);

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
	}, [isClosed]);
	return (
		<S.RecruitManage>
			<article>
				<h2>신청한 구인글</h2>
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
				<section className='container-contents'>
					{isSuccess &&
						data &&
						data.data.map((element, index) => <RecruitCard key={index} {...element} />)}
				</section>
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

export default RecruitPostingApply;
