import React from 'react';
import S from './PortfolioCard.styled';
import { useNavigate } from 'react-router';
import { DefaultPortfolioImage } from '../../../assets';

interface PortfolioCard {
	id: string;
	title: string;
	imageUrl?: string;
	field: string;
	role: string;
}

const PortfolioCard = ({ id, title, imageUrl, field, role }: PortfolioCard) => {
	const navigate = useNavigate();

	return (
		<S.PortfolioCardLayout onClick={() => navigate(`/portfolio/${id}`)}>
			<S.PortfolioCardBox>
				<S.PortfolioCardImage
					src={imageUrl ? imageUrl : DefaultPortfolioImage}
					alt='포트폴리오이미지'
				/>
				<S.PortfolioTagRow>
					<S.PortfolioCardTag>{field}</S.PortfolioCardTag>
					<S.PortfolioCardTag>{role}</S.PortfolioCardTag>
				</S.PortfolioTagRow>
			</S.PortfolioCardBox>
			<S.PortfolioCardTitle>{title}</S.PortfolioCardTitle>
		</S.PortfolioCardLayout>
	);
};

export default PortfolioCard;
