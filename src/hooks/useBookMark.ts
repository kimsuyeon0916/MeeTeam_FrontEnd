import { useMutation } from '@tanstack/react-query';
import { bookmarkPost } from '../service/recruit/detail';

export const useBookmark = (id: number) => {
	return useMutation({
		mutationFn: (id: number) => bookmarkPost(id),
	});
};
