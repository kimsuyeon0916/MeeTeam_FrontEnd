import styled from 'styled-components';

const MemberContactLayout = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 1.2rem;
	padding: 1.8rem 3rem;
	border-radius: 0.75rem;
	border: 0.075rem solid #cdcdcd;
	background: #fdfdfd;
	color: var(--text-color, #000);
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 0.015rem;

	.member-contact__row {
		display: flex;
		flex-direction: row;
		column-gap: 3rem;
		// align-items: center; /* 태그 위치가 상단인 경우 주석 */
	}

	.member-contact__tag-row {
		display: flex;
		flex-direction: row;
		column-gap: 0.3rem;
		align-items: center;
		font-size: 1.2rem;
	}

	.member-contact__profile-column {
		display: flex;
		flex-direction: column;
		row-gap: 0.75rem;
		align-items: center;
	}

	.member-contact__title {
		color: var(--Light-Black, var(--text-color-2, #373f41));
	}

	.member-contact__task {
		color: #4d4d4d;
		font-size: 0.9rem;
	}

	.member-contact__information-column {
		display: flex;
		flex-direction: column;
		row-gap: 1.2rem;
		width: 100%;
		line-height: 1.56rem;
	}

	.member-contact__label-title {
		display: flex;
		color: #878787;
		flex: 1 1 0;
	}

	.member-contact__information-row {
		display: flex;
		flex-direction: row;
	}

	.member-contact__informaion-content {
		display: flex;
		flex: 2 1 0;
	}
`;

const MemberContactTag = styled.span<{ $color?: string }>`
	display: flex;
	padding: 0.2rem 0.6rem;
	justify-content: center;
	align-items: center;
	border-radius: 0.3rem;
	background: ${props => (props.$color ? props.$color : '#EEECFF')};
	line-height: 1.35rem;
	letter-spacing: 0.015rem;
`;

const MemberContactCopyLink = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	margin-left: auto;
	cursor: pointer;
`;

const S = { MemberContactLayout, MemberContactTag, MemberContactCopyLink };

export default S;
