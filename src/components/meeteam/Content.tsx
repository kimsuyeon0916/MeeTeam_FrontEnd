import React, { useState } from 'react';
import { Menu, Main } from '..';

const Content = () => {
	const [content, setContent] = useState('대시보드');
	const clickedHandler: React.MouseEventHandler<HTMLButtonElement> = e => {
		const button = e.target as HTMLButtonElement;
		if (!button.textContent) {
			throw new Error('No Content');
		}
		setContent(button.textContent);
	};

	return (
		<>
			<Menu menu={content} clickedHandler={clickedHandler} />
			<Main content={content} />
		</>
	);
};

export default Content;
