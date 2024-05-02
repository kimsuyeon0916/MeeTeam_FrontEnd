import styled from 'styled-components';

const ReplyComment = styled.div`
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.reply-icon {
		margin-right: 1.55rem;
		margin-bottom: 2rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: 0.8rem;
		width: 100%;

		.input-edit {
			width: 86%;
			border: none;
			border-bottom: 1px solid #373f41;
			background-color: transparent;
			outline: none;
			padding-bottom: 0.5rem;
			font-size: 1.5rem;
		}

		.comment-icon {
			display: flex;
			align-items: center;
			gap: 0.6rem;

			.nickname {
				color: #373f41;
				font-size: 1.2rem;
				font-weight: 600;
			}

			.createAt {
				color: #8e8e8e;
				font-size: 1.2rem;
			}
		}

		.comment-info {
			display: flex;
			flex-direction: column;
			gap: 0.3rem;

			span {
				color: #373f41;
				font-size: 1.2rem;
			}

			.edit-container {
				display: flex;
				flex-direction: column;

				.edit-input {
					margin-top: 0.8rem;
					width: 100%;
					box-sizing: border-box;
					height: 3.75rem;
					border-radius: 0.75rem;
					border: 0.75px solid #bebebe;
					background: #fff;
					outline: none;
					padding-left: 1.3rem;
				}

				.btn-container {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					margin-top: 1.6rem;
					gap: 1.2rem;

					button {
						display: inline-flex;
						height: 3.6rem;
						padding: 1.2rem 2rem;
						justify-content: center;
						align-items: center;
						flex-shrink: 0;
						border-radius: 0.6rem;
					}

					.cancel {
						border: 1px solid #e3e3e3;
						background: #fff;
					}

					.save {
						color: #f7faff;
						background: #5877fc;
					}
				}
			}
		}
	}

	hr {
		height: 0.075rem;
		margin: 1.6rem 0;
		width: 100%;
		opacity: 0.96;
		background: #e3e3e3;
	}
`;

const S = { ReplyComment };

export default S;
