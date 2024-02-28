import React from 'react';
import { InputContainer, Subtitle, MeeteamTag } from '../../../../components';
import S from './RecruitInfoWrapper.styled';

const RecruitInfoWrapper = () => {
	// 39.6 24.6 60
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
					<section>
						<article className='container-role__input'>
							<article className='input'>
								<input className='role' />
								<input className='count' />
								<input className='skills' />
							</article>
							<article className='add-btn'>
								<button>+</button>
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
