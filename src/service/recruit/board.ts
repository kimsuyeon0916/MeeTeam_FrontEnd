import { EndPoint, axiosInstance } from '..';
import { ListResult } from '../../types';
import { useRecoilValue } from 'recoil';
import { recruitFilterState } from '../../atom';

interface FilterData {
	field?: number | null;
	scope?: number | null;
	category?: number | null;
	keyword?: string | null;
	skill?: number[];
	role?: number[];
	tag?: number[];
}

export const getPostList = async (filterData: FilterData) => {
	try {
		const queryString = Object.entries(filterData)
			.filter(([_, value]) => value !== null && value !== undefined)
			.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
			.join('&');

		const url = `${EndPoint.RECRUITMENT_BOARD.list}${queryString ? `?${queryString}` : ''}`; // 쿼리 문자열을 엔드포인트 URL에 추가합니다.
		const response = await axiosInstance.get<ListResult>(url);
		return response;
	} catch (error) {
		console.error(error);
	}
};
