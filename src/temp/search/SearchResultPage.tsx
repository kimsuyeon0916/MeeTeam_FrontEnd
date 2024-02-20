import React from 'react';
import S from './SearchResultPage.styled';
import { SearchIcon } from '../../assets';

const SearchResultPage = () => {
	return (
		<S.SearchResultPage>
			<div>
				<div className='container-bar'>
					<div>
						<img src={SearchIcon} />
					</div>
					<div className='container-input'>
						<input />
					</div>
				</div>
				<div className='container-relate'>
					<span className='title-total'>총 {'125'}건의 검색 결과</span>
					<div className='container-relate__keywords'>
						<span>연관 검색어</span>
						<div className='keywords'>
							<div className='keyword'>프로젝트</div>
							<div className='keyword'>응용소프트웨어실습</div>
							<div className='keyword'>오픈소스소프트웨어</div>
							<div className='keyword'>프로젝트</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className='container-types'>
					<span>전체</span>
					<span>구인글</span>
					<span>진행중인 밋팀</span>
					<span>완료된 밋팀</span>
					<span>유저</span>
				</div>
				<div className='container-results'></div>
			</div>
		</S.SearchResultPage>
	);
};

export default SearchResultPage;
