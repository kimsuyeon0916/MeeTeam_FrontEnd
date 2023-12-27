import styled from 'styled-components';

interface ISelectOptionsProps {
	show: boolean;
}

const CustomSelect = styled.div`
	position: relative;
	width: 40.125rem;
	height: 4.875rem;
	border-radius: 0.75rem;
	border: 0.75px solid #e3e3e3;
	background: #fff;
	align-self: center;
	margin-top: 5px;
	cursor: pointer;
	box-sizing: border-box;
	&::before {
		content: '⌵';
		position: absolute;
		top: 1rem;
		right: 2rem;
		color: #49c181;
		font-size: 20px;
		height: 100%;
	}
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	height: 100%;
	margin-left: 2.1rem;
	text-align: center;
	color: #a7a7a7;
	font-family: Apple SD Gothic Neo;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.35rem; /* 90% */
	letter-spacing: 0.015rem;
`;

const SelectOptions = styled.ul<ISelectOptionsProps>`
	position: absolute;
	list-style: none;
	top: 50px;
	left: 0;
	width: 100%;
	overflow: hidden;
	/* height: 90px; */
	max-height: ${props => (props.show ? 'none' : '0')};
	padding: 0;
	border-radius: 0.75rem;
	background-color: #fff;
	color: #000;
	z-index: 100;
`;

const Option = styled.li`
	font-size: 14px;
	padding: 6px 8px;
	transition: background-color 0.1s ease-in;
	&:hover {
		background-color: #0984e3;
		color: #fff;
	}
`;

const S = { CustomSelect, Label, SelectOptions, Option };

export default S;
