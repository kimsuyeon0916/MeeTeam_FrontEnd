import styled from 'styled-components';

interface ButtonStyle {
	$add?: boolean;
	$small?: boolean;
	$disabled?: boolean;
}

const IconButtonLayout = styled.button<ButtonStyle>`
	all: unset;
	display: flex;
	width: 4.8rem;
	height: 4.8rem;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	border-radius: 1rem;
	${props =>
		props.$add
			? `border: 1px solid #e3e3e3; background: #fff;`
			: `border: 1px solid #8E8E8E; background: #F6F6F6;`}
`;

const DefaultButtonLayout = styled.button<ButtonStyle>`
	all: unset;
	box-sizing: border-box;
	display: flex;
	height: ${props => (props.$small ? '3.6rem' : '4.8rem')};
	padding: ${props => (props.$small ? '1.2rem 2rem' : '1.2rem 3.2rem')};
	justify-content: center;
	align-items: center;
	border: 1px solid var(--ButtonColors-Default-outline-defaultLine, #e3e3e3);
	border-radius: 0.6rem;
	color: var(--text-color-2, #373f41);
	margin-left: auto;
	cursor: pointer;

	${props =>
		props.$small
			? `
					/* ButtonTxt/small */
					font-size: 1.4rem;
					font-style: normal;
					font-weight: 500;
					line-height: 1.7rem; /* 121.429% */
					letter-spacing: 0.0028rem;
				`
			: `
					/* ButtonTxt/big */
					font-size: 1.6rem;
					font-style: normal;
					font-weight: 500;
					line-height: 1.9rem; /* 118.75% */
					letter-spacing: 0.0032rem;
				`}

	${props => props.$disabled && `	background: var(--box_stroke, #E3E3E3);`}
	${props =>
		!props.$disabled &&
		`&:hover {
			background: var(--ButtonColors-Default-contained-hover, #EDEDED);
		}
		&:active {
			background: var(--ButtonColors-Default-contained-onPress, #747B7F);
		}`}
`;

const PrimaryButtonLayout = styled(DefaultButtonLayout)`
	border: 0;
	background: var(--main-color, #5877fc);
	color: var(--ButtonColors-Primary-outline-default, #fff);
	${props =>
		!props.$disabled &&
		`&:hover {
			background: var(--ButtonColors-Primary-contained-hover, #2F4FD9);
		}
		&:active {
			background: var(--ButtonColors-Primary-contained-onPress, #0E2690);
		}`}
`;

const FormButtonLayout = styled.button`
	all: unset;
	display: flex;
	flex-direction: row;
	column-gap: 0.8rem;
	width: 100%;
	padding: 1.7rem 0;
	align-items: center;
	color: var(--Text-textColor2, var(--text-color-2, #373f41));
	cursor: pointer;

	/* Headline/h5 */
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.9rem; /* 118.75% */
	letter-spacing: 0.0032rem;
`;

const S = { IconButtonLayout, DefaultButtonLayout, PrimaryButtonLayout, FormButtonLayout };

export default S;
