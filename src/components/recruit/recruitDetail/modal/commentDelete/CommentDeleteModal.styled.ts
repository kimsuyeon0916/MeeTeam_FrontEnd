import styled from 'styled-components';

const CommentDeleteModal = styled.section`
	display: flex;
	width: 30rem;
	height: 20rem;
	padding: 1.8rem 2rem;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
	border: 1px solid #e3e3e3;
	background: #f8fafb;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 501;

	.description {
		margin-top: 2.8rem;
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}

	.body2-medium {
		color: #373f41;
		text-align: center;
		font-size: 1.4rem;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.btn-txt {
		color: #373f41;
		font-size: 1.4rem;
		line-height: 1.7rem;
		letter-spacing: 0.0028rem;
	}

	.btn-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 4rem;
		gap: 1.6rem;

		button {
			display: flex;
			height: 3.6rem;
			padding: 1.2rem 2rem;
			justify-content: center;
			align-items: center;
			border-radius: 0.6rem;
		}

		.cancel {
			border: 1px solid #e3e3e3;
			background: #fff;
		}

		.confirm {
			background: #f85858;
			color: #f8fafb;
		}
	}
`;

const S = { CommentDeleteModal };

export default S;
