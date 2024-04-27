import React, { useRef, useEffect, useState } from 'react';
import S from './PortfolioImageUpload.styled';
import { Plus } from '../../../../assets';
import { useRecoilState } from 'recoil';
import { uploadImageListState } from '../../../../atom';
import { PortfolioCard } from '../../..';
import { Image } from '../../../../types';
import { unzipFile } from '../../../../utils';

const MAX_IMAGE_SIZE_BYTES = 30 * 1024 * 1024; // 30MB
const MAX_IMAGE_COUNT = 15;

interface PortfolioImage {
	zipFileUrl?: string;
	fileOrder?: string[];
}

const PortfolioImageUpload = ({ zipFileUrl, fileOrder }: PortfolioImage) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const addImageList = () => {
		inputRef.current?.click();
	};

	const [uploadImageList, setUploadImageList] = useRecoilState(uploadImageListState); // 추후에 받아온 정보 reduce로 조합해서 초기화
	const [extractedImageList, setExtractedImageList] = useState<Image[]>([]);

	useEffect(() => {
		if (fileOrder) {
			const reorderedImageList: Image[] = [];
			for (let i = 0; i < fileOrder.length; i++) {
				const reorderedImage = extractedImageList.find(
					extractedImage => extractedImage.fileName === fileOrder[i]
				) as Image;
				reorderedImageList.push(reorderedImage);
			}
			setUploadImageList(reorderedImageList);
		}
	}, [extractedImageList]);

	useEffect(() => {
		if (zipFileUrl && fileOrder) {
			// 이미지 리사이징 추후 적용
			unzipFile(zipFileUrl).then(imageList => {
				for (let i = 0; i < imageList.length; i++) {
					const urlReader = new FileReader();
					urlReader.readAsDataURL(imageList[i].blob as Blob);
					urlReader.onload = () => {
						const extractedImage = {
							fileName: imageList[i].fileName,
							url: urlReader.result,
							file: imageList[i].blob,
						} as Image;
						setExtractedImageList(prev => [...prev, extractedImage]);
					};
				}
			});
		}
	}, [zipFileUrl]);

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

			const urlReader = new FileReader();
			urlReader.readAsDataURL(imageList[i]);
			urlReader.onload = () => {
				const uploadImage = {
					fileName: imageList[i].name,
					url: urlReader.result,
					file: imageList[i],
				} as Image;
				setUploadImageList(prev => [...prev, uploadImage]);
			};
		}
	};

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
