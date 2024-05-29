import React from 'react';
import S from './PortfolioModal.styled';
import { FormState, FieldValues } from 'react-hook-form';
import { PrimaryBtn } from '../..';

interface PortfolioModal {
	formState: FormState<FieldValues>;
	handleClick: () => void;
}

const PortfolioModal = ({ formState, handleClick }: PortfolioModal) => {
	const defaultInformationErrorList = [
		!!formState?.errors['title'],
		!!formState?.errors['description'],
		!!formState?.errors['field'],
		!!formState?.errors['role'],
		!!formState?.errors['startDate'] || formState?.errors['endDate'],
		!!formState?.errors['proceedType'],
	];

	const defaultInformationList = ['제목', '한줄소개', '분야', '역할', '진행기간', '진행방식'];

	const defaultInformationErrorMessageList = defaultInformationList.filter(
		(_, index) => defaultInformationErrorList[index]
	);

	return (
		<S.PortfolioModalLayout>
			<S.PortfolioModalContainer>
				<S.PortfolioModalTitle>필수정보를 입력해주세요</S.PortfolioModalTitle>
				<S.PortfolioModalContent>
					아래 미작성된 항목을 입력해 포트폴리오 작성을 완료해주세요
				</S.PortfolioModalContent>
				<S.PortfolioContentList>
					<S.PortfolioContentItem>
						{formState?.errors['mainImage'] && (
							<>
								<S.PortfolioContentItemTitle>슬라이드</S.PortfolioContentItemTitle>
								<S.PortfolioContentItemInfo>최소 1장의 이미지</S.PortfolioContentItemInfo>
							</>
						)}
					</S.PortfolioContentItem>
					<S.PortfolioContentItem>
						{defaultInformationErrorList.includes(true) && (
							<>
								<S.PortfolioContentItemTitle>기본정보</S.PortfolioContentItemTitle>
								<S.PortfolioContentItemInfo>
									{defaultInformationErrorMessageList.map(message => (
										<span key={message}>{message}</span>
									))}
								</S.PortfolioContentItemInfo>
							</>
						)}
					</S.PortfolioContentItem>
					<S.PortfolioContentItem>
						{formState?.errors['content'] && (
							<>
								<S.PortfolioContentItemTitle>상세내용</S.PortfolioContentItemTitle>
								<S.PortfolioContentItemInfo>내용 미입력</S.PortfolioContentItemInfo>
							</>
						)}
					</S.PortfolioContentItem>
				</S.PortfolioContentList>
				<div>
					<PrimaryBtn type='button' title='확인' handleClick={handleClick} />
				</div>
			</S.PortfolioModalContainer>
		</S.PortfolioModalLayout>
	);
};

export default PortfolioModal;
