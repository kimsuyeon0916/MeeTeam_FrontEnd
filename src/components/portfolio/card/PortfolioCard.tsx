import React from 'react';
import S from './PortfolioCard.styled';
import { useNavigate } from 'react-router';
import { DefaultPortfolioImage } from '../../../assets';

interface PortfolioCard {
	id: string;
	title: string;
	mainImageUrl?: string;
	field: string;
	role: string;
	isEditable?: boolean;
	clickNumber?: number;
	handleClick?: (id: string) => void;
}

const PortfolioCard = ({
	id,
	title,
	mainImageUrl,
	field,
	role,
	isEditable,
	clickNumber,
	handleClick,
}: PortfolioCard) => {
	const navigate = useNavigate();

	return (
		<S.PortfolioCardLayout
			onClick={() => (isEditable ? handleClick?.(id) : navigate(`/portfolio/${id}`))}
		>
			<S.PortfolioCardBox>
				<S.PortfolioCardImage
					src={mainImageUrl ? mainImageUrl : DefaultPortfolioImage}
					alt='포트폴리오이미지'
				/>
				<S.PortfolioTagRow>
					<S.PortfolioCardTag>{field}</S.PortfolioCardTag>
					<S.PortfolioCardTag>{role}</S.PortfolioCardTag>
				</S.PortfolioTagRow>
				{isEditable && (
					<S.PortfolioCardButton
						type='button'
						$checked={clickNumber ? true : false}
						onClick={() => handleClick?.(id)}
					>
						{clickNumber !== 0 && clickNumber}
					</S.PortfolioCardButton>
				)}
			</S.PortfolioCardBox>
			<S.PortfolioCardTitle>{title}</S.PortfolioCardTitle>
		</S.PortfolioCardLayout>
	);
};

export default PortfolioCard;
