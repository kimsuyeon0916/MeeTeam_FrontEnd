import React, { useState } from 'react';
import S from './Member.styled';
import {
	MemberCard,
	memberList,
	MEMBER_PLUS_ICON,
	MEMBER_PLUS_CARD,
	MEMBER_BOTTOM_ARROW_ICON,
	MemberContact,
	Option,
} from '../../..';

const Member = () => {
	const leaderOptionList = [
		{
			title: '역할 변경',
			optionClickHandler: () => setRole(true), // 해당 핸들러 대입
		},
		{
			title: '리더 위임',
			optionClickHandler: () => setLeader(true), // 해당 핸들러 대입
		},
		{
			title: '퇴출',
			optionClickHandler: () => setOut(true), // 해당 핸들러 대입
		},
	];

	const memberOptionList = [
		{
			title: '역할 변경', // 해당 옵션 이름 부여
			optionClickHandler: () => setRole(true), // 해당 핸들러 대입
		},
	];

	const [role, setRole] = useState(false);
	const [leader, setLeader] = useState(false);
	const [out, setOut] = useState(false);
	const [totalView, setTotalView] = useState(true);

	const viewHandler = () => {
		setTotalView(!totalView);
	};

	return (
		<S.MemberLayout>
			<S.MemberHeader>
				<div className='member__header-row'>
					<h2 className='main--big-text'>현황</h2>
					<span className='main--middle-text'>총 {memberList.length}명</span>
				</div>
				<div className='member__header-space-row'>
					<div className='member__header-row'>
						<S.MemberViewButton type='button' onClick={viewHandler} $clicked={totalView}>
							전체 보기
						</S.MemberViewButton>
						<S.MemberViewButton type='button' onClick={viewHandler} $clicked={!totalView}>
							연락처 보기
						</S.MemberViewButton>
					</div>
					<div className='member__header-row'>
						<button className='member__button' type='button'>
							역할 순 {MEMBER_BOTTOM_ARROW_ICON}
						</button>
						<S.MemberInviteButton>멤버 초대{MEMBER_PLUS_ICON}</S.MemberInviteButton>
					</div>
				</div>
			</S.MemberHeader>
			{totalView ? (
				<div className='member__grid--total'>
					{memberList.map((member, index) => (
						<div className='main__column' key={index}>
							<S.MemberRoleTag $color={member.role?.[1]}>{member.role?.[0]}</S.MemberRoleTag>
							<div className='member__card'>
								<MemberCard member={member} />
								<span className='member__option'>
									<Option options={leaderOptionList} />
								</span>
							</div>
						</div>
					))}
					<div className='member__plus-card'>
						<button className='member__button' type='button'>
							{MEMBER_PLUS_CARD}
						</button>
					</div>
				</div>
			) : (
				<div className='member__grid--contact'>
					{memberList.map((member, index) => (
						<MemberContact member={member} key={index} />
					))}
				</div>
			)}
		</S.MemberLayout>
	);
};

export default Member;
