import { Card, Status } from '../../../components';
import S from './ManageMeeteamPage.styled';

const ManageMeeteamPage = () => {
	return (
		<S.ManageMeeTeamPage>
			<div className='container-status'>
				<Status status='구인중' $check={true} />
				<Status status='진행중' $check={false} />
				<Status status='진행 완료' $check={false} />
			</div>
			<div className='container-filter'>
				<div className='container-filter_area'>
					<div className='area'>교내</div>
					<div className='area no'>교외</div>
				</div>
				<div className='container-filter_menu'>
					<div className='menu filter'>프로젝트 </div>
					<div className='menu'> | </div>
					<div className='menu filter'> 카테고리</div>
				</div>
			</div>
			<div className='container-contents'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</S.ManageMeeTeamPage>
	);
};

export default ManageMeeteamPage;
