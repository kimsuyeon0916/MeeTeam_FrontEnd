import styled from 'styled-components';
import Account from '../Account.styled';

const SchoolCertificationLayout = styled(Account.AccountLayout)`
	b {
		font-weight: 600;
	}
`;

const SchoolCertificationPageForm = styled(Account.AccountForm)<{ $submitEmail?: boolean }>`
	align-items: center;
	justify-content: center;
	${props => props.$submitEmail && 'row-gap: 3.35rem; width: auto;'}
`;

const SchoolCertificationButton = styled(Account.AccountButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const SchoolCertificationMark = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.06rem 2.25rem;
	border-radius: 0.6rem;
	color: var(--text-color, #151515);
	background: var(--sub2-color, #f3f5ff);
	font-size: 1.2rem;
	cursor: pointer;
`;

const S = {
	SchoolCertificationLayout,
	SchoolCertificationPageForm,
	SchoolCertificationButton,
	SchoolCertificationMark,
};

export default S;
