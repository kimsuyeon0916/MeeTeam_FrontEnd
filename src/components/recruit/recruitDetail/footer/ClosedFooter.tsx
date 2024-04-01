import React from 'react';

const ClosedFooter = () => {
	return (
		<>
			<button type='button' className='btn-list btn-txt__big'>
				목록보기
			</button>
			<button type='button' className='btn-closed btn-txt__big' disabled>
				구인이 종료되었습니다.
			</button>
		</>
	);
};

export default ClosedFooter;
