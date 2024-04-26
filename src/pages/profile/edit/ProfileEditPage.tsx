import React, { useEffect, useState } from 'react';
import S from '../Profile.styled';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { PROFILE_EDIT_DATA } from '../../index';
import {
	Input,
	Textarea,
	ComboBox,
	Toggle,
	Radio,
	DeleteBtn,
	MuiDatepicker,
	SkillTag,
	PortfolioCard,
	DefaultBtn,
	PrimaryBtn,
	ProfileImage,
	LinkForm,
	AddFormBtn,
} from '../../../components';
import { useRecoilValue } from 'recoil';
import { uploadImageState, userState } from '../../../atom';
import { Skill, Portfolio, Award, Link } from '../../../types';
import {
	useDebounce,
	useReadProfile,
	useUpdateProfile,
	useReadRoleList,
	useReadSkillList,
	useUploadImageFile,
	useReadImagePresignedUrl,
} from '../../../hooks';
import { useNavigate } from 'react-router-dom';

interface FormValues {
	nickname?: string;
	userName?: string;
	interest?: string;
	introduction?: string;
	aboutMe?: string;
	phone?: string;
	universityEmail?: string;
	subEmail?: string;
	year?: string;
	university?: string;
	department?: string;
	gpa?: string;
	maxGpa?: string;
	skills?: string | null;
	links?: Link[];
	linkUrl?: string;
	linkDescription?: string;
	awards?: Award[];
	awardTitle?: string;
	awardDescription?: string;
}

const DESCRIPTION = {
	contact: `대표 메일로 구인과 관련된 정보를 받을 수 있습니다.\n자주 사용하는 이메일을 대표 메일로 설정해주세요.`,
	skills: `개발 , 디자인 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.\n최대 10개까지 입력할 수 있습니다.`,
	awards: `수상 이력, 수료한 교육이나 참석한 외부활동 등이 있다면 간단히 작성해주세요.`,
	links: ` 깃헙, 노션으로 작성한 포트폴리오, 구글 드라이브 파일 등 업무 성과를 보여줄 수 있는 링크가 있다면 작성해주세요.`,
	portfolio: `밋팀에서 작성한 포트폴리오가 있다면 선택해주세요!\n프로필에서 최대 8개까지 보여집니다.`,
};
const gpaList = [{ name: '4.5' }, { name: '4.3' }];

const ProfileEditPage = () => {
	const userId = useRecoilValue(userState)?.userId as string;
	const { data: user, isSuccess } = useReadProfile(userId); // 새로고침 시, 렌더링 지연 및 콘솔 에러

	const navigate = useNavigate();

	const updateProfileInSuccess = () => {
		return navigate(`/profile/${userId}`);
	};

	const { mutate: updateProfile } = useUpdateProfile({
		onSuccess: updateProfileInSuccess,
	});

	// 이미지 업로드
	const profileImage = useRecoilValue(uploadImageState);
	const {
		data: imageResponse,
		refetch: readImagePresignedUrl,
		isSuccess: isSuccessReadUrl,
	} = useReadImagePresignedUrl(profileImage?.fileName as string);

	const uploadImageFileInSuccess = () => {
		const formData = getValues();
		updateProfile({
			// 추후, 수정 시 수정 여부 boolean 값 추가
			...formData,
			imageFileName: imageResponse?.fileName,
			isUserNamePublic: isUserNamePublic,
			interestId: sessionStorage.interest,
			isPhonePublic: isPhonePublic,
			isUniversityMain: isUniversityMain,
			isUniversityEmailPublic: isUniversityEmailPublic,
			isSubEmailPublic: isSubEmailPublic,
			skills: skillList.map(skill => skill.id),
			portfolios: pinnedPortfolioList,
		});
		sessionStorage.clear();
	};

	const { mutate: uploadImageFile } = useUploadImageFile({
		onSuccess: uploadImageFileInSuccess,
	});

	useEffect(() => {
		if (isSuccessReadUrl && imageResponse) {
			uploadImageFile({
				presignedUrl: imageResponse.url,
				imageFile: profileImage?.file as File,
			});
		}
	}, [isSuccessReadUrl]);

	const submitHandler: SubmitHandler<FormValues> = data => {
		if (profileImage?.fileName) {
			// 이미지를 처음 업로드 및 변경하는 경우에만 S3에 업로드(기존!==지금)
			readImagePresignedUrl(); // presignedUrl 발급
		} else {
			updateProfile({
				// 추후, 수정 시 수정 여부 boolean 값 추가
				...data,
				isUserNamePublic: isUserNamePublic,
				interestId: sessionStorage.interest,
				isPhonePublic: isPhonePublic,
				isUniversityMain: isUniversityMain,
				isUniversityEmailPublic: isUniversityEmailPublic,
				isSubEmailPublic: isSubEmailPublic,
				skills: skillList.map(skill => skill.id),
				portfolios: pinnedPortfolioList,
			});
			sessionStorage.clear();
		}
	};

	const { register, formState, handleSubmit, control, watch, getValues, setValue } =
		useForm<FormValues>({
			mode: 'onChange',
			values: {
				...user,
				year: user?.year + '학년도',
				phone: user?.phone?.content,
				universityEmail: user?.universityEmail?.content,
				subEmail: user?.subEmail?.content,
				skills: null,
				links: user?.links,
				awards: user?.awards,
			},
			resetOptions: {
				keepDirtyValues: true, // user-interacted input will be retained
				keepErrors: true, // input errors will be retained with value update
			},
		});

	const role = useDebounce(watch('interest')) as string;
	const { data: roles } = useReadRoleList(role);

	const skill = useDebounce(watch('skills')) as string;
	const { data: skills } = useReadSkillList(skill);

	// 공개 여부
	const [isUserNamePublic, setIsUserNamePublic] = useState(user?.isUserNamePublic);
	const [isPhonePublic, setIsPhonePublic] = useState(user?.phone?.isPublic);
	const [isUniversityEmailPublic, setIsUniversityEmailPublic] = useState(
		user?.universityEmail?.isPublic
	);
	const [isSubEmailPublic, setIsSubEmailPublic] = useState(user?.subEmail?.isPublic);
	const [isUniversityMain, setIsUniversityMain] = useState(user?.universityEmail?.isDefault); // 대표 메일

	useEffect(() => {
		if (isSuccess) {
			setIsUserNamePublic(user?.isUserNamePublic);
			setIsPhonePublic(user?.phone?.isPublic);
			setIsUniversityEmailPublic(user?.universityEmail?.isPublic);
			setIsSubEmailPublic(user?.subEmail?.isPublic);
			setIsUniversityMain(user?.universityEmail?.isDefault);

			setPinnedPortfolioList(
				sortedPortfolioList
					? sortedPortfolioList.filter(portfolio => portfolio.pinned).map(portfolio => portfolio.id)
					: []
			);
			setSkillList(user?.skills ? user?.skills : []);
		}
	}, [isSuccess]);

	const handleRadioClick = (id: string) => {
		if (id === 'universityEmail') {
			setIsUniversityMain(true);
		} else if (id === 'subEmail') {
			setIsUniversityMain(false);
		}
	};

	// 스킬
	const [skillList, setSkillList] = useState(user?.skills ? user?.skills : []);

	const addSkill = () => {
		const newSkill = { id: sessionStorage.skills, name: getValues('skills') } as Skill;
		if (getValues('skills')?.length === 0) return;
		if (!skillList.find(skill => newSkill.name === skill.name)) {
			setSkillList(prev => [...prev, newSkill]);
		}
		setValue('skills', '');
	};

	const deleteSkill = (skillName: string) => {
		setSkillList(() => skillList.filter(skill => skill.name !== skillName));
	};

	// 링크
	const {
		fields: links,
		prepend: prependLink,
		remove: removeLink,
	} = useFieldArray({
		name: 'links',
		control: control,
	});

	const addLink = (index: number) => {
		if (index === -1 || getValues(`links.0.url`)) {
			prependLink({ description: 'Link', url: '' });
		}
	};

	// 수상/활동
	const {
		fields: awards,
		prepend: prependAward,
		remove: removeAward,
	} = useFieldArray({
		name: 'awards',
		control: control,
	});

	const addAward = (index: number) => {
		if (
			index === -1 ||
			(getValues(`awards.${index}.startDate`) &&
				getValues(`awards.${index}.endDate`) &&
				getValues(`awards.${index}.title`) &&
				getValues(`awards.${index}.description`))
		) {
			prependAward({ startDate: '', endDate: '', title: '', description: '' });
		}
	};

	const deleteAward = (index: number) => {
		removeAward(index);
	};

	// 포트폴리오
	const sortedPortfolioList =
		user?.portfolios &&
		[...user.portfolios]?.sort((a, b) =>
			a.pinOrder > b.pinOrder ? 1 : a.pinOrder < b.pinOrder ? -1 : 0
		); // userData -> user로 변경

	const [pinnedPortfolioList, setPinnedPortfolioList] = useState(
		sortedPortfolioList
			? sortedPortfolioList.filter(portfolio => portfolio.pinned).map(portfolio => portfolio.id)
			: []
	);

	const addPinnedPortfolioList = (id: string) => {
		if (pinnedPortfolioList.length < 8) {
			setPinnedPortfolioList(prev => [...prev, id]);
		}
	};

	const deletePinnedPortfolioList = (id: string) => {
		if (pinnedPortfolioList.length > 0) {
			setPinnedPortfolioList(() => pinnedPortfolioList.filter(portfolioId => portfolioId !== id));
		}
	};

	const checkPinnedIndex = (id: string) => {
		return pinnedPortfolioList.findIndex(portfolioId => portfolioId === id);
	};

	const checkKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') e.preventDefault();
	};

	return (
		isSuccess && (
			<>
				<S.ProfileLayout onSubmit={handleSubmit(submitHandler)} onKeyDown={e => checkKeyDown(e)}>
					<S.ProfileHeader>
						<ProfileImage
							isEditable={true}
							userId={user?.nickname as string}
							size='14rem'
							url={user?.imageUrl}
						/>
						<S.ProfileColumn $gap='2.4rem'>
							<S.ProfileRow $width='clamp(50%, 50.8rem, 100%)' $gap='1rem'>
								<Input
									// defaultValue={user?.nickname}
									register={register}
									formState={formState}
									{...PROFILE_EDIT_DATA.nickname}
								/>
								<S.ProfileRow $gap='1rem'>
									<Input
										defaultValue={user?.userName}
										register={register}
										formState={formState}
										{...PROFILE_EDIT_DATA.userName}
									/>
									<Toggle state={isUserNamePublic} setState={setIsUserNamePublic} />
								</S.ProfileRow>
							</S.ProfileRow>
							<ComboBox
								width='clamp(50%, 39.2rem, 100%)'
								// defaultValue={user?.interest}
								register={register}
								setValue={setValue}
								getValues={getValues}
								formState={formState}
								optionList={roles}
								{...PROFILE_EDIT_DATA.interest}
							/>
							<Input
								width='clamp(50%, 39.2rem, 100%)'
								// defaultValue={user?.introduction}
								register={register}
								watch={watch}
								formState={formState}
								{...PROFILE_EDIT_DATA.introduction}
							/>
						</S.ProfileColumn>
					</S.ProfileHeader>

					<S.ProfileColumn $gap='5rem'>
						<S.ProfileArticle>
							<S.ProfileTitle>자기 소개</S.ProfileTitle>
							<Textarea
								// defaultValue={user?.aboutMe}
								register={register}
								watch={watch}
								formState={formState}
								{...PROFILE_EDIT_DATA.aboutMe}
							/>
							<hr />
						</S.ProfileArticle>

						<S.ProfileArticle>
							<S.ProfileTitle>연락 수단</S.ProfileTitle>
							<S.ProfileDescription>{DESCRIPTION.contact}</S.ProfileDescription>
							<S.ProfileColumn $gap='2.84rem'>
								<S.ProfileColumn $width='clamp(50%, 51.8rem, 100%)' $gap='1.6rem'>
									<label style={{ color: 'var(--Form-txtIcon-default,  #8E8E8E)' }}>연락처</label>
									<S.ProfileRow $gap='1rem'>
										<Input
											// defaultValue={user?.phone?.content}
											register={register}
											formState={formState}
											{...PROFILE_EDIT_DATA.phone}
										/>
										<Toggle state={isPhonePublic} setState={setIsPhonePublic} />
									</S.ProfileRow>
								</S.ProfileColumn>
								<S.ProfileColumn $width='clamp(50%, 51.8rem, 100%)' $gap='1.6rem'>
									<label style={{ color: 'var(--Form-txtIcon-default,  #8E8E8E)' }}>
										대표 메일
									</label>
									<S.ProfileRow $gap='1rem'>
										<Radio
											name='email'
											id={PROFILE_EDIT_DATA.universityEmail.name}
											state={isUniversityMain}
											handleClick={handleRadioClick}
										>
											<Input
												// defaultValue={user?.universityEmail?.content}
												register={register}
												formState={formState}
												{...PROFILE_EDIT_DATA.universityEmail}
											/>
										</Radio>
										<Toggle state={isUniversityEmailPublic} setState={setIsUniversityEmailPublic} />
									</S.ProfileRow>
									<S.ProfileRow $gap='1rem'>
										<Radio
											name='email'
											id={PROFILE_EDIT_DATA.subEmail.name}
											state={!isUniversityMain}
											handleClick={handleRadioClick}
										>
											<Input
												// defaultValue={user?.subEmail?.content}
												register={register}
												formState={formState}
												{...PROFILE_EDIT_DATA.subEmail}
											/>
										</Radio>
										<Toggle state={isSubEmailPublic} setState={setIsSubEmailPublic} />
									</S.ProfileRow>
								</S.ProfileColumn>
							</S.ProfileColumn>
							<hr />
						</S.ProfileArticle>

						<S.ProfileArticle>
							<S.ProfileTitle>교육</S.ProfileTitle>
							<S.ProfileRow $gap='1rem'>
								<S.ProfileRow $gap='1rem'>
									<Input
										// defaultValue={user?.year}
										register={register}
										formState={formState}
										{...PROFILE_EDIT_DATA.year}
									/>
									<Input
										// defaultValue={user?.university}
										register={register}
										formState={formState}
										{...PROFILE_EDIT_DATA.university}
									/>
								</S.ProfileRow>
								<S.ProfileColumn $gap='1rem'>
									<Input
										// defaultValue={user?.department}
										register={register}
										formState={formState}
										{...PROFILE_EDIT_DATA.department}
									/>
									<S.ProfileRow $gap='1rem'>
										<Input register={register} formState={formState} {...PROFILE_EDIT_DATA.gpa} />
										<ComboBox
											register={register}
											setValue={setValue}
											getValues={getValues}
											formState={formState}
											optionList={gpaList}
											{...PROFILE_EDIT_DATA.maxGpa}
										/>
									</S.ProfileRow>
								</S.ProfileColumn>
							</S.ProfileRow>
							<hr />
						</S.ProfileArticle>

						<S.ProfileArticle>
							<S.ProfileTitle>스킬</S.ProfileTitle>
							<S.ProfileDescription>{DESCRIPTION.skills}</S.ProfileDescription>
							<S.ProfileColumn $gap='2rem'>
								<ComboBox
									register={register}
									setValue={setValue}
									formState={formState}
									getValues={getValues}
									optionList={skills}
									clickOption={addSkill}
									{...PROFILE_EDIT_DATA.skills}
								/>
								<S.ProfileRow $gap='1.05rem'>
									{skillList?.map(({ ...props }, index) => (
										<SkillTag isEditable={true} handleClick={deleteSkill} key={index} {...props} />
									))}
								</S.ProfileRow>
							</S.ProfileColumn>
							<hr />
						</S.ProfileArticle>

						<S.ProfileArticle>
							<S.ProfileTitle>수상/활동</S.ProfileTitle>
							<S.ProfileDescription>{DESCRIPTION.awards}</S.ProfileDescription>
							<AddFormBtn title='수상/활동 추가' handleClick={() => addAward(awards.length - 1)} />
							<S.ProfileColumn $gap='2.4rem'>
								{awards?.map((award, index) => (
									<S.ProfileRow key={award.id} $gap='1rem'>
										<S.ProfileColumn $gap='1rem'>
											<S.ProfileRow $gap='1rem'>
												<MuiDatepicker name={`awards.${index}.startDate`} control={control} />
												<MuiDatepicker name={`awards.${index}.endDate`} control={control} />
											</S.ProfileRow>
											<Input
												name={`awards.${index}.title`}
												register={register}
												formState={formState}
												{...PROFILE_EDIT_DATA.awardTitle}
											/>
										</S.ProfileColumn>
										<S.ProfileRow $gap='1rem'>
											<Input
												name={`awards.${index}.description`}
												register={register}
												formState={formState}
												{...PROFILE_EDIT_DATA.awardDescription}
											/>
											<DeleteBtn handleClick={() => deleteAward(index)} />
										</S.ProfileRow>
									</S.ProfileRow>
								))}
							</S.ProfileColumn>
							<hr />
						</S.ProfileArticle>

						<S.ProfileArticle>
							<S.ProfileTitle>링크</S.ProfileTitle>
							<S.ProfileDescription>{DESCRIPTION.links}</S.ProfileDescription>
							<AddFormBtn title='링크 추가' handleClick={() => addLink(links.length - 1)} />
							<S.ProfileColumn $gap='2.4rem'>
								{links?.map((link, index) => (
									<LinkForm
										key={link.id}
										index={index}
										width='clamp(10%, 11.8rem, 100%)'
										register={register}
										formState={formState}
										getValues={getValues}
										setValue={setValue}
										remove={removeLink}
									/>
								))}
							</S.ProfileColumn>
							<hr />
						</S.ProfileArticle>

						<S.ProfileArticle>
							<S.ProfileTitle>포트폴리오</S.ProfileTitle>
							<S.ProfileDescription>{DESCRIPTION.portfolio}</S.ProfileDescription>
							<S.ProfileGrid>
								{user?.portfolios &&
									user?.portfolios.map(({ ...props }: Portfolio, index) => (
										<PortfolioCard
											key={index}
											{...props}
											isEditable={true}
											clickNumber={checkPinnedIndex(props.id) + 1}
											handleClick={
												checkPinnedIndex(props.id) === -1
													? addPinnedPortfolioList
													: deletePinnedPortfolioList
											}
										/>
									))}
							</S.ProfileGrid>
							<hr />
						</S.ProfileArticle>
					</S.ProfileColumn>
					<S.ProfileButtonBox>
						<DefaultBtn
							type='button'
							title='취소'
							handleClick={() => navigate(`/profile/${userId}`)}
						/>
						<PrimaryBtn type='submit' title='저장' />
					</S.ProfileButtonBox>
				</S.ProfileLayout>
				<DevTool control={control} />
			</>
		)
	);
};

export default ProfileEditPage;
