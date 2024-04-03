import React from 'react';
import S from './Button.styled';

interface Button {
	type: 'button' | 'submit';
	title: string;
	small?: boolean;
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryBtn = ({ type, title, small, handleClick }: Button) => {
	return (
		<S.PrimaryButtonLayout type={type} $small={small} onClick={handleClick}>
			{title}
		</S.PrimaryButtonLayout>
	);
};

export default PrimaryBtn;
