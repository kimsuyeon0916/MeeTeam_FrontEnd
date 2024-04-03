import styled from 'styled-components';

const OptionList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 1.2rem;
	padding: 1.2rem 1.6rem;
	margin-top: 0.4rem;

	border-radius: 1rem;
	border: 1px solid var(--Form-border-default, #e3e3e3);
	background: var(--Form-fill-others, #fff);

	/* form_shadow */
	box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

const OptionItem = styled.li`
	color: var(--Form-txtIcon-default, #8e8e8e);
	cursor: pointer;

	/* Body/body1/medium */
	font-family: Pretendard;
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.9rem; /* 118.75% */
	letter-spacing: 0.0032rem;

	&:hover {
		color: var(--Form-txtIcon-focus, #373f41);
	}
`;

const S = { OptionList, OptionItem };

export default S;
