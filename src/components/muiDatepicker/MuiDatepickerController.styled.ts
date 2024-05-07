import styled from 'styled-components';

const MuiDatepickerControllerLayout = styled.div`
	position: relative;
	display: flex;
	flex: 1;
`;

const ErrorMessage = styled.small`
	position: absolute;
	top: 5.4rem;
	left: 1rem;
	white-space: nowrap; // 줄바꿈 방지
	color: var(--ButtonColors-Caution-outline-defaultLine, #f85858);

	/* Text/t4 */
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 1.2rem; /* 120% */
	letter-spacing: 0.002rem;
`;

const S = { MuiDatepickerControllerLayout, ErrorMessage };

export default S;
