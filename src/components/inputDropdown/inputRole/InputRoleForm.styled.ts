import styled from 'styled-components';

interface InputRoleForm {
	$isRoleClicked: boolean;
	$isSkillClicked: boolean;
	$isNotValid: boolean;
}

const InputRoleForm = styled.article<InputRoleForm>`
	display: flex;
	width: 100%;
	gap: 0.8rem;

	.txt-big {
		color: #f7faff;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.txt4 {
		color: #f85858;
		font-size: 1rem;
		line-height: 1.2rem;
		letter-spacing: 0.002rem;
	}

	.txt2 {
		color: #151515;
		font-size: 1.2rem;
		line-height: 1.4rem;
		letter-spacing: 0.0024rem;
	}

	.body1-medium {
		color: #8e8e8e;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.body2-semibold {
		color: #373f41;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.inputs {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 2.4rem;
		position: relative;

		.inputs-subtitle {
			margin-bottom: -1.6rem;
			.dot {
				color: #f85858;
			}
		}

		.inputs-top {
			display: flex;
			width: 100%;
			gap: 0.8rem;
			position: relative;

			.valid-message__role {
				position: absolute;
				top: 5.3rem;
				left: 1rem;
			}

			.valid-message__count {
				position: absolute;
				top: 5.3rem;
				left: 26.4rem;
			}
		}

		.inputs-bottom {
			display: flex;
			width: 100%;
			gap: 0.8rem;
			box-sizing: border-box;
		}

		.container-role__input {
			width: 24.8rem;
			height: 4.8rem;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;
			border: 0.1rem solid #e3e3e3;
			border-radius: 0.75rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;

			.role-input {
				width: 100%;
				border: none;
				outline: none;
			}

			&:hover {
				border: 1px solid #5877fc;
				transition: 0.2s ease-in-out;
			}

			&:focus-within {
				outline: none;
				border: 1px solid #5877fc;
			}
		}

		.dropdown {
			position: absolute;
			top: 5rem;
			left: 0;
			border: ${props => (props.$isRoleClicked || props.$isSkillClicked) && '0.1rem solid #e3e3e3'};
			width: 24.8rem;
			display: flex;
			flex-direction: column;
			font-size: 1.4rem;
			color: #8e8e8e;
			gap: 1rem;
			padding: 1.2rem 1.6rem;
			z-index: 401;
			background-color: #fff;
			border-radius: 1rem;
			box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);

			span {
				cursor: pointer;
			}
		}

		.dropdown-skill {
			position: absolute;
			top: 15rem;
			width: 66rem;
			border-radius: 1rem;
			border: 1px solid #e3e3e3;
			background: #fff;
			box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
			z-index: 201;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;

			.list-skill {
				display: flex;
				flex-direction: column;
				gap: 1.2rem;

				.skill-element {
					cursor: pointer;
				}

				.no-result {
					display: flex;
					height: 10rem;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					gap: 1.2rem;
					align-self: stretch;
				}
			}

			hr {
				border: none;
				height: 0.1rem;
				background: #e3e3e3;
				margin-top: 1rem;
			}

			.list-selected {
				margin-top: 1rem;

				.wrapper-selected__skills {
					display: flex;
					align-items: center;
					gap: 1.2rem;
				}

				.container-selected__skills {
					display: flex;
					gap: 0.8rem;
					flex-wrap: wrap;
				}
			}

			.mention {
				color: #8e8e8e;
				margin-top: 1.35rem;
			}
		}

		.tags {
			display: inline-flex;
			height: 2.15rem;
			padding: 0.6rem 0.8rem;
			justify-content: space-between;
			align-items: center;
			flex-shrink: 0;
			border-radius: 1.5rem;
			background: #e0e6ff;
			box-sizing: border-box;
		}

		.btn-delete__tag {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: transparent;
			margin-left: 0.6rem;
			color: #54a0ff;
			border: none;
			cursor: pointer;
			padding: 0;

			img {
				width: 1.4rem;
				box-sizing: border-box;
			}
		}

		.count-input {
			width: 16rem;
			height: 4.8rem;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;
			border: 0.1rem solid #e3e3e3;
			border-radius: 0.75rem;

			&:hover {
				border: 1px solid #5877fc;
				transition: 0.2s ease-in-out;
			}
			&:focus {
				outline: none;
				border: 1px solid #5877fc;
			}
		}

		.container-skills {
			position: relative;
			width: 66rem;
			height: 4.8rem;
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;
			border: 0.1rem solid #e3e3e3;
			border-radius: 0.75rem;
			overflow-x: scroll;
			overflow-y: hidden;

			&::-webkit-scrollbar {
				display: none;
			}

			&:hover {
				border: 1px solid #5877fc;
				transition: 0.2s ease-in-out;
			}

			&:focus-within {
				border-color: #5877fc;
			}

			.skills-input {
				display: inline-flex;
				padding: 0;
				height: 4.875rem;
				border: none;
				background: transparent;
				box-sizing: border-box;
				outline: none;
			}

			.icon-search {
				position: absolute;
				width: 2.4rem;
				height: 2.4rem;
				right: 1.3rem;
			}
		}
	}

	.add-btn {
		width: 4.2rem;
		height: 4.2rem;

		button {
			display: flex;
			width: 9.2rem;
			height: 4.8rem;
			padding: 1.2rem 3.2rem;
			justify-content: center;
			align-items: center;
			gap: 0.75rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0.6rem;
			background: #5877fc;
		}
	}
`;

const S = { InputRoleForm };

export default S;
