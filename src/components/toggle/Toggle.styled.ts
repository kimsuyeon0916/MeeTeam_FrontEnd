import styled from 'styled-components';

const ToggleLayout = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	column-gap: 0.8rem;
`;

const ToggleLabel = styled.label`
	position: relative;
	display: flex;
	width: 5.6rem;
	height: 3rem;
`;

const ToggleSlider = styled.span<{ checked?: boolean }>`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${props => (props.checked ? '#5877FC' : '#FFFFFF')};
	border-radius: 10rem;
	border: 0.1rem solid ${props => (props.checked ? '#5877FC' : '#D9D9D9')};
	-webkit-transition: 0.4s;
	transition: 0.4s;

	&:before {
		position: absolute;
		content: '';
		width: 2.4rem;
		height: 2.4rem;
		left: 0.3rem;
		bottom: 0.2rem;
		background-color: ${props => (props.checked ? '#FFFFFF' : '#A1A1A1')};
		border-radius: 50%;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
`;

const ToggleCheckBox = styled.input`
	&:checked + ${ToggleSlider} {
		background-color: #5877fc;
	}

	&:focus + ${ToggleSlider} {
		box-shadow: #d9d9d9;
	}

	&:checked + ${ToggleSlider}:before {
		-webkit-transform: translateX(2.4rem);
		-ms-transform: translateX(2.4rem);
		transform: translateX(2.4rem);
	}
`;

const ToggleDescription = styled.span`
	width: 4.2rem;
	color: var(--Text-textColor2, var(--text-color-2, #373f41));

	/* Body/body1/medium */
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.9rem; /* 118.75% */
	letter-spacing: 0.0032rem;
`;

const S = { ToggleLayout, ToggleLabel, ToggleSlider, ToggleCheckBox, ToggleDescription };

export default S;
