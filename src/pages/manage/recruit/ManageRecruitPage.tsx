import { useState } from 'react';
import { Tag, Alarm } from '../../../components';
import S from './ManageRecruitPage.styled';

const ManageRecruitPage = () => {
	const [isOn, setIsOn] = useState<boolean>(false);
	const toggleHandler = () => {
		setIsOn(prev => !prev);
	};
	return (
		<S.ManageRecruitPage>
			<div className='container'>
				<div className='container-recruits'>
					<div className='container-recruits_info'>
						<div className='container-tags'>
							<Tag type='프로젝트' $recruit={false} />
							<Tag type='구인중' $recruit={true} />
						</div>
						<div className='container-title'>
							<h1>[커뮤니티 웹 서비스 프로젝트]디자이너 모집</h1>
						</div>
					</div>
					<div className='container-recruits_options'>
						<div className='toggle' onClick={toggleHandler}>
							<div className={`toggle-container ${isOn ? 'toggle-checked' : ''}`}></div>
							<div className={`toggle-circle ${isOn ? 'toggle-checked' : ''}`}></div>
						</div>
						<div className='alarm'>
							<Alarm />
						</div>
					</div>
				</div>
				<div className='container-recruits'>
					<div className='container-recruits_info'>
						<div className='container-tags'>
							<Tag type='프로젝트' $recruit={false} />
							<Tag type='구인중' $recruit={true} />
						</div>
						<div className='container-title'>
							<h1>[커뮤니티 웹 서비스 프로젝트]디자이너 모집</h1>
						</div>
					</div>
					<div className='container-recruits_options'>
						<div className='toggle' onClick={toggleHandler}>
							<div className={`toggle-container ${isOn ? 'toggle-checked' : ''}`}></div>
							<div className={`toggle-circle ${isOn ? 'toggle-checked' : ''}`}></div>
						</div>
						<div className='alarm'>
							<Alarm />
						</div>
					</div>
				</div>
			</div>
		</S.ManageRecruitPage>
	);
};

export default ManageRecruitPage;
