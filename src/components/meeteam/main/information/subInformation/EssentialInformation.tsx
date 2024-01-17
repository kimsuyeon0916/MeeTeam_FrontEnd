import React from 'react';
import S from './SubInformation.styled';

const EssentialInformation = () => {
	return (
		<form>
			<S.SubInformationLayout>
				<S.SubInformationHeader>
					<h2 className='main--big-text'>필수 정보</h2>
				</S.SubInformationHeader>
			</S.SubInformationLayout>
		</form>
	);
};

export default EssentialInformation;
