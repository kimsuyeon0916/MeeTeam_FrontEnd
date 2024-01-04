import styled from 'styled-components';

const OptionModalLayout = styled.ul`
	position: absolute;
	left: -5.5rem;
	top: 2.85rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.75rem;
	padding: 0.75rem 0.53rem;
	width: 7.95rem;
	height: 4.2rem;
	border-radius: 0.6rem;
	background: #fff;
	box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
`;

const OptionModalItem = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 6.9rem;
	height: 2.7rem;
	border-radius: 0.6rem;
	color: var(--text-color, #151515);
	font-family: Pretendard;
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 400;
	&:hover {
		background: var(--sub-color, #e0e6ff);
	}
`;

const S = { OptionModalLayout, OptionModalItem };

export default S;
