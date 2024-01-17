import styled from 'styled-components';
import Main from '../Main.styled';

const LinkForm = styled.form`
	min-width: 0;
`;

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
		flex-direction: row;
		align-items: center;
		column-gap: 1.8rem;
	}

	.link__button-row {
		display: flex;
		flex-direction: row;
		column-gap: 0.4rem;
		margin-left: auto;
	}

	.link__icon {
		display: flex;
		flex: 1 1 0;
	}
`;

const LinkInput = styled.input`
	all: unset;
	padding: 0 1rem;
	flex: 6 1 0;
	height: 3.45rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #e3e3e3;
	background: #fff;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

const LinkAnchor = styled.a`
	flex: 6 1 0;
	color: var(--text-color, #151515) !important;
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
	height: 2.3rem;
	padding: 0 1rem;
	font-size: 1.2rem;
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
	LinkForm,
	LinkLayout,
	LinkInput,
	LinkAnchor,
	LinkImageIcon,
	LinkCopyIcon,
	LinkSaveButton,
	LinkCancelButton,
};

export default S;
