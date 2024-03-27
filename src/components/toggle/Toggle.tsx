import React from 'react';
import S from './Toggle.styled';

interface Toggle {
	state: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
}
const Toggle = ({ state, setState }: Toggle) => {
	const handleToggle = () => {
		setState(prev => !prev);
	};

	return (
		<S.ToggleLayout>
			<S.ToggleLabel>
				<S.ToggleCheckBox type='checkbox' checked={state} onChange={handleToggle} />
				<S.ToggleSlider checked={state} />
			</S.ToggleLabel>
			<S.ToggleDescription>{state ? '공개' : '비공개'}</S.ToggleDescription>
		</S.ToggleLayout>
	);
};

export default Toggle;
