import React from 'react';
import S from './GoBack.styled';
import { useNavigate } from 'react-router-dom';

const GoBack = ({
	clickHandler,
	style,
}: {
	clickHandler?: React.MouseEventHandler<SVGAElement>;
	style?: string;
}) => {
	const navigate = useNavigate();

	return (
		<>
			<S.GoBackButton
				type='button'
				onClick={clickHandler ? clickHandler : () => navigate(-1)}
				$style={style}
			/>
		</>
	);
};

export default GoBack;
