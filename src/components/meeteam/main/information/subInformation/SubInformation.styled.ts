import styled from 'styled-components';
import Main from '../../Main.styled';
import ReactQuill from 'react-quill';

interface Props {
	$fold?: boolean;
	$editMode?: boolean;
}
const SubInformationLayout = styled(Main.MainArticle)<Props>`
	display: flex;
	flex-direction: column;
	font-size: 1.5rem;
	color: #151515;
	font-weight: 500;
	height: ${props => (props.$editMode ? '100%' : props.$fold ? '24.6rem' : '')};

	.sub-information__row {
		display: flex;
		flex-direction: row;
		column-gap: 2.7rem;
	}

	.sub-information__column {
		display: flex;
		flex-direction: column;
		row-gap: ${props => (props.$editMode ? '1.5rem' : '2.25rem')};
		padding: 0.3rem 3rem;
		padding-right: 8.62rem;
		padding-bottom: 1.63rem;
	}

	.sub-information__button-row {
		display: flex;
		flex-direction: row;
		column-gap: 0.9rem;
		margin-left: auto;
		margin-right: 8.62rem;
		margin-bottom: 2.55rem;
	}

	.sub-information__label {
		line-height: ${props => (props.$editMode ? '4.875rem' : '1.8rem')};
	}
`;

const SubInformationHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 2.17rem 2.55rem;
`;

const SubInformationEditor = styled(ReactQuill)`
	flex: 1 !important;
	min-height: 23.625rem !important;
	border-radius: 0.75rem !important;
	border: 0.075rem solid #cdcdcd;
	background: #fff;
	white-space: pre-wrap !important;

	.ql-toolbar {
		border: 0;
		border-bottom: 0.075rem solid #cdcdcd;
	}

	.ql-container {
		height: auto;
		font-family: Pretendard !important;
		font-size: 1.5rem !important;
		font-weight: 400 !important;
		border: 0;
	}

	.ql-editor {
		height: auto;
	}
`;

const SubInformationInput = styled.input`
	all: unset;
	display: flex;
	flex: 1;
	align-items: center;
	padding: 0 1rem;
	height: 4.725rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #e3e3e3;
	background: #fff;
	font-weight: 400;
	cursor: text;
`;

const SubInformationBox = styled.div<{ $fold?: boolean }>`
	display: flex;
	flex: 1;
	font-weight: 400;
	line-height: 1.8rem;
	letter-spacing: -0.03rem;
	white-space: pre-wrap;
	${props =>
		props.$fold
			? `
				max-height:9rem; 
				text-overflow: ellipsis;
	 			overflow: hidden;
				word-break: break-word;
				display: -webkit-box;
				-webkit-line-clamp: 5; // 원하는 라인수
				-webkit-box-orient: vertical;	
			`
			: ``};
`;

const SubInformationViewButton = styled.button`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3.02rem;
	border-top: 0.075rem solid #cdcdcd;
	border-bottom-right-radius: 0.75rem;
	border-bottom-left-radius: 0.75rem;
	cursor: pointer;
	&:hover {
		background: #fbfbfb;
	}
`;

const SubInformationSaveButton = styled.button`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3.45rem;
	padding: 0 1.5rem;
	border-radius: 0.6rem;
	background: var(--main-color, #5877fc);
	color: #fff;
	cursor: pointer;
`;

const SubInformationCancelButton = styled(SubInformationSaveButton)`
	background: #ededed;
	color: #000;
`;

const S = {
	SubInformationLayout: SubInformationLayout,
	SubInformationHeader,
	SubInformationBox,
	SubInformationEditor,
	SubInformationInput,
	SubInformationViewButton,
	SubInformationSaveButton,
	SubInformationCancelButton,
};

export default S;
