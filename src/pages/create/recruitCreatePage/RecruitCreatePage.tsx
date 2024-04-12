import React from 'react';
import S from './RecruitCreatePage.styled';
import {
	BasicInformation,
	ControlButtons,
	Description,
	DetailedInformation,
	RecruitRoleForm,
} from '../../../components/index';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { recruitInputState, validState } from '../../../atom';
import { postingRecruit } from '../../../service/recruit/posting';
import { useNavigate } from 'react-router-dom';
import RecruitTags from '../../../components/recruit/create/RecruitTags';
import { InputState } from '../../../types';
import { simpleDate } from '../../../utils';

const RecruitCreatePage = () => {
	const navigate = useNavigate();
	const setIsSubmit = useSetRecoilState(validState);
	const [formData, setFormData] = useRecoilState<InputState>(recruitInputState);
	const validCheck = useRecoilValue(validState);

	const uploadPost = useMutation({
		mutationFn: (formData: any) => postingRecruit(formData),
		onSuccess: (data: { recruitmentPostId: number } | undefined) => {
			resetFormData();
			navigate(`/recruitment/postings/${data?.recruitmentPostId}`);
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

		const postAvailable =
			validCheck.isCategory &&
			validCheck.isDeadline &&
			validCheck.isProcedure &&
			validCheck.isScope &&
			validCheck.isTag &&
			validCheck.isTitle;

		if (postAvailable) {
			uploadPost.mutate(formData);
		}
	};

	return (
		<S.RecruitCreatePage>
			<form onSubmit={handleSubmit}>
				<Description />
				<BasicInformation />
				<DetailedInformation />
				<RecruitRoleForm />
				<RecruitTags />
				<ControlButtons />
			</form>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
