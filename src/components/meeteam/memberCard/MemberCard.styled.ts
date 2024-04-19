import styled from 'styled-components';

const MemberCardLayout = styled.article`
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

	.member-card__title {
		font-size: 1.2rem;
		font-style: normal;
		font-weight: 500;
	}

	.member-card__row {
		display: flex;
		column-gap: 1.26rem;
	}

	.member-card__column {
		display: flex;
		flex-direction: column;
		row-gap: 0.75rem;
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
		align-items: center;
		column-gap: 0.3rem;
		color: #696969;
	}

	.member-card__column--small-text {
		display: flex;
		flex-direction: column;
		row-gap: 0.3rem;
		color: #696969;
	}
`;

const MemberCardTag = styled.span<{ $color?: string }>`
	display: flex;
	padding: 0.45rem 0.75rem;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	border-radius: 7.5rem;
	background: ${props => props.$color};
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

const S = { MemberCardLayout, MemberCardTag };

export default S;
