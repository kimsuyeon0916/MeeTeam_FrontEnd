import styled from 'styled-components';
import Main from '../Main.sytled';

const IssueLayout = styled(Main.MainArticle)<{ $type?: string }>`
	display: flex;
	flex: 1;
	flex-direction: column;
	background: #fff;
	height: 26.25rem;

	.issue__alarm-title {
		font-size: 1.5rem;
		font-weight: 500;
		color: #151515;
	}

	.issue__time-stamp {
		margin-left: auto;
		font-size: 1.2rem;
		font-weight: 400;
	}

	.issue__list {
		border-radius: 0rem 0rem 0.75rem 0.75rem;
		overflow: ${props => (props.$type === '대시보드' ? 'hidden' : 'auto')};
		&::-webkit-scrollbar {
			width: 1.94rem; /* Chrome, Safari, Opera */
		}
		&::-webkit-scrollbar-track {
			background-color: transparent;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 7.5rem;
			background: #d9d9d9;
			background-clip: padding-box;
			border: 0.67rem solid transparent;
		}
	}
`;

const IssueHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 1.65rem 2.55rem;
	border-bottom: 0.075rem solid #bcd7ff;
	height: 5.1rem;
`;

const IssueItem = styled.li`
	display: flex;
	row-gap: 0.3rem;
	padding: 1.8rem 2.63rem;
	border-bottom: 0.075rem solid #c9c9c9;
	height: 7.05rem;
	background-color: #fbfbfb;
	cursor: pointer;
	&:hover {
		background: rgba(141, 141, 141, 0.4);
	}
`;

const IssueButton = styled.button`
	all: unset;
	display: flex;
	margin-left: auto;
	font-size: 1.2rem;
	font-weight: 400;
	cursor: pointer;
`;

const S = { IssueLayout, IssueHeader, IssueItem, IssueButton };

export default S;
