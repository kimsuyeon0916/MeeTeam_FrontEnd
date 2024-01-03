import S from './ManageMeeteamPage.styled';

const ManageMeeteamPage = () => {
	return (
		<S.ManageMeeTeamPage>
			<div className='container-status'>
				<div className='status'>구인중</div>
				<div className='status no'>진행중</div>
				<div className='status no'>진행 완료</div>
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
				<div className='content'></div>
				<div className='content'></div>
				<div className='content'></div>
				<div className='content'></div>
			</div>
		</S.ManageMeeTeamPage>
	);
};

export default ManageMeeteamPage;
