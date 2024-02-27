import React, { useRef, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { Subtitle, MeeteamTag, TitleAndIntro, InputContainer } from '../../../components/index';
import {
	scopeRecruitState,
	fieldRecruitState,
	dateRecruitState,
	deadlineState,
	categoryRecruitState,
	memberListState,
	memberModalState,
} from '../../../atom';
import { modules } from '../../../utils/index';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import S from './RecruitCreatePage.styled';
import MemberTest from '../../../components/meeteam/main/member/MemberTest';
import DateSelect from '../../../components/dateSelect/DateSelect';

const descriptions = [
	'함께할 멤버들에게 알릴 기본 정보들을 기입해주세요!',
	'기본 정보를 기반으로 구인글을 제공할 수 있습니다.',
];

const introductions = [
	'게시될 구인글을 작성해주세요!',
	'어떤 방식으로 진행하고 싶은지 구체적으로 작성해주세요.',
];

const RecruitCreatePage = () => {
	const scope = useRecoilValue(scopeRecruitState);
	const field = useRecoilValue(fieldRecruitState);
	const category = useRecoilValue(categoryRecruitState);
	const deadline = useRecoilValue(deadlineState);

	const quillRef = useRef<ReactQuill | null>(null);

	const [title, setTitle] = useState<string>('');
	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [startDate, endDate] = useRecoilValue(dateRecruitState);
	const [memberList, setMemberList] = useRecoilState(memberListState);
	const [modalOpen, setModalOpen] = useRecoilState<boolean>(memberModalState);

	const [isValidTitle, setIsValidTitle] = useState({
		validTitle: false,
		validMessage: '',
	});
	const [isValidArea, setIsValidArea] = useState({
		validArea: false,
		validMessage: '',
	});
	const [isValidField, setIsValidField] = useState({
		validField: false,
		validMessage: '',
	});
	const [isValidCategory, setIsValidCategory] = useState({
		validCategory: false,
		validMessage: '',
	});
	const [isValidDate, setIsValidDate] = useState({
		validDate: false,
		validMessage: '',
	});
	const [isValidDeadline, setIsValidDeadline] = useState({
		validDeadline: false,
		validMessage: '',
	});

	const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
		// 모달창 띄워서 한 번 더 확인시키고 이동하기
		// navigate('/');
	};

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
		setIsValidTitle({ validTitle: true, validMessage: '' });
	};

	const onClickTestAdd = () => {
		let temp = [...memberList];
		temp.push((<MemberTest id={(temp.length - 1).toString()} />) as any);
		setMemberList(temp);
		setModalOpen(false);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// // 구인 글 제목 글자수 검사
		// if (title.length === 0) {
		// 	setIsValidTitle({ validTitle: false, validMessage: '* 구인 글 제목을 입력해주세요.' });
		// }
		// if (title.length !== 0) {
		// 	setIsValidTitle({ validTitle: true, validMessage: '' });
		// }

		// // 밋팀 범위 검사
		// if (scope === '') {
		// 	setIsValidArea({ validArea: false, validMessage: '* 범위를 선택해주세요.' });
		// }
		// if (scope !== '') {
		// 	setIsValidArea({ validArea: true, validMessage: '' });
		// }

		// // 밋팀 분야 검사
		// if (field === '') {
		// 	setIsValidField({ validField: false, validMessage: '* 분야를 선택해주세요.' });
		// }
		// if (field !== '') {
		// 	setIsValidField({ validField: true, validMessage: '' });
		// }

		// // 밋팀 유형 검사
		// if (category === '') {
		// 	setIsValidCategory({ validCategory: false, validMessage: '* 유형을 선택해주세요.' });
		// }
		// if (category !== '') {
		// 	setIsValidCategory({ validCategory: true, validMessage: '' });
		// }

		// // 기간 검사
		// if (endDate < new Date()) {
		// 	setIsValidDate({
		// 		validDate: false,
		// 		validMessage: '* 날짜를 다시 설정해주세요.',
		// 	});
		// }
		// if (endDate > new Date()) {
		// 	setIsValidDate({
		// 		validDate: true,
		// 		validMessage: '',
		// 	});
		// }

		// // 구인 마감일 검사
		// if (deadline < new Date()) {
		// 	setIsValidDeadline({
		// 		validDeadline: false,
		// 		validMessage: '* 날짜를 다시 설정해주세요.',
		// 	});
		// }
		// if (deadline > new Date()) {
		// 	setIsValidDeadline({
		// 		validDeadline: true,
		// 		validMessage: '',
		// 	});
		// }
	};
	return (
		<S.RecruitCreatePage>
			<TitleAndIntro title='구인글 작성' descriptions={descriptions} />
			<hr />
			<form onSubmit={handleSubmit} id='submit'>
				<section className='wrapper'>
					<div className='container'>
						<section className='container__info'>
							<InputContainer />
						</section>
						<section className='container__tag'>
							<Subtitle>{'태그'}</Subtitle>
							<MeeteamTag />
						</section>
						<section className='container__role'>
							<Subtitle>{'역할'}</Subtitle>
						</section>
					</div>
				</section>
				<TitleAndIntro descriptions={introductions} />
				<hr />
				<section className='wrapper-recruit'>
					<section className='title'>
						<Subtitle>{'제목'}</Subtitle>
						<input type='text' placeholder='제목을 입력해주세요' />
					</section>
					<section className='container__intro'>
						<Subtitle>{'구인글'}</Subtitle>
						<div>
							<ReactQuill className='editor' ref={quillRef} theme='snow' modules={modules} />
						</div>
					</section>
				</section>
			</form>
			<div className='container__controller'>
				<button onClick={onClickCancel}>취소</button>
				<button type='submit' form='submit'>
					등록하기
				</button>
			</div>
		</S.RecruitCreatePage>
	);
};

export default RecruitCreatePage;
