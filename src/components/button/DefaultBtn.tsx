import React from 'react';
import S from './Button.styled';

interface Button {
	type: 'button' | 'submit';
	title: string;
	disabled?: boolean;
	small?: boolean;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DefaultBtn = ({ type, title, disabled, small, handleClick }: Button) => {
	return (
		<S.DefaultButtonLayout
			type={type}
			disabled={disabled}
			$disabled={disabled}
			$small={small}
			onClick={handleClick}
		>
			{title}
		</S.DefaultButtonLayout>
	);
};

export default DefaultBtn;
