import React from 'react';
import S from './Title.styled';

interface Title {
	title: string;
	status: string;
}

const Title = ({ title, status }: Title) => {
	return (
		<S.TitleRow>
			<h1>{title}</h1>
			<S.TitleSpan>{status}</S.TitleSpan>
		</S.TitleRow>
	);
};

export default Title;
