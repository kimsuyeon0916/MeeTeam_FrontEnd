import React, { useState } from 'react';
import { InputContainer, Subtitle, MeeteamTag, CustomSelect } from '../../../../components';
import S from './RecruitInfoWrapper.styled';
import { Plus, XBtn } from '../../../../assets';

const RecruitInfoWrapper = () => {
	const [tagItem, setTagItem] = useState<string>('');
	const [tagList, setTagList] = useState<string[]>([]);
	const copyTagList = [...tagList];

	const submitTagItem = () => {
		setTagList([...tagList, tagItem]);
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

	const deleteTagItem = (event: any) => {
		const deletedIndex = Number(event.target.id);
		copyTagList.splice(deletedIndex, 1); // 수정 필요
		setTagList(copyTagList);
	};

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
								<section className='role-input'>
									<CustomSelect optionData={['기획자', '디자이너', '프론트엔드', '백엔드']} />
								</section>
								<input className='count-input' type='number' placeholder='인원' />
								<section className='container-skills'>
									{copyTagList.map((tagItem, index) => {
										return (
											<article className='container-tags' key={index}>
												<span>{tagItem}</span>
												<button type='button' id={index.toString()} onClick={deleteTagItem}>
													<img src={XBtn} />
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
								<button>
									<img src={Plus} />
								</button>
							</article>
						</article>
						<article></article>
					</section>
				</article>
			</section>
		</S.RecruitInfoWrapper>
	);
};

export default RecruitInfoWrapper;
