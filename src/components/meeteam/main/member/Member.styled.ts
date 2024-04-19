import styled from 'styled-components';
import Main from '../Main.styled';

const MemberLayout = styled(Main.MainArticle)`
	display: flex;
	flex-direction: column;
	row-gap: 3rem;
	padding: 2.4rem 2.55rem;
	font-size: 1.5rem;
	font-weight: 500;

	.member__grid--total {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		column-gap: 1.8rem;
		row-gap: 3rem;
	}

	.member__grid--contact {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1.8rem;
		row-gap: 3rem;
	}

	.member__card {
		position: relative;
	}

	.member__option {
		position: absolute;
		right: 0.63rem;
		top: 0.9rem;
	}

	.member__plus-card {
		display: flex;
		flex-direction: column-reverse;
	}

	.member__button {
		all: unset;
		cursor: pointer;
	}
`;

const MemberHeader = styled.header`
	display: flex;
	flex-direction: column;
	row-gap: 1.65rem;

	.member__header-row {
		display: flex;
		align-items: center;
		flex-direction: row;
		column-gap: 0.75rem;
	}

	.member__header-space-row {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		column-gap: 0.75rem;
		font-size: 1.2rem;
		font-weight: 400;
	}
`;

const MemberViewButton = styled.button<{ $clicked?: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 8.1rem;
	height: 2.55rem;
	border-radius: 7.5rem;
	color: ${props => (props.$clicked ? '#FFFFFF' : '#373F41')};
	background: ${props =>
		props.$clicked
			? 'linear-gradient(270deg, rgba(95, 92, 236, 0.76) -6.3%, #D85CEC 101.52%)'
			: '#FFFFFF'};
	border: ${props => (props.$clicked ? 0 : 'solid #C5C5C5')};
	font-size: 1.2rem;
	font-weight: 400;
	cursor: pointer;
`;

const MemberInviteButton = styled(MemberViewButton)`
	column-gap: 0.45rem;
	border: 0;
	padding: 0.75rem;
	border-radius: 0.6rem;
	color: #fff;
	background: var(--main-color, #5877fc);
	fill: #fff;
`;

const MemberRoleTag = styled.div<{ $color?: string }>`
	display: flex;
	width: fit-content;
	margin-left: 0.6rem;
	border-radius: 0.3rem 0.3rem 0rem 0rem;
	padding: 0.6rem 1.2rem;
	font-size: 1.2rem;
	font-weight: 400;
	color: #000;
	background: ${props => props.$color};
`;

const MemberInviteCard = styled.div`
	display: flex;
	min-width: 0;
	max-width: 24rem;
	padding: 2.4rem 1.26rem;
	height: 13.5rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #cdcdcd;
	background: #fdfdfd;
	color: var(--text-color, #151515);
	font-size: 0.9rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.08rem;
	letter-spacing: 0.015rem;
`;

const MemberCardLayout = styled.article`
	display: flex;
	min-width: 0;
	max-width: 24rem;
	padding: 2.4rem 3rem;
	height: 13.5rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #cdcdcd;
	background: #fdfdfd;
	color: var(--text-color, #151515);
	font-size: 0.9rem;
	font-style: normal;
	font-weight: 400;
	line-height: 1.08rem;
	letter-spacing: 0.015rem;

	.member-card__title {
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 500;
	}

	.member-card__row {
		display: flex;
		column-gap: 1.8rem;
		align-items: center;
	}

	.member-card__column {
		display: flex;
		flex-direction: column;
		row-gap: 1.1rem;
	}

	.member-card__tag-column {
		display: flex;
		flex-direction: row;
		column-gap: 0.45rem;
		color: #373f41;
	}

	.member-card__row--small-text {
		display: flex;
		flex-direction: row;
		font-size: 1.3rem;
		align-items: center;
		column-gap: 0.3rem;
		color: #696969;
	}

	.member-card__column--small-text {
		display: flex;
		flex-direction: column;
		row-gap: 0.4rem;
		color: #696969;
	}
`;

const S = {
	MemberLayout,
	MemberHeader,
	MemberViewButton,
	MemberInviteButton,
	MemberRoleTag,
	MemberInviteCard,
	MemberCardLayout,
};

export default S;
