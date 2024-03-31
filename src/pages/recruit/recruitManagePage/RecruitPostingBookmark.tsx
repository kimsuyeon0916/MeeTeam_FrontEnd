import React, { useState } from 'react';
import S from './RecruitManagePage.styled';
import { Dropdown, RecruitCard } from '../../../components';

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
		<S.RecruitManage>
			<article>
				<h2>북마크한 구인글</h2>
			</article>
			<article className='wrapper'>
				<section className='container-menu'>
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
				<section className='container-dropdown'>
					<Dropdown data={['전체', '교내', '교외']} initialData='범위' normalVersion={true} />
					<Dropdown data={['전체', '프로젝트', '스터디', '공모전']} initialData='유형' />
				</section>
				<section className='container-contents'>
					<RecruitCard
						id={1}
						title={'안녕하세요'}
						category={'프로젝트'}
						writerNickname={'승준염'}
						writerProfileImg={''}
						deadline={'2024-09-27'}
						scope={'교내'}
						isBookmarked={false}
						key={1}
					/>
					<RecruitCard
						id={1}
						title={'안녕하세요'}
						category={'프로젝트'}
						writerNickname={'승준염'}
						writerProfileImg={''}
						deadline={'2024-09-27'}
						scope={'교내'}
						isBookmarked={false}
						key={1}
					/>
					<RecruitCard
						id={1}
						title={'안녕하세요'}
						category={'프로젝트'}
						writerNickname={'승준염'}
						writerProfileImg={''}
						deadline={'2024-09-27'}
						scope={'교내'}
						isBookmarked={false}
						key={1}
					/>
					<RecruitCard
						id={1}
						title={'안녕하세요'}
						category={'프로젝트'}
						writerNickname={'승준염'}
						writerProfileImg={''}
						deadline={'2024-09-27'}
						scope={'교내'}
						isBookmarked={false}
						key={1}
					/>
				</section>
			</article>
		</S.RecruitManage>
	);
};

export default RecruitPostingBookmark;
