import { useMutation } from '@tanstack/react-query';
import { SetterOrUpdater } from 'recoil';
import { checkExist, signUp, certificateSchool } from '../service';
import { User } from '../types';
import { NavigateFunction } from 'react-router-dom';

const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;

interface AuthProps {
	onSuccess?: () => void;
	setUserState?: SetterOrUpdater<User | null>;
	navigator?: NavigateFunction;
}

/**
 * @description useMutation으로 회원 체크 API를 호출하는 hook입니다. 기존 회원인 경우 access token 을 로컬 스토리지에 저장합니다. 회원이 아닌 경우, 회원가입 페이지로 이동합니다.
 * @param onSuccess - optional) 성공 시 수행할 callback 함수를 넘겨줄 때 사용합니다.
 */
export const useCheckExist = ({ onSuccess, setUserState }: AuthProps = {}) => {
	return useMutation({
		mutationFn: checkExist,
		onSuccess: data => {
			if (data?.token) {
				setUserState?.(data.user);
			}
			onSuccess?.();
		},
	});
};

/**
 * @description useMutation으로 naver 연동 회원가입 API를 호출하는 hook입니다. 성공 시 access token을 로컬 스토리지에 저장합니다.
 * @param onSuccess - optional) 성공 시 수행할 callback 함수를 넘겨줄 때 사용합니다.
 */
export const useNaverSignUp = ({ onSuccess, setUserState }: AuthProps = {}) => {
	return useMutation({
		mutationFn: signUp,
		onSuccess: data => {
			if (data?.token) {
				localStorage.setItem(ACCESS_TOKEN_KEY, data.token);
				setUserState?.(data.user);
				onSuccess?.();
			}
		},
	});
};

/**
 * @description useMutation으로 학사 인증 API를 호출하는 hook입니다. 학사 인증 여부를 확인합니다.
 * @param onSuccess - optional) 성공 시 수행할 callback 함수를 넘겨줄 때 사용합니다.
 */
export const useCertificateSchool = ({ onSuccess }: AuthProps = {}) => {
	return useMutation({
		mutationFn: certificateSchool,
		onSuccess: data => {
			if (data?.isEnable) {
				onSuccess?.();
			}
		},
	});
};
