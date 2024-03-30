import styled from 'styled-components';

const ComboBoxLayout = styled.div<{ $width?: string }>`
	min-width: 0;
	display: flex;
	flex-direction: column;
	${props => (props.$width ? `width: ${props.$width}` : `flex: 1;`)};

	h6 {
		/* Body/body2/semibold */
		font-family: Pretendard;
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.7rem; /* 121.429% */
		letter-spacing: 0.0028rem;
	}
`;

const ComboBoxLabel = styled.label<{ $width?: string }>`
	display: flex;
	flex-direction: column;
	width: ${props => props.$width};

	color: var(--Text-textColor2, #373f41);

	h6 {
		margin-bottom: 0.8rem;
	}
`;

const ComboBoxInput = styled.input`
	all: unset;
	display: flex;
	padding: 0 1.6rem;
	height: 4.8rem;

	border-radius: 1rem;
	border: 0.1rem solid var(--Form-border-default, #e3e3e3);
	background: var(--Form-fill-others, #fff);
	color: var(--Form-txtIcon-focus, #373f41);
	cursor: text;

	/* Body/body1/medium */
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.9rem; /* 118.75% */
	letter-spacing: 0.0032rem;

	&:hover,
	&:focus {
		border-color: var(--Form-border-focus, #5877fc);
	}
`;

const S = { ComboBoxLayout, ComboBoxLabel, ComboBoxInput };

export default S;
