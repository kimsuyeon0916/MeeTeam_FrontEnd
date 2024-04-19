import React from 'react';
import S from './Pagination.styled';

interface PaginationInformation {
	postsNum: number;
	postsPerPage: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	currentPage: number;
}

const Pagination = ({
	postsNum,
	postsPerPage,
	setCurrentPage,
	currentPage,
}: PaginationInformation) => {
	const pageList = [];
	const totalPages = Math.ceil(postsNum / postsPerPage);

	for (let i = 1; i <= totalPages; i++) {
		pageList.push(i);
	}

	const goToNextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const goToPrevPage = () => {
		setCurrentPage(currentPage - 1);
	};

	if (totalPages === 1) {
		return null;
	}
	return (
		<S.Pagination>
			<button onClick={goToPrevPage} disabled={currentPage === 1}>
				{currentPage !== 1 && '⟨'}
			</button>
			{pageList.map(page => (
				<button
					key={page}
					onClick={() => setCurrentPage(page)}
					className={currentPage === page ? 'active' : ''}
				>
					{page}
				</button>
			))}
			<button onClick={goToNextPage} disabled={currentPage === pageList.length}>
				{currentPage !== pageList.length && '⟩'}
			</button>
		</S.Pagination>
	);
};

export default Pagination;
