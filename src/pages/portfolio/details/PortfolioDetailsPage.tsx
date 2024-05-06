import React, { useEffect } from 'react';
import S from './PortfolioDetails.styled';
import {
	DefaultBtn,
	ImageCarousel,
	LinkDetails,
	PortfolioInformation,
	PortfolioList,
} from '../../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useReadPortfolio } from '../../../hooks';
import { Image, BlobFile } from '../../../types';
import { unzipFile } from '../../../utils';
import { useRecoilState } from 'recoil';
import { uploadImageListState } from '../../../atom';
import DOMPurify from 'dompurify';

const PortfolioDetailsPage = () => {
	const { portfolioId } = useParams() as { portfolioId: string };
	const { data: portfolio, isSuccess } = useReadPortfolio(portfolioId);

	const navigate = useNavigate();

	const [uploadImageList, setUploadImageList] = useRecoilState(uploadImageListState); // 추후에 받아온 정보 reduce로 조합해서 초기화

	const extractPromise = (imageList: BlobFile[]) =>
		new Promise<Image[]>(resolve => {
			let extractedImageList: Image[] = [];
			for (let i = 0; i < imageList.length; i++) {
				const urlReader = new FileReader();
				urlReader.readAsDataURL(imageList[i].blob as Blob);
				urlReader.onload = () => {
					const extractedImage = {
						fileName: imageList[i].fileName,
						url: urlReader.result,
						file: imageList[i].blob,
					} as Image;
					extractedImageList = [...extractedImageList, extractedImage];
					if (i === imageList.length - 1) {
						resolve(extractedImageList);
					}
				};
			}
		});

	const reorderPromise = (extractedImageList: Image[]) =>
		new Promise<BlobFile[]>(() => {
			if (portfolio?.fileOrder) {
				let reorderedImageList: Image[] = [];
				for (let i = 0; i < portfolio?.fileOrder.length; i++) {
					const reorderedImage = extractedImageList.find(
						extractedImage => extractedImage.fileName === portfolio?.fileOrder[i]
					) as Image;
					reorderedImageList = [...reorderedImageList, reorderedImage];
					if (i === portfolio?.fileOrder.length - 1) {
						setUploadImageList(reorderedImageList);
					}
				}
			}
		});

	useEffect(() => {
		if (portfolio?.zipFileUrl && portfolio?.fileOrder) {
			// 이미지 리사이징 추후 적용
			unzipFile(portfolio?.zipFileUrl)
				.then(imageList => {
					return extractPromise(imageList);
				})
				.then(extractedImageList => {
					return reorderPromise(extractedImageList);
				});
		}
	}, [portfolio?.zipFileUrl]);

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
								handleClick={() => navigate(`/portfolio/edit/${portfolioId}`)}
							/>
						)}
					</S.PortfolioDetailsHeader>

					<S.PortfolioDetailsColumn $gap='8rem'>
						<S.PortfolioDetailsColumn $gap='4rem'>
							<ImageCarousel images={uploadImageList} />
							<PortfolioInformation {...portfolio} />
						</S.PortfolioDetailsColumn>

						<S.PortfolioDetailsColumn>
							<S.PortfolioDetailsArticle>
								<S.PortfolioDetailsTitle>상세내용</S.PortfolioDetailsTitle>
								<hr />
								<S.PortfolioDetailsContent
									className='container-contents'
									dangerouslySetInnerHTML={{
										__html: DOMPurify.sanitize(portfolio?.content as string),
									}}
								/>
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
				<PortfolioList
					nickname={portfolio?.writerNickname as string}
					portfolios={portfolio?.otherPortfolios ?? []}
				/>
			</S.PortfolioDetailsLayout>
		)
	);
};

export default PortfolioDetailsPage;
