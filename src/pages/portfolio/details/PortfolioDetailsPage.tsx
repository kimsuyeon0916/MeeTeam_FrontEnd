import React from 'react';
import S from './PortfolioDetails.styled';
import {
	DefaultBtn,
	ImageCarousel,
	LinkDetails,
	PortfolioInformation,
	PortfolioList,
} from '../../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { imageList } from '../../../components/carousel/imageList';
import { useReadPortfolio } from '../../../hooks';

const PortfolioDetailsPage = () => {
	const { portfolioId } = useParams() as { portfolioId: string };
	const { data: portfolio, isSuccess } = useReadPortfolio(portfolioId);

	const navigate = useNavigate();

	return (
		isSuccess && (
			<S.PortfolioDetailsLayout>
				<S.PortfolioDetailsContainer>
					<S.PortfolioDetailsHeader>
						<S.PortfolioDetailsColumn $gap='1rem'>
							<h1>{portfolio?.title}</h1>
							<h5>{portfolio?.description}</h5>
						</S.PortfolioDetailsColumn>
						{portfolio?.isWriter && (
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
							<PortfolioInformation {...portfolio} />
						</S.PortfolioDetailsColumn>

						<S.PortfolioDetailsColumn>
							<S.PortfolioDetailsArticle>
								<S.PortfolioDetailsTitle>상세내용</S.PortfolioDetailsTitle>
								<hr />
								<S.PortfolioDetailsContent>{portfolio?.content}</S.PortfolioDetailsContent>
							</S.PortfolioDetailsArticle>

							<S.PortfolioDetailsArticle>
								<S.PortfolioDetailsTitle>링크</S.PortfolioDetailsTitle>
								<hr />
								<S.PortfolioDetailsColumn>
									{portfolio?.links?.map((link, index) => (
										<S.PortfolioDetailsRow key={index} $gap='3.65rem'>
											<LinkDetails {...link} />
										</S.PortfolioDetailsRow>
									))}
								</S.PortfolioDetailsColumn>
							</S.PortfolioDetailsArticle>
						</S.PortfolioDetailsColumn>
					</S.PortfolioDetailsColumn>
				</S.PortfolioDetailsContainer>
				<PortfolioList portfolios={portfolio?.otherPortfolios ?? []} />
			</S.PortfolioDetailsLayout>
		)
	);
};

export default PortfolioDetailsPage;
