import React, { useRef } from 'react';
import S from './PortfolioImageUpload.styled';
import { Plus } from '../../../../assets';
import { useRecoilState } from 'recoil';
import { binaryImageListState, imageNameListState, imageSrcListState } from '../../../../atom';
import PortfolioCard from '../../card/PortfolioCard';

const MAX_IMAGE_SIZE_BYTES = 30 * 1024 * 1024; // 30MB
const MAX_IMAGE_COUNT = 15;

const PortfolioImageUpload = (portfolioId?: { portfolioId?: string }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const addImageList = () => {
		inputRef.current?.click();
	};

	// portfolioId 존재하는 경우에 presignedUrl API 호출

	const [imageNameList, setImageNameList] = useRecoilState(imageNameListState); // 추후에 nameList 받아와서 초기화
	const [imageSrcList, setImageSrcList] = useRecoilState(imageSrcListState); // 추후에 urlList 받아와서 초기화
	const [binaryImageList, setBinaryImageList] = useRecoilState(binaryImageListState); // 추후에 binaryList 받아와서 초기화

	const changeImageList = (event: React.BaseSyntheticEvent) => {
		const uploadImageList = event.target?.files;
		// 이미지 개수 제한
		for (let i = 0; i < uploadImageList.length && imageNameList.length + i < MAX_IMAGE_COUNT; i++) {
			// 중복된 이름 제한
			if (
				imageNameList.find(imageName => imageName === uploadImageList[i].name) ||
				[...uploadImageList].find(
					(image, index) => index !== i && image.name === uploadImageList[i].name
				)
			) {
				continue;
			}
			// 이미지 용량 제한
			if (uploadImageList[i].size > MAX_IMAGE_SIZE_BYTES) {
				continue;
			}
			setImageNameList(prev => [...prev, uploadImageList[i].name]);

			const urlReader = new FileReader();
			urlReader.readAsDataURL(uploadImageList[i]);
			urlReader.onload = () => setImageSrcList(prev => [...prev, urlReader.result] as string[]);

			const binaryReader = new FileReader();
			binaryReader.readAsArrayBuffer(uploadImageList[i]);
			binaryReader.onload = () =>
				setBinaryImageList(prev => [...prev, binaryReader.result] as ArrayBuffer[]);
		}
	};

	// 이미지 압축 및 리사이징 적용

	return (
		<S.PortfolioImageUploadLayout>
			<S.PortfolioImageGrid>
				{[...imageSrcList].map((imageSrc, index) => (
					<PortfolioCard
						key={index}
						isMainImage={index === 0}
						mainImageUrl={imageSrc}
						isEditable={true}
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
