import React, { useState } from 'react';
import { InputContainer, Subtitle, MeeteamTag, InputRole } from '../../../../components';
import S from './RecruitInfoWrapper.styled';
import { Plus, XBtn } from '../../../../assets';

const examples = [
	{
		role: '백엔드 개발자',
		count: 2,
		skill: ['Node.js', 'Spring', 'AWS'],
	},
	{
		role: '프론트엔드 개발자',
		count: 1,
		skill: ['TypeScript', 'React', 'React Query'],
	},
];

interface Role {
	id: number;
	role: string;
	count: string;
	skill: string[];
}

const RecruitInfoWrapper = () => {
	const [tagItem, setTagItem] = useState<string>('');
	const [userRole, setUserRole] = useState<Role>({
		id: 0,
		role: '',
		count: '',
		skill: [],
	});
	const copyTagList = [...userRole.skill];
	const [userRoleList, setUserRoleList] = useState<Role[]>([]);

	const submitTagItem = () => {
		setUserRole(prevState => ({
			...prevState,
			skill: [...prevState.skill, tagItem],
		}));
		setTagItem('');
	};

	const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const target = event.currentTarget;
		if (target.value.length !== 0 && event.key === 'Enter') {
			event.preventDefault();
			submitTagItem();
		}
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	const deleteTagItem = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (event.target instanceof Element) {
			const deletedIndex = Number(event.target.id);
			copyTagList.splice(deletedIndex, 1);
			setUserRole({ ...userRole, skill: copyTagList });
		}
	};

	const onClickHandler = () => {
		setUserRoleList([...userRoleList, userRole]);
		setUserRole({
			id: userRoleList.length,
			role: '',
			count: '',
			skill: [],
		});
	};

	const onChangeRole = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserRole({
			...userRole,
			role: event.target.value,
		});
	};

	const onChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserRole({
			...userRole,
			count: event.target.value,
		});
	};

	const deleteObj = (id: number) => {
		setUserRoleList(prev => prev.filter(v => v.id !== id));
	};

	console.log(userRoleList);
	return (
		<S.RecruitInfoWrapper>
			<section className='container'>
				<article className='container__info'>
					<InputContainer />
				</article>
				<article className='container__tag'>
					<Subtitle>{'태그'}</Subtitle>
					<MeeteamTag />
				</article>
				<article className='container__role'>
					<Subtitle>{'역할'}</Subtitle>
					<section className='wrapper'>
						<article className='container-role__input'>
							<article className='inputs'>
								<input
									className='role-input'
									type='text'
									placeholder='역할'
									value={userRole.role}
									onChange={onChangeRole}
								/>
								<input
									className='count-input'
									type='number'
									placeholder='인원'
									onChange={onChangeCount}
								/>
								<section className='container-skills'>
									{userRole.skill.map((tagItem, index) => {
										return (
											<article className='container-tags' key={index}>
												<span>{tagItem}</span>
												<button type='button' onClick={deleteTagItem}>
													<img src={XBtn} id={index.toString()} />
												</button>
											</article>
										);
									})}
									<input
										type='text'
										className='skills-input'
										placeholder={copyTagList.length ? '' : '태그를 입력하고 엔터를 누르세요.'}
										value={tagItem}
										onChange={event => setTagItem(event.target.value)}
										onKeyPress={onKeyPress}
									/>
								</section>
							</article>
							<article className='add-btn'>
								<button type='button' onClick={onClickHandler}>
									<img src={Plus} />
								</button>
							</article>
						</article>
						<article className='container-role__list'>
							{userRoleList.map((userRole, index) => (
								<InputRole
									key={index}
									role={userRole.role}
									count={userRole.count}
									skill={userRole.skill}
									onDelete={() => deleteObj(index)}
									id={index}
								/>
							))}
						</article>
					</section>
				</article>
			</section>
		</S.RecruitInfoWrapper>
	);
};

export default RecruitInfoWrapper;
