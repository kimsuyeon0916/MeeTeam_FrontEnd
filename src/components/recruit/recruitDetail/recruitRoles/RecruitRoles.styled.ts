import styled from 'styled-components';

const RecruitRoles = styled.article`
	margin-top: 8rem;
	overflow: hidden;
	width: 100%;

	.scroll {
		width: 100%;
		height: 29rem;
		overflow-x: scroll;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	.container-roles {
		width: max-content;
		margin-top: 1.98rem;
		white-space: nowrap;
		display: flex;
		gap: 1.6rem;
		background-color: #fff;
	}
`;

const S = { RecruitRoles };

export default S;
