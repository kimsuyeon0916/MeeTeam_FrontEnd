import styled from 'styled-components';

const RecruitRoles = styled.section`
	.container-roles {
		display: flex;
		width: 100%;
		margin-top: 4rem;
		min-height: 20rem;

		.container-roles__control {
			display: flex;
			width: 76.4rem;
			gap: 0.8rem;

			.inputs {
				display: flex;
				width: 100%;
				gap: 0.8rem;

				.role-input {
					width: 30%;
					height: 4.2rem;
					padding: 0 1.3rem;
					box-sizing: border-box;
					border: 0.1rem solid #e3e3e3;
					border-radius: 0.75rem;
				}

				.count-input {
					width: 15%;
					height: 4.2rem;
					padding: 0 1.3rem;
					box-sizing: border-box;
					border: 0.1rem solid #e3e3e3;
					border-radius: 0.75rem;
				}

				.container-skills {
					width: 100%;
					position: relative;
					height: 4.2rem;
					display: flex;
					align-items: center;
					flex-wrap: nowrap;
					padding: 0 1.3rem;
					box-sizing: border-box;
					border: 0.1rem solid #e3e3e3;
					border-radius: 0.75rem;
					overflow-x: scroll;
					overflow-y: hidden;

					&::-webkit-scrollbar {
						display: none;
					}

					.skills-input {
						display: inline-flex;
						min-width: 25rem;
						padding: 0;
						height: 4.875rem;
						border: none;
						outline: none;
						font-size: 1.4rem;
						background: transparent;
						outline: none;
						padding-left: 1.3rem;
						box-sizing: border-box;
					}

					.container-tags {
						display: inline-flex;
						height: 2.15rem;
						padding: 1.5rem 0 1.5rem 1.125rem;
						justify-content: center;
						align-items: center;
						flex-shrink: 0;
						margin: 5px;
						border-radius: 7.5rem;
						background: #e0e6ff;
						color: #373f41;
						font-size: 1.5rem;
						font-style: normal;
						font-weight: 400;
						line-height: 1.8rem;
						letter-spacing: 0.02rem;
						box-sizing: border-box;
					}

					button {
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: transparent;
						margin-left: 5px;
						border-radius: 50%;
						color: #54a0ff;
						border: none;
						box-sizing: border-box;
						cursor: pointer;

						img {
							width: 2rem;
							box-sizing: border-box;
						}
					}
				}
			}

			.add-btn {
				width: 4.2rem;
				height: 4.2rem;
				button {
					width: 4.2rem;
					height: 4.2rem;
					border-radius: 0.75rem;
					background: #fff;
					border: 0.1rem solid #e3e3e3;
					display: flex;
					justify-content: center;
					align-items: center;

					img {
						width: 2rem;
					}
				}
			}
		}
	}
`;

const S = { RecruitRoles };

export default S;
