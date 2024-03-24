import React from 'react';
import S from '../Profile.styled';
import { userData } from '../../index';
import { PortfolioCard, ProfileImage, Skill } from '../../../components';
import { useReadProfile } from '../../../hooks';
import { useParams } from 'react-router';

const ProfileDetailsPage = () => {
	const { nickname } = useParams() as { nickname: string };

	const { data: user } = useReadProfile(nickname);

	return (
		<S.ProfileLayout>
			<S.ProfileHeader>
				<ProfileImage nickname={nickname} size='14rem' url={userData.imageUrl} />
				<S.ProfileColumn>
					<div className='profile-header__row'>
						<h2>{userData.nickname}</h2>
						<h3>{userData.userName}</h3>
					</div>
					<h4>{userData.interest}</h4>
					<h6>{userData.introduction}</h6>
				</S.ProfileColumn>
			</S.ProfileHeader>

			<S.ProfileColumn $gap='5rem'>
				<S.ProfileArticle>
					<S.ProfileTitle>자기 소개</S.ProfileTitle>
					<div>{userData.aboutMe}</div>
					<hr />
				</S.ProfileArticle>

				<S.ProfileArticle>
					<S.ProfileTitle>연락 수단</S.ProfileTitle>
					<S.ProfileColumn $gap='1rem'>
						{userData.email &&
							userData.email.map(({ isPublic, content }, index) => (
								<div key={index}>{isPublic && content}</div>
							))}
						<div>{userData.phone?.isPublic && userData.phone?.content}</div>
					</S.ProfileColumn>
					<hr />
				</S.ProfileArticle>

				<S.ProfileArticle>
					<S.ProfileTitle>교육</S.ProfileTitle>
					<div>
						<S.ProfileDate>{userData.year}년도 입학</S.ProfileDate>
						<S.ProfileRow>
							<S.ProfileColumn $gap='1.5rem'>
								<h4>{userData.university}</h4>
							</S.ProfileColumn>
							<S.ProfileColumn $gap='1.5rem'>
								<div>{userData.department}</div>
								<div>
									{userData.gpa}/{userData.maxGpa}
								</div>
							</S.ProfileColumn>
						</S.ProfileRow>
					</div>
					<hr />
				</S.ProfileArticle>

				<S.ProfileArticle>
					<S.ProfileTitle>스킬</S.ProfileTitle>
					<S.ProfileRow $gap='1.05rem'>
						{userData.skills?.map(({ ...props }, index) => <Skill key={index} {...props} />)}
					</S.ProfileRow>
					<hr />
				</S.ProfileArticle>

				<S.ProfileArticle>
					<S.ProfileTitle>수상/활동</S.ProfileTitle>
					<S.ProfileColumn $gap='2.4rem'>
						{userData.awards?.map(({ title, startDate, endDate, description }, index) => (
							<S.ProfileColumn key={index}>
								<S.ProfileDate>
									{startDate} ~ {endDate}
								</S.ProfileDate>
								<S.ProfileRow $gap='1.05rem'>
									<S.ProfileColumn $gap='1.5rem'>
										<h4>{title}</h4>
									</S.ProfileColumn>
									<S.ProfileColumn $gap='1.5rem'>{description}</S.ProfileColumn>
								</S.ProfileRow>
								<hr />
							</S.ProfileColumn>
						))}
					</S.ProfileColumn>
				</S.ProfileArticle>

				<S.ProfileArticle>
					<S.ProfileTitle>링크</S.ProfileTitle>
					<S.ProfileColumn>
						{userData.links?.map(({ url, description }, index) => (
							<S.ProfileRow key={index} $gap='3.65rem'>
								<span>{description}</span>
								<a href={url} target='_blank' title={description} rel='noreferrer noopener'>
									{url}
								</a>
							</S.ProfileRow>
						))}
					</S.ProfileColumn>
					<hr />
				</S.ProfileArticle>

				<S.ProfileArticle>
					<S.ProfileTitle>포트폴리오</S.ProfileTitle>
					<S.ProfileGrid>
						{userData.portfolios &&
							userData.portfolios.map(({ ...props }, index) => (
								<PortfolioCard key={index} {...props} />
							))}
					</S.ProfileGrid>
					<hr />
				</S.ProfileArticle>
			</S.ProfileColumn>
		</S.ProfileLayout>
	);
};

export default ProfileDetailsPage;
