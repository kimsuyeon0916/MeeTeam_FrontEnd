import styled from 'styled-components';
import Main from '../Main.styled';

const RecruitmentLayout = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.8rem;
	font-family: Pretendard;
`;

const RecruitmentArticle = styled(Main.MainArticle)`
	display: flex;
	flex-direction: row;
	padding: 1.65rem 2.55rem;
	align-items: center;
	column-gap: 2.55rem;
	font-size: 1.5rem;
	font-weight: 400;

	.recruitment__button-row {
		display: flex;
		flex-direction: row;
		column-gap: 0.9rem;
		margin-left: auto;
	}
`;

const RecruitmentSaveButton = styled.button`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3.45rem;
	padding: 0 1.5rem;
	border-radius: 0.6rem;
	background: var(--main-color, #5877fc);
	color: #fff;
	font-size: 1.5rem;
	cursor: pointer;
`;

const RecruitmentCancelButton = styled(RecruitmentSaveButton)`
	background: #ededed;
	color: #000;
`;

const RecruitmentCorrectButton = styled(RecruitmentSaveButton)`
	background: #e0e6ff;
	color: #000;
`;

const RecruitmentEndButton = styled(RecruitmentSaveButton)`
	background: #ff6a6a;
	color: #fff;
`;

const RecruitmentButton = styled(RecruitmentSaveButton)`
	background: linear-gradient(270deg, rgba(95, 92, 236, 0.8) -6.3%, #d85cec 101.52%);
`;

const S = {
	RecruitmentLayout,
	RecruitmentArticle,
	RecruitmentSaveButton,
	RecruitmentCancelButton,
	RecruitmentCorrectButton,
	RecruitmentEndButton,
	RecruitmentButton,
};

export default S;
