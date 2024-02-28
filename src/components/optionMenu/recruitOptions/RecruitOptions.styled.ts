import styled from 'styled-components';

interface OptionSelected {
	$isClicked: boolean;
}

const RecruitOptions = styled.article`
	margin-top: 1.2rem;
	display: flex;
	align-items: center;
	gap: 1.6rem;

	.option {
		border-radius: 1rem;
		border: 1px solid #e3e3e3;
		background: #fff;
		color: #8e8e8e;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 0.02rem;
		padding: 1.2rem 2.4rem;
		cursor: pointer;
	}
`;

const Option = styled.span<OptionSelected>`
	border-radius: 1rem;
	border: 1px solid ${props => (props.$isClicked ? '#e0e6ff' : '#e3e3e3')};
	background: ${props => (props.$isClicked ? '#e0e6ff' : '#fff')};
	color: ${props => (props.$isClicked ? '#000' : '#8e8e8e')};
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 0.02rem;
	padding: 1.2rem 2.4rem;
	cursor: pointer;
`;

const S = { RecruitOptions, Option };

export default S;
