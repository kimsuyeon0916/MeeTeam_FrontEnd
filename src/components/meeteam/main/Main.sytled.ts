import styled from 'styled-components';

const MainLayout = styled.div`
	display: flex;
	font-size: 1.6rem;
	flex-direction: column;
	width: clamp(50%, 108rem, 70%);
	background-color: #F7FAFF;
	margin: 0 auto;
	margin-bottom: 10%;
	border-radius: 0vw 0vw 0.417vw 0.417vw;
	border-left: 0.15rem solid #BCD7FF;
	border-right: 0.15rem solid #BCD7FF;
	border-bottom: 0.15rem solid #BCD7FF;
	padding: 3.75rem;
`;

const S = { MainLayout };

export default S;
