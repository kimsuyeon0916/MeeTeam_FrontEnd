import styled from 'styled-components';

interface InputRoleForm {
	$isRoleClicked: boolean;
	$isSkillClicked: boolean;
}

const InputRoleForm = styled.article<InputRoleForm>`
	display: flex;
	width: 100%;
	gap: 0.8rem;

	.inputs {
		display: flex;
		width: 100%;
		gap: 0.8rem;
		position: relative;

		.dropdown {
			position: absolute;
			top: 4.5rem;
			border: ${props => (props.$isRoleClicked || props.$isSkillClicked) && '0.1rem solid #e3e3e3'};
			width: 20.6%;
			display: flex;
			flex-direction: column;
			border-radius: 0.75rem;
			font-size: 1.2rem;
			color: #373f41;
			gap: 1rem;
			padding: 1rem 2rem;
			z-index: 401;
			background-color: #fff;

			span {
				cursor: pointer;
			}
		}

		.skill {
			right: 0rem;
			width: 65.7%;
		}

		.role-input {
			width: 30%;
			height: 4.2rem;
			padding: 0 1.3rem;
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

		.count-input {
			width: 15%;
			height: 4.2rem;
			padding: 0 1.3rem;
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
				font-size: 1.4rem;
				background: transparent;
				box-sizing: border-box;
				outline: none;
			}

			.tags {
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
`;

const S = { InputRoleForm };

export default S;
