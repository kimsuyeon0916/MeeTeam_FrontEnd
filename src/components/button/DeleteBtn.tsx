import React from 'react';
import S from './Button.styled';
import { Delete } from '../../assets';

const DeleteBtn = ({
	handleClick,
}: {
	handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
	return (
		<S.IconButtonLayout type='button' $add={false} onClick={handleClick}>
			<img src={Delete} alt='deleteButton' />
		</S.IconButtonLayout>
	);
};

export default DeleteBtn;
