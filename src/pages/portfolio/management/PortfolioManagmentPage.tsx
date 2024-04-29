import React, { useState } from 'react';
import S from './PortfolioManagementPage.styled';
import { Pagination, PortfolioCard, PrimaryBtn, TabMenu } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../portfolioData';

const tabList = ['전체', '프로젝트', '스터디', '공모전'];

const PortfolioManagementPage = () => {
	const navigate = useNavigate();

	const [pageNumber, setPageNumber] = useState(1);

	return (
		<S.PortfolioManagementLayout>
			<S.PortfolioManagementHeader>
				<h2>포트폴리오</h2>
				<PrimaryBtn
					type='button'
					title='포트폴리오 작성'
					handleClick={() => navigate('/portfolio/edit')}
				/>
			</S.PortfolioManagementHeader>
			<TabMenu tabList={tabList} />
			<S.PortfolioManagementGrid>
				{portfolioData &&
					portfolioData.otherPortfolios?.map(
						portfolio => portfolio && <PortfolioCard key={portfolio.id} {...portfolio} />
					)}
			</S.PortfolioManagementGrid>
			<Pagination
				postsNum={60} // 추후 변경
				postsPerPage={16} // 추후 변경
				currentPage={pageNumber}
				setCurrentPage={setPageNumber}
			/>
		</S.PortfolioManagementLayout>
	);
};

export default PortfolioManagementPage;
