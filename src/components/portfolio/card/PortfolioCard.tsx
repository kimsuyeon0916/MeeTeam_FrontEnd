import React from 'react';
import S from './PortfolioCard.styled';
import { useNavigate } from 'react-router';
import { DefaultPortfolioImage } from '../../../assets';

interface PortfolioCard {
	id?: string;
	title?: string;
	mainImageUrl?: string;
	field?: string;
	role?: string;
	isMainImage?: boolean;
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
	isMainImage,
	isEditable,
	clickNumber,
	handleClick,
}: PortfolioCard) => {
	const navigate = useNavigate();

	return (
		<S.PortfolioCardLayout
			onClick={() => (isEditable ? () => id && handleClick?.(id) : navigate(`/portfolio/${id}`))}
		>
			<S.PortfolioCardBox $isEditable={isEditable}>
				<S.PortfolioCardImage
					src={mainImageUrl ? mainImageUrl : DefaultPortfolioImage}
					alt='포트폴리오이미지'
				/>
				<S.PortfolioTagRow>
					{field && <S.PortfolioCardTag $color='#E0E6FF'>{field}</S.PortfolioCardTag>}
					{role && <S.PortfolioCardTag $color='#C9DEFF'>{role}</S.PortfolioCardTag>}
					{isMainImage && <S.PortfolioCardTag className='main-image-tag'>메인</S.PortfolioCardTag>}
				</S.PortfolioTagRow>
				{isEditable && (
					<S.PortfolioCardButton
						type='button'
						$checked={clickNumber ? true : false}
						onClick={() => id && handleClick?.(id)}
					>
						{clickNumber !== 0 && clickNumber}
					</S.PortfolioCardButton>
				)}
			</S.PortfolioCardBox>
			{title && <S.PortfolioCardTitle>{title}</S.PortfolioCardTitle>}
		</S.PortfolioCardLayout>
	);
};

export default PortfolioCard;
