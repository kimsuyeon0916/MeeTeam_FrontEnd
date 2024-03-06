import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSearchKeyword } from '../api';

const useDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value]);

	return useQuery({
		queryKey: ['searchRole', debouncedValue],
		queryFn: () => getSearchKeyword(debouncedValue),
	});
};

export default useDebounce;
