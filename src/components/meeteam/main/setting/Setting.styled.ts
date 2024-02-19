import styled from 'styled-components';
import Main from '../Main.styled';

const SettingLayout = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.8rem;
`;

const SettingArticle = styled(Main.MainArticle)`
	display: flex;
	flex-direction: row;
	padding: 1.65rem 2.55rem;
	align-items: center;
	column-gap: 2.55rem;
	font-size: 1.5rem;
	font-weight: 400;
`;

const SettingButton = styled.button<{ $color?: string }>`
	all: unset;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	height: 3.45rem;
	padding: 0 1.5rem;
	border-radius: 0.6rem;
	background: ${props => (props.$color ? props.$color : '#5877FC')};
	color: #fff;
	font-size: 1.5rem;
	cursor: pointer;
`;

const S = { SettingLayout, SettingArticle, SettingButton };

export default S;
