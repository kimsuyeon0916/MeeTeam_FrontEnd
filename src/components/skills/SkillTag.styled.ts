import styled from 'styled-components';

const SkillTagLayout = styled.span`
	justify-content: center;
	align-items: center;

	display: flex;
	flex-direction: row;
	column-gap: 0.8rem;
	padding: 0.75rem 1.5rem;
	border-radius: 3.75rem;

	background: #e0e6ff;
	color: #151515;

	font-size: 1.4rem;
	font-weight: 600;
	line-height: 2.1rem;
	letter-spacing: 0.02rem;

	img {
		cursor: pointer;
	}
`;

const S = { SkillTagLayout };

export default S;
