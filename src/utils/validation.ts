// <유효성 검사 목록>
// 범위(1개 필수)
// 유형(1개 필수)
// 마감일(필수 선택)
// 진행기간(마감일보다 일찍 끝날 수 없음)
// 수업(체크 시, 수업명, 교수명 입력)
// 태그(1개 이상)
// 제목(필수 입력, 몇자 이상(10자))
// 구인글(선택 입력)

import { useRecoilValue } from 'recoil';
import { recruitInputState } from '../atom';

const info = useRecoilValue(recruitInputState);

export const INPUT_VALIDATION = {};
