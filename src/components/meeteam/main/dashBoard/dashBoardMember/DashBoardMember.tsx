import React from 'react';
import S from './DashBoardMember.styled';
import { memberList, MeeTeamMember, MEMBER_PLUS_ICON, RadiusProfile } from '../../../..';
import { useSetRecoilState } from 'recoil';
import { contentState } from '../../../../../atom';

const DashBoardMember = () => {
	const setContent = useSetRecoilState(contentState);
	const checkLeader = () => {
		return memberList.find(member => member.authority === '리더');
	};

	const checkMember = () => {
		return memberList.filter(member => member.authority === '멤버');
	};

	const leader: MeeTeamMember | void = checkLeader();
	const members: MeeTeamMember[] = checkMember().slice(0, 3);
	const remainderCount: number = memberList.length - 4;

	return (
		<S.DashBoardMemberLayout>
			<header className='main__row'>
				<h2 className='main--big-text'>멤버</h2>
				<S.DashBoardMemberPlusButton
					className='main--small-text'
					type='button'
					onClick={() => setContent('멤버')}
				>
					멤버 초대
					{MEMBER_PLUS_ICON}
				</S.DashBoardMemberPlusButton>
			</header>
			<div className='dash-board-member__row'>
				<h3>리더</h3>
				<RadiusProfile size='small' url={leader?.imageUrl} />
			</div>
			<div className='dash-board-member__row'>
				<h3>멤버</h3>
				{members.map((member, index) => (
					<S.DashBoardMemberSpan key={index} $index={index}>
						<RadiusProfile key={index} size='small' url={member.imageUrl} />
					</S.DashBoardMemberSpan>
				))}
				{remainderCount > 0 && (
					<span className='dash-board-member__small-text'>
						{MEMBER_PLUS_ICON} {remainderCount}명
					</span>
				)}
			</div>
		</S.DashBoardMemberLayout>
	);
};

export default DashBoardMember;
