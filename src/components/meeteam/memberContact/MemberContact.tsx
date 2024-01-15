import React from 'react';
import { CopyClipBoard } from '../../../utils';
import S from './MemberContact.styled';
import { memberProps, RadiusProfile } from '../..';

const MemberContact = (props: { member: memberProps }) => {
	const copyLinkIcon: string =
		'https://s3-alpha-sig.figma.com/img/05ef/6744/dbc3fa3693c319737315c7eb7568b0a5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hcpN-~UN7asKyK-Q8KZPWiQD6MzsrFEm6Bi3QQaTcRJVTQ9GIo56SBIBmKm97NDEmP8IWE~gCxkttWulIgS-UoMyNDTkbhj1G~ngiVzp4MdD89jkVOSHb~U2o2TaTFStQh~JRqN2cB2PtNYDSb43BPNxzSPxZxnBs1cEFG0zFy~1Fs7bNoUViEzacBxzqjoQx7qfNuaxklw4-89T~r~HfSUyRbZph77B~sTu0EyO74jjFqUbCoUFgIJHBtg6X48g4Dz3lh8GLOmF8y~sYe2M2Ag~VMsq1ONLh41wN7~nOH3s-5v0WD2Cn78eYpQMOiiWYo48E5zd3lgb2sTQiYANhg__';

	return (
		<S.MemberContactLayout>
			<div className='member-contact__tag-row'>
				{props.member.authority === '리더' ? (
					<S.MemberContactTag>{props.member.authority}</S.MemberContactTag>
				) : (
					<S.MemberContactTag $color='#E4F9D0'>{props.member.authority}</S.MemberContactTag>
				)}
				<S.MemberContactTag $color={props.member.role?.[1]}>
					{props.member.role?.[0]}
				</S.MemberContactTag>
			</div>
			<div className='member-contact__row'>
				<div className='member-contact__profile-column'>
					<RadiusProfile size='big' url={props.member.imageUrl} />
					<div className='member-contact__title'>{props.member.nickName}</div>
					<div className='member-contact__task'>{props.member.task}</div>
				</div>
				<div className='member-contact__information-column'>
					{/* <div className='member-contact__tag-row'>
						{props.member.authority === '리더' ? (
							<S.MemberContactTag>{props.member.authority}</S.MemberContactTag>
						) : (
							<S.MemberContactTag $color='#E4F9D0'>{props.member.authority}</S.MemberContactTag>
						)}
						<S.MemberContactTag $color={props.member.role?.[1]}>
							{props.member.role?.[0]}
						</S.MemberContactTag>
					</div> */}
					<div className='member-contact__information-row'>
						<div className='member-contact__label-title'>이메일</div>
						<div className='member-contact__informaion-content'>
							{props.member.email === '' ? (
								'정보 없음'
							) : (
								<>
									{props.member.email}
									<S.MemberContactCopyLink
										alt='클립보드 복사'
										src={copyLinkIcon}
										onClick={() => CopyClipBoard(props.member.email)}
									/>
								</>
							)}
						</div>
					</div>
					<div className='member-contact__information-row'>
						<div className='member-contact__label-title'>전화번호</div>
						<div className='member-contact__informaion-content'>
							{props.member.phone === '' ? (
								'정보 없음'
							) : (
								<>
									{props.member.phone}
									<S.MemberContactCopyLink
										alt='클립보드 복사'
										src={copyLinkIcon}
										onClick={() => CopyClipBoard('')}
									/>
								</>
							)}
						</div>
					</div>
					<div className='member-contact__information-row'>
						<div className='member-contact__label-title'>Notion 이메일</div>
						<div className='member-contact__informaion-content'>정보 없음</div>
					</div>
				</div>
			</div>
		</S.MemberContactLayout>
	);
};

export default MemberContact;
