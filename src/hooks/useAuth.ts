import { useMutation } from '@tanstack/react-query';
import { SetterOrUpdater } from 'recoil';
import { checkExist, signUp, certificateSchool } from '../service';
import { User } from '../types';

const ACCESS_TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;

interface AuthProps {
	onSuccess?: () => void;
	setUserState?: SetterOrUpdater<User | null>;
}

/**
 * @description 네이버 연동 여부 체크 API를 호출하는 hook입니다. 기존 회원인 경우 access token 을 로컬 스토리지에 저장합니다. 회원이 아닌 경우, 회원가입 페이지로 이동합니다.
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
 * @description 네이버 연동 회원가입 API를 호출하는 hook입니다. 성공 시 access token을 로컬 스토리지에 저장합니다.
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
 * @description 학사 인증 API를 호출하는 hook입니다. 학사 인증 여부를 확인합니다.
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
