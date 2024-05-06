import React from 'react';
import { Portfolio } from '../../../types';
import S from './PortfolioList.styled';
import PortfolioCard from '../card/PortfolioCard';

const PortfolioList = ({ nickname, portfolios }: { nickname: string; portfolios: Portfolio[] }) => {
	return (
		<S.PortfolioListLayout>
			<S.PortfolioListContainer>
				<h3>{nickname}님의 대표 포트폴리오</h3>
				<S.PortfolioList>
					{portfolios.map((portfolio: Portfolio, index) => (
						<PortfolioCard key={index} {...portfolio} />
					))}
				</S.PortfolioList>
			</S.PortfolioListContainer>
		</S.PortfolioListLayout>
	);
};

export default PortfolioList;
