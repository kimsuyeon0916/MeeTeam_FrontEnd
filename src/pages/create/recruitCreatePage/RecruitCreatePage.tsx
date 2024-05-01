import React, { useEffect, useState } from 'react';
import S from './RecruitCreatePage.styled';
import {
	BasicInformation,
	ControlButtons,
	Description,
	DetailedInformation,
	RecruitTags,
	RecruitRoleForm,
} from '../../../components/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { recruitInputState, validState } from '../../../atom';
import { getPostingData, editPostingRecruit, postingRecruit } from '../../../service';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { EditPosting, InputState, RoleInfo, RoleForPost } from '../../../types';
import { fixModalBackground, simpleDate } from '../../../utils';
import { useLogin } from '../../../hooks';

const RecruitCreatePage = () => {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const { isLoggedIn } = useLogin();
	const setIsSubmit = useSetRecoilState(validState);
	const [formData, setFormData] = useRecoilState<InputState>(recruitInputState);
	const validCheck = useRecoilValue(validState);
	const [beforeSubmit, setBeforeSubmit] = useState<boolean>(false);
	const postAvailable =
		validCheck.isCategory &&
		validCheck.isDeadline &&
		validCheck.isProcedure &&
		validCheck.isScope &&
		validCheck.isContent &&
		validCheck.isTitle &&
		validCheck.isRole &&
		validCheck.isContent;
	const pageNum = Number(id);

	const { data, isSuccess } = useQuery({
		queryKey: ['detailedPage', { pageNum, isLoggedIn }],
		queryFn: () => getPostingData({ pageNum, isLoggedIn }),
	});
	const uploadPost = useMutation({
		mutationFn: (formData: InputState) => postingRecruit(formData),
		onSuccess: (data: { recruitmentPostId: number }) => {
			setIsSubmit(prev => ({
				...prev,
				isSubmitted: false,
			}));
			navigate(`/recruitment/postings/${data?.recruitmentPostId}`);
		},
	});
	const editPost = useMutation({
		mutationFn: ({ pageNum, formData }: EditPosting) => editPostingRecruit({ pageNum, formData }),
		onSuccess: () => {
			setIsSubmit(prev => ({
				...prev,
				isSubmitted: false,
			}));
			navigate(`/recruitment/postings/${pageNum}`);
		},
	});

	const resetFormData = () => {
		setFormData({
			scope: '',
			category: '',
			fieldId: 1,
			deadline: simpleDate(new Date()),
			proceedType: '',
			proceedingStart: simpleDate(new Date()),
			proceedingEnd: simpleDate(new Date()),
			courseTag: {
				isCourse: false,
				courseTagName: '',
				courseProfessor: '',
			},
			recruitmentRoles: [],
			tags: [],
			title: '',
			content: '',
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsSubmit(prev => ({
			...prev,
			isSubmitted: true,
		}));

		if (!postAvailable) {
			setBeforeSubmit(true);
		}
		if (postAvailable && !location.pathname.includes('edit')) {
			uploadPost.mutate(formData, {
				onSuccess: () => resetFormData(),
			});
		}
		if (postAvailable && location.pathname.includes('edit') && pageNum) {
			editPost.mutate(
				{ pageNum, formData },
				{
					onSuccess: () => resetFormData(),
				}
			);
		}
	};

	useEffect(() => {
		fixModalBackground(beforeSubmit);
	}, [beforeSubmit]);

	useEffect(() => {
		const convertRoleInfo = (roleInfo: RoleInfo): RoleForPost => {
			return {
				roleId: roleInfo.roleId,
				count: roleInfo.recruitCount,
				skillIds: roleInfo.skills.map(e => e.id),
				skills: roleInfo.skills,
				roleName: roleInfo.roleName,
			};
		};
		const transformedRoles = data?.recruitmentRoles.map(convertRoleInfo);
		if (isSuccess && location.pathname.includes('edit') && data && transformedRoles) {
			setFormData({
				scope: data.scope,
				category: data.category,
				deadline: data.deadline,
				proceedingStart: data.proceedingStart,
				proceedingEnd: data.proceedingEnd,
				fieldId: 1,
				proceedType: data.proceedType,
				courseTag: {
					courseTagName: data.courseName,
					courseProfessor: data.courseProfessor,
					isCourse: data.courseName || data.courseProfessor ? true : false,
				},
				recruitmentRoles: transformedRoles,
				tags: data.tags.map(e => e.name),
				title: data.title,
				content: data.content,
			});
		}
	}, [data]);

	console.log(validCheck);
	console.log(formData);

	return (
		<S.RecruitCreatePage>
			<form onSubmit={handleSubmit}>
				<Description />
				<BasicInformation />
				<DetailedInformation />
				<RecruitRoleForm />
				<RecruitTags />
				<ControlButtons />
				{beforeSubmit && (
					<article className='modal-background'>
						<section className='validation-modal'>
							<h3>필수정보를 입력해주세요.</h3>
							<span className='body2-semibold'>
								아래 <span className='caution'>미작성된 항목</span>을 입력해 구인글 작성을
								완료해주세요.
							</span>
							<section className='wrapper-list__unsatisfied'>
								{!postAvailable && (
									<section className='container-list'>
										<section className='subtitle body2-medium'>기본정보</section>
										<section className='list-unsatisfied'>
											{!validCheck.isTitle && (
												<span className='element body2-medium'>구인글 제목</span>
											)}
											{!validCheck.isDeadline && (
												<span className='element body2-medium'>구인글 마감일</span>
											)}
											{!validCheck.isScope && <span className='element body2-medium'>범위</span>}
											{!validCheck.isCategory && <span className='element body2-medium'>유형</span>}
											{!validCheck.isEndDate && (
												<span className='element body2-medium'>진행기간</span>
											)}
											{!validCheck.isProcedure && (
												<span className='element body2-medium'>진행방식</span>
											)}
										</section>
									</section>
								)}
								{!validCheck.isContent && (
									<section className='container-list'>
										<section className='subtitle body2-medium'>상세내용</section>
										<section className='list-unsatisfied'>
											{!validCheck.isContent && (
												<span className='element body2-medium'>내용 미입력</span>
											)}
										</section>
									</section>
								)}
								{!validCheck.isRole && (
									<section className='container-list'>
										<section className='subtitle body2-medium'>모집역할</section>
										<section className='list-unsatisfied'>
											{!validCheck.isRole && (
												<span className='element body2-medium'>내용 미입력</span>
											)}
										</section>
									</section>
								)}
							</section>
							<button
								type='button'
								className='btn-okay txt-small'
								onClick={() => setBeforeSubmit(false)}
							>
								확인
							</button>
						</section>
					</article>
				)}
			</form>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
