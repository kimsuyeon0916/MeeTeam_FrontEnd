import { useCallback, useState } from 'react';
import { Dropdown } from '../..';
import S from './Filter.styled';

const Filter = () => {
	const [isFiltered, setIsFiltered] = useState({
		isInside: true,
		isOutside: false,
	});

	const onClickHandler = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const target = event.currentTarget;
		if (target.innerText === '교내') {
			setIsFiltered({ isInside: true, isOutside: false });
		}
		if (target.innerText === '교외') {
			setIsFiltered({ isInside: false, isOutside: true });
		}
	}, []);

	return (
		<S.Filter>
			<div className='container-filter_area'>
				<div className={`area ${isFiltered.isInside ? '' : 'no'}`} onClick={onClickHandler}>
					교내
				</div>
				<div className={`area ${isFiltered.isOutside ? 'out' : 'no'}`} onClick={onClickHandler}>
					교외
				</div>
			</div>
			<div className='container-filter_menu'>
				<Dropdown
					data={['프로젝트', '스터디', '동아리', '공모전']}
					initialData='프로젝트'
					$allowNeed={true}
				/>
				<Dropdown data={['개발']} initialData='카테고리' $allowNeed={true} />
			</div>
			<div className='container-checkbox'>
				<input type='checkbox' id='recruit' />
				<label id='recruit'>구인중인 밋팀 보기</label>
			</div>
		</S.Filter>
	);
};

export default Filter;
