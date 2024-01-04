import { Card } from '../../../components';
import S from './ManagePortpolio.styled';

const ManagePortpolioPage = () => {
	return (
		<S.ManagePortpolioPage>
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
			<h1>📁 완성된 포트폴리오</h1>
			<div className='container-contents'>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</S.ManagePortpolioPage>
	);
};

export default ManagePortpolioPage;
