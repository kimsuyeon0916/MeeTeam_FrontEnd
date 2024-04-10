import React from 'react';
import S from './PortfolioDetails.styled';
import {
	DefaultBtn,
	ImageCarousel,
	LinkDetails,
	PortfolioInformation,
	PortfolioList,
} from '../../../components';
import { portfolioData } from '../portfolioData';
import { useNavigate, useParams } from 'react-router-dom';
import { imageList } from '../../../components/carousel/imageList';

const PortfolioDetailsPage = () => {
	const { portfolioId } = useParams() as { portfolioId: string };

	const navigate = useNavigate();

	return (
		<S.PortfolioDetailsLayout>
			<S.PortfolioDetailsContainer>
				<S.PortfolioDetailsHeader>
					<S.PortfolioDetailsColumn $gap='1rem'>
						<h1>{portfolioData.title}</h1>
						<h5>{portfolioData.description}</h5>
					</S.PortfolioDetailsColumn>
					{portfolioData.isWriter && (
						<DefaultBtn
							type='button'
							title='편집'
							handleClick={() => navigate(`/portfolio/${portfolioId}/edit`)}
						/>
					)}
				</S.PortfolioDetailsHeader>

				<S.PortfolioDetailsColumn $gap='8rem'>
					<S.PortfolioDetailsColumn $gap='4rem'>
						<ImageCarousel images={imageList} />
						<PortfolioInformation {...portfolioData} />
					</S.PortfolioDetailsColumn>

					<S.PortfolioDetailsColumn>
						<S.PortfolioDetailsArticle>
							<S.PortfolioDetailsTitle>상세내용</S.PortfolioDetailsTitle>
							<hr />
							<S.PortfolioDetailsContent>{portfolioData.content}</S.PortfolioDetailsContent>
						</S.PortfolioDetailsArticle>

						<S.PortfolioDetailsArticle>
							<S.PortfolioDetailsTitle>링크</S.PortfolioDetailsTitle>
							<hr />
							<S.PortfolioDetailsColumn>
								{portfolioData?.links?.map((link, index) => (
									<S.PortfolioDetailsRow key={index} $gap='3.65rem'>
										<LinkDetails {...link} />
									</S.PortfolioDetailsRow>
								))}
							</S.PortfolioDetailsColumn>
						</S.PortfolioDetailsArticle>
					</S.PortfolioDetailsColumn>
				</S.PortfolioDetailsColumn>
			</S.PortfolioDetailsContainer>
			<PortfolioList portfolios={portfolioData.otherPortfolios} />
		</S.PortfolioDetailsLayout>
	);
};

export default PortfolioDetailsPage;
