import React from 'react';
import S from './MemberCard.styled';
import { MeeTeamMember, ProfileImage } from '../..';

export const SCHOOL_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'>
		<path
			d='M1.3125 9.68735H9.1875M2.625 8.37485V4.87485M4.375 8.37485V4.87485M6.125 8.37485V4.87485M7.875 8.37485V4.87485M8.75 3.56235L5.4355 1.49079C5.3682 1.44873 5.33456 1.4277 5.29847 1.4195C5.26656 1.41225 5.23344 1.41225 5.20153 1.4195C5.16544 1.4277 5.1318 1.44873 5.0645 1.49079L1.75 3.56235H8.75Z'
			stroke='#8D8D8D'
			strokeWidth='0.75'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export const BOOK_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'>
		<path
			d='M5.25 9.1875L5.20623 9.12184C4.90232 8.66598 4.75037 8.43805 4.54961 8.27304C4.37188 8.12697 4.16708 8.01737 3.94695 7.95051C3.6983 7.875 3.42436 7.875 2.87649 7.875H2.275C1.78495 7.875 1.53993 7.875 1.35276 7.77963C1.18812 7.69574 1.05426 7.56188 0.970369 7.39724C0.875 7.21007 0.875 6.96505 0.875 6.475V2.7125C0.875 2.22245 0.875 1.97743 0.970369 1.79026C1.05426 1.62562 1.18812 1.49176 1.35276 1.40787C1.53993 1.3125 1.78495 1.3125 2.275 1.3125H2.45C3.43009 1.3125 3.92014 1.3125 4.29448 1.50324C4.62377 1.67102 4.89148 1.93873 5.05926 2.26802C5.25 2.64236 5.25 3.13241 5.25 4.1125M5.25 9.1875V4.1125M5.25 9.1875L5.29377 9.12184C5.59768 8.66598 5.74963 8.43805 5.95039 8.27304C6.12812 8.12697 6.33292 8.01737 6.55305 7.95051C6.8017 7.875 7.07564 7.875 7.62351 7.875H8.225C8.71505 7.875 8.96007 7.875 9.14724 7.77963C9.31188 7.69574 9.44574 7.56188 9.52963 7.39724C9.625 7.21007 9.625 6.96505 9.625 6.475V2.7125C9.625 2.22245 9.625 1.97743 9.52963 1.79026C9.44574 1.62562 9.31188 1.49176 9.14724 1.40787C8.96007 1.3125 8.71505 1.3125 8.225 1.3125H8.05C7.06991 1.3125 6.57986 1.3125 6.20552 1.50324C5.87623 1.67102 5.60852 1.93873 5.44074 2.26802C5.25 2.64236 5.25 3.13241 5.25 4.1125'
			stroke='#8D8D8D'
			strokeWidth='0.75'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export const SPEECH_BUBBLE_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11' fill='none'>
		<path
			d='M3.5625 4.21875H5.75M3.5625 5.75H7.0625M3.5625 8.375V9.39678C3.5625 9.6299 3.5625 9.74646 3.61029 9.80633C3.65185 9.8584 3.71487 9.88869 3.78149 9.88861C3.85809 9.88853 3.94911 9.81572 4.13114 9.67009L5.17478 8.83518C5.38798 8.66462 5.49457 8.57934 5.61328 8.5187C5.71859 8.4649 5.83069 8.42557 5.94653 8.4018C6.07711 8.375 6.21362 8.375 6.48664 8.375H7.5875C8.32257 8.375 8.6901 8.375 8.97086 8.23195C9.21782 8.10611 9.41861 7.90533 9.54445 7.65836C9.6875 7.3776 9.6875 7.01007 9.6875 6.275V3.9125C9.6875 3.17743 9.6875 2.8099 9.54445 2.52914C9.41861 2.28217 9.21782 2.08139 8.97086 1.95555C8.6901 1.8125 8.32257 1.8125 7.5875 1.8125H3.9125C3.17743 1.8125 2.8099 1.8125 2.52914 1.95555C2.28217 2.08139 2.08139 2.28217 1.95555 2.52914C1.8125 2.8099 1.8125 3.17743 1.8125 3.9125V6.625C1.8125 7.03186 1.8125 7.23529 1.85722 7.4022C1.97859 7.85513 2.33237 8.20891 2.7853 8.33028C2.95221 8.375 3.15564 8.375 3.5625 8.375Z'
			stroke='#8D8D8D'
			strokeWidth='0.75'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const MemberCard = ({ member }: { member: MeeTeamMember }) => {
	const countTags = (specification: string[][]) => {
		let totalLength: number = 0;
		specification.forEach((tag, index) => {
			totalLength += tag[0].length;
			if (totalLength > 16) {
				return specification.splice(0, index);
			}
		});
		return specification;
	};

	return (
		<S.MemberCardLayout>
			<div className='member-card__row'>
				<ProfileImage size='middle' url={member.imageUrl} />
				<div className='member-card__column'>
					<div className='member-card__title'>{member.nickname}</div>
					<div className='member-card__row'>
						<div className='member-card__column--small-text'>
							<div className='member-card__row--small-text'>
								{SCHOOL_ICON}
								{member.school}
							</div>
							<div className='member-card__row--small-text'>
								{BOOK_ICON}
								{member.task}
							</div>
							<div className='member-card__row--small-text'>
								{SPEECH_BUBBLE_ICON}
								{member.introduction}
							</div>
						</div>
					</div>
					<div className='member-card__tag-column'>
						{member.specifications.map((tag, index) => (
							<S.MemberCardTag key={index} $color={tag[1]}>
								#{tag[0]}
							</S.MemberCardTag>
						))}
					</div>
				</div>
			</div>
		</S.MemberCardLayout>
	);
};

export default MemberCard;
