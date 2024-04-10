import styled from 'styled-components';

interface InputRoleForm {
	$isRoleClicked: boolean;
	$isSkillClicked: boolean;
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

	.body1-medium {
		color: #8e8e8e;
		font-size: 1.6rem;
		line-height: 1.9rem;
		letter-spacing: 0.0032rem;
	}

	.inputs {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 0.8rem;
		position: relative;

		.inputs-top {
			display: flex;
			width: 100%;
			gap: 0.8rem;
		}

		.inputs-bottom {
			display: flex;
			width: 100%;
			gap: 0.8rem;
			box-sizing: border-box;
		}

		.dropdown {
			position: absolute;
			top: 4.5rem;
			border: ${props => (props.$isRoleClicked || props.$isSkillClicked) && '0.1rem solid #e3e3e3'};
			width: 20.6%;
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

		.skill {
			right: 0rem;
			width: 65.7%;
		}

		.role-input {
			width: 30%;
			height: 4.8rem;
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
			height: 4.8rem;
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
