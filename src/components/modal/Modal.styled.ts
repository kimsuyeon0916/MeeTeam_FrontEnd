import styled from 'styled-components';

const ModalLayout = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: rgba(21, 21, 21, 0.4);
`;

const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1.8rem 2rem;
	border-radius: 1rem;
	border: 0.1rem solid var(--box_stroke, #e3e3e3);
	background: var(--Grayscale-100, #f8fafb);
`;

const ModalTitle = styled.h3`
	display: flex;
	margin-bottom: 2.8rem;
	color: var(--text-color, #151515);

	/* Headline/h3 */
	font-size: 2rem;
	font-weight: 600;
	line-height: 2.4rem; /* 120% */
	letter-spacing: 0.004rem;
`;

const ModalContent = styled.pre`
	display: flex;
	margin-bottom: 3.4rem;
	text-align: center;
	white-space: pre-wrap; // 줄바꿈

	/* Body/body2/medium */
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 2.4rem;
	letter-spacing: 0.0028rem;
`;

const ModalRow = styled.div<{ $gap?: string }>`
	flex: 1;
	display: flex;
	flex-direction: row;
	column-gap: ${props => props.$gap};
	align-items: center;
`;

const S = { ModalLayout, ModalContainer, ModalTitle, ModalContent, ModalRow };

export default S;
