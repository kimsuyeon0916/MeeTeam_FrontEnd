import styled from 'styled-components';

const TabMenuLayout = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`;

const TabMenuList = styled.ul`
	display: flex;
	flex-direction: row;
	color: var(--State-unactive, var(--, #8e8e8e));

	/* Body/body1/medium */
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 1.9rem;
	letter-spacing: 0.0032rem;
`;

const TabMenuItem = styled.li<{ $clicked?: boolean }>`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 11.6rem; // width: clamp(45%, 11.6rem, 75%);
	height: 3.6rem;
	border-radius: 0.4rem 0.4rem 0rem 0rem;
	border: ${props => (props.$clicked ? '0.1rem solid #373f41' : '0.1rem solid #8E8E8E')};
	border-bottom: ${props => (props.$clicked ? '0' : '0.1rem solid #373f41')};
	background: ${props => !props.$clicked && '#F6F6F6'};
	color: ${props => !props.$clicked && '#8E8E8E'};
	cursor: pointer;
`;

const TabMenuLine = styled.hr`
	all: unset;
	display: flex;
	height: 0.1rem;
	background: #373f41;
	width: 100%;
`;

const S = { TabMenuLayout, TabMenuList, TabMenuItem, TabMenuLine };

export default S;
