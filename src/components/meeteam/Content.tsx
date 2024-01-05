import React from 'react';
import { Menu, Main } from '..';
import { useRecoilState } from 'recoil';
import { contentState } from '../../atom';

const Content = () => {
	const [content, setContent] = useRecoilState(contentState);
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
