import { ProgressBar } from '../../components';
import S from './ManageMeeteamPage.styled';

const ManageMeeteamPage = () => {
	return (
		<S.ManageMeeTeamPage>
			<div className='container-status'>
				<div className='status'>구인중</div>
				<div className='status'>진행중</div>
				<div className='status'>진행 완료</div>
			</div>
			<div></div>
		</S.ManageMeeTeamPage>
	);
};

export default ManageMeeteamPage;
