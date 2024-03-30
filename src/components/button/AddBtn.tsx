import React from 'react';
import S from './Button.styled';
import { Add } from '../../assets';

const AddBtn = ({ handleClick }: { handleClick: React.MouseEventHandler<HTMLButtonElement> }) => {
	return (
		<S.ButtonLayout type='button' $add={true} onClick={handleClick}>
			<img src={Add} alt='addButton' />
		</S.ButtonLayout>
	);
};

export default AddBtn;
