import { styled } from '@mui/material/styles';
import { TextField, Popper } from '@mui/material';
import { PickersLayout } from '@mui/x-date-pickers/PickersLayout';

const StyledTextField = styled(TextField)({
	fieldset: {
		all: 'unset',
	},

	'div:first-of-type': {
		padding: '0',
		width: '100%',
		fontFamily: 'Pretendard',
		fontSize: '1.6rem',
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: '1.9rem',
		letterSpacing: '0.0032rem',
		color: 'var(--Text-textColor2, #373f41)',
		'div:first-of-type': {
			all: 'unset',
		},
		cursor: 'pointer !important',
	},

	all: 'unset',
	display: 'flex',
	flex: '1',
	padding: '0 1.6rem',
	height: '4.8rem',
	borderRadius: '1rem',
	border: '0.1rem solid #e3e3e3',
	'&:hover, &:focus': {
		borderColor: 'var(--Form-border-focus, #5877fc)',
	},
	cursor: 'pointer !important',

	input: {
		padding: '0',
		'::placeholder': {
			color: 'black',
		},
		cursor: 'pointer !important',
	},

	button: {
		all: 'unset',
		display: 'flex',
		cursor: 'pointer',
		':hover': {
			background: 'transparent',
		},
		img: {
			color: 'black',
		},
	},
});

const StyledPopper = styled(Popper)({
	'.MuiPaper-root': {
		margin: '0.4rem 0',
		borderRadius: ' 1rem',
		border: '1px solid var(--box_stroke, #E3E3E3)',
		background: 'var(--Grayscale-000, #FFF)',
		boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
		overflow: 'hidden',
	},
});

const StyledPickersLayout = styled(PickersLayout)({
	'.MuiDateCalendar-root': {
		all: 'unset',
		width: '25.3rem',
		height: '28rem',
	},
	'.MuiYearCalendar-root,.MuiMonthCalendar-root': {
		width: 'auto',
	},
	'.MuiPickersYear-yearButton, .MuiPickersMonth-monthButton': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '0.2rem 1.2rem',
		width: '4.8rem',
		height: '4.8rem',
		borderRadius: '0.4rem',
		':hover': {
			background: ' var(--Grayscale-200, #F6F6F6)',
		},
		fontFamily: 'Pretendard',
		fontSize: '1.6rem',
		fontStyle: 'normal',
		fontWeight: '600',
		lineHeight: '1.9rem',
		letterSpacing: '0.0032rem',
	},
	'.MuiPickersCalendarHeader-labelContainer': {
		color: 'var(--text-color-2, #373F41)',
		fontFamily: 'Pretendard',
		fontSize: '1.6rem',
		fontStyle: 'normal',
		fontWeight: '600',
		lineHeight: '1.9rem',
		letterSpacing: '0.0032rem',
	},
	'.MuiDayCalendar-weekDayLabel': {
		fontWeight: '600',
	},
	'.MuiPickersDay-root': {
		':not(.Mui-selected)': {
			backgroundColor: 'transparent',
		},
		':hover': {
			background: ' var(--Grayscale-200, #F6F6F6)',
		},
	},
	'.Mui-selected': {
		backgroundColor: 'var(--main-color, #5877FC) !important',
	},
	'.MuiDayCalendar-weekDayLabel,.MuiPickersDay-root': {
		display: 'flex',
		width: '2.7rem',
		height: '2.7rem',
		margin: '0 0.2rem',
		borderRadius: '0.4rem',
		color: 'var(--text-color-2, #373F41)',
		fontFamily: 'Pretendard',
		fontSize: '1.2rem',
		fontStyle: 'normal',
		fontWeight: '500',
		lineHeight: '1.4rem',
		letterSpacing: '0.0024rem',
	},
});

const S = { StyledTextField, StyledPopper, StyledPickersLayout };

export default S;
