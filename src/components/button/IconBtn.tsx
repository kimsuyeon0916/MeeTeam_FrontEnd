import React from 'react';
import S from './Button.styled';

const IconBtn = ({
	icon,
	handleClick,
}: {
	icon: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<S.IconButtonLayout type='button' $add onClick={handleClick}>
			<img src={icon} alt='addButton' />
		</S.IconButtonLayout>
	);
};

export default IconBtn;
