import React, { useState } from 'react';
import S from './RecruitManagePage.styled';

const RecruitPostingBookmark = () => {
	const [menuState, setMenuState] = useState({
		all: true,
		doing: false,
		done: false,
	});

	const onClickMenu = (event: React.MouseEvent<HTMLSpanElement>) => {
		const { innerText } = event.target as HTMLElement;
		if (innerText === '전체') {
			setMenuState({ all: true, doing: false, done: false });
		} else if (innerText === '구인중') {
			setMenuState({ all: false, doing: true, done: false });
		} else if (innerText === '마감') {
			setMenuState({ all: false, doing: false, done: true });
		}
	};
	return (
		<S.MyActivityRecruit>
			<article>
				<h2>북마크한 구인글</h2>
			</article>
			<article className='wrapper'>
				<section className='container-filter'>
					<span className={`menu body1 ${menuState.all && 'active'}`} onClick={onClickMenu}>
						전체
					</span>
					<span className={`menu body1 ${menuState.doing && 'active'}`} onClick={onClickMenu}>
						구인중
					</span>
					<span className={`menu body1 ${menuState.done && 'active'}`} onClick={onClickMenu}>
						마감
					</span>
				</section>
			</article>
		</S.MyActivityRecruit>
	);
};

export default RecruitPostingBookmark;
