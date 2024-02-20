import styled from 'styled-components';

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

const S = { ReplyInput };

export default S;
