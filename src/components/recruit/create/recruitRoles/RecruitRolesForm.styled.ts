import styled from 'styled-components';

const RecruitRoles = styled.section`
	.container-roles {
		display: flex;
		width: 100%;
		margin-top: 4rem;
		min-height: 20rem;

		.wrapper-roles {
			display: flex;
			width: 76.4rem;
			gap: 2rem;
			flex-direction: column;

			.container-role__list {
				display: flex;
				flex-direction: column;
				gap: 1rem;
			}
		}
	}
`;

const S = { RecruitRoles };

export default S;
