import styled from 'styled-components';

interface CommentDepth {
	depth?: number;
}

const Comment = styled.li<CommentDepth>`
	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.container {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.comment-icon {
		display: flex;
		width: ${props => (props.depth === 1 ? '2.5rem' : '')};
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

	.reply-btn {
		background-color: transparent;
		margin-left: -1.5rem;
	}

	.container-reply__lists {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		margin-left: 5rem;
		gap: 2rem;
	}
`;

const S = { Comment };

export default S;
