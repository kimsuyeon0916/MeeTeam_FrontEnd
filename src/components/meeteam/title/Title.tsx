import React from 'react';
import S from './Title.styled';

const Title = (props: { title: string; status: string }) => {
	return (
		<S.TitleRow>
			<h1>{props.title}</h1>
			<S.TitleSpan>{props.status}</S.TitleSpan>
		</S.TitleRow>
	);
};

export default Title;
