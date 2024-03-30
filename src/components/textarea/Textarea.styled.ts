import styled from 'styled-components';

const TextareaLayout = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	/* Body/body1/medium */
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.9rem; /* 118.75% */
	letter-spacing: 0.0032rem;

	h6 {
		/* Body/body2/semibold */
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.7rem; /* 121.429% */
		letter-spacing: 0.0028rem;
	}
`;

const TextareaLabel = styled.label<{ $width?: string }>`
	position: relative;
	display: flex;
	flex-direction: column;
	width: ${props => props.$width};

	color: var(--Text-textColor2, #373f41);

	h6 {
		margin-bottom: 0.8rem;
	}

	small {
		margin-top: 0.4rem;
		margin-left: auto;
		color: var(--State-unactive, #8e8e8e);
	}
`;

const Textarea = styled.textarea`
	all: unset;
	display: flex;
	resize: none;
	padding: 1.6rem 2rem;
	height: 16rem;

	border-radius: 1rem;
	border: 0.1rem solid var(--Form-border-default, #e3e3e3);
	background: var(--Form-fill-others, #fff);
	color: var(--Form-txtIcon-focus, #373f41);
	cursor: text;

	&:hover,
	&:focus {
		border-color: var(--Form-border-focus, #5877fc);
	}
`;

const S = { TextareaLayout, TextareaLabel, Textarea };

export default S;
