import styled from 'styled-components';
import Main from '../Main.styled';

const LinkLayout = styled(Main.MainArticle)`
	display: flex;
	flex: 1;
	flex-direction: column;
	row-gap: 1.35rem;
	padding: 1.65rem 2.55rem;
	height: 26.25rem;
	background: #fff;

	.link__row {
		display: flex;
		align-items: center;
		column-gap: 1.8rem;
	}

	.link__button-row {
		display: flex;
		flex-direction: row;
		column-gap: 0.4rem;
		margin-left: auto;
	}
`;

const LinkInput = styled.input`
	all: unset;
	padding: 0 1rem;
	width: 26.125rem;
	height: 3.45rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #e3e3e3;
	background: #fff;
`;

const LinkAnchor = styled.a`
	width: 26.125rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

const LinkImageIcon = styled.img`
	width: 3.6rem;
	height: 3.6rem;
	border-radius: 0.6rem;
`;

const LinkCopyIcon = styled.img`
	width: 2.25rem;
	height: 2.1964rem;
	cursor: pointer;
`;

const LinkSaveButton = styled.button`
	all: unset;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	font-size: 0.8rem;
	border-radius: 0.6rem;
	background: var(--main-color, #5877fc);
	color: #fff;
	cursor: pointer;
`;

const LinkCancelButton = styled(LinkSaveButton)`
	background: #ededed;
	color: #000;
`;

const S = {
	LinkLayout,
	LinkInput,
	LinkAnchor,
	LinkImageIcon,
	LinkCopyIcon,
	LinkSaveButton,
	LinkCancelButton,
};

export default S;
