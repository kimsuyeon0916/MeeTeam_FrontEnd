import React, { useRef } from 'react';
import S from './PortfolioImageUpload.styled';
import { Plus } from '../../../../assets';
import { useRecoilState } from 'recoil';
import { uploadImageListState } from '../../../../atom';
import { PortfolioCard } from '../../..';
import { Image } from '../../../../types';

const MAX_IMAGE_SIZE_BYTES = 30 * 1024 * 1024; // 30MB
const MAX_IMAGE_COUNT = 15;

const PortfolioImageUpload = (portfolioId?: { portfolioId?: string }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const addImageList = () => {
		inputRef.current?.click();
	};

	// portfolioId 존재하는 경우에 presignedUrl API 호출

	const [uploadImageList, setUploadImageList] = useRecoilState(uploadImageListState); // 추후에 받아온 정보 reduce로 조합해서 초기화

	const changeImageList = (event: React.BaseSyntheticEvent) => {
		const imageList = event.target?.files;
		for (let i = 0; i < imageList.length && uploadImageList.length + i < MAX_IMAGE_COUNT; i++) {
			if (
				uploadImageList.find(image => image.fileName === imageList[i].name) ||
				[...imageList].find((image, index) => index !== i && image.name === imageList[i].name)
			) {
				continue;
			}
			if (imageList[i].size > MAX_IMAGE_SIZE_BYTES) {
				continue;
			}

			let uploadImage: Image = {
				fileName: imageList[i].name,
			};

			const binaryReader = new FileReader();
			binaryReader.readAsArrayBuffer(imageList[i]);
			binaryReader.onload = () => {
				uploadImage = { ...uploadImage, binary: binaryReader.result as ArrayBuffer };
			};

			const urlReader = new FileReader();
			urlReader.readAsDataURL(imageList[i]);
			urlReader.onload = () => {
				uploadImage = { ...uploadImage, url: urlReader.result as string };

				setUploadImageList(prev => [...prev, uploadImage]);
			};
		}
	};

	// 이미지 압축 및 리사이징 적용

	return (
		<S.PortfolioImageUploadLayout>
			<S.PortfolioImageGrid>
				{[...uploadImageList].map((uploadImage, index) => (
					<PortfolioCard
						key={uploadImage.fileName}
						isMainImage={index === 0}
						mainImageUrl={uploadImage.url}
						isEditable={true}
						isImageEditable={true}
						clickNumber={index + 1}
					/>
				))}
				{/* 이미지 추가 버튼 */}
				<S.PortfolioImageUpload onClick={addImageList}>
					<S.PortfolioImageUploadColumn>
						<S.PortfolioImageUploadRow>
							<img src={Plus} alt='포트폴리오 이미지 추가' />
							이미지 추가 (최대 15장)
						</S.PortfolioImageUploadRow>
						<small>(1920px X 1080px)</small>
					</S.PortfolioImageUploadColumn>
					<S.PortfolioImageInput
						multiple
						ref={inputRef}
						type='file'
						accept='image/*'
						onChange={changeImageList}
					/>
				</S.PortfolioImageUpload>
			</S.PortfolioImageGrid>
		</S.PortfolioImageUploadLayout>
	);
};

export default PortfolioImageUpload;
