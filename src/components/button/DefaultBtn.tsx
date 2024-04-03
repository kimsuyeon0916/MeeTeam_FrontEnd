import React from 'react';
import S from './Button.styled';

interface Button {
	type: 'button' | 'submit';
	title: string;
	small?: boolean;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const DefaultBtn = ({ type, title, small, handleClick }: Button) => {
	return (
		<S.DefaultButtonLayout type={type} $small={small} onClick={handleClick}>
			{title}
		</S.DefaultButtonLayout>
	);
};

export default DefaultBtn;
