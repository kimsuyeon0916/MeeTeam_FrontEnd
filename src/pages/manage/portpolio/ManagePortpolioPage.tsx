import { Card, Filter } from '../../../components';
import S from './ManagePortpolio.styled';

const ManagePortpolioPage = () => {
	const noRecruit: boolean = true;
	return (
		<S.ManagePortpolioPage>
			<Filter noRecruit={noRecruit} />
			<h1>📁 완성된 포트폴리오</h1>
			<div className='container-contents'>
				<div className='content'>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
				<div className='content'>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
				<div className='content'>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
				<div className='content'>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
				<div className='content'>
					<Card />
					<div className='title'>
						[반려 동물을 위한 ~ 팀 프로젝트] 개발자를 모집합니다. 프로그래밍 스터디 진행
					</div>
				</div>
			</div>
		</S.ManagePortpolioPage>
	);
};

export default ManagePortpolioPage;
