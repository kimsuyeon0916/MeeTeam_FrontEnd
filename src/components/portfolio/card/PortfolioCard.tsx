import React, { useState, useRef, useEffect } from 'react';
import S from './PortfolioCard.styled';
import { useNavigate } from 'react-router';
import { DefaultPortfolioImage, Pencil } from '../../../assets';
import { OptionList } from '../..';
import { useRecoilState } from 'recoil';
import { uploadImageListState } from '../../../atom';
import { Image } from '../../../types';

interface PortfolioCard {
	id?: string;
	title?: string;
	mainImageUrl?: string;
	field?: string;
	role?: string;
	isMainImage?: boolean;
	isEditable?: boolean;
	isImageEditable?: boolean;
	clickNumber?: number;
	handleClick?: (id: string) => void;
}

const MAX_IMAGE_SIZE_BYTES = 30 * 1024 * 1024; // 30MB
const imageEditOptionList = [{ name: '이미지 변경' }, { name: '이미지 삭제' }];

const PortfolioCard = ({
	id,
	title,
	mainImageUrl,
	field,
	role,
	isMainImage,
	isEditable,
	isImageEditable,
	clickNumber,
	handleClick,
}: PortfolioCard) => {
	const navigate = useNavigate();

	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			const target = e.target as HTMLDivElement;
			if (isOpen && buttonRef.current && !buttonRef.current.contains(target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleOutsideClick);
		return () => document.removeEventListener('click', handleOutsideClick);
	}, [isOpen]);

	const inputRef = useRef<HTMLInputElement>(null);
	const [uploadImageList, setUploadImageList] = useRecoilState(uploadImageListState);

	const changeImage = (event: React.BaseSyntheticEvent) => {
		const image = event.target?.files[0];
		if (
			uploadImageList.find(({ fileName }) => fileName === image.name) ||
			image.size > MAX_IMAGE_SIZE_BYTES
		) {
			return;
		}

		let uploadImage: Image = {
			fileName: image.name,
		};

		const binaryReader = new FileReader();
		binaryReader.readAsArrayBuffer(image);
		binaryReader.onload = () => {
			uploadImage = { ...uploadImage, binary: binaryReader.result as ArrayBuffer };
		};

		const urlReader = new FileReader();
		urlReader.readAsDataURL(image);
		urlReader.onload = () => {
			uploadImage = { ...uploadImage, url: urlReader.result as string };

			const imageList = [...uploadImageList];
			imageList.splice((clickNumber as number) - 1, 1, uploadImage);
			setUploadImageList(imageList);
		};
	};

	const deleteImage = () => {
		const imageList = [...uploadImageList];
		imageList.splice((clickNumber as number) - 1, 1);
		setUploadImageList(imageList);
	};

	const handleOptionClick = (name: string, optionName: string) => {
		if (optionName === '이미지 변경') {
			inputRef.current?.click();
		} else if (optionName === '이미지 삭제') {
			deleteImage();
		}
	};

	return (
		<S.PortfolioCardLayout
			$open={isOpen}
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
					<S.PortfolioCardNumberButton
						type='button'
						$checked={clickNumber ? true : false}
						onClick={() => id && handleClick?.(id)}
					>
						{clickNumber !== 0 && clickNumber}
					</S.PortfolioCardNumberButton>
				)}
			</S.PortfolioCardBox>
			{title && <S.PortfolioCardTitle>{title}</S.PortfolioCardTitle>}
			{isImageEditable && (
				<>
					<S.PortfolioCardIconButton
						ref={buttonRef}
						type='button'
						$checked={true}
						onClick={() => setIsOpen(true)}
					>
						<img src={Pencil} alt='연필아이콘' />
					</S.PortfolioCardIconButton>
					{isOpen && (
						<OptionList
							name='portfolioImageEditOptionList'
							optionList={imageEditOptionList}
							handleOptionClick={handleOptionClick as VoidFunction}
							$style='width: auto; top: 1.6rem; left: 1.6rem;'
						/>
					)}
				</>
			)}
			<S.PortfolioImageInput ref={inputRef} type='file' accept='image/*' onChange={changeImage} />
		</S.PortfolioCardLayout>
	);
};

export default PortfolioCard;
