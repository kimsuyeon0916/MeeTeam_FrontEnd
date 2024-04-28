import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookmarkDelete, bookmarkPost } from '../service/recruit/detail';

interface BookmarkSuccess {
	queryKey: string;
}

export const useBookmark = ({ queryKey }: BookmarkSuccess) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: number) => bookmarkPost(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`${queryKey}`] });
		},
	});
};

export const useDelBookmark = ({ queryKey }: BookmarkSuccess) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: number) => bookmarkDelete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [`${queryKey}`] });
		},
	});
};
