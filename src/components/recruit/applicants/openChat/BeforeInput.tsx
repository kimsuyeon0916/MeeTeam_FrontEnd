import React from 'react';
import { LinkIcon } from '../../../../assets';

const BeforeInput = () => {
	return (
		<section className='container-input__link'>
			<img src={LinkIcon} />
			<span className='body1-medium input-prev'>오픈채팅방 주소를 입력해주세요.</span>
		</section>
	);
};

export default BeforeInput;
