import styled from 'styled-components';

interface DateControl {
	$isClicked: boolean;
}

const DateSelect = styled.div<DateControl>`
	margin-top: 0.9rem;

	.react-datepicker-wrapper {
		position: relative;
		width: 100%;
		height: 4.875rem;
	}

	.container-header {
		display: flex;
		justify-content: space-between;
		padding: 1.8rem 4rem;
		box-sizing: border-box;
		align-items: center;

		.header-month {
			display: flex;
			gap: 0.4rem;
			span {
				color: #373f41;
				text-align: center;
				font-size: 1.5rem;
				font-weight: 500;
				line-height: 1.9rem;
				letter-spacing: 0.0032rem;
			}
		}

		.header-btns {
			display: flex;
			background-color: #fff;
			gap: 1.6rem;

			.month-btn {
				width: 1.8rem;
				height: 1.8rem;
				background-color: transparent;

				&:disabled {
					background-color: #fff;
					color: #000;
				}
			}
		}
	}

	.react-datepicker__day-names {
		margin-bottom: -8px;
		display: flex;
		justify-content: center;
		gap: 2.3rem;
		font-size: 1.2rem;
		font-weight: 600;
	}

	.react-datepicker__input-container {
		display: flex;
		align-items: center;
		svg {
			width: 2rem;
			height: 2rem;
			position: absolute;
			right: 1rem;
		}
		input {
			width: 100%;
			height: 4.8rem;
			padding: 1.2rem 1.6rem;
			box-sizing: border-box;
			border-radius: 0.7581rem;
			border: 0.1rem solid #e3e3e3;
			background: #fff;
			color: ${props => (props.$isClicked ? '#000' : '#8e8e8e')};
			font-size: 1.6rem;
			line-height: 1.9rem;
			letter-spacing: 0.0032rem;
			cursor: pointer;

			&:hover {
				border: 1px solid #5877fc;
				transition: 0.2s ease-in-out;
			}

			&:focus {
				outline: none;
				border: 1px solid #5877fc;
			}
		}
	}

	.selectedDay {
		border-radius: 0.4rem;
		background: #5877fc;
		color: #fff;
		display: flex;
		width: 2.7rem;
		height: 2.7rem;
		padding: 0.4rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		font-weight: 600;
		box-sizing: border-box;
	}

	.unselectedDay {
		border-radius: 0.4rem;
		display: flex;
		width: 2.7rem;
		height: 2.7rem;
		padding: 0.4rem;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		box-sizing: border-box;
	}

	.react-datepicker__month-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.react-datepicker__month {
		margin: 0.4rem;
		margin-bottom: 2rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1.3rem;

		.react-datepicker__day-names,
		.react-datepicker__week {
			white-space: nowrap;
			display: flex;
			gap: 1.3rem;
			justify-content: center;
		}
	}

	.react-datepicker-popper {
		z-index: 105;
		width: 100%;
	}
	.react-datepicker {
		font-size: 1.2rem;
		background-color: #fff;
		color: #000;
		border-radius: 0.3rem;
		display: inline-block;
		position: relative;
		width: 100%;
		border-radius: 1rem;
		border: 1px solid #e3e3e3;
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
	}
	.react-datepicker__header {
		text-align: center;
		background-color: #fff;
		border-bottom: none;
		position: relative;
		padding: 0;
	}
`;

const S = { DateSelect };

export default S;
