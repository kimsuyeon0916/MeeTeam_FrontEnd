import DOMPurify from 'dompurify';

export const DEFAULT_VALUE = `
<h3 style="color:#8e8e8e;">1. 프로젝트 계기</h3>
 
 
<h3 style="color:#8e8e8e;">2. 회의 진행/모임 방식</h3>
 
 
<h3 style="color:#8e8e8e;">3. 우리 팀 문화는요</h3>
 
 
<h3 style="color:#8e8e8e;">4. 저는 누구냐면요</h3>
 
 
<h3 style="color:#8e8e8e;">5. 기타사항</h3>
 
 
`;

const lines = DEFAULT_VALUE.split('\n')
	.map(line => `<p style="height:12px;">${line}</p>`)
	.join('');

export const SAFE_DEFAULT_VALUE = DOMPurify.sanitize(lines);
