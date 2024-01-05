import { useRef, useState, useEffect } from 'react';
import S from './Filter.styled';

const Filter = () => {
	const [isFiltered, setIsFiltered] = useState({
		isInside: true,
		isOutside: false,
	});

	const [showDropdown, setShowDropdown] = useState(false);
	const dropdownRef = useRef();

	const onClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (event.target.innerText === '교내') {
			setIsFiltered({ isInside: true, isOutside: false });
		}
		if (event.target.innerText === '교외') {
			setIsFiltered({ isInside: false, isOutside: true });
		}
	};

	const onClickDropdown = () => {
		setShowDropdown(prev => !prev);
	};

	useEffect(() => {
		const outsideClick = (event: any) => {
			const { target } = event;
			if (showDropdown && dropdownRef.current && !dropdownRef.current.contains(target)) {
				setShowDropdown(false);
			}
		};
		document.addEventListener('mousedown', outsideClick);
		return () => {
			document.removeEventListener('mousedown', outsideClick);
		};
	}, [dropdownRef.current, showDropdown]);

	return (
		<S.Filter>
			<div className='container-filter_area'>
				<div className={`area ${isFiltered.isInside ? '' : 'no'}`} onClick={onClickHandler}>
					교내
				</div>
				<div className={`area ${isFiltered.isOutside ? '' : 'no'}`} onClick={onClickHandler}>
					교외
				</div>
			</div>
			<div className='container-filter_menu'>
				<div className='menu' onClick={onClickDropdown} ref={dropdownRef}>
					{showDropdown && (
						<div className='dropdown'>
							<ul className='menu-container'>
								<li>프로젝트</li>
								<li>스터디</li>
								<li>공모전</li>
								<li>동아리</li>
							</ul>
						</div>
					)}
					프로젝트
				</div>
				{/* <div className='menu'> | </div>
				<div className='menu'>카테고리</div> */}
			</div>
		</S.Filter>
	);
};

export default Filter;
