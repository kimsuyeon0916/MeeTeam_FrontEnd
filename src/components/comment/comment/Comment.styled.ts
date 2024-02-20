import styled from 'styled-components';

const Comment = styled.li`
	display: flex;
	gap: 2rem;
	align-items: center;

	.comment-icon {
		display: flex;
	}

	.comment-info {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;

		span:nth-child(1) {
			color: #434343;
			font-size: 1.2rem;
			font-style: normal;
			font-weight: 400;
			line-height: 1.35rem;
			letter-spacing: 0.015rem;
		}
		span:nth-child(2) {
			padding: 0.4rem 1.5rem;
			background-color: #fff;
			color: #373f41;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;
			letter-spacing: 0.015rem;
			border-radius: 0.75rem;
		}
	}
`;

const ReplyInput = styled.div`
	display: flex;
	gap: 2.1rem;
	margin-left: 5rem;

	.user-input__icon {
		width: 3.15rem;
		height: 3.15rem;
		flex-shrink: 0;
	}

	.reply-input {
		width: 76.4rem;
		box-sizing: border-box;
		height: 3.75rem;
		flex-shrink: 0;
		border-radius: 0.75rem;
		border: 0.75px solid #bebebe;
		background: #fff;
		outline: none;
		padding-left: 1.3rem;
	}

	.reply-btn {
		display: flex;
		width: 6.7rem;
		height: 3.75rem;
		padding: 0.75rem;
		justify-content: center;
		align-items: center;
		gap: 0.75rem;
		flex-shrink: 0;
		border-radius: 0.6rem;
		background: #000;
		border: none;
		outline: none;
		color: #fff;
		cursor: pointer;
	}
`;

const S = { Comment, ReplyInput };

export default S;
