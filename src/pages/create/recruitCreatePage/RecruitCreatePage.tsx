import React from 'react';
import S from './RecruitCreatePage.styled';
import {
	BasicInformation,
	ControlButtons,
	Description,
	DetailedInformation,
	RecruitTags,
	RecruitRoleForm,
} from '../../../components/index';
import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { recruitInputState, validState } from '../../../atom';
import { editPostingRecruit, postingRecruit } from '../../../service/recruit/posting';
import { useLocation, useNavigate } from 'react-router-dom';
import { EditPosting, InputState } from '../../../types';
import { simpleDate } from '../../../utils';

const RecruitCreatePage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const setIsSubmit = useSetRecoilState(validState);
	const [formData, setFormData] = useRecoilState<InputState>(recruitInputState);
	const validCheck = useRecoilValue(validState);

	const uploadPost = useMutation({
		mutationFn: (formData: InputState) => postingRecruit(formData),
		onSuccess: (data: { recruitmentPostId: number }) => {
			navigate(`/recruitment/postings/${data?.recruitmentPostId}`);
			resetFormData();
		},
	});
	const editPost = useMutation({
		mutationFn: ({ pageNum, formData }: EditPosting) => editPostingRecruit({ pageNum, formData }),
		onSuccess: () => {
			navigate(`/recruit/${formData.pageNum}`);
		},
	});

	const resetFormData = () => {
		setFormData({
			scope: '',
			category: '',
			fieldId: null,
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
		const postAvailable =
			validCheck.isCategory &&
			validCheck.isDeadline &&
			validCheck.isProcedure &&
			validCheck.isScope &&
			validCheck.isTag &&
			validCheck.isTitle;
		const pageNum = formData.pageNum;

		setIsSubmit(prev => ({
			...prev,
			isSubmitted: true,
		}));

		if (postAvailable && location.pathname.includes('recruitment/postings')) {
			uploadPost.mutate(formData);
		}

		if (postAvailable && location.pathname.includes('edit') && pageNum) {
			editPost.mutate({ pageNum, formData });
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
