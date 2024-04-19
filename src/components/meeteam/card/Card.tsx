import React from 'react';
import S from './Card.styled';

const Card = () => {
	return (
		<S.Card>
			<div className='tag-container'>
				<div></div>
				<div></div>
				<img src='https://ifh.cc/g/YO5Z7z.jpg' />
			</div>
		</S.Card>
	);
};

export default React.memo(Card);
