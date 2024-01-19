import React from 'react';
import styled from 'styled-components';
import { MemberCard, MeeTeamMember } from '../../../index';
import { useRecoilState } from 'recoil';
import { memberListState } from '../../../../atom';

interface Member {
	id: string;
}

const MemberTest = ({ id }: Member) => {
	const memberTemp: MeeTeamMember = {
		nickName: '송지원',
		imageUrl:
			'https://s3-alpha-sig.figma.com/img/3d31/266c/b4e2b4773a0682af9a42fabb250a9d02?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TktynfgbHdnilaMCkMMl5PICIApL8Bk1Vmhez9IYih8JfPbQ3akPmgpK8y0T9kBLNSx6mx6TuOd7d8WOCblUl1PIlrRlfvMPPb5GjFiP0l8321tgRCTQFfjnl8m1SM9Ux789Rv7q7SAFin9GdTWBcb6E1SgfdBY8oKAthbBKl2o0ekcXA5bmrEjdZAMUe1zVO289tyXCYJWBIEVM7NStSCYJW3vy1OQroHr7THPma8mow-8wj9bOR0prlQIPdazKjlBeDVxI2j4gxam1ifGFla~J8WhN3edDGbK4uyMqxiLX6R53PwZx1LhOPdsdL6LEGTk4TWrXqQlddaKGe0hxyA__',
		email: 'jiwon@kw.ac.kr',
		phone: '',
		authority: '리더',
		role: ['디자인', '#F7E8FB'],
		task: '디자이너',
		school: '세종대학교',
		introduction: '열심히 하겠습니다!☺️',
		specifications: [['Figma', `#E0E6FF`]],
		id: id,
	};
	const [memberList, setMemberList] = useRecoilState(memberListState);

	const onClickDelete = (event: any) => {
		console.log(+event.target.id);
		let temp = [...memberList];
		if (event.target instanceof Element) {
			const deletedIndex = Number(event.target.id);
			temp.splice(deletedIndex, 1);
			setMemberList(temp);
		}
	};

	return (
		<div className='member' id={id}>
			<MemberCard member={memberTemp} />
			<div className='delete' onClick={onClickDelete} id={id}>
				x
			</div>
		</div>
	);
};

export default MemberTest;
