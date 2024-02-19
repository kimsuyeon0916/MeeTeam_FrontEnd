import styled from 'styled-components';

const MemberSelect = styled.div`
	margin: 0 0 10px 0;
	display: flex;
	min-height: 9.975rem;

	.subtitle {
		display: flex;
		width: 4.575rem;
		height: 1.2rem;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
		color: var(--Light-Black, #373f41);
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.35rem; /* 90% */
		letter-spacing: 0.015rem;
		margin-top: 1.3rem;
		margin-left: 1.38rem;
	}

	.area-profile {
		width: 25%;
		padding: 0.55rem 0.55rem;
		box-sizing: border-box;
		border-top-left-radius: 0.75rem;
		border-bottom-left-radius: 0.75rem;
		border: 0.75px solid #b0b0b0;
		background: #f9f9f9;

		.profile-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 10px 0 0 1.5rem;

			.profile-info--icon {
				width: 28px;
				height: 28px;
				border: 1.5px solid #000;
				border-radius: 50%;
				font-size: 28px;
				background-color: #ababab;
				cursor: pointer;
			}

			.profile-info--name {
				margin-right: 2.5rem;
			}
		}
	}

	.area-role {
		width: 25%;
		padding: 0.55rem 0.55rem;
		box-sizing: border-box;
		border-top: 0.75px solid #b0b0b0;
		border-bottom: 0.75px solid #b0b0b0;
		background: #eaf7ff;

		.role-info {
			margin-top: 10px;
			margin-left: 1rem;
			width: 90%;
		}
	}

	.area-task {
		width: 20%;
		background-color: #95afc0;
		padding: 0.55rem 0.55rem;
		box-sizing: border-box;

		.task-info {
			margin-top: 10px;
			width: 90%;
		}
	}

	.area-qualification {
		width: 50%;
		padding: 0.55rem 0.55rem;
		box-sizing: border-box;
		border-top-right-radius: 0.75rem;
		border-bottom-right-radius: 0.75rem;
		border: 0.75px solid #b0b0b0;
		background: #e0e6ff;

		.qualification-info {
			margin-top: 10px;
			margin-left: 0.7rem;
			width: 90%;
		}
	}
`;

const S = { MemberSelect };

export default S;
