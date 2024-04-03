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
	isEditable?: boolean;
	clickNumber?: number;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PortfolioCard = ({
	id,
	title,
	imageUrl,
	field,
	role,
	isEditable,
	clickNumber,
	handleClick,
}: PortfolioCard) => {
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
				{isEditable && (
					<S.PortfolioCardButton
						type='button'
						$checked={clickNumber ? true : false}
						onClick={handleClick}
					>
						{clickNumber}
					</S.PortfolioCardButton>
				)}
			</S.PortfolioCardBox>
			<S.PortfolioCardTitle>{title}</S.PortfolioCardTitle>
		</S.PortfolioCardLayout>
	);
};

export default PortfolioCard;
