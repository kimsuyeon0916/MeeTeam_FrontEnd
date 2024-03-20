import React from 'react';
import { DeadlineSelect, DateSelect } from '../../../index';
import S from './BasicInformation.styled';

const BasicInformation = () => {
	return (
		<S.BasicInformation>
			<section className='container-basic'>
				<section className='subtitle'>
					<h4>기본 정보</h4>
				</section>
				<section className='container-basic__inputs'>
					<article className='inputs-title'>
						<span className='input-subtitle'>
							구인글 제목 <span>{'*'}</span>
						</span>
						<input type='text' placeholder='40자 이내로 제목을 작성해주세요.' />
					</article>
					<article className='inputs-deadline'>
						<span className='input-subtitle'>
							구인글 마감일 <span>{'*'}</span>
						</span>
						<DeadlineSelect />
					</article>
					<article className='inputs-scope-category'>
						<section className='container-scope'>
							<span className='input-subtitle'>
								범위 <span>{'*'}</span>
							</span>
							<section className='radio-btns'>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='inside' name='scope' />
									<label htmlFor='inside'>교내</label>
								</section>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='outside' name='scope' />
									<label htmlFor='outside'>교외</label>
								</section>
							</section>
						</section>
						<section className='container-category'>
							<span className='input-subtitle'>
								유형 <span>{'*'}</span>
							</span>
							<section className='radio-btns'>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='project' name='category' />
									<label htmlFor='project'>프로젝트</label>
								</section>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='study' name='category' />
									<label htmlFor='study'>스터디</label>
								</section>
								<section className='radio-btn'>
									<input className='radio-input' type='radio' id='contest' name='category' />
									<label htmlFor='contest'>공모전</label>
								</section>
							</section>
						</section>
					</article>
					<article className='inputs-dates'>
						<span className='input-subtitle'>
							진행 기간 <span>{'*'}</span>
						</span>
						<section className='container-dates'>
							<div className='start-date'>
								<DateSelect />
							</div>
							<div className='end-date'>
								<DateSelect />
							</div>
						</section>
					</article>
					<article className='inputs-procedure'>
						<span className='input-subtitle'>
							진행방식 <span>{'*'}</span>
						</span>
						<section className='radio-btns'>
							<section className='radio-btn'>
								<input className='radio-input' type='radio' id='offline' name='procedure' />
								<label htmlFor='offline'>오프라인</label>
							</section>
							<section className='radio-btn'>
								<input className='radio-input' type='radio' id='online' name='procedure' />
								<label htmlFor='online'>온라인</label>
							</section>
							<section className='radio-btn'>
								<input className='radio-input' type='radio' id='any' name='procedure' />
								<label htmlFor='any'>상관없음</label>
							</section>
						</section>
					</article>
					<article className='inputs-course'>
						<span className='input-subtitle'>
							수업 <span>{'*'}</span>
						</span>
						<section className='intro'>
							<span className='description'>
								수업이신 경우 오른쪽의 “수업” 체크박스를 눌러주세요.
							</span>
							<section>
								<input type='checkbox' id='course' />
								<label className='course-label' htmlFor='course'>
									수업
								</label>
							</section>
						</section>
						<section className='wrapper-inputs'>
							<section className='container-inputs'>
								<input type='text' placeholder='수업명' disabled />
							</section>
							<section className='container-inputs'>
								<input type='text' placeholder='교수명' disabled />
							</section>
						</section>
					</article>
				</section>
			</section>
			<hr className='under-info' />
		</S.BasicInformation>
	);
};

export default BasicInformation;
