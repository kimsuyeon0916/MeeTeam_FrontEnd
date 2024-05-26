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
			position: relative;

			.container-role__list {
				display: flex;
				flex-direction: column;
				gap: 1rem;
			}

			.valid-msg {
				position: absolute;
				top: 15rem;
				left: 1rem;
				color: #f85858;
				font-size: 1rem;
				line-height: 1.2rem;
				letter-spacing: 0.002rem;
			}
		}
	}
	.wrapper-btn__add {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		margin-top: 3.2rem;
	}
	.btn-add {
		border: none;
		background-color: transparent;
		padding: 0;
		margin-top: 0.3rem;
	}
`;

const S = { RecruitRoles };

export default S;
