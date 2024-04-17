import { useMutation } from '@tanstack/react-query';
import { bookmarkDelete, bookmarkPost } from '../service/recruit/detail';

interface BookmarkSuccess {
	onSuccess?: () => void;
}

export const useBookmark = () => {
	return useMutation({
		mutationFn: (id: number) => bookmarkPost(id),
	});
};

export const useDelBookmark = () => {
	return useMutation({
		mutationFn: (id: number) => bookmarkDelete(id),
	});
};
