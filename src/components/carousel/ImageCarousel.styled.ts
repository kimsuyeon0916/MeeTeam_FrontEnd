import styled from 'styled-components';

const ImageCarouselLayout = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 1rem;
	border: 1px solid #d9d9d9;

	&.embla {
		overflow: hidden;
	}

	&.embla__container {
		display: flex;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
`;

const ImageCarouselContainer = styled.div`
	display: flex;
`;

const ImageWrapper = styled.div`
	overflow: hidden;
	aspect-ratio: 183 / 103; // 포트폴리오 비율
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ImageCarouselRow = styled.div`
	display: flex;
	column-gap: 1.2rem;
	height: 5.6rem;
	align-items: center;
	justify-content: center;

	&.embla__controls {
		color: #8e8e8e;
		font-weight: 500;
	}

	small {
		display: flex;
		column-gap: 0.8rem;
	}
`;

const ButtonIcon = styled.img`
	cursor: pointer;
`;

const S = {
	ImageCarouselLayout,
	ImageCarouselContainer,
	ImageWrapper,
	Image,
	ImageCarouselRow,
	ButtonIcon,
};

export default S;
