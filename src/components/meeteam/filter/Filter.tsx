import S from './Filter.styled';

const Filter = () => {
	return (
		<S.Filter>
			<div className='container-filter_area'>
				<div className='area'>교내</div>
				<div className='area no'>교외</div>
			</div>
			<div className='container-filter_menu'>
				<div className='menu filter'>프로젝트 </div>
				<div className='menu'> | </div>
				<div className='menu filter'> 카테고리</div>
			</div>
		</S.Filter>
	);
};

export default Filter;
